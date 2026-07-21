# AWS Deployment

Two AWS options:

- **Option 1 — EC2** (recommended): the full site (SPA + contact API) on one
  small instance. Identical runtime to the Hostinger VPS path.
- **Option 2 — S3 + CloudFront**: static frontend on a CDN — but the contact
  API still needs a small Node compute somewhere (details below).

---

## Option 1 — EC2 (full site)

### 1. Launch the instance

In the EC2 console:

1. **Launch instance** → AMI: **Ubuntu Server 24.04 LTS** (22.04 also fine).
2. Instance type: **t3.micro** (1 vCPU / 1 GB — plenty; free-tier eligible in
   many accounts).
3. Key pair: create/download one (`.pem`) for SSH.
4. **Security group** — inbound rules:

   | Port | Protocol | Source | Purpose |
   |---|---|---|---|
   | 22 | TCP | *your IP only* | SSH |
   | 80 | TCP | 0.0.0.0/0, ::/0 | HTTP |
   | 443 | TCP | 0.0.0.0/0, ::/0 | HTTPS |

   Do **not** open 3000 — nginx proxies to it locally.
5. Storage: 8–16 GB gp3 is enough.
6. Allocate an **Elastic IP** (EC2 → Elastic IPs → Allocate → Associate) so
   the address survives stop/start.

```bash
ssh -i your-key.pem ubuntu@<elastic-ip>
```

### 2. Install and run — Node + pm2 + nginx

The steps are identical to the Hostinger VPS path; summary (prefix with
`sudo` where shown, since you're the `ubuntu` user here):

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

sudo mkdir -p /var/www && sudo chown ubuntu:ubuntu /var/www
cd /var/www
git clone https://github.com/<your-username>/utkarsh-soft-solutions.git
cd utkarsh-soft-solutions
npm ci
cp .env.example .env && nano .env          # RESEND_API_KEY, CONTACT_FROM, CONTACT_TO, optional AI + VITE_* vars
set -a; source .env; set +a
npm run build

pm2 start dist-server/index.js --name utkarsh-site
pm2 startup                                 # run the sudo command it prints
pm2 save
curl http://localhost:3000/api/health
```

nginx site config, enabling, and certbot: follow
`HOSTINGER_DEPLOYMENT.md` Path A §4–§5 verbatim (use `sudo` for the nginx
and certbot commands). Same for updates (§6) and for enabling the
`deploy-vps` GitHub Actions job — it works unchanged against EC2
(`SSH_HOST` = Elastic IP, `SSH_USER` = `ubuntu`, `SSH_KEY` = the private key).

**Docker alternative on EC2:** install Docker (`curl -fsSL https://get.docker.com | sh`)
and follow `HOSTINGER_DEPLOYMENT.md` Path B — nothing AWS-specific changes.

### 3. DNS

- **Route 53:** Hosted zone for `utkarshsoftsolutions.com` → `A` record `@` →
  Elastic IP, `A` (or `CNAME`) `www` → same. If the domain is registered
  elsewhere, point its nameservers at the hosted zone's four NS values.
- **Or Cloudflare:** simpler and free — see `ENVIRONMENT_SETUP.md` §11;
  `A` record to the Elastic IP.

### 4. HTTPS

Let's Encrypt via certbot exactly as in `HOSTINGER_DEPLOYMENT.md` Path A §5:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d utkarshsoftsolutions.com -d www.utkarshsoftsolutions.com
sudo certbot renew --dry-run
```

(If you later put CloudFront or an ALB in front, use AWS Certificate Manager
instead — but for a single t3.micro, certbot is the simple correct answer.)

---

## Option 2 — S3 + CloudFront (static frontend + separate small compute)

> **Caveat first:** S3/CloudFront serve only static files. The contact form
> posts to `/api/contact`, which needs a Node process. So this option always
> means *two* pieces: the CDN for `dist/`, plus a small compute running the
> same Express server (`dist-server/index.js`) — e.g. the EC2 t3.micro from
> Option 1, or an Amazon **Lightsail** $5 instance (same Ubuntu steps).
> For this site's size, Option 1 alone (or Vercel) is usually the better
> deal; choose S3+CloudFront only if you specifically want CDN edge caching.

1. **Build locally or in CI:** `npm ci && npm run build` → upload `dist/`:

   ```bash
   aws s3 mb s3://utkarshsoftsolutions.com
   aws s3 sync dist/ s3://utkarshsoftsolutions.com --delete
   ```

   Keep the bucket private; grant access via CloudFront **Origin Access
   Control**, not public-bucket policies.

2. **CloudFront distribution:**
   - Origin 1: the S3 bucket (with OAC).
   - Default behavior → S3, *Redirect HTTP to HTTPS*, cache enabled.
   - **Origin 2: your API compute** (EC2/Lightsail hostname). Add a behavior
     for path pattern `/api/*` → this origin, caching disabled, `POST`
     allowed (Allowed methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE).
   - SPA fallback: custom error responses mapping 403 and 404 → `/index.html`
     with HTTP 200 (this replicates the `vercel.json` / Express fallback).
   - Certificate: request one for `utkarshsoftsolutions.com` +
     `www.utkarshsoftsolutions.com` in **ACM (us-east-1)** and attach it;
     add both as Alternate Domain Names.

3. **DNS:** Route 53 `A`-alias (or Cloudflare `CNAME`) to the distribution's
   `dxxxx.cloudfront.net` domain.

4. **Deploying updates:** re-run `aws s3 sync dist/ s3://... --delete`, then
   invalidate: `aws cloudfront create-invalidation --distribution-id <ID> --paths "/index.html"`
   (hashed `/assets/*` files never need invalidation).

The API instance itself is deployed and updated exactly like Option 1 —
`.env` on the instance, pm2, certbot not needed if only CloudFront talks to it
over its hostname (still recommended if it's reachable directly).

---

## Post-deploy verification

Run the universal checklist in `DEPLOYMENT.md`. AWS-specific extras:

- Security group has only 22 (restricted), 80, 443 open.
- Elastic IP associated; instance reboot brings the site back
  (`pm2 save`/`pm2 startup` done).
- Option 2 only: `POST https://<domain>/api/contact` with an empty JSON body
  returns 400 *through CloudFront* (proves the `/api/*` behavior routes and
  allows POST), and a deep-linked path returns the SPA, not an S3 403.
