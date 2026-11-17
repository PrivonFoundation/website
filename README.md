# Privon Foundation — website

Static, zero-JavaScript website for Privon Foundation, Protocol-3305, and Privon Vault.

## Stack

- **HTML + CSS only.** No client-side JavaScript, no framework, no hydration.
- **Self-hosted fonts:** Geist and Fragment Mono as subset WOFF2 with `font-display: swap`.
- **Images:** AVIF with WebP fallback, explicit `width`/`height`, responsive `srcset`, lazy loading below the fold.
- **Motion:** only `transform` and `opacity`, including the hero, marquee, menu, tabs, and scroll effects.
- **Interactions:** native HTML `popover` for the menu and language selector, CSS `:has()` for state, radio inputs for the CrytoTool feature tabs, CSS scroll timelines for the compacting navbar.
- **i18n:** separate English (`/`), Romanian (`/ro/`), and Spanish (`/es/`) page trees with `hreflang` alternates.
- **Cloudflare Pages:** security headers and immutable asset caching in `_headers`; `llms.txt` at the site root.

The previous React/Vite entry point is no longer used by the build. `scripts/build.mjs` is the source of truth.

## Build

```bash
npm run build     # generates dist/
npm run dev       # builds, then serves dist/ at http://127.0.0.1:3000/
```

The build only uses Node.js built-ins. It:

1. reads page copy from `src/content.json`;
2. renders all 24 localized pages plus `404.html` into `dist/`;
3. inlines the minified stylesheet and writes `sitemap.xml`, `site.webmanifest`, `_headers`, and `llms.txt`;
4. copies only the optimized runtime assets from `public/`.

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- No environment variables are required.

`_headers` applies a strict CSP, HSTS, frame/ MIME/ referrer protections, one-year immutable caching for fonts and images, and revalidation for HTML.

## Design note

The hero's WebGL “silk” shader cannot run in a zero-JavaScript build. Its exact fragment-shader frame was pre-rendered to AVIF/WebP and is moved with a compositor-only drift, so the visual composition is preserved without shipping WebGL or Three.js. All other motion is CSS.

## Fonts

Geist and Fragment Mono are licensed under the SIL Open Font License. License texts are in `public/fonts/`.
