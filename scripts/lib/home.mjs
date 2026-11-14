import {
  esc, icon, pathFor, ROUTES, UI, richFooter, nav,
} from './common.mjs';

const articleCard = (a) => `<article class="article-card">
  <div class="article-card__grid" aria-hidden="true"></div>
  <div class="article-card__body">
    <div class="article-card__top"><span class="article-card__id">${esc(a.id)}</span><span class="article-card__pilar">${esc(a.pilar)}</span></div>
    <h3>${esc(a.title)}</h3>
    <p>${esc(a.desc)}</p>
    <div class="article-card__status"><i></i><span>${esc(a.status)}</span></div>
  </div>
  <div class="article-card__corner" aria-hidden="true"><i></i><i></i></div>
</article>`;

export function homePage(C, lang) {
  const T = C.constants.TRANSLATIONS[lang];
  const articles = C.constants.PROTOCOL_ARTICLES[lang];
  const u = UI[lang];
  const pillars = [...new Set(articles.map((a) => a.pilar))];
  const app = T.APPS[0];
  const pact = T.PACT_TITLE.split(':')[1].trim();

  const cards = articles.map(articleCard).join('');
  const actions = `
    <a class="btn btn--primary" href="${pathFor(lang, ROUTES.about)}">${esc(u.about)}</a>
    <a class="btn btn--outline" href="#the_vault">${esc(u.projects)}</a>
    <a class="btn btn--ghost" href="${pathFor(lang, ROUTES.contributions)}">${esc(u.contributions)}</a>`;

  return `${nav(lang, 'home', { scroll: true })}
<main id="main" class="page-home">
  <section class="hero" aria-labelledby="home-title">
    <div class="hero__silk" aria-hidden="true"></div>
    <div class="hero__content">
      <h1 class="hero__title hero__enter hero__enter--1" id="home-title"><span>Privon</span><span>Foundation</span></h1>
      <div class="hero__badge hero__enter hero__enter--2">PROTOCOL 3305</div>
      <div class="hero__slogan hero__enter hero__enter--3">
        <div class="hero__slogan-bg" aria-hidden="true"></div>
        <div class="hero__slogan-inner">
          <p class="hero__slogan-line">${esc(T.HERO_SLOGAN_1)} <span>${esc(T.HERO_SLOGAN_2)}</span></p>
          <div class="hero__laser" aria-hidden="true"></div>
          <p class="hero__slogan-line">${esc(T.HERO_SLOGAN_3)} <span>${esc(T.HERO_SLOGAN_4)}</span></p>
        </div>
      </div>
      <div class="hero__desc hero__enter hero__enter--4">
        <div class="hero__desc-inner">
          <div class="hero__scan" aria-hidden="true"></div>
          <p>${esc(T.HERO_DESC)}</p>
        </div>
      </div>
      <div class="hero__actions hero__enter hero__enter--5">${actions}</div>
      <div class="hero__social hero__enter hero__enter--6">
        <div class="social-row">
          <a class="social-pill" href="https://github.com/Privonfundation" target="_blank" rel="noopener noreferrer">${icon('github')} GitHub</a>
          <a class="social-pill" href="https://github.com/Privonfundation/CrytoTool/discussions" target="_blank" rel="noopener noreferrer">${icon('comments')} ${esc(u.discussions)}</a>
        </div>
        <p>${esc(u.heroNote)}</p>
      </div>
    </div>
  </section>

  <section class="protocol" id="vision" aria-labelledby="protocol-title">
    <div class="protocol__decor" aria-hidden="true">
      <div class="line-top"></div><div class="line-left"></div><div class="line-right"></div>
      <div class="fade-top"></div><div class="fade-bottom"></div>
    </div>
    <div class="protocol__inner container">
      <div class="section-label"><span class="section-label__line"></span><span class="section-label__text">${esc(T.THE_STANDARD)}</span></div>
      <div class="protocol__title">
        <h2 id="protocol-title"><span>Protocol 3305</span><span class="sub">${esc(pact)}</span></h2>
      </div>
      <div class="protocol__cards">
        <article class="card protocol__card">
          <div class="card__glow" aria-hidden="true"></div>
          <div class="card__pad">
            <div class="card__kicker">PREAMBLE</div>
            <p class="card__text">${esc(T.PREAMBLE_TEXT)}</p>
          </div>
        </article>
        <article class="card protocol__card">
          <div class="card__glow" aria-hidden="true"></div>
          <div class="card__pad">
            <div class="card__kicker">FOUNDATION</div>
            <p class="card__text card__text--bright card__text--quote">${esc(T.PROTOCOL_DESC)}</p>
            <div class="protocol__adherence">
              <span>${esc(lang === 'ro' ? 'Aderență:' : lang === 'es' ? 'Adhesión:' : 'Adherence:')}</span>
              <span class="pill">Zero-Knowledge</span>
              <span class="pill">Zero-Trust</span>
            </div>
          </div>
        </article>
      </div>
      <div class="protocol__meta">
        <div class="protocol__count"><span>${articles.length} ${esc(lang === 'ro' ? 'Articole' : lang === 'es' ? 'Artículos' : 'Articles')}</span></div>
        <div class="protocol__pillars">${pillars.map((p) => `<span>${esc(p)}</span>`).join('')}</div>
      </div>
      <div class="marquee" aria-label="${esc(lang === 'ro' ? 'Articolele Protocolului 3305' : lang === 'es' ? 'Artículos del Protocolo 3305' : 'Protocol 3305 articles')}">
        <div class="marquee__viewport">
          <div class="marquee__track">
            <div class="marquee__set">${cards}</div>
            <div class="marquee__set" aria-hidden="true">${cards}</div>
          </div>
        </div>
        <div class="marquee__fade marquee__fade--left" aria-hidden="true"></div>
        <div class="marquee__fade marquee__fade--right" aria-hidden="true"></div>
      </div>
    </div>
  </section>

  <section class="philosophy" id="philosophy" aria-labelledby="philosophy-title">
    <div class="philosophy__fade" aria-hidden="true"></div>
    <div class="philosophy__inner container">
      <div class="philosophy__eyebrow"><span>${esc(u.philosophyLabel)}</span></div>
      <div class="philosophy__grid">
        <div>
          <h2 id="philosophy-title">${esc(u.philosophyTitle)}</h2>
          <p>${esc(u.philosophyText)}</p>
        </div>
        <div class="philosophy__values">${u.values.map((v) => `<span class="value-pill">${esc(v)}</span>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="vault" id="the_vault" aria-labelledby="vault-title">
    <div class="vault__decor" aria-hidden="true"><div class="vault__grid"></div><div class="vault__fade"></div></div>
    <div class="vault__head">
      <div class="vault__label"><span>Open Source</span></div>
      <h2 id="vault-title">${esc(T.APPS_SECTION_TITLE)}</h2>
    </div>
    <div class="vault__gallery no-scrollbar">
      <div class="vault__slide">
        <div class="vault__card">
          <div class="vault__card-grid" aria-hidden="true"></div>
          <div class="vault__card-body">
            <div class="vault__app-top">
              <img src="/crytotool-logo-192.webp" width="192" height="192" alt="CrytoTool" loading="lazy" decoding="async">
              <div class="vault__app-badges">
                <span>AGPL-3.0</span>
                <a href="https://github.com/Privonfundation/CrytoTool" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <h3 class="vault__app-title">${esc(app.title)}</h3>
            <p class="vault__app-desc">${esc(app.desc)}</p>
            <div class="vault__features">${app.features.map((f) => `<span>${esc(f)}</span>`).join('')}</div>
            <div class="vault__app-actions"><a class="btn" href="${pathFor(lang, ROUTES.crytotool)}">${esc(u.explore)} ${icon('arrow-right')}</a></div>
          </div>
          <div class="vault__corner" aria-hidden="true"><i></i><i></i></div>
        </div>
        <div class="vault__label-bg" aria-hidden="true">${esc(app.title)}</div>
      </div>
    </div>
    <div class="vault__dots" aria-hidden="true"><span class="vault__dot vault__dot--active"></span></div>
  </section>
</main>
${richFooter(lang)}`;
}
