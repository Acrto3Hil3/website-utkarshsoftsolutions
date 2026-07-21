# Hostinger Deployment

Two supported paths on a **Hostinger VPS** (KVM plans):

- **Path A — Node + pm2 behind nginx** (recommended: simple, low memory)
- **Path B — Docker Compose** (identical to the setup used on any Docker host)

> **Shared hosting caveat:** Hostinger *shared/web hosting* plans (non-VPS)
> cannot run a persistent Node process. They can only serve the static `dist/`
> folder — the site will render, but the contact form will not work because
> `POST /api/contact` needs the Node server. Use a VPS (or Vercel, see
> `VERCEL_DEPLOYMENT.md`) for the full site.

Prerequisites: a Hostinger VPS running Ubuntu 22.04/24.04, SSH access as root
(or a sudo user), your GitHub repo pushed (see `ENVIRONMENT_SETUP.md` §6), and
DNS `A` records for `utkarshsoftsolutions.com` and `www` pointing at the VPS IP.

---

## Path A — Node + pm2 + nginx

### 1. Base packages

```bash
ssh root@<vps-ip>

apt update && apt upgrade -y
apt install -y git nginx

# Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
node -v   # v22.x

# pm2 process manager
npm install -g pm2
```

### 2. Clone and build

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/<your-username>/utkarsh-soft-solutions.git
cd utkarsh-soft-solutions

npm ci
```

Create the production `.env` (never copied from your machine via git — create
it on the server):

```bash
cp .env.example .env
nano .env    # set RESEND_API_KEY, FROM_EMAIL/CONTACT_FROM, CONTACT_TO, optional AI keys
```

Remember: `VITE_*` values are baked in at **build** time, so set them in `.env`
(and export them into the shell) *before* building if you use them:

```bash
set -a; source .env; set +a   # export VITE_* for the build
npm run build                  # dist/ (frontend) + dist-server/ (Express bundle)
```

### 3. Start with pm2

```bash
pm2 start dist-server/index.js --name utkarsh-site
pm2 status
curl http://localhost:3000/api/health   # {"ok":true,...}
```

Make it survive reboots:

```bash
pm2 startup     # prints a command — run the command it prints
pm2 save
```

pm2 loads no `.env` by itself; the Express server reads `process.env`. The
simplest reliable pattern is to export before starting:

```bash
set -a; source /var/www/utkarsh-soft-solutions/.env; set +a
pm2 restart utkarsh-site --update-env
pm2 save
```

### 4. nginx reverse proxy

The repo ships `nginx.conf` written for the Docker setup (it proxies to
`http://web:3000`). For a plain VPS, adapt it: same file, but proxy to
`127.0.0.1:3000`. Create the site config:

```bash
nano /etc/nginx/sites-available/utkarsh-soft-solutions
```

```nginx
server {
    listen 80;
    server_name utkarshsoftsolutions.com www.utkarshsoftsolutions.com;

    # security headers (from the repo's nginx.conf)
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header Referrer-Policy strict-origin-when-cross-origin;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript image/svg+xml;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:

```bash
ln -s /etc/nginx/sites-available/utkarsh-soft-solutions /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
```

The site should now answer on `http://utkarshsoftsolutions.com`.

### 5. HTTPS with Let's Encrypt (certbot)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d utkarshsoftsolutions.com -d www.utkarshsoftsolutions.com
```

Certbot rewrites the nginx config for 443 + HTTP→HTTPS redirect and installs a
renewal timer. Verify renewal works:

```bash
certbot renew --dry-run
```

### 6. Updating the site (manual)

```bash
cd /var/www/utkarsh-soft-solutions
git pull origin main
npm ci
npm run build
pm2 restart utkarsh-site
```

---

## Path B — Docker Compose

### 1. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
docker --version && docker compose version
```

### 2. Clone, configure, run

```bash
mkdir -p /var/www && cd /var/www
git clone https://github.com/<your-username>/utkarsh-soft-solutions.git
cd utkarsh-soft-solutions
cp .env.example .env && nano .env   # server env; VITE_* here are also picked up as build args

docker compose up -d --build
docker compose ps                    # web should become "healthy" (/api/health check)
curl http://localhost:3000/api/health
```

`docker-compose.yml` starts two services:

- `web` — the Node server on port 3000, `env_file: .env`, healthcheck on `/api/health`.
- `nginx` — reverse proxy on port 80 using the repo's `nginx.conf` (which
  proxies to `web:3000`). Remove this service if you run nginx on the host or
  put Cloudflare in front instead.

### 3. TLS in the Docker path

The 443 block in `nginx.conf` is commented out. To enable it:

1. Get certificates on the host, e.g. with certbot in standalone mode
   (stop the nginx container or free port 80 first):

   ```bash
   apt install -y certbot
   docker compose stop nginx
   certbot certonly --standalone -d utkarshsoftsolutions.com -d www.utkarshsoftsolutions.com
   mkdir -p certs
   cp /etc/letsencrypt/live/utkarshsoftsolutions.com/fullchain.pem certs/
   cp /etc/letsencrypt/live/utkarshsoftsolutions.com/privkey.pem certs/
   ```

2. In `docker-compose.yml`, uncomment the `443:443` port and the
   `./certs:/etc/nginx/certs:ro` volume on the `nginx` service.
3. In `nginx.conf`, uncomment the `listen 443 ssl http2;` server block.
4. `docker compose up -d`.

Repeat the cert copy on renewal (or script it in cron — see `BACKUP.md` for
the cron pattern). Alternative: keep port 80 only and let Cloudflare's proxy
terminate TLS.

### 4. Updating (Docker)

```bash
cd /var/www/utkarsh-soft-solutions
git pull origin main
docker compose up -d --build
```

---

## Enable the `deploy-vps` GitHub Actions job (auto-deploy on push)

`.github/workflows/deploy.yml` contains a ready `deploy-vps` job that SSHes in
and runs `git pull && npm ci && npm run build && pm2 restart` (or Docker — the
script has a commented `docker compose` variant). It is disabled with
`if: ${{ false }}` until you provide secrets.

1. On the VPS, create a deploy key or use a dedicated user's SSH key. Locally
   generate one if needed:

   ```bash
   ssh-keygen -t ed25519 -f deploy_key -C "github-actions-deploy" -N ""
   # append deploy_key.pub to /root/.ssh/authorized_keys (or the deploy user's) on the VPS
   ```

2. In GitHub: Repo → **Settings → Secrets and variables → Actions** → add:

   | Secret | Value |
   |---|---|
   | `SSH_HOST` | VPS IP or hostname |
   | `SSH_USER` | `root` (or your deploy user) |
   | `SSH_KEY` | contents of the **private** key file (`deploy_key`) |

3. Edit `.github/workflows/deploy.yml`: in the `deploy-vps` job, delete the
   line `if: ${{ false }} # enable for VPS; ...`.
4. If you deploy with Docker instead of pm2, swap the pm2 line for the
   commented `docker compose up -d --build` line in the job's script.
5. Commit and push — every push to `main` now lints, builds, and deploys.

---

## Post-deploy verification

Run the universal checklist in `DEPLOYMENT.md`. VPS-specific extras:

- `pm2 logs utkarsh-site` (or `docker compose logs -f web`) shows the startup
  lines confirming Resend/AI configuration.
- `systemctl status nginx` and `nginx -t` are clean.
- `certbot renew --dry-run` succeeds.
- Reboot the VPS once and confirm the site comes back (`pm2 save` +
  `pm2 startup` done, or Docker `restart: unless-stopped` working).
