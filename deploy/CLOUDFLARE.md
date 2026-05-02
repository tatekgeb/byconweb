# Cloudflare: robust URLs (www, port, HTTPS)

The Docker/nginx layer redirects **`www.bycon.net` → `https://bycon.net`**.  
For **`https://bycon.net:8080/...`** and similar, the request often **never reaches nginx** in a useful way—normalize those at **Cloudflare** (edge), before Railway.

## 1. Always HTTPS (if not already)

**SSL/TLS → Overview:** mode **Full** or **Full (strict)**.

**Rules → Redirect Rules** (or legacy **Always Use HTTPS**): force HTTPS.

## 2. Strip non-standard ports (e.g. `:8080`)

Visitors sometimes paste an internal port (`8080` is common inside Railway). You want them on **`https://bycon.net`** (port **443**, implicit).

In **Rules → Redirect Rules → Create rule**:

- **Name:** Strip port 8080 → canonical HTTPS
- **When incoming requests match:** Custom expression (edit as needed for your zone):

```txt
(http.host eq "bycon.net" or http.host eq "www.bycon.net") and http.request.uri.port eq 8080
```

If the expression builder does not expose `uri.port`, use **Bulk Redirects** or ask Cloudflare support—plans/UI vary.

- **Then:** Dynamic redirect  
  - **Status:** 301  
  - **Target:** `concat("https://bycon.net", http.request.uri.path)`  
  - If you need query strings: append `http.request.uri.query` per Cloudflare’s dynamic redirect syntax for your account.

**Repeat** for any other accidental ports you care about (only if you actually see traffic on them).

## 3. www and apex (overlap with nginx)

- **Nginx** (this repo) already **301s `www.bycon.net` → `https://bycon.net`** at the origin.
- You can **duplicate** the same rule at Cloudflare so behavior is correct **even if** a request path bypasses nginx briefly:

**Redirect Rule:**

- **When:** `http.host eq "www.bycon.net"`
- **Then:** Dynamic redirect to `https://bycon.net${uri.path}${uri.query}` — **301**

Only one canonical host should appear in **sitemap** and **`astro.config.mjs` `site`** (currently `https://bycon.net`).

## 4. Optional: apex → www (if you prefer www)

If you ever want **`www` as canonical**, you must:

1. Flip nginx `server_name` blocks (redirect apex → www instead of www → apex).
2. Set `site: 'https://www.bycon.net'` in `astro.config.mjs`.
3. Update `public/sitemap.xml` and `public/robots.txt` URLs.
4. Align Cloudflare redirects.

## 5. Verify

- `https://bycon.net/contact`
- `https://www.bycon.net/contact` → should end on **`https://bycon.net/contact`**
- After port rules: `https://bycon.net:8080/contact` → should end on **`https://bycon.net/contact`** (once Cloudflare rule is active)

Use **curl -I** to confirm `301` and `Location:` headers.
