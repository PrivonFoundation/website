import fs from 'node:fs';

export const SITE = 'https://privon.pages.dev';
export const LANGS = ['en', 'ro', 'es'];
export const LANG_LABEL = { ro: 'Română', en: 'English', es: 'Español' };
const minifyCss = (css) => css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};:,>])\s*/g, '$1')
  .replace(/;}/g, '}')
  .trim();

export const CSS = minifyCss(fs.readFileSync('src/styles.css', 'utf8'));

export const minifyHtml = (html) => html
  .replace(/>\s+</g, '><')
  .trim();

export const ROUTES = {
  home: '',
  about: 'about',
  privacy: 'privacy',
  terms: 'terms',
  ethics: 'ethics',
  contributions: 'contributions',
  community: 'community',
  crytotool: 'crytotool',
};

export const pathFor = (lang, route) => {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;
  return route ? `${prefix}${route}/` : prefix;
};

export const asset = (p) => p;

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

export const paragraphs = (text) => String(text ?? '')
  .split(/\n\n+/)
  .map((p) => `<p>${esc(p)}</p>`)
  .join('');

export const icon = (name, cls = '') =>
  `<svg${cls ? ` class="${cls}"` : ''} aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;

const GITHUB = '<path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"/>';

const SPRITE = `<svg class="sr-only" aria-hidden="true" focusable="false" width="0" height="0"><defs>
<symbol id="i-github" viewBox="0 0 16 16" fill="currentColor">${GITHUB}</symbol>
<symbol id="i-matrix" viewBox="0 0 24 24" fill="currentColor"><path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/></symbol>
<symbol id="i-mastodon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></symbol>
<symbol id="i-pixelfed" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.3726 24 0 18.6274 0 12S5.3726 0 12 0s12 5.3726 12 12-5.3726 12-12 12m-.9526-9.3802h2.2014c2.0738 0 3.7549-1.6366 3.7549-3.6554S15.3226 7.309 13.2488 7.309h-3.1772c-1.1964 0-2.1663.9442-2.1663 2.1089v8.208z"/></symbol>
<symbol id="i-lemmy" viewBox="0 0 24 24" fill="currentColor"><path d="M2.9595 4.2228a3.9132 3.9132 0 0 0-.332.019c-.8781.1012-1.67.5699-2.155 1.3862-.475.8-.5922 1.6809-.35 2.4971.2421.8162.8297 1.5575 1.6982 2.1449.0053.0035.0106.0076.0163.0114.746.4498 1.492.7431 2.2877.8994-.02.3318-.0272.6689-.006 1.0181.0634 1.0432.4368 2.0006.996 2.8492l-2.0061.8189a.4163.4163 0 0 0-.2276.2239.416.416 0 0 0 .0879.455.415.415 0 0 0 .2941.1231.4156.4156 0 0 0 .1595-.0312l2.2093-.9035c.408.4859.8695.9315 1.3723 1.318.0196.0151.0407.0264.0603.0423l-1.2918 1.7103a.416.416 0 0 0 .664.501l1.314-1.7385c.7185.4548 1.4782.7927 2.2294 1.0242.3833.7209 1.1379 1.1871 2.0202 1.1871.8907 0 1.6442-.501 2.0242-1.2072.744-.2347 1.4959-.5729 2.2073-1.0262l1.332 1.7606a.4157.4157 0 0 0 .7439-.1936.4165.4165 0 0 0-.0799-.3074l-1.3099-1.7345c.0083-.0075.0178-.0113.0261-.0188.4968-.3803.9549-.8175 1.3622-1.2939l2.155.8794a.4156.4156 0 0 0 .5412-.2276.4151.4151 0 0 0-.2273-.5432l-1.9438-.7928c.577-.8538.9697-1.8183 1.0504-2.8693.0268-.3507.0242-.6914.0079-1.0262.7905-.1572 1.5321-.4502 2.2737-.8974.0053-.0033.011-.0076.0163-.0113.8684-.5874 1.456-1.3287 1.6982-2.145.2421-.8161.125-1.697-.3501-2.497-.4849-.8163-1.2768-1.2852-2.155-1.3863a3.2175 3.2175 0 0 0-.332-.0189c-.7852-.0151-1.6231.229-2.4286.6942-.5926.342-1.1252.867-1.5433 1.4387-1.1699-.6703-2.6923-1.0476-4.5635-1.0785a15.5768 15.5768 0 0 0-.5111 0c-2.085.034-3.7537.43-5.0142 1.1449-.0033-.0038-.0045-.0114-.008-.0152-.4233-.5916-.973-1.1365-1.5835-1.489-.8055-.465-1.6434-.7083-2.4286-.6941Zm.2858.7365c.5568.042 1.1696.2358 1.7787.5875.485.28.9757.7554 1.346 1.2696a5.6875 5.6875 0 0 0-.4969.4085c-.9201.8516-1.4615 1.9597-1.668 3.2335-.6809-.1402-1.3183-.3945-1.984-.7948-.7553-.5128-1.2159-1.1225-1.4004-1.7445-.1851-.624-.1074-1.2712.2776-1.9196.3743-.63.9275-.9534 1.6118-1.0322a2.796 2.796 0 0 1 .5352-.0076Zm17.5094 0a2.797 2.797 0 0 1 .5353.0075c.6842.0786 1.2374.4021 1.6117 1.0322.385.6484.4627 1.2957.2776 1.9196-.1845.622-.645 1.2317-1.4004 1.7445-.6578.3955-1.2881.6472-1.9598.7888-.1942-1.2968-.7375-2.4338-1.666-3.302a5.5639 5.5639 0 0 0-.4709-.3923c.3645-.49.8287-.9428 1.2938-1.2113.6091-.3515 1.2219-.5454 1.7787-.5875ZM12.006 6.0036a14.832 14.832 0 0 1 .487 0c2.3901.0393 4.0848.67 5.1631 1.678 1.1501 1.0754 1.6423 2.6006 1.499 4.467-.1311 1.7079-1.2203 3.2281-2.652 4.324-.694.5313-1.4626.9354-2.2254 1.2294.0031-.0453.014-.0888.014-.1349.0029-1.1964-.9313-2.2133-2.2918-2.2133-1.3606 0-2.3222 1.0154-2.2918 2.2213.0013.0507.014.0972.0181.1471-.781-.2933-1.5696-.7013-2.2777-1.2456-1.4239-1.0945-2.4997-2.6129-2.6037-4.322-.1129-1.8567.3778-3.3382 1.5212-4.3965C7.5094 6.7 9.352 6.047 12.006 6.0036Zm-3.6419 6.8291c-.6053 0-1.0966.4903-1.0966 1.0966 0 .6063.4913 1.0986 1.0966 1.0986s1.0966-.4923 1.0966-1.0986c0-.6063-.4913-1.0966-1.0966-1.0966zm7.2819.0113c-.5998 0-1.0866.4859-1.0866 1.0866s.4868 1.0885 1.0866 1.0885c.5997 0 1.0865-.4878 1.0865-1.0885s-.4868-1.0866-1.0865-1.0866zM12 16.0835c1.0237 0 1.5654.638 1.5634 1.4829-.0018.7849-.6723 1.485-1.5634 1.485-.9167 0-1.54-.5629-1.5634-1.493-.0212-.8347.5397-1.4749 1.5634-1.4749Z"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></symbol>
<symbol id="i-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></symbol>
<symbol id="i-chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></symbol>
<symbol id="i-chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></symbol>
<symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-arrow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></symbol>
<symbol id="i-close" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M2 2l10 10M12 2L2 12"/></symbol>
<symbol id="i-check" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6l3 3 5-5"/></symbol>
<symbol id="i-comments" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></symbol>
<symbol id="i-refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></symbol>
<symbol id="i-folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M3 10h18"/></symbol>
<symbol id="i-cubes" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></symbol>
<symbol id="i-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2 0-1.5-1.5-2-1.5-3.5 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-3.6-4-6.5-9-6.5z"/><circle cx="7.5" cy="10.5" r=".8" fill="currentColor"/><circle cx="9.5" cy="6.8" r=".8" fill="currentColor"/><circle cx="14" cy="6.5" r=".8" fill="currentColor"/><circle cx="17" cy="9.5" r=".8" fill="currentColor"/></symbol>
</defs></svg>`;

export const UI = {
  ro: {
    forPeople: 'Pentru Oameni',
    menu: 'Meniu',
    home: 'Acasă',
    about: 'Despre Noi',
    projects: 'Proiecte',
    contributions: 'Contribuții',
    discussions: 'Discuții',
    heroNote: 'Tot codul este deschis. Contribuie, auditează, fork-uie. Transparența este fundația noastră.',
    philosophyLabel: 'Filozofia Noastră',
    philosophyTitle: 'Suntem Oameni, Nu Utilizatori',
    philosophyText: 'Suntem oamenii din spatele ecranului, fiecare dintre noi — nu utilizatori. Pentru că utilizator înseamnă că suntem doar un produs, o bază de date într-un sistem. Dar noi suntem oameni. Avem drepturi. Avem nevoi. Avem emoții. Avem frici. Nu suntem doar niște date. Giganții tehnologici de obicei ne numesc utilizatori, dar aici la Privon Foundation venim să rupem acest termen. Pentru noi nu există utilizatori — există oameni. De aceea în fiecare documentație, cod, design, limbă, adresare — vă spunem oameni. Pentru că asta suntem. Făcut de oameni, pentru oameni.',
    values: ['Demnitate', 'Libertate', 'Confidențialitate', 'Transparență', ' Respect', 'Încredere'],
    explore: 'Explorează CrytoTool',
    download: 'Descarcă CrytoTool',
    category: 'Categorie',
    previous: 'Categoria anterioară',
    next: 'Categoria următoare',
    goToCategory: 'Mergi la categoria',
    scrollExplore: 'Derulează pentru a explora',
  },
  en: {
    forPeople: 'For People',
    menu: 'Menu',
    home: 'Home',
    about: 'About Us',
    projects: 'Projects',
    contributions: 'Contributions',
    discussions: 'Discussions',
    heroNote: 'All code is open. Contribute, audit, fork. Transparency is our foundation.',
    philosophyLabel: 'Our Philosophy',
    philosophyTitle: 'We Are People, Not Users',
    philosophyText: 'We are the people behind the screen, every single one of us — not users. Because user means we are just a product, a database entry in a system. But we are people. We have rights. We have needs. We have emotions. We have fears. We are not just data. Tech giants usually call us users, but here at Privon Foundation we come to break that term. For us there are no users — there are people. That is why in every documentation, code, design, language, address — we call you people. Because that is what we are. Made by people, for people.',
    values: ['Dignity', 'Freedom', 'Privacy', 'Transparency', ' Respect', 'Trust'],
    explore: 'Explore CrytoTool',
    download: 'Download CrytoTool',
    category: 'Category',
    previous: 'Previous category',
    next: 'Next category',
    goToCategory: 'Go to category',
    scrollExplore: 'Scroll to explore',
  },
  es: {
    forPeople: 'Para Personas',
    menu: 'Menú',
    home: 'Inicio',
    about: 'Sobre Nosotros',
    projects: 'Proyectos',
    contributions: 'Contribuciones',
    discussions: 'Discusiones',
    heroNote: 'Todo el código es abierto. Contribuye, audita, haz fork. La transparencia es nuestra base.',
    philosophyLabel: 'Nuestra Filosofía',
    philosophyTitle: 'Somos Personas, No Usuarios',
    philosophyText: 'Somos las personas detrás de la pantalla, cada uno de nosotros — no usuarios. Porque usuario significa que somos solo un producto, una base de datos en un sistema. Pero somos personas. Tenemos derechos. Tenemos necesidades. Tenemos emociones. Tenemos miedos. No somos solo datos. Los gigantes tecnológicos suelen llamarnos usuarios, pero aquí en Privon Foundation venimos a romper ese término. Para nosotros no existen usuarios — existen personas. Por eso en cada documentación, código, diseño, idioma, forma de dirigirnos — les decimos personas. Porque eso es lo que somos. Hecho por personas, para personas.',
    values: ['Dignidad', 'Libertad', 'Privacidad', 'Transparencia', ' Respeto', 'Confianza'],
    explore: 'Explorar CrytoTool',
    download: 'Descargar CrytoTool',
    category: 'Categoría',
    previous: 'Categoría anterior',
    next: 'Categoría siguiente',
    goToCategory: 'Ir a la categoría',
    scrollExplore: 'Desplázate para explorar',
  },
};

export const META = {
  home: {
    ro: {
      title: 'Confidențialitate ca Standard',
      desc: 'Soluții de securitate cibernetică open-source, cu confidențialitatea pe primul loc. Zero colectare de date, zero urmărire, zero knowledge. Conform Protocolului 3305.',
    },
    en: {
      title: 'Privacy as Standard',
      desc: 'Open-source, privacy-first cybersecurity solutions. Zero data collection, zero tracking, zero knowledge. Protocol 3305 compliant.',
    },
    es: {
      title: 'Privacidad Como Estándar',
      desc: 'Soluciones de ciberseguridad de código abierto centradas en la privacidad. Cero recopilación de datos, cero rastreo, zero knowledge. Conforme al Protocolo 3305.',
    },
  },
  about: {
    ro: { title: 'Despre Noi', desc: 'Privon Foundation este o organizație open-source care pune Omul pe primul loc. Libertate, securitate, anonimat și transparență — pentru oameni, nu utilizatori.' },
    en: { title: 'About Us', desc: 'Privon Foundation is a privacy-first, open-source organization. We put the Human first, before profit. Freedom, security, anonymity, and transparency.' },
    es: { title: 'Sobre Nosotros', desc: 'Privon Foundation es una organización de código abierto centrada en la privacidad. Ponemos a las personas primero. Libertad, seguridad, anonimato y transparencia.' },
  },
  privacy: {
    ro: { title: 'Politica de Confidențialitate', desc: 'Privon Foundation nu colectează NICIUN FEL DE DATE. Fără urmărire, fără cookie-uri, fără colectare. Conform GDPR, LPD și Protocolului 3305.' },
    en: { title: 'Privacy Policy', desc: 'Privon Foundation collects ZERO data. No tracking, no cookies, no data collection. GDPR, Swiss nFADP and Protocol 3305 compliant.' },
    es: { title: 'Política de Privacidad', desc: 'Privon Foundation no recopila NINGÚN DATO. Sin rastreo, sin cookies, sin recopilación. Conforme al GDPR, la LPD suiza y el Protocolo 3305.' },
  },
  terms: {
    ro: { title: 'Termeni și Condiții', desc: 'Termenii și condițiile serviciilor și aplicațiilor Privon Foundation. Licență AGPL-3.0, zero colectare de date, fără garanții.' },
    en: { title: 'Terms and Conditions', desc: 'Terms and conditions for Privon Foundation services and applications. AGPL-3.0 licensed, zero data collection, no warranty.' },
    es: { title: 'Términos y Condiciones', desc: 'Términos y condiciones de los servicios y aplicaciones de Privon Foundation. Licencia AGPL-3.0, cero recopilación de datos, sin garantía.' },
  },
  ethics: {
    ro: { title: 'Cod de Etică', desc: 'Codul de etică Privon Foundation — instrumente de securitate și confidențialitate pentru a proteja oamenii, nu pentru a face rău.' },
    en: { title: 'Code of Ethics', desc: 'Privon Foundation Code of Ethics — security and privacy tools to protect people, not to cause harm. Ethical hacking, responsible disclosure.' },
    es: { title: 'Código de Ética', desc: 'Código de ética de Privon Foundation — herramientas de seguridad y privacidad para proteger a las personas, no para causar daño.' },
  },
  contributions: {
    ro: { title: 'Contribuții', desc: 'Contribuie la proiectele open-source Privon Foundation. Ajută la construirea unor instrumente criptate, cu confidențialitatea pe primul loc.' },
    en: { title: 'Contributions', desc: 'Contribute to Privon Foundation open-source projects. Help build privacy-first, encrypted tools for everyone. CrytoTool contributions welcome.' },
    es: { title: 'Contribuciones', desc: 'Contribuye a los proyectos de código abierto de Privon Foundation. Ayuda a construir herramientas cifradas centradas en la privacidad.' },
  },
  community: {
    ro: { title: 'Comunitate', desc: 'Alătură-te comunității Privon Foundation pe Matrix, Mastodon, Pixelfed, Lemmy și GitHub. Confidențialitate, open-source, pentru oameni.' },
    en: { title: 'Community', desc: 'Join the Privon Foundation community on Matrix, Mastodon, Pixelfed, Lemmy, and GitHub. Privacy-first, open-source, for people.' },
    es: { title: 'Comunidad', desc: 'Únete a la comunidad de Privon Foundation en Matrix, Mastodon, Pixelfed, Lemmy y GitHub. Privacidad, código abierto, para personas.' },
  },
  crytotool: {
    ro: { title: 'CrytoTool — Seif Digital', desc: 'CrytoTool — seif digital all-in-one. Manager de fișiere criptat, galerie, player muzical și vizualizator de documente. 100% client-side, zero urmărire.' },
    en: { title: 'CrytoTool — Digital Vault', desc: 'CrytoTool — all-in-one digital vault. Encrypted file manager, gallery, music player, and document viewer. 100% client-side, zero tracking.' },
    es: { title: 'CrytoTool — Bóveda Digital', desc: 'CrytoTool — bóveda digital todo en uno. Gestor de archivos cifrado, galería, reproductor de música y visor de documentos. 100% client-side.' },
  },
};

export function jsonLd(lang, route, title, description) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Privon Foundation',
    url: SITE + '/',
    logo: `${SITE}/icon-512.png`,
    description: META.home.en.desc,
    foundingDate: '2026',
    legalName: 'Privon Foundation',
    sameAs: [
      'https://github.com/Privonfundation',
      'https://matrix.to/#/#privon:matrix.org',
      'https://mastodon.social/@PrivonFoundation',
      'https://pixelfed.social/i/web/profile/PrivonFoundation',
      'https://lemmy.world/c/privon',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'privon.dev@tuta.io',
      contactType: 'customer support',
    },
  };
  const page = {
    '@context': 'https://schema.org',
    '@type': route === 'home' ? 'WebSite' : 'WebPage',
    name: title,
    url: SITE + pathFor(lang, ROUTES[route]),
    description,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: 'Privon Foundation', url: SITE + '/' },
  };
  return `<script type="application/ld+json">${JSON.stringify([org, page])}</script>`;
}

export function head({ lang, route, title, description }) {
  const paths = Object.fromEntries(LANGS.map((l) => [l, pathFor(l, ROUTES[route])]));
  const canonical = SITE + paths[lang];
  const fullTitle = `${title} | Privon Foundation`;
  const alts = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE + paths[l]}">`).join('');
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="dark">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="${canonical}">
${alts}
<link rel="alternate" hreflang="x-default" href="${SITE + paths.en}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:alt" content="Privon Foundation — privacy-first open-source software">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Privon Foundation">
<meta property="og:locale" content="${lang === 'ro' ? 'ro_RO' : lang === 'es' ? 'es_ES' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE}/og.jpg">
<meta name="twitter:image:alt" content="Privon Foundation — privacy-first open-source software">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/fragment-mono-latin.woff2" as="font" type="font/woff2" crossorigin>
${route === 'home' ? '<link rel="preload" as="image" href="/hero-silk-1400.avif" type="image/avif" fetchpriority="high">' : ''}
<style>${CSS}</style>
${jsonLd(lang, route, title, description)}
</head>`;
}

export function brandLogo(classes = '') {
  return `<span class="brand__logo${classes ? ' ' + classes : ''}"><img src="/privon-logo-192.webp" width="192" height="192" alt="" decoding="async"></span>`;
}

export function logoImg(cls = '', w = 192, alt = '', eager = false) {
  return `<img src="/privon-logo-192.webp" width="${w}" height="${w}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''} decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>`;
}

const SOCIALS = [
  { name: 'GitHub', icon: 'github', href: 'https://github.com/Privonfundation' },
  { name: 'Matrix', icon: 'matrix', href: 'https://matrix.to/#/#privon:matrix.org' },
  { name: 'Mastodon', icon: 'mastodon', href: 'https://mastodon.social/@PrivonFoundation' },
  { name: 'Pixelfed', icon: 'pixelfed', href: 'https://pixelfed.social/i/web/profile/PrivonFoundation' },
  { name: 'Lemmy', icon: 'lemmy', href: 'https://lemmy.world/c/privon' },
];

export function nav(lang, route, { scroll = false } = {}) {
  const u = UI[lang];
  const t = (routeKey) => pathFor(lang, ROUTES[routeKey]);
  const langItems = LANGS.map((l) => `<a class="lang-pop__item" href="${pathFor(l, ROUTES[route])}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}><span class="lang-pop__name">${LANG_LABEL[l]}</span><span class="lang-pop__dot"></span></a>`).join('');
  const menuSections = [
    {
      title: 'Pages',
      items: [
        { id: t('community'), label: 'Community', num: '01' },
        { id: t('contributions'), label: 'Contributions', num: '02' },
        { id: t('about'), label: u.about, num: '03' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { id: t('privacy'), label: 'Privacy', num: '04' },
        { id: t('terms'), label: 'Terms', num: '05' },
        { id: t('ethics'), label: 'Ethics', num: '06' },
      ],
    },
  ];
  const menu = menuSections.map((section) => `<div class="menu-section"><div class="menu-section__head">${section.title}</div>${section.items.map((item) => `<a class="menu-item" href="${item.id}"><span class="menu-item__corner"><i></i><i></i></span><span class="menu-item__num">${item.num}</span><span class="menu-item__line"></span><span class="menu-item__label">${esc(item.label)}</span><span class="menu-item__arrow">${icon('arrow-right')}</span></a>`).join('')}</div>`).join('');
  return `<nav class="nav${scroll ? ' nav--scroll' : ''}" aria-label="Principal">
<div class="nav__inner">
  <a class="brand" href="${pathFor(lang, ROUTES.home)}" aria-label="Privon Foundation — ${esc(u.home)}">
    ${brandLogo()}
    <span class="brand__text"><span class="brand__name">Privon Foundation</span><span class="brand__tag"><i class="brand__dot"></i><span class="brand__tagtext">${esc(u.forPeople)}</span></span></span>
  </a>
  <div class="nav__actions">
    <button type="button" class="nav-pill nav-pill--lang" popovertarget="lang-menu" aria-label="${esc(lang === 'ro' ? 'Schimbă limba' : lang === 'es' ? 'Cambiar idioma' : 'Change language')}">
      ${icon('globe', 'nav-pill__icon')}
      <span class="nav-pill__label">${LANG_LABEL[lang].toUpperCase()}</span>
      ${icon('chevron-down', 'nav-pill__chev')}
    </button>
    <button type="button" class="menu-trigger" popovertarget="site-menu" aria-label="${esc(u.menu)}">
      <span class="menu-trigger__label">${esc(u.menu)}</span>
      <span class="menu-trigger__circle"><span class="menu-trigger__bars"><span></span><span></span></span></span>
    </button>
  </div>
</div>
</nav>
<div id="lang-menu" class="lang-pop" popover aria-label="${esc(lang === 'ro' ? 'Limbi' : lang === 'es' ? 'Idiomas' : 'Languages')}"><div class="lang-pop__panel"><div class="lang-pop__list">${langItems}</div></div></div>
<div id="site-menu" class="menu-overlay" popover aria-label="${esc(u.menu)}">
  <button type="button" class="menu-overlay__dismiss" popovertarget="site-menu" popovertargetaction="hide" aria-label="Close menu"></button>
  <div class="menu-overlay__grid" aria-hidden="true"></div>
  <div class="menu-overlay__guide menu-overlay__guide--left" aria-hidden="true"></div>
  <div class="menu-overlay__guide menu-overlay__guide--right" aria-hidden="true"></div>
  <div class="menu-overlay__scan" aria-hidden="true"></div>
  <button type="button" class="menu-overlay__close" popovertarget="site-menu" popovertargetaction="hide" aria-label="Close menu">${icon('close')}</button>
  <div class="menu-overlay__header"><span>Navigation</span></div>
  <div class="menu-sections">${menu}</div>
  <div class="menu-overlay__footer">
    <div class="rule"></div>
    <div class="menu-socials">${SOCIALS.map((s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" title="${s.name}" aria-label="${s.name}">${icon(s.icon)}</a>`).join('')}</div>
    <div class="rule rule--sm"></div>
    <div class="menu-overlay__brand">${logoImg('', 96)}<span>Privon Foundation</span></div>
  </div>
</div>`;
}

export function richFooter(lang) {
  const t = (routeKey) => pathFor(lang, ROUTES[routeKey]);
  const tr = (ro, en, es) => lang === 'ro' ? ro : lang === 'es' ? es : en;
  return `<footer class="footer">
<div class="footer__inner">
  <div class="footer__top">
    <div>
      <div class="footer__brand">
        ${logoImg('', 192)}
        <div><span class="footer__brand-name">Privon Foundation</span><span class="footer__brand-tag">For People</span></div>
      </div>
      <p class="footer__mission">${esc(tr('Suntem aici să facem intimitatea standard.', 'We are here to make privacy the standard.', 'Estamos aquí para hacer de la privacidad un estándar.'))}</p>
    </div>
    <div class="footer__cols">
      <div class="footer__col">
        <span class="footer__col-title">Community</span>
        <a href="https://github.com/Privonfundation" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://matrix.to/#/#privon:matrix.org" target="_blank" rel="noopener noreferrer">Matrix</a>
        <a href="https://mastodon.social/@PrivonFoundation" target="_blank" rel="noopener noreferrer">Mastodon</a>
        <a href="https://pixelfed.social/i/web/profile/PrivonFoundation" target="_blank" rel="noopener noreferrer">Pixelfed</a>
        <a href="https://lemmy.world/c/privon" target="_blank" rel="noopener noreferrer">Lemmy</a>
      </div>
      <div class="footer__col">
        <span class="footer__col-title">Pages</span>
        <a href="${t('community')}">Community</a>
        <a href="${t('contributions')}">Contributions</a>
        <a href="${t('about')}">About</a>
      </div>
      <div class="footer__col">
        <span class="footer__col-title">Legal</span>
        <a href="${t('privacy')}">Privacy</a>
        <a href="${t('terms')}">Terms</a>
        <a href="${t('ethics')}">Ethics</a>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <span>©2026 PRIVON FOUNDATION — AGPL-3.0</span>
    <div class="right"><span>v2.4.0</span><span class="soft">All projects &amp; this website are AGPL-3.0</span></div>
  </div>
</div>
</footer>`;
}

export function aboutFooter(lang) {
  return `<footer class="footer footer-min footer-about">
<div class="footer-min__inner">
  <div class="about-socials">${SOCIALS.map((s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" title="${s.name}" aria-label="${s.name}">${icon(s.icon)}</a>`).join('')}</div>
  <div class="footer-about__row">
    <div class="footer-about__brand">${logoImg('', 192)}<div><div class="name">Privon Foundation</div><div class="tag">For People</div></div></div>
    <div class="footer-about__legal"><p>©2026 PRIVON FOUNDATION — AGPL-3.0</p><p>All projects &amp; this website are AGPL-3.0</p></div>
  </div>
</div>
</footer>`;
}

export function minimalFooter(lang, links = true) {
  const t = (routeKey) => pathFor(lang, ROUTES[routeKey]);
  const nav = links ? `<div class="footer-min__links"><a href="${t('privacy')}">Privacy</a><a href="${t('terms')}">Terms</a><a href="${t('ethics')}">Ethics</a></div>` : '';
  return `<footer class="footer-min"><div class="footer-min__inner">
  ${nav}
  <span class="footer-min__copy">©2026 PRIVON FOUNDATION — AGPL-3.0</span>
</div></footer>`;
}

export const sprite = SPRITE;
export const socials = SOCIALS;
