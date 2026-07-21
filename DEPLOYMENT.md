# Deployment Overview

Index for the deployment documentation set. Start with
`ENVIRONMENT_SETUP.md` if the project has never run on your machine.

## Architecture

```
                        ┌────────────────────────────────────────────┐
                        │              npm run build                 │
                        │  tsc -b → vite build → esbuild server      │
                        └──────────┬──────────────────┬──────────────┘
                                   │                  │
                              dist/ (SPA)     dist-server/index.js
                                   │                  │
        ┌──────────────────────────┴──────────────────┴───────────────────┐
        │                                                                 │
        ▼  any Node host / Docker (Hostinger, EC2, DO, Render, …)         ▼  Vercel only
┌───────────────────────────────────────────────┐         ┌──────────────────────────────┐
│  node dist-server/index.js  (Express, :3000)  │         │  Vite static build (CDN)     │
│    • serves dist/  (SPA fallback, caching)    │         │    + api/contact.ts          │
│    • POST /api/contact                        │         │      (serverless adapter)    │
│    • GET  /api/health                         │         │  vercel.json: SPA rewrite    │
│  [optional nginx reverse proxy + TLS in front]│         └──────────────┬───────────────┘
└───────────────────────┬───────────────────────┘                        │
                        └───────────────┬────────────────────────────────┘
                                        ▼
                        server/core/contact.ts  (shared pipeline)
                        validate → classify (AI flag ⇢ rules fallback)
                                → Resend API → internal mail + client ack
```

## The portability principle

The backend is a plain Express server (`server/index.ts`) with the entire
contact pipeline in framework-agnostic modules under `server/core/`. **Every
host runs the same code**:

```bash
npm install && npm run build && npm run start     # or: docker compose up -d --build
```

The only vendor-specific file is `api/contact.ts`, a ~20-line adapter that
lets Vercel run the same `server/core` pipeline as a serverless function.
Switching hosts is a DNS change, not a rewrite.

## Where do you want to deploy?

| Host | Doc | Shape |
|---|---|---|
| Hostinger VPS (or any generic VPS) | [`HOSTINGER_DEPLOYMENT.md`](HOSTINGER_DEPLOYMENT.md) | Node + pm2 + nginx, or Docker Compose |
| Vercel | [`VERCEL_DEPLOYMENT.md`](VERCEL_DEPLOYMENT.md) | Static build + serverless function (Vercel-specific notes live there) |
| AWS EC2 / Lightsail | [`AWS_DEPLOYMENT.md`](AWS_DEPLOYMENT.md) | Same as VPS, plus security groups/Elastic IP |
| AWS S3 + CloudFront | [`AWS_DEPLOYMENT.md`](AWS_DEPLOYMENT.md) | Static on CDN + small compute for the API |
| Local development | [`ENVIRONMENT_SETUP.md`](ENVIRONMENT_SETUP.md) | Two terminals: `npm run dev:api` + `npm run dev` |

Before the first production deploy, read [`BACKUP.md`](BACKUP.md) (backups,
release tagging, rollback). CI/CD: `.github/workflows/deploy.yml` runs
lint+build on every push; the `deploy-vercel` / `deploy-vps` jobs are disabled
with `if: false` until you add secrets — enabling steps are in the respective
host guides.

## Environment variables (universal reference)

Server/runtime variables (set in `.env` on a VPS/Docker, or the host dashboard):

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | **yes** (for the form) | — | Resend key; without it `/api/contact` returns 503 |
| `CONTACT_FROM` / `FROM_EMAIL` | yes | `Utkarsh Soft Solutions <onboarding@resend.dev>` | Verified Resend sender (`CONTACT_FROM` wins if both set) |
| `CONTACT_TO` / `CONTACT_EMAIL` | no | `utkarshsoftsolutions@gmail.com` | Inquiry recipient (`CONTACT_TO` wins) |
| `COMPANY_NAME` | no | Utkarsh Soft Solutions | Email templates |
| `PHONE` | no | +91 62838 44258 | Email templates |
| `PORT` | no | `3000` | Express listen port (not used on Vercel) |
| `ANTHROPIC_API_KEY` **or** `OPENAI_API_KEY` | no | — | Feature flag: AI inquiry classification, auto-fallback to rules |
| `ANTHROPIC_MODEL` / `OPENAI_MODEL` | no | sensible defaults | AI model overrides |

Frontend variables — **baked in at build time** (`npm run build`, Docker build
args, or the host's build env; changing them requires a rebuild):

| Variable | Purpose |
|---|---|
| `VITE_LINKEDIN`, `VITE_GITHUB`, `VITE_PORTFOLIO`, `VITE_WHATSAPP` | Social link overrides (defaults in `src/lib/site-config.ts`) |
| `VITE_GA_MEASUREMENT_ID` | GA4 — script loads only when set (opt-in) |
| `VITE_CLARITY_PROJECT_ID` | Microsoft Clarity — opt-in, same rule |

Template: `.env.example`. Never commit `.env`.

## Post-deploy verification (universal)

1. `curl https://<domain>/api/health` returns `{"ok":true,...}` (Node hosts;
   Vercel has no health route — skip).
2. Homepage renders over HTTPS; HTTP redirects to HTTPS.
3. Deep-link a non-root path — SPA fallback serves the app, no 404.
4. Submit the contact form with a real email → internal notification arrives
   at `CONTACT_TO` **and** the category-specific acknowledgement arrives at
   the sender address.
5. `curl -X POST https://<domain>/api/contact -H "Content-Type: application/json" -d '{}'`
   returns a 400 validation error (API alive, validating).
6. `/assets/*` responses carry `Cache-Control: public, max-age=31536000, immutable`.
7. Lighthouse on the production URL: Performance / SEO / Accessibility ≥ 90.
8. Scan the QR code in the contact section; click every social icon and nav link.
9. Test mobile, tablet, laptop, and desktop widths.
10. Tag the release: `git tag -a vX.Y.Z -m "..." && git push origin vX.Y.Z`
    (see `BACKUP.md`).
