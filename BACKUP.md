# Backup & Rollback

This is a mostly stateless site — there is no database. That makes backup
simple, but four things still need protecting.

## What to back up

| Asset | Where it lives | Backup method |
|---|---|---|
| **Source code** | git / GitHub | GitHub is the primary backup. Everything needed to rebuild the site is in the repo — this is the single most important safeguard. |
| **Secrets (`.env`)** | Server / Vercel dashboard only — *never* in git | Store every key (`RESEND_API_KEY`, AI keys, analytics IDs) in a **password manager** entry (e.g. Bitwarden/1Password) the moment you create it. The `.env` file itself can be recreated from `.env.example` + the password manager in two minutes. |
| **Original image assets** | `src/assets/` (already in git) | In git; keep any higher-resolution originals/PSDs that are *not* in the repo in cloud storage (Drive/Dropbox). |
| **External configuration** | Resend dashboard, DNS records, Vercel/host settings | Not files — document them. Keep a short note (in the password manager or a private repo file) listing: Resend verified domain + DNS records added, all DNS records at Cloudflare/Route 53, host env vars set, GitHub secrets set. Screenshots of the DNS zone work fine. |

## Strategy 1 — GitHub as source of truth (mandatory)

- All changes go through git; the server is never edited in place.
- The repo must always be pushable→cloneable→buildable:
  `git clone && npm ci && npm run build && npm run start` recreates production.
- Keep the repo private; enable 2FA on the GitHub account.

## Strategy 2 — tag every release before deploying

Before each production deploy:

```bash
git tag -a v1.0.0 -m "Release 2026-07-21: initial launch"
git push origin v1.0.0
```

Use any scheme you'll stick to (`v1.0.1`, `release-2026-07-21`). Tags are what
make rollback (below) a one-liner instead of an archaeology dig.

## Strategy 3 — VPS off-site cron backup (VPS/EC2 deployments only)

Even with git as source of truth, the server holds two things git doesn't:
the production `.env` and any certs. A nightly tar shipped off the box covers
machine loss:

```bash
sudo mkdir -p /var/backups/site
sudo crontab -e
```

Add:

```cron
# Nightly 03:00 backup of app dir (includes .env) — keeps 14 days locally
0 3 * * * tar -czf /var/backups/site/utkarsh-$(date +\%F).tar.gz -C /var/www utkarsh-soft-solutions --exclude=node_modules --exclude=dist --exclude=dist-server && find /var/backups/site -name 'utkarsh-*.tar.gz' -mtime +14 -delete
```

Ship it off-site (any one of these):

```bash
# a) to your machine, pulled from your laptop (simplest)
scp root@<server>:/var/backups/site/utkarsh-$(date +%F).tar.gz ./backups/

# b) to S3, pushed from the server (add to the same cron after the tar)
aws s3 cp /var/backups/site/utkarsh-$(date +%F).tar.gz s3://<your-backup-bucket>/

# c) rclone to Google Drive/Backblaze
rclone copy /var/backups/site remote:utkarsh-backups
```

The archive contains `.env` — treat it as a secret: restrict permissions
(`chmod 600`), use a private bucket, never email it.

## Test the restore (do this once, before you need it)

A backup you have never restored is a hope, not a backup. Dry run on any
clean machine/VM:

```bash
git clone https://github.com/<your-username>/utkarsh-soft-solutions.git
cd utkarsh-soft-solutions
# recreate .env from the password manager (or extract it from a cron archive)
cp .env.example .env && $EDITOR .env
npm ci && npm run build && npm run start
curl http://localhost:3000/api/health          # {"ok":true,...}
```

If that works end-to-end (including a test form submission), your backups are
real. Re-test after any structural change (new env var, new build step).

## Rollback procedures

**VPS / EC2 (pm2):**

```bash
cd /var/www/utkarsh-soft-solutions
git fetch --tags
git checkout v1.0.0        # last known-good tag
npm ci && npm run build
pm2 restart utkarsh-site
# when fixed, return to main: git checkout main && git pull && npm ci && npm run build && pm2 restart utkarsh-site
```

**Docker:** same `git checkout <tag>`, then `docker compose up -d --build`.

**Vercel:** Dashboard → Deployments → pick the previous good deployment →
**⋯ → Promote to Production** (instant, no rebuild). CLI equivalent:
`npx vercel rollback`.

**Secrets rollback:** if a bad key/env change (not code) broke production,
fix the variable in `.env` (then `pm2 restart utkarsh-site --update-env` /
`docker compose up -d`) or in Vercel's env settings + Redeploy. This is why
old values belong in the password manager's history.
