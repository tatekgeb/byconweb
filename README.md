# Bycon Marketing Site

Static Astro marketing website for `bycon.com`.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The Railway **Dockerfile** serves `dist/` with **nginx** so each route (`/contact`, `/solutions`, …) returns that folder’s `index.html`. Using Node `serve` (especially with `--single`) can incorrectly send **every** URL to the home page—the browser URL changes but the document stays **`Home · Bycon`**.

## Environment variables

Copy `.env.example` to `.env` for local testing.

- `PUBLIC_TMS_APP_URL`
- `PUBLIC_CONTACT_EMAIL`
- `PUBLIC_SALES_EMAIL`
- `PUBLIC_PRIVACY_EMAIL`
- `PUBLIC_LEGAL_EMAIL` (optional; defaults to `PUBLIC_PRIVACY_EMAIL`; used on Privacy Policy for legal / SMS help contact)
- `PUBLIC_SECURITY_EMAIL`
- `PUBLIC_CAREERS_EMAIL`

These values are compiled into static pages at build time.

## Website launch checklist

1. Set site env vars in your host (Vercel/Netlify/Railway/etc.).
2. Deploy site and verify these pages: `/`, `/solutions`, `/pricing`, `/about`, `/careers`, `/contact`, `/privacy`, `/security`, `/terms`.
3. Confirm `https://bycon.com/robots.txt` and `https://bycon.com/sitemap.xml` load in production.
4. Connect custom domain and HTTPS at your hosting provider.

## Email service integration checklist

The static site only displays email addresses. Mail delivery is handled by your email provider.

1. Choose a provider (Google Workspace, Microsoft 365, Zoho, etc.).
2. In provider admin, create mailboxes/aliases:
   - `hello@bycon.com`
   - `sales@bycon.com`
   - `privacy@bycon.com`
   - `security@bycon.com`
   - `careers@bycon.com`
   - coworker inboxes like `ben@bycon.com`
3. Add DNS records at your DNS host:
   - **MX** (required for incoming mail)
   - **SPF TXT** (anti-spoofing policy)
   - **DKIM TXT/CNAME** (signed outbound mail)
   - **DMARC TXT** (domain email policy and reporting)
4. Wait for DNS propagation and verify in provider admin until status is healthy.
5. Send test emails to/from each mailbox from an external address.
6. Update host env vars (`PUBLIC_*_EMAIL`) to match real addresses.
7. Rebuild/redeploy the static site so contact links show final addresses.

## Notes

- Keep legal text (`/privacy`, `/terms`, `/security`) reviewed by counsel before production use in regulated contexts.
- If you add or remove pages, update `public/sitemap.xml`.
# Bycon marketing site

Static [Astro](https://astro.build/) site for **bycon.com**: company positioning and a **Solutions** page that links to the transport product at **`tms.bycon.com`** (configure via env).

This folder is designed so you can treat it as **its own Git repository**:

1. Create a new empty repo (e.g. `bycon-web` on GitHub).
2. Copy **only** the contents of `bycon-marketing/` into that repo’s root (or use `git subtree split` from the monorepo if you prefer history).
3. `npm install` → `npm run build` → deploy `dist/` to Vercel, Netlify, Cloudflare Pages, etc.
4. Point **bycon.com** DNS to that host. Point **tms.bycon.com** to your TMS deployment (separate project).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist locally
```

## Environment

Copy `.env.example` to `.env` for local dev:

- `PUBLIC_TMS_APP_URL` — full URL of the TMS app (default in code: `https://tms.bycon.com`).

In production, set the same variable in your host’s dashboard so “Open TMS” and labels stay correct.

## Relationship to the TMS repo

The **Transport Management System** application lives in the other repository / deployment. This site does not embed the app; it only links to it. Copy on the Solutions page is **marketing-level** and should be edited independently of internal module names in the TMS codebase.
