# Utkarsh Soft Solutions — Enterprise Website

Production-ready company website converted 1:1 from the Stitch "Kinetic Deep" design export. React 19 + TypeScript + Vite + Tailwind CSS 3 + Framer Motion, with a portable Node.js/Express backend and a working contact-form email pipeline — deployable to any Node host, Docker, or Vercel.

## Quick start

```bash
npm install
npm run dev:api    # terminal 1: Express API on http://localhost:3000
npm run dev        # terminal 2: Vite dev server at http://localhost:5173 (proxies /api → :3000)
```

Copy `.env.example` to `.env` and set `RESEND_API_KEY` to make the contact form send email locally. See `ENVIRONMENT_SETUP.md` for the full from-zero walkthrough.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server (frontend; proxies `/api` to :3000) |
| `npm run dev:api` | Express API server with auto-reload (tsx watch) |
| `npm run build` | Typecheck + build frontend to `dist/` + bundle server to `dist-server/` |
| `npm run build:server` | Bundle only the server (esbuild → `dist-server/index.js`) |
| `npm run start` | Run the production server (`node dist-server/index.js`) — serves `dist/` + API |
| `npm run lint` | Lint with oxlint |
| `node scripts/download-assets.mjs` | Download remaining Stitch-CDN images for full self-hosting |

## Hosting options

The site runs on **any Node 20+ host**: `npm install && npm run build && npm run start` — or `docker compose up -d --build`. Guides: [`DEPLOYMENT.md`](DEPLOYMENT.md) (overview + env var reference), [`HOSTINGER_DEPLOYMENT.md`](HOSTINGER_DEPLOYMENT.md) (VPS with pm2+nginx, or Docker), [`VERCEL_DEPLOYMENT.md`](VERCEL_DEPLOYMENT.md) (serverless), [`AWS_DEPLOYMENT.md`](AWS_DEPLOYMENT.md) (EC2 or S3+CloudFront), and [`BACKUP.md`](BACKUP.md) (backup & rollback — read before the first production deploy). Local setup and all account walkthroughs (GitHub, Resend, analytics, DNS) live in [`ENVIRONMENT_SETUP.md`](ENVIRONMENT_SETUP.md).

## Before going live — checklist

1. **Links & contact data** — everything lives in `src/lib/site-config.ts`. Replace every `TODO` (LinkedIn, GitHub, portfolio URL, production domain, project live URLs) — or set the `VITE_LINKEDIN` / `VITE_GITHUB` / `VITE_PORTFOLIO` / `VITE_WHATSAPP` env vars at build time.
2. **Email** — create a [Resend](https://resend.com) account, verify your domain, and set the env vars from `.env.example` on your host. Until a domain is verified, `CONTACT_FROM` can be `Utkarsh Soft Solutions <onboarding@resend.dev>`.
3. **QR code** — the exported QR image is referenced in `src/lib/assets.ts` (`qrCode`). Scan it; if it doesn't point where you want, replace it with your real QR image.
4. **Self-host remaining images** — run `node scripts/download-assets.mjs`, then switch the corresponding entries in `src/lib/assets.ts` from URLs to imports (comments explain how).
5. **Domain** — update the canonical/OG URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml` if your domain differs from `utkarshsoftsolutions.com`.

## How the email pipeline works

Form (react-hook-form + zod, `src/lib/contact-schema.ts`) → `POST /api/contact` → server-side validation → **classification** (AI if enabled, otherwise rule-based — `server/core/classify.ts`: service dropdown first, then message keywords → categories like ERP Development, AI Development, Cloud Services, Support, Job Application, Partnership…) → internal notification to `CONTACT_TO` with an auto-generated subject (e.g. *"New AI Development Inquiry from ABC Pvt Ltd"*) → **category-specific acknowledgement** to the client (`server/core/emails.ts`).

## AI classification (optional)

Inquiry classification is feature-flagged: set `ANTHROPIC_API_KEY` **or** `OPENAI_API_KEY` in the environment and inquiries are categorized by an AI model (`server/core/ai-classify.ts`); optional `ANTHROPIC_MODEL` / `OPENAI_MODEL` override the defaults. With no key set — or on **any** error, timeout, or unparseable output — it falls back automatically to the free, deterministic rule-based classifier, so the site works identically with zero AI spend and can never break because of the AI.

## Architecture

```
src/
  components/
    layout/Navbar.tsx          # fixed glassmorphic nav (from hero export)
    sections/                  # one pixel-faithful component per Stitch section
    common/ShaderBackground.tsx# WebGL shader from the export (hero background)
  hooks/useMouseGlow.ts        # glass-card pointer glow (from export script)
  lib/
    site-config.ts             # ALL real-world links/contact data (edit here)
    assets.ts                  # image manifest (local + exported CDN)
    contact-schema.ts          # zod schema shared with the API
  styles/globals.css           # canonical shared classes from the export
server/                        # portable Node/Express backend (any host)
  index.ts                     # serves dist/ + POST /api/contact + GET /api/health
  core/                        # framework-agnostic contact pipeline (single source of truth)
    contact.ts                 # validate → classify → send via Resend
    classify.ts                # deterministic inquiry categorization
    ai-classify.ts             # optional AI classification (feature-flagged)
    emails.ts                  # internal + acknowledgement templates
api/
  contact.ts                   # thin Vercel serverless adapter over server/core
```

The Express server (`server/index.ts`) is the deployment target everywhere except Vercel; `api/contact.ts` exists only so Vercel can run the same `server/core` logic as a serverless function. There are no other vendor-specific features.

Design tokens in `tailwind.config.js` are byte-for-byte the export's config — do not edit them if you want to stay pixel-faithful. Section-specific CSS is scoped under `.sec-<name>` classes to prevent cross-section bleed.

See `DEPLOYMENT.md` for the deployment overview and per-host guides.
