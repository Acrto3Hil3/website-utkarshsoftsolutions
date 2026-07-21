# Environment Setup — local development & accounts

Everything you need to go from a fresh machine to a working local copy of the
Utkarsh Soft Solutions website, plus walkthroughs for every external account
(GitHub, Resend, optional AI keys, analytics, Search Console, DNS).

> **Security rules — read first**
> - **Never commit `.env`.** It holds real API keys. Only `.env.example` (empty template) belongs in git.
> - **Never share account passwords** — not with developers, not in chat, not in docs. Everything a deployment needs is an **API key set as an environment variable**, which can be revoked and rotated without touching the account.
> - If a key ever leaks, revoke it in the provider dashboard and create a new one. That is the whole recovery procedure — this is why keys, not passwords, are used.

---

## 1. Install Node.js 20+ (22 recommended)

The project requires Node.js 20 or newer; CI and Docker use Node 22.

- **Windows / macOS:** download the LTS installer from <https://nodejs.org> (pick 22.x).
- **Linux (Ubuntu/Debian):**

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify:

```bash
node -v   # v22.x (or at least v20.x)
npm -v
```

## 2. Install dependencies

From the project root:

```bash
npm install
```

## 3. Create your local `.env`

```bash
# macOS / Linux
cp .env.example .env
# Windows (PowerShell)
Copy-Item .env.example .env
```

Open `.env` and fill in at minimum:

| Variable | What to put there |
|---|---|
| `RESEND_API_KEY` | Your Resend key (section 7 below). **Required** for the contact form; without it `POST /api/contact` returns 503. |
| `FROM_EMAIL` or `CONTACT_FROM` | Verified Resend sender, e.g. `Utkarsh Soft Solutions <noreply@utkarshsoftsolutions.com>`. Before domain verification use `Utkarsh Soft Solutions <onboarding@resend.dev>`. |
| `CONTACT_TO` or `CONTACT_EMAIL` | Where inquiries land. Defaults to `utkarshsoftsolutions@gmail.com`. |

Optional: `PORT` (default 3000), `COMPANY_NAME`, `PHONE`, AI keys (section 8),
and the build-time `VITE_*` values (section 9).

## 4. Run the dev environment (two terminals)

The frontend and the API run as two processes in development. Vite proxies
`/api/*` to the Express server on port 3000 (see `vite.config.ts`).

**Terminal 1 — API server (Express, auto-restarts on change):**

```bash
npm run dev:api
```

On startup it prints whether Resend and AI classification are configured.

**Terminal 2 — frontend (Vite, hot reload):**

```bash
npm run dev
```

Open <http://localhost:5173>. The site is served by Vite; form submissions go
through the proxy to `http://localhost:3000/api/contact`.

## 5. Test the contact form locally

**Via the UI:** scroll to the contact section, fill the form with your own
email address, submit. You should get the internal notification at
`CONTACT_TO` and a category-specific acknowledgement at the address you
entered.

**Via curl (API directly):**

```bash
# Health check
curl http://localhost:3000/api/health

# Contact submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"you@example.com","company":"Test Co","service":"AI Development","message":"This is a local test of the contact pipeline."}'
```

Expected: `{"ok":true,"category":"AI Development"}` (or similar). Common
non-200s: `503` = `RESEND_API_KEY` missing; `400` = validation failed (name ≥ 2
chars, valid email, message ≥ 10 chars); `502` = Resend rejected the send
(usually an unverified `from` address — switch to `onboarding@resend.dev`).

**Note:** with `onboarding@resend.dev` as sender, Resend only delivers to the
email address that owns the Resend account. Full delivery to arbitrary
addresses requires domain verification (section 7).

## 6. GitHub repository — create and first push

1. Sign in at <https://github.com> → **New repository** → name it
   `utkarsh-soft-solutions`, keep it **Private**, do **not** initialize with a
   README (the project already has one).
2. From the project root:

```bash
git init
git add .
git commit -m "Utkarsh Soft Solutions website"
git branch -M main
git remote add origin https://github.com/<your-username>/utkarsh-soft-solutions.git
git push -u origin main
```

3. Verify `.env` was **not** pushed (it must be listed in `.gitignore`; check
   with `git status` before the first commit — if `.env` shows as untracked-to-add,
   add a `.env` line to `.gitignore` first).

Pushing to `main` automatically runs the CI job in
`.github/workflows/deploy.yml` (lint + build). The deploy jobs stay disabled
until you enable them — see the deployment guides.

## 7. Resend — account, API key, domain verification

Resend delivers both contact-form emails (internal notification + client
acknowledgement).

1. Create an account at <https://resend.com> (free tier is enough to start).
2. **API key:** Dashboard → **API Keys** → *Create API Key* → copy it into
   `RESEND_API_KEY` in `.env` (and later into your host's env var settings).
   You cannot view the key again — store it in a password manager.
3. **Domain verification (for production):** Dashboard → **Domains** → *Add
   Domain* → `utkarshsoftsolutions.com` → Resend shows DNS records (SPF/TXT,
   DKIM CNAMEs, optionally DMARC). Add them at your DNS provider (section 11)
   and wait for the *Verified* badge (minutes to a few hours).
4. Once verified, set `FROM_EMAIL`/`CONTACT_FROM` to an address on that domain,
   e.g. `Utkarsh Soft Solutions <noreply@utkarshsoftsolutions.com>`.
   Until then, `Utkarsh Soft Solutions <onboarding@resend.dev>` works for testing.

## 8. Optional — AI classification keys (Anthropic / OpenAI)

Inquiries are classified into categories (ERP Development, AI Development,
Support, …) by deterministic rules for free. Setting **one** of these keys
upgrades classification to an AI model, with automatic fallback to the rules
on any error — the site never breaks and never blocks on the AI.

- **Anthropic:** <https://console.anthropic.com> → API Keys → set
  `ANTHROPIC_API_KEY`. Optional override: `ANTHROPIC_MODEL`.
- **OpenAI:** <https://platform.openai.com> → API Keys → set
  `OPENAI_API_KEY`. Optional override: `OPENAI_MODEL`.

Leave both empty to stay on the free rule-based path.

## 9. Optional — analytics (GA4 + Microsoft Clarity)

Both are opt-in: the tracking scripts load **only** when the corresponding ID
is set at build time. These are `VITE_*` variables, so they must be present
**before `npm run build`** (or passed as Docker build args / set in the
hosting provider's build environment).

- **Google Analytics 4:** <https://analytics.google.com> → Admin → Create
  Property → add a **Web** data stream for `https://utkarshsoftsolutions.com`
  → copy the *Measurement ID* (`G-XXXXXXXXXX`) into `VITE_GA_MEASUREMENT_ID`.
- **Microsoft Clarity:** <https://clarity.microsoft.com> → New project → copy
  the *Project ID* into `VITE_CLARITY_PROJECT_ID`.

Also build-time: `VITE_LINKEDIN`, `VITE_GITHUB`, `VITE_PORTFOLIO`,
`VITE_WHATSAPP` — social links that override the defaults in
`src/lib/site-config.ts`.

## 10. Google Search Console

After the site is live on its domain:

1. Go to <https://search.google.com/search-console> → *Add property* →
   **Domain** property → `utkarshsoftsolutions.com`.
2. Verify via the DNS TXT record Google shows (add it at your DNS provider).
3. Submit the sitemap: Sitemaps → `https://utkarshsoftsolutions.com/sitemap.xml`.

## 11. Cloudflare DNS (recommended DNS host)

Cloudflare gives free DNS, proxying/CDN, and TLS in front of any host.

1. Create an account at <https://cloudflare.com> → *Add a site* →
   `utkarshsoftsolutions.com` (free plan).
2. Cloudflare shows two nameservers — set them at your domain registrar
   (Hostinger/GoDaddy/etc.). Propagation can take up to 24 h.
3. Add records as required by your chosen host:
   - **VPS / EC2:** `A` record `@` → server IP, `CNAME` `www` → `@`.
   - **Vercel:** follow Vercel's domain instructions (`A` `76.76.21.21` +
     `CNAME` `www` → `cname.vercel-dns.com`).
   - **Resend verification:** the TXT/CNAME records from section 7.
   - **Search Console:** the TXT record from section 10.
4. If you use Cloudflare's orange-cloud proxy in front of your own nginx+TLS,
   set SSL/TLS mode to **Full (strict)** once the origin certificate exists.

---

**Next:** pick a deployment guide — `HOSTINGER_DEPLOYMENT.md`,
`VERCEL_DEPLOYMENT.md`, or `AWS_DEPLOYMENT.md` — and read `BACKUP.md` before
your first production deploy.
