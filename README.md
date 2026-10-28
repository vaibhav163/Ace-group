# Ace Group — Authorized Channel Partner (React)

React conversion of the acegroupsales.com channel-partner website (originally a static multi-file site, delivered 2026-10-19). Same design (the original `css/style.css` is reused as-is), same data, same features — rebuilt as a Vite + React 18 SPA with react-router-dom.

- **23 projects** (15 residential, 8 commercial) — data in `src/data/projects.js`, converted faithfully from the static site's `js/site.js` (every slug, RERA number, image path, description, highlight, gallery caption, plus the per-project DETAILS / amenities / location blocks).
- **Config** (domain, phone, FormSubmit endpoint, GA / Meta Pixel placeholder IDs) — `src/config.js`.
- Prices are **Price on request** everywhere, as before.

## Run / build

```bash
npm install
npm run dev       # local dev server (Vite)
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

The build output in `dist/` is a static site: upload its contents to the hosting root. All images/icons live in `public/assets/` and are copied to `dist/assets/` unchanged; `sitemap.xml` and `robots.txt` ship from `public/` the same way.

## Hosting — SPA rewrite rule (required)

This is a single-page app. The host must serve `index.html` for every route that is not a real file, or deep links like `/projects/ace-parkway` will 404.

- **Netlify** (`_redirects` in dist root): `* /index.html 200`
- **Vercel** (`vercel.json`): `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Apache** (`.htaccess`):
  ```
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
  ```
- **Nginx**: `try_files $uri $uri/ /index.html;`

## Legacy .html URLs → clean React routes

The old static URLs must keep working (they are in the old sitemap, search indexes and shared links). The app already redirects any `*.html` URL in the browser (see `LegacyRedirects` in `src/App.jsx`), and old hash routes (`#/project/<slug>` etc.) are mapped too. For SEO, prefer issuing these as **server-side 301 redirects** as well:

| Old URL | New URL |
|---|---|
| `/index.html` | `/` |
| `/projects.html` | `/projects` |
| `/projects.html?corridor=<corridor>` | `/projects?corridor=<corridor>` |
| `/about.html` | `/about` |
| `/contact.html` | `/contact` |
| `/404.html` | (serve the SPA 404 view with a 404 status) |
| `/projects/ace-verde.html` | `/projects/ace-verde` |
| `/projects/ace-terra.html` | `/projects/ace-terra` |
| `/projects/ace-acreville.html` | `/projects/ace-acreville` |
| `/projects/ace-estate.html` | `/projects/ace-estate` |
| `/projects/ace-hanei.html` | `/projects/ace-hanei` |
| `/projects/ace-starlit.html` | `/projects/ace-starlit` |
| `/projects/ace-divino.html` | `/projects/ace-divino` |
| `/projects/ace-parkway.html` | `/projects/ace-parkway` |
| `/projects/ace-palm-floors.html` | `/projects/ace-palm-floors` |
| `/projects/ace-golfshire.html` | `/projects/ace-golfshire` |
| `/projects/ace-platinum.html` | `/projects/ace-platinum` |
| `/projects/ace-city.html` | `/projects/ace-city` |
| `/projects/ace-aspire.html` | `/projects/ace-aspire` |
| `/projects/ace-medalleo.html` | `/projects/ace-medalleo` |
| `/projects/ace-arte.html` | `/projects/ace-arte` |
| `/projects/ace-studio.html` | `/projects/ace-studio` |
| `/projects/ace-city-square.html` | `/projects/ace-city-square` |
| `/projects/ace-medley-avenue.html` | `/projects/ace-medley-avenue` |
| `/projects/ace-153.html` | `/projects/ace-153` |
| `/projects/ace-yxp.html` | `/projects/ace-yxp` |
| `/projects/ace-hive.html` | `/projects/ace-hive` |
| `/projects/ace-edit.html` | `/projects/ace-edit` |
| `/projects/ace-capitol.html` | `/projects/ace-capitol` |

Canonical / OG URLs and `sitemap.xml` in this React version use the clean URLs above.

## Features carried over from the static site

Home (hero, featured grid with skeletons, browse-by-corridor, why-buyers + enquiry form) · Projects listing (search, type + corridor filter chips, result count, skeleton loading, empty state with reset) · Project pages (hero with offer badges, sticky anchor nav, highlights ribbon, overview + sticky "Express your interest" mini-form, project facts, amenities, floor plans, price list, gallery carousel, location advantages, enquire form, related projects, BreadcrumbList JSON-LD) · About · Contact (with `?project=<slug>` pre-selection) · 404 · Enquiry forms (FormSubmit endpoint if set in `src/config.js`, otherwise WhatsApp wa.me fallback with prefilled message — no lead is lost) · Cookie consent banner + preferences modal with consent-gated GA / Meta Pixel loading (placeholders until real IDs are set) · Toast notifications · Mobile nav + sticky mobile action bar · Photo safety net (lazy→eager promotion near viewport + one retry on error) · Per-page title / meta / canonical / OG via the `Seo` component · `@graph` JSON-LD (RealEstateAgent + WebSite + ItemList) in `index.html`.

## Notes / differences from the static version

- Consent is **not persisted** (same as the static site): the banner returns on a fresh page load until the visitor decides again in that session.
- The static `projects.html` head said "13 projects" (stale); this version uses the site's own corrected 23-project SEO text from `js/site.js`.
- The static project-listing bootstrap silently dropped `?corridor=gurugram` (it was missing from its valid list); the React version accepts it, so the home page's Gurugram corridor card filters correctly.
