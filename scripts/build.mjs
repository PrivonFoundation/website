import fs from 'node:fs';
import path from 'node:path';
import {
  SITE, LANGS, META, ROUTES, pathFor, head, sprite, CSS, minifyHtml,
} from './lib/common.mjs';
import { homePage } from './lib/home.mjs';
import {
  aboutPage, communityPage, contributionsPage, crytoPage,
  privacyPage, termsPage, ethicsPage, notFoundPage,
} from './lib/pages.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const C = JSON.parse(fs.readFileSync(path.join(root, 'src/content.json'), 'utf8'));

const PAGES = {
  home: homePage,
  about: aboutPage,
  privacy: privacyPage,
  terms: termsPage,
  ethics: ethicsPage,
  contributions: contributionsPage,
  community: communityPage,
  crytotool: crytoPage,
};

function pageFile(lang, route) {
  const parts = [dist];
  if (lang !== 'en') parts.push(lang);
  if (ROUTES[route]) parts.push(ROUTES[route]);
  parts.push('index.html');
  return path.join(...parts);
}

function render(lang, route) {
  const meta = META[route][lang];
  const body = PAGES[route](C, lang);
  return minifyHtml(`${head({ lang, route, title: meta.title, description: meta.desc })}
<body>
${sprite}
${body}
</body>
</html>
`);
}

function sitemap() {
  const lastmod = '2026-05-01';
  const urls = [];
  for (const route of Object.keys(ROUTES)) {
    for (const lang of LANGS) {
      const loc = SITE + pathFor(lang, ROUTES[route]);
      const alts = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + pathFor(l, ROUTES[route])}"/>`).join('\n');
      urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === 'home' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === 'home' ? '1.0' : '0.8'}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + pathFor('en', ROUTES[route])}"/>
  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// Copy only the optimized runtime assets. Original PNG sources stay in the repo
// for reference but never reach the deployable output.
const PUBLIC = path.join(root, 'public');
const SKIP = new Set(['Privon.png', 'CrytoTool.png', 'wtshex.png']);
fs.cpSync(PUBLIC, dist, {
  recursive: true,
  filter: (src) => {
    const rel = path.relative(PUBLIC, src);
    if (!rel) return true;
    const base = path.basename(rel);
    if (SKIP.has(rel)) return false;
    if (rel.startsWith('assets/') && rel.endsWith('.png')) return false;
    if (base.startsWith('hero-silk-') && !['hero-silk-1400.avif', 'hero-silk-1200.webp'].includes(base)) return false;
    if (/\.png$/.test(base) && !/^(favicon-32|apple-touch-icon|icon-\d+)\.png$/.test(base)) return false;
    return true;
  },
});

for (const route of Object.keys(ROUTES)) {
  for (const lang of LANGS) {
    const file = pageFile(lang, route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, render(lang, route));
  }
}

// 404 (Cloudflare Pages + GitHub Pages pick this up automatically)
fs.writeFileSync(path.join(dist, '404.html'), minifyHtml(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Page not found | Privon Foundation</title>
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<style>${CSS}</style>
</head>
<body>
${sprite}
${notFoundPage('en')}
</body>
</html>
`));

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap());

const manifest = {
  name: 'Privon Foundation',
  short_name: 'Privon',
  description: 'Open-source, privacy-first cybersecurity solutions. Zero data collection, zero tracking, zero knowledge.',
  start_url: '/',
  display: 'standalone',
  background_color: '#000000',
  theme_color: '#000000',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
};
fs.writeFileSync(path.join(dist, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

for (const file of ['_headers', 'llms.txt']) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dist, file));
}

const htmlFiles = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
};
walk(dist);

console.log(`Built ${htmlFiles.length} HTML pages`);
console.log(`CSS inlined: ${(CSS.length / 1024).toFixed(1)} KB per page (minified)`);
console.log(`Output: ${dist}`);
