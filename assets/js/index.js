// Preloader: hide when video can render first frame
const preloader = document.getElementById('preloader');
const heroVideo = document.getElementById('heroVideo');
const hidePreloader = () => preloader?.classList.add('hidden');

heroVideo?.addEventListener('loadeddata', () => setTimeout(hidePreloader, 150), { once: true });
window.addEventListener('load', () => setTimeout(hidePreloader, 600), { once: true });

// Header on scroll
const header = document.getElementById('header');
const onScrollHeader = () => header?.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

// Mobile nav
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navMenu?.classList.toggle('open');
});

navMenu?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });

revealItems.forEach((el) => revealObserver.observe(el));

// Counters
const counters = document.querySelectorAll('[data-counter]');
const formatNum = (n) => n.toLocaleString('en-US');

const animateCounter = (el) => {
  const target = Number(el.dataset.counter || 0);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const value = Math.floor(target * eased);
    el.textContent = `${prefix}${formatNum(value)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    obs.unobserve(entry.target);
  });
}, { threshold: 0.35 });

counters.forEach((c) => counterObserver.observe(c));

// Subtle parallax
const parallaxBg = document.getElementById('parallaxBg');
const onParallax = () => {
  if (!parallaxBg) return;
  const y = window.scrollY * 0.12;
  parallaxBg.style.transform = `translateY(${y}px)`;
};
window.addEventListener('scroll', onParallax, { passive: true });
onParallax();

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Language toggle
const i18n = {
  ru: {
    pageTitle: 'GOLDEN STROY — Премиальное строительство в Бишкеке',
    pageDescription: 'GOLDEN STROY (goldenstroy.kg) — премиальная строительная и девелоперская компания в Бишкеке. Работаем с 2012 года.',
    navAbout: 'О нас',
    navObjects: 'Объекты',
    navLive: 'LIVE',
    navContacts: 'Контакты',
    contactBtn: 'Связаться',
    heroKicker: 'Премиальное строительство • Бишкек',
    heroTitle: 'Одна из самых быстрорастущих строительных компаний',
    heroSub: 'Доверие, заслуженное годами',
    stat1: 'Since 2012 — Доверие, заслуженное годами',
    stat2: 'Введено в эксплуатацию',
    stat3: 'Построили жилых комплексов',
    aboutTitle: 'О нас',
    aboutLead: 'GOLDEN STROY (goldenstroy.kg) — премиальная девелоперская и строительная компания в Бишкеке, работающая с 2012 года. Мы создаем жилые и коммерческие пространства высокого класса, где архитектура, инженерия и качество исполнения работают в единой системе.',
    objectsTitle: 'Объекты',
    projectYntymak: 'Жилой комплекс «ЫНТЫМАК»',
    projectCrystal: 'Жилой комплекс «CRYSTAL»',
    projectProvence: 'Жилой комплекс «PROVENCE»',
    learnMore: 'Подробнее →',
    servicesTitle: 'Направления',
    service1Title: 'Жилые комплексы',
    service1Text: 'Современные жилые пространства с акцентом на архитектуру, комфорт и долговечность.',
    service2Title: 'Бизнес центры',
    service2Text: 'Функциональные деловые объекты с премиальной инженерной и эстетической составляющей.',
    service3Title: 'Фитнес клубы',
    service3Text: 'Высококлассные фитнес-пространства, спроектированные для интенсивной эксплуатации.',
    liveLead: 'Следите за ходом реализации проектов в LIVE-формате.',
    ctaTitle: 'Готовы обсудить ваш проект?',
    ctaBtn: 'Связаться с нами',
    footerText: 'Премиальная строительная и девелоперская компания, Бишкек, Кыргызстан. С 2012 года.',
    footerNav: 'Навигация',
    footerContacts: 'Контакты'
  },
  en: {
    pageTitle: 'GOLDEN STROY — Premium Construction in Bishkek',
    pageDescription: 'GOLDEN STROY (goldenstroy.kg) is a premium construction and development company in Bishkek. Operating since 2012.',
    navAbout: 'About',
    navObjects: 'Projects',
    navLive: 'LIVE',
    navContacts: 'Contacts',
    contactBtn: 'Contact',
    heroKicker: 'Premium Construction • Bishkek',
    heroTitle: 'One of the Fastest-Growing Construction Companies',
    heroSub: 'Trust earned over the years',
    stat1: 'Since 2012 — Trust earned over the years',
    stat2: 'Commissioned area',
    stat3: 'Residential complexes built',
    aboutTitle: 'About Us',
    aboutLead: 'GOLDEN STROY (goldenstroy.kg) is a premium development and construction company in Bishkek, operating since 2012. We create high-class residential and commercial spaces where architecture, engineering, and execution quality work as one system.',
    objectsTitle: 'Projects',
    projectYntymak: 'Residential Complex “YNTYMAK”',
    projectCrystal: 'Residential Complex “CRYSTAL”',
    projectProvence: 'Residential Complex “PROVENCE”',
    learnMore: 'Learn more →',
    servicesTitle: 'Areas',
    service1Title: 'Residential Complexes',
    service1Text: 'Modern living spaces focused on architecture, comfort, and durability.',
    service2Title: 'Business Centers',
    service2Text: 'Functional business facilities with premium engineering and aesthetics.',
    service3Title: 'Fitness Clubs',
    service3Text: 'High-class fitness spaces designed for intensive operation.',
    liveLead: 'Follow project progress in LIVE format.',
    ctaTitle: 'Ready to discuss your project?',
    ctaBtn: 'Contact us',
    footerText: 'Premium construction and development company, Bishkek, Kyrgyzstan. Since 2012.',
    footerNav: 'Navigation',
    footerContacts: 'Contacts'
  }
};

const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll('.lang-btn');

const applyLang = (lang) => {
  const dict = i18n[lang] || i18n.ru;
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  if (metaDescription) metaDescription.setAttribute('content', dict.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('siteLang', lang);
};

let currentLang = localStorage.getItem('siteLang') || 'ru';
applyLang(currentLang);

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    applyLang(currentLang);
  });
});