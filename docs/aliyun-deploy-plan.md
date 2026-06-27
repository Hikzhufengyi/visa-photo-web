# Aliyun Deploy Plan

This document is tailored to the current `visa-photo-web` project.

## Recommended choice

For the current codebase, the most practical Aliyun deployment route is:

- Aliyun Lightweight Application Server or ECS
- Ubuntu 22.04
- Node.js 22 LTS
- Nginx reverse proxy
- HTTPS certificate on the domain

Why this is the best fit right now:

- The site is a Next.js app, not a plain static export
- It uses route handlers like `app/robots.ts` and `app/sitemap.ts`
- It has localized routes and dynamic SEO pages
- Keeping it as a running Next.js server is simpler than forcing a static export refactor

## Domain

- Primary domain: `passportidphoto.com`
- Recommended canonical domain: `www.passportidphoto.com`
- Root domain should 301 redirect to `www`

## Option A: Lightweight Application Server / ECS

This is the recommended path now.

### Estimated cost

- Entry-level instance: around `99 RMB/year` to `199 RMB/year` during common Aliyun promotions
- Bandwidth and storage depend on package and region

### Deployment architecture

- `Nginx` listens on ports `80` and `443`
- `Next.js` app runs on `127.0.0.1:3000`
- `Nginx` forwards traffic to the local Node process

### Server setup steps

1. Buy a Lightweight Application Server or ECS in a mainland China region.
2. Install:
   - `git`
   - `node`
   - `npm`
   - `nginx`
3. Clone the repo:

```bash
git clone git@github.com:Hikzhufengyi/visa-photo-web.git
cd visa-photo-web
```

4. Install dependencies and build:

```bash
npm install
npm run build
```

5. Start the app:

```bash
npm run start
```

6. Keep it alive with `pm2` or `systemd`.

Example with `pm2`:

```bash
npm install -g pm2
pm2 start npm --name visa-photo-web -- start
pm2 save
pm2 startup
```

### Nginx reverse proxy example

```nginx
server {
    listen 80;
    server_name passportidphoto.com www.passportidphoto.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

After confirming HTTP works, add SSL and redirect `http -> https`.

### DNS on Aliyun

If the server public IP is `1.2.3.4`, then:

- `@` -> `A` -> `1.2.3.4`
- `www` -> `A` -> `1.2.3.4`

Or:

- `@` -> `A` -> `1.2.3.4`
- `www` -> `CNAME` -> `passportidphoto.com`

## Option B: OSS + CDN

This is cheaper for a pure static site, but not the best fit for the current code as-is.

Why not recommended first:

- `app/robots.ts` and `app/sitemap.ts` are dynamic framework outputs
- The app currently depends on Next.js runtime behavior
- You would need to refactor the project to a fully static export model

This option makes sense later if:

- You remove runtime-only features
- You generate static `robots.txt` and `sitemap.xml`
- You export all localized and SEO pages ahead of time

## ICP filing

If the site will be stably served from mainland China, ICP filing may be required.

Plan for:

- domain real-name ownership
- server purchase under the same eligible主体
- ICP submission before full production launch

## Suggested rollout

### Phase 1

- Deploy current Next.js app to Aliyun server
- Bind `passportidphoto.com`
- Enable HTTPS
- Launch the multilingual marketing site

### Phase 2

- Add image processing backend if needed
- Add OSS for media assets
- Add CDN acceleration

### Phase 3

- If the site becomes mostly static, consider moving the frontend to OSS + CDN

## Recommendation summary

Use this now:

- Lightweight Application Server or ECS
- Nginx
- Node.js
- HTTPS

Do not optimize for static hosting yet. The current project is still better treated as a running Next.js application.
