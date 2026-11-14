import {
  esc, icon, pathFor, ROUTES, UI, nav, richFooter, aboutFooter, minimalFooter,
} from './common.mjs';

const tr = (lang, ro, en, es) => lang === 'ro' ? ro : lang === 'es' ? es : en;

function mockup(name, cls, sizes, alt, eager = false) {
  return `<div class="mockup ${cls}">
  <picture>
    <source type="image/avif" srcset="/assets/${name}-640.avif 640w, /assets/${name}-1200.avif 1200w" sizes="${sizes}">
    <source type="image/webp" srcset="/assets/${name}-640.webp 640w, /assets/${name}-1200.webp 1200w" sizes="${sizes}">
    <img src="/assets/${name}-1200.webp" srcset="/assets/${name}-640.webp 640w, /assets/${name}-1200.webp 1200w" sizes="${sizes}" width="1200" height="960" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">
  </picture>
  <div class="mockup__overlay" aria-hidden="true"></div>
</div>`;
}

export function aboutPage(C, lang) {
  const c = C.about.ABOUT[lang];
  const u = UI[lang];
  const lines = c.heroTitle.split('\n');
  return `${nav(lang, 'about')}
<main id="main" class="page page--about">
  <div class="page__decor" aria-hidden="true"><div class="dots"></div><div class="glow glow--1"></div><div class="glow glow--2"></div><div class="topline"></div></div>
  <section class="subhero subhero--full subhero--center" aria-labelledby="about-title">
    <div class="subhero__inner">
      <div class="subhero__tag">${esc(c.heroTag)}</div>
      <h1 class="subhero__title" id="about-title">${lines.map((l, i) => `<span${i ? ' class="dim"' : ''}>${esc(l)}</span>`).join('')}</h1>
      <p class="subhero__sub">${esc(c.heroSub)}</p>
      <div class="subhero__scroll"><i aria-hidden="true"></i><span>${esc(u.scrollExplore)}</span></div>
    </div>
  </section>

  <section class="page-section page-section--tight" aria-label="${esc(lang === 'ro' ? 'Cifre' : lang === 'es' ? 'Cifras' : 'Stats')}">
    <div class="about-stats"><div class="stats-grid">${c.stats.map((s) => `<div class="stat"><div class="stat__value">${esc(s.nr)}</div><div class="stat__label">${esc(s.label)}</div><div class="stat__corner" aria-hidden="true"><i></i><i></i></div></div>`).join('')}</div></div>
  </section>

  <section class="page-section">
    <div class="about-stats">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.whoWeAre)}</h2><span class="section-label__rule"></span></div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-card__grid" aria-hidden="true"></div>
          <div class="about-card__text">${c.whoDesc.split('\n\n').map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
        </div>
        <div class="about-values">${c.values.map((v) => `<span>${esc(v)}</span>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="about-stats">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.whyTitle)}</h2><span class="section-label__rule"></span></div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-card__grid" aria-hidden="true"></div>
          <div class="about-card__text">${c.whyDesc.split('\n\n').map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
        </div>
        <div class="about-card">
          <div class="card__glow" aria-hidden="true"></div>
          <div class="about-card__inner"><div class="card__kicker">${esc(c.verifyTitle.toUpperCase())}</div><p class="card__text card__text--bright">${esc(c.verifyDesc)}</p></div>
          <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="about-stats">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.protocolLabel)}</h2><span class="section-label__rule"></span></div>
      <div class="about-card">
        <div class="about-card__grid" aria-hidden="true"></div>
        <div class="card__kicker protocol-card__kicker">${esc(c.protocolNote)}</div>
        <div class="protocol-grid">${c.articles.map((a) => `<article class="protocol-item"><div class="protocol-item__top"><span class="protocol-item__id">${esc(a.id)}</span><span class="protocol-item__pilar">${esc(a.pilar)}</span></div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p></article>`).join('')}</div>
        <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="about-stats">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.founderTitle)}</h2><span class="section-label__rule"></span></div>
      <div class="about-card">
        <div class="about-card__grid" aria-hidden="true"></div>
        <div class="founder">
          <div class="founder__img"><img src="/wtshex-320.webp" width="320" height="320" alt="WTSHEX" loading="lazy" decoding="async"></div>
          <div class="founder__body"><h3 class="founder__name">${esc(c.founderName)}</h3><div class="founder__rule"></div><div class="founder__story">${esc(c.founderStory)}</div></div>
        </div>
        <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
      </div>
    </div>
  </section>
</main>
${aboutFooter(lang)}`;
}

export function communityPage(C, lang) {
  const c = C.community.COMMUNITY[lang];
  const lines = c.heroTitle.split('\n');
  return `${nav(lang, 'community')}
<main id="main" class="page page--soft">
  <section class="subhero subhero--center" aria-labelledby="community-title">
    <div class="page__decor" aria-hidden="true"><div class="dots"></div><div class="glow glow--1"></div></div>
    <div class="subhero__inner">
      <div class="subhero__tag">Community</div>
      <h1 class="subhero__title" id="community-title">${lines.map((l, i) => `<span${i ? ' class="dim"' : ''}>${esc(l)}</span>`).join('')}</h1>
      <p class="subhero__sub">${esc(c.heroSub)}</p>
    </div>
  </section>

  <section class="page-section">
    <div class="container container--wide">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.protoLabel)}</h2><span class="section-label__rule"></span></div>
      <p class="arch__desc">${esc(c.protoDesc)}</p>
      <div class="network-grid">${c.networks.map((n) => `<a class="network-card" href="${n.url}" target="_blank" rel="noopener noreferrer">
        <div class="network-card__grid" aria-hidden="true"></div>
        <div class="network-card__body">
          <div class="network-card__top"><div class="network-card__name"><span class="network-card__icon">${icon(n.name.toLowerCase())}</span><h3>${esc(n.name)}</h3></div><span class="network-card__protocol">${esc(n.protocol)}</span></div>
          <p class="network-card__desc">${esc(n.desc)}</p>
          <div class="network-card__handle">${esc(n.handle)}</div>
        </div>
        <div class="network-card__corner" aria-hidden="true"><i></i><i></i></div>
      </a>`).join('')}</div>
    </div>
  </section>

  <section class="page-section cta-block page-section--alt">
    <div class="cta-block__glow" aria-hidden="true"></div>
    <div class="cta-block__inner">
      <div class="section-label section-label--center"><span class="section-label__line"></span><span class="section-label__text">Open Source</span><span class="section-label__line"></span></div>
      <h2 class="cta-block__title">${icon('github')} ${esc(c.githubTitle)}</h2>
      <p class="cta-block__desc">${esc(c.githubDesc)}</p>
      <div class="cta-block__actions"><a class="btn btn--primary" href="${c.githubUrl}" target="_blank" rel="noopener noreferrer">${icon('github')} View Privon Foundation on GitHub</a></div>
    </div>
  </section>

  <section class="page-section cta-block">
    <div class="cta-block__glow" aria-hidden="true"></div>
    <div class="cta-block__inner">
      <div class="section-label section-label--center"><span class="section-label__line"></span><span class="section-label__text">${esc(tr(lang, 'Discuții', 'Discussions', 'Discusiones'))}</span><span class="section-label__line"></span></div>
      <h2 class="cta-block__title">${icon('comments')} ${esc(c.discussionsTitle)}</h2>
      <p class="cta-block__desc">${esc(c.discussionsDesc)}</p>
      <div class="cta-block__actions"><a class="btn btn--outline" href="${c.discussionsUrl}" target="_blank" rel="noopener noreferrer">${icon('comments')} ${esc(tr(lang, 'Participă în Discuții', 'Join GitHub Discussions', 'Participar en Discusiones'))}</a></div>
    </div>
  </section>
</main>
${minimalFooter(lang, false)}`;
}

export function contributionsPage(C, lang) {
  const c = C.contributions.CONTRIBUTIONS[lang];
  const lines = c.heroTitle.split('\n');
  return `${nav(lang, 'contributions')}
<main id="main" class="page page--soft">
  <section class="subhero subhero--center" aria-labelledby="contrib-title">
    <div class="page__decor" aria-hidden="true"><div class="dots"></div><div class="glow glow--1"></div></div>
    <div class="subhero__inner">
      <div class="subhero__tag">Community</div>
      <h1 class="subhero__title" id="contrib-title">${lines.map((l, i) => `<span${i ? ' class="dim"' : ''}>${esc(l)}</span>`).join('')}</h1>
      <p class="subhero__sub">${esc(c.heroSub)}</p>
    </div>
  </section>

  <section class="page-section">
    <div class="container container--wide">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.projectsTitle)}</h2><span class="section-label__rule"></span></div>
      <div class="project-list">${c.projects.map((p) => `<article class="project-card">
        <div class="project-card__grid" aria-hidden="true"></div>
        <div class="project-card__body">
          <div class="project-card__top"><span class="project-card__id">${esc(p.id)}</span><span class="project-card__status">${esc(p.status)}</span></div>
          <div class="project-card__title"><img src="/crytotool-logo-192.webp" width="192" height="192" alt="" loading="lazy" decoding="async"><h3>${esc(p.title)}</h3></div>
          <div class="project-card__rule"></div>
          <p class="project-card__desc">${esc(p.desc)}</p>
          <div class="project-card__needs"><span>Needs</span><span>${esc(p.needs)}</span></div>
          <a class="project-card__cta" href="https://github.com/Privonfundation/CrytoTool/blob/main/docs/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">${icon('github')} Contribute to CrytoTool</a>
        </div>
        <div class="card__corner" aria-hidden="true"><i></i><i></i></div>
      </article>`).join('')}</div>
    </div>
  </section>

  <section class="page-section page-section--alt">
    <div class="container container--wide">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(c.areasTitle)}</h2><span class="section-label__rule"></span></div>
      <div class="areas-grid">${c.areas.map((a, i) => `<article class="area-card"><span class="area-card__num">0${i + 1}</span><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p><div class="area-card__corner" aria-hidden="true"><i></i><i></i></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="page-section cta-block">
    <div class="cta-block__glow" aria-hidden="true"></div>
    <div class="cta-block__inner">
      <span class="cta-kicker">Protocol 3305</span>
      <h2 class="cta-block__title">${esc(c.ctaTitle)}</h2>
      <p class="cta-block__desc">${esc(c.ctaDesc)}</p>
      <div class="cta-block__actions">
        <a class="btn btn--primary" href="https://github.com/Privonfundation" target="_blank" rel="noopener noreferrer">${icon('github')} View Privon Foundation on GitHub</a>
        <a class="btn btn--outline" href="https://matrix.to/#/#privon:matrix.org" target="_blank" rel="noopener noreferrer">${icon('matrix')} Join on Matrix</a>
      </div>
    </div>
  </section>
</main>
${minimalFooter(lang, false)}`;
}

export function crytoPage(C, lang) {
  const t = C.crytotool.LANG[lang];
  const u = UI[lang];
  const mockupAlts = [
    'CrytoTool dashboard',
    'CrytoTool settings',
    'CrytoTool animation',
    'CrytoTool encryption',
  ];
  const featureIcons = ['shield', 'refresh', 'folder', 'cubes', 'palette'];
  const tabs = t.categories.map((cat, i) => {
    const n = i + 1;
    return { cat, n, prev: i === 0 ? t.categories.length : i, next: i === t.categories.length - 1 ? 1 : i + 2 };
  });
  const inputs = tabs.map(({ n }, i) => `<input class="explorer__inputs" type="radio" name="feature-tabs" id="f${n}"${i === 0 ? ' checked' : ''} aria-label="${esc(`${u.goToCategory} ${n}: ${t.categories[i].title}`)}">`).join('');
  const dots = tabs.map(({ n, cat }) => `<label for="f${n}" aria-label="${esc(`${u.goToCategory} ${n}: ${cat.title}`)}"></label>`).join('');
  const panels = tabs.map(({ cat, n, prev, next }) => `<article class="explorer__panel" id="panel-${n}">
    <div class="explorer__panel-grid" aria-hidden="true"></div>
    <div class="explorer__panel-num" aria-hidden="true">0${n}</div>
    <div class="explorer__panel-inner">
      <div class="explorer__icon"><div class="explorer__icon-box">${icon(featureIcons[n - 1])}</div><div class="explorer__icon-num">0${n}</div></div>
      <div class="explorer__content">
        <div class="explorer__kicker">${esc(u.category)}</div>
        <h3 class="explorer__title">${esc(cat.title)}</h3>
        <div class="explorer__items">${cat.items.map((item) => `<div class="explorer__item"><div><div class="explorer__item-title">${esc(item.title)}</div><p class="explorer__item-desc">${esc(item.desc)}</p></div></div>`).join('')}</div>
      </div>
    </div>
    <label class="explorer__nav explorer__nav--prev" for="f${prev}" aria-label="${esc(u.previous)}">${icon('chevron-left')}</label>
    <label class="explorer__nav explorer__nav--next" for="f${next}" aria-label="${esc(u.next)}">${icon('chevron-right')}</label>
  </article>`).join('');

  const langLinks = ['ro', 'en', 'es'].map((l) => `<a href="${pathFor(l, ROUTES.crytotool)}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${l}</a>`).join('');

  return `<nav class="cryto-nav" aria-label="CrytoTool">
  <a class="cryto-nav__brand" href="${pathFor(lang, ROUTES.home)}"><img src="/crytotool-logo-192.webp" width="192" height="192" alt="" decoding="async"><span>Cryto<span class="green">Tool</span></span></a>
  <div class="cryto-nav__langs" aria-label="${esc(lang === 'ro' ? 'Limbi' : lang === 'es' ? 'Idiomas' : 'Languages')}">${langLinks}</div>
</nav>
<main id="main" class="page page--cryto">
  <section class="cryto-hero" aria-labelledby="cryto-title">
    <div class="cryto-hero__decor" aria-hidden="true"><div class="orb"></div><div class="dots"></div><div class="bottom"></div></div>
    <div class="cryto-hero__inner">
      <div class="cryto-hero__head">
        <div class="cryto-hero__logo"><img src="/crytotool-logo-448.webp" width="448" height="448" alt="CrytoTool" fetchpriority="high" decoding="async"></div>
        <h1 class="cryto-hero__title" id="cryto-title"><span class="grad">Cryto</span><span class="green">Tool</span></h1>
        <p class="cryto-hero__tag">${esc(t.heroTag)}</p>
        <p class="cryto-hero__desc">${esc(t.heroDesc)}</p>
        <p class="cryto-hero__note">${esc(tr(lang, 'CrytoTool este compatibil cu Protocol-3305 și respectă toate principiile sale.', 'CrytoTool is compliant with Protocol-3305 and respects all its principles.', 'CrytoTool es compatible con Protocol-3305 y respeta todos sus principios.'))} <a href="https://github.com/Privonfundation/protocol-3305" target="_blank" rel="noopener noreferrer">Protocol-3305</a></p>
      </div>
      <div class="mockups">
        ${mockup('dashboard', 'mockup--7', '(min-width: 1152px) 660px, (min-width: 768px) 58vw, 85vw', mockupAlts[0], true)}
        ${mockup('settings', 'mockup--5', '(min-width: 1152px) 460px, (min-width: 768px) 40vw, 85vw', mockupAlts[1])}
        ${mockup('animation', 'mockup--5', '(min-width: 1152px) 460px, (min-width: 768px) 40vw, 85vw', mockupAlts[2])}
        ${mockup('encryption', 'mockup--7', '(min-width: 1152px) 660px, (min-width: 768px) 58vw, 85vw', mockupAlts[3])}
      </div>
      <div class="mockups-mobile">
        <div class="mockups-mobile__track no-scrollbar">${['dashboard', 'settings', 'animation', 'encryption'].map((n) => `<div>${mockup(n, '', '85vw', mockupAlts[['dashboard', 'settings', 'animation', 'encryption'].indexOf(n)])}</div>`).join('')}</div>
        <div class="mockups-mobile__dots" aria-hidden="true">${['dashboard', 'settings', 'animation', 'encryption'].map(() => '<i></i>').join('')}</div>
      </div>
      <div class="cryto-hero__actions">
        <a class="btn btn--primary" href="https://github.com/Privonfundation/CrytoTool/releases" target="_blank" rel="noopener noreferrer">${esc(u.download)}</a>
        <a class="btn btn--outline" href="https://github.com/Privonfundation/CrytoTool" target="_blank" rel="noopener noreferrer">${icon('github')} GitHub</a>
      </div>
    </div>
  </section>

  <section class="cryto-stats" aria-label="${esc(lang === 'ro' ? 'Cifre' : lang === 'es' ? 'Cifras' : 'Stats')}">
    <div class="cryto-stats__grid">${t.stats.map((s) => `<div class="cryto-stat"><div class="cryto-stat__value">${esc(s.value)}</div><div class="cryto-stat__label">${esc(s.label)}</div></div>`).join('')}</div>
  </section>

  <section class="page-section">
    <div class="container container--text">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(t.featuresLabel)}</h2><span class="section-label__rule"></span></div>
      <div class="explorer">
        ${inputs}
        <div class="explorer__dots">${dots}</div>
        <div class="explorer__panels">${panels}</div>
        <div class="explorer__hint" aria-hidden="true">${t.categories[0].items.map(() => '<i></i>').join('')}</div>
      </div>
    </div>
  </section>

  <section class="cryto-download">
    <div class="cryto-download__glow" aria-hidden="true"></div>
    <div class="cryto-download__inner">
      <div class="cryto-download__rule"><span>${esc(tr(lang, 'Descărcare', 'Download', 'Descarga'))}</span></div>
      <h2>${esc(t.downloadTitle)}</h2>
      <p>${esc(t.downloadDesc)}</p>
      <div class="cryto-download__buttons">${t.downloadBtns.map((b) => `<a href="https://github.com/Privonfundation/CrytoTool/releases" target="_blank" rel="noopener noreferrer">${esc(b)}</a>`).join('')}</div>
      <div class="cryto-download__github"><a href="https://github.com/Privonfundation/CrytoTool" target="_blank" rel="noopener noreferrer">${icon('github')} ${esc(t.githubBtn)}</a></div>
    </div>
  </section>

  <section class="arch">
    <div class="arch__inner">
      <div class="section-label"><span class="section-label__line"></span><h2 class="section-label__text">${esc(t.archTitle)}</h2><span class="section-label__rule"></span></div>
      <p class="arch__desc">${esc(t.archDesc)}</p>
      <div class="arch__layers">${t.layers.map((l) => `<div class="arch__layer"><div class="arch__layer-grid" aria-hidden="true"></div><div class="arch__layer-inner"><div class="arch__layer-name"><span>${esc(l.layer)}</span></div><div class="arch__layer-what"><span>${esc(l.what)}</span></div><div class="arch__layer-key"><span>${esc(l.key)}</span></div></div></div>`).join('')}</div>
    </div>
  </section>
</main>
${minimalFooter(lang, true)}`;
}

function legalShell(lang, route, title, updated, body) {
  return `${nav(lang, route)}
<main id="main" class="page page--soft">
  <div class="legal">
    <header class="legal__head"><span class="legal__updated">${esc(updated)}</span><h1 class="legal__title">${esc(title)}</h1></header>
    ${body}
    <div class="legal__foot"><span>©2026 PRIVON FOUNDATION — AGPL-3.0</span></div>
  </div>
</main>`;
}

export function privacyPage(C, lang) {
  const p = C.privacy.PRIVACY[lang];
  const body = `
  <div class="legal__intro"><h2>${esc(p.summary)}</h2><p>${esc(p.summaryDesc)}</p></div>
  <div class="legal__protocol"><p>${esc(p.protocolDesc)}</p></div>
  <section class="legal__section"><h2>${esc(p.noData)}</h2><div class="legal__list-grid">${p.noDataList.map((item) => `<div class="legal__list-item">${icon('check')}<span>${esc(item)}</span></div>`).join('')}</div></section>
  <div class="legal__card"><h2>${esc(p.impossibility)}</h2><p>${esc(p.impossibilityDesc)}</p></div>
  <section class="legal__section"><h2>${esc(p.legal)}</h2><div class="legal__legal-cards">
    <div class="legal__legal-card"><div class="legal__legal-card__head"><span>EU</span><h3>${esc(p.legalEu)}</h3></div><p>${esc(p.legalEuDesc)}</p></div>
    <div class="legal__legal-card"><div class="legal__legal-card__head"><span>CH</span><h3>${esc(p.legalCh)}</h3></div><p>${esc(p.legalChDesc)}</p></div>
  </div></section>
  <section class="legal__section"><h2>${esc(p.rightsTitle)}</h2><p>${esc(p.rightsDesc)}</p><div class="legal__rights">${p.rightsList.map((right, i) => `<div class="legal__right"><span>0${i + 1}</span><span>${esc(right)}</span></div>`).join('')}</div></section>
  <div class="legal__card"><h2>${esc(p.thirdParty)}</h2><p>${esc(p.thirdPartyDesc)}</p></div>
  <div class="legal__card"><h2>${esc(p.updates)}</h2><p>${esc(p.updatesDesc)}</p></div>
  <div class="legal__card"><h2>${esc(p.contact)}</h2><p>${esc(p.contactDesc)}</p></div>`;
  return legalShell(lang, 'privacy', p.title, p.lastUpdated, body);
}

export function termsPage(C, lang) {
  const t = C.terms.TERMS[lang];
  const body = `
  <div class="legal__intro"><p>${esc(t.intro)}</p></div>
  <section class="legal__section"><h2>${esc(t.acceptance)}</h2><p>${esc(t.acceptanceDesc)}</p></section>
  <section class="legal__section"><h2>${esc(t.services)}</h2><p>${esc(t.servicesDesc)}</p></section>
  <div class="legal__card"><h2>${esc(t.noWarranty)}</h2><p>${esc(t.noWarrantyDesc)}</p></div>
  <div class="legal__card"><h2>${esc(t.noData)}</h2><p>${esc(t.noDataDesc)}</p></div>
  <section class="legal__section"><h2>${esc(t.intellectual)}</h2><p>${esc(t.intellectualDesc)}</p>
    <div class="legal__legal-cards"><div class="legal__legal-card"><div class="legal__legal-card__head"><span>AGPL-3.0</span><h3>${esc(t.license)}</h3></div><p>${esc(t.licenseDesc)}</p></div></div>
  </section>
  <div class="legal__card"><h2>${esc(t.liability)}</h2><p>${esc(t.liabilityDesc)}</p></div>
  <section class="legal__section"><h2>${esc(t.changes)}</h2><p>${esc(t.changesDesc)}</p></section>
  <section class="legal__section"><h2>${esc(t.governing)}</h2><p>${esc(t.governingDesc)}</p></section>
  <div class="legal__card"><h2>${esc(t.contact)}</h2><p>${esc(t.contactDesc)}</p></div>`;
  return legalShell(lang, 'terms', t.title, t.lastUpdated, body);
}

export function ethicsPage(C, lang) {
  const e = C.ethics.ETHICS[lang];
  const body = `
  <div class="legal__intro"><p>${esc(e.intro)}</p></div>
  <section class="legal__section"><h2>${esc(e.purpose)}</h2><p>${esc(e.purposeDesc)}</p></section>
  <div class="legal__card"><h2>${esc(e.responsibleUse)}</h2><div class="pre">${esc(e.responsibleUseDesc)}</div></div>
  <div class="legal__card"><h2>${esc(e.notResponsible)}</h2><p>${esc(e.notResponsibleDesc)}</p></div>
  <div class="legal__card"><h2>${esc(e.legal)}</h2><div class="pre">${esc(e.legalDesc)}</div></div>
  <section class="legal__section"><h2>${esc(e.ethicalPrinciple)}</h2><p>${esc(e.ethicalPrincipleDesc)}</p></section>
  <div class="legal__card"><h2>${esc(e.contact)}</h2><p>${esc(e.contactDesc)}</p></div>`;
  return legalShell(lang, 'ethics', e.title, e.lastUpdated, body);
}

export function notFoundPage(lang) {
  return `<main id="main" class="page page--soft">
  <section class="notfound">
    <div><div class="notfound__code" aria-hidden="true">404</div><h1>${esc(tr(lang, 'Pagina nu există', 'Page not found', 'Página no encontrada'))}</h1><p>${esc(tr(lang, 'Linkul este rupt sau pagina a fost mutată.', 'The link is broken or the page has moved.', 'El enlace está roto o la página se ha movido.'))}</p><a class="btn btn--primary" href="${pathFor(lang, ROUTES.home)}">${esc(tr(lang, 'Înapoi acasă', 'Back home', 'Volver al inicio'))}</a></div>
  </section>
</main>${minimalFooter(lang, true)}`;
}
