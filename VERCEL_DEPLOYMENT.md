# Vercel Deployment

The easiest zero-server path. Vercel builds the Vite frontend and turns
`api/contact.ts` (a thin adapter over the shared `server/core` logic) into a
serverless function automatically. Nothing else in the repo is Vercel-specific.

Prerequisites: repo pushed to GitHub (see `ENVIRONMENT_SETUP.md` §6) and a
Resend API key (§7 there).

## 1. Import the repository

1. Go to <https://vercel.com/new>, sign in with GitHub, and import
   `utkarsh-soft-solutions`.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output directory `dist` — the defaults are correct, change nothing.
   (The build also produces `dist-server/`, which Vercel simply ignores.)
3. The `api/` directory is picked up automatically: `api/contact.ts` becomes
   `POST /api/contact`.
4. `vercel.json` already ships the SPA rewrite (every non-`/api/` path →
   `/index.html`) and immutable caching for `/assets/*` — no configuration
   needed.

Note: `GET /api/health` exists only in the Express server; on Vercel there is
no health endpoint (the platform monitors functions itself).

## 2. Environment variables

Project → **Settings → Environment Variables** (apply to Production, and
Preview if you want working forms on preview URLs):

| Name | Required | Value |
|---|---|---|
| `RESEND_API_KEY` | yes | Your Resend key. Without it the form returns 503. |
| `CONTACT_FROM` (or `FROM_EMAIL`) | yes | Verified sender, e.g. `Utkarsh Soft Solutions <noreply@utkarshsoftsolutions.com>`. Pre-verification: `Utkarsh Soft Solutions <onboarding@resend.dev>`. |
| `CONTACT_TO` (or `CONTACT_EMAIL`) | no | Defaults to `utkarshsoftsolutions@gmail.com`. |
| `COMPANY_NAME`, `PHONE` | no | Used in email templates; sensible defaults exist. |
| `ANTHROPIC_API_KEY` **or** `OPENAI_API_KEY` | no | Enables AI inquiry classification; falls back to free rules on absence or any error. Optional `ANTHROPIC_MODEL` / `OPENAI_MODEL` overrides. |
| `VITE_LINKEDIN`, `VITE_GITHUB`, `VITE_PORTFOLIO`, `VITE_WHATSAPP` | no | Social link overrides — **build-time**, so they must exist before the build. |
| `VITE_GA_MEASUREMENT_ID`, `VITE_CLARITY_PROJECT_ID` | no | Opt-in analytics — also build-time. |

`VITE_*` variables are baked into the bundle during the build. After adding or
changing any of them, trigger a **Redeploy** (Deployments → ⋯ → Redeploy) —
runtime-only changes are not enough.

Click **Deploy**. First build takes a couple of minutes.

## 3. Custom domain

1. Project → **Settings → Domains** → add `utkarshsoftsolutions.com` and
   `www.utkarshsoftsolutions.com`.
2. Follow the DNS instructions — with Cloudflare (see
   `ENVIRONMENT_SETUP.md` §11): `A` record `@` → `76.76.21.21`, `CNAME`
   `www` → `cname.vercel-dns.com`. If Cloudflare proxying (orange cloud)
   causes redirect loops, set those records to DNS-only or set Cloudflare
   SSL mode to Full (strict).
3. Vercel provisions TLS automatically.
4. If your final domain differs from `utkarshsoftsolutions.com`, update the
   canonical/OG URLs in `index.html`, `public/robots.txt`, and
   `public/sitemap.xml`, then push.

## 4. Enable the `deploy-vercel` CI job (optional)

Vercel's GitHub integration already auto-deploys on push, so most projects
need nothing more. If you prefer deploys driven by the repo's own workflow
(e.g. so deploys only happen after lint+build pass in CI):

1. Create a token at <https://vercel.com/account/tokens>.
2. Repo → **Settings → Secrets and variables → Actions** → add secret
   `VERCEL_TOKEN`.
3. In `.github/workflows/deploy.yml`, delete the line
   `if: ${{ false }} # enable when using Vercel; add VERCEL_TOKEN secret`
   from the `deploy-vercel` job.
4. To avoid double deploys, disable the automatic Git deployments in the
   Vercel dashboard (Project → Settings → Git) if you enable this job.

The job runs `npx vercel deploy --prod --token=$VERCEL_TOKEN` after the CI
job succeeds. On first run you may need to link the project: run
`npx vercel link` locally once and commit the generated `.vercel/project.json`,
or set `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` env vars in the job.

## 5. Post-deploy verification checklist

1. Open the production URL — hero, shader background, and all sections render.
2. Hard-refresh and deep-link a non-root path (e.g. `/#contact` and any
   client-side route) — the SPA rewrite serves `index.html`, no 404.
3. Submit the contact form with a real email:
   - internal notification arrives at `CONTACT_TO`,
   - category-specific acknowledgement arrives at the sender address,
   - check Vercel → Functions logs for errors if not.
4. `curl -X POST https://<domain>/api/contact -H "Content-Type: application/json" -d '{}'`
   returns a 400 validation error (proves the function is live).
5. Response headers on `/assets/*.js` include
   `Cache-Control: public, max-age=31536000, immutable`.
6. Lighthouse (Chrome DevTools) on the production URL: Performance / SEO /
   Accessibility ≥ 90.
7. If analytics IDs were set: GA4 Realtime shows your visit; Clarity records a
   session.
8. Scan the QR code in the contact section; click every social icon and nav
   link; test mobile/tablet/desktop widths.
