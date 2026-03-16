const PROJECT_I18N = {
  yntymak: {
    ru: {
      title: 'ЖК ЫНТЫМАК — GOLDEN STROY',
      back: '← Назад',
      h1: 'Жилой комплекс «ЫНТЫМАК»',
      desc: '«ЫНТЫМАК» был построен и сдан в эксплуатацию в 2020 году. Расположен по адресу: Калык Акиева 116.',
      plansTitle: 'Планировки',
      plan1: '1-комнатная • 40 м²',
      plan2: '2-комнатная • 63 м²',
      plan3: '3-комнатная • 88 м²',
      galleryTitle: 'Галерея проекта'
    },
    en: {
      title: 'YNTYMAK RC — GOLDEN STROY',
      back: '← Back',
      h1: 'Residential Complex “YNTYMAK”',
      desc: '“YNTYMAK” was completed and commissioned in 2020. Address: 116 Kalyk Akieva.',
      plansTitle: 'Layouts',
      plan1: '1-room • 40 m²',
      plan2: '2-room • 63 m²',
      plan3: '3-room • 88 m²',
      galleryTitle: 'Project Gallery'
    }
  },

  crystal: {
    ru: {
      title: 'ЖК CRYSTAL — GOLDEN STROY',
      back: '← Назад',
      h1: 'Жилой комплекс «CRYSTAL»',
      lead: 'Дом расположен на второй линии проспекта Чынгыза Айтматова — в эпицентре деловой и культурной жизни столицы.',
      feature1: 'Все необходимое для комфортной жизни находится в шаговой доступности.',
      feature2: 'На территории предусмотрены workout и детские площадки, а также беседки для отдыха.',
      feature3: 'Круглосуточное видеонаблюдение по периметру (34 камеры) и служба охраны.',
      feature4: 'В квартирах выполнена двойная шумоизоляция: межэтажная и межквартирная.',
      feature5: 'Все материалы, примененные в строительстве, сертифицированы и высокого качества.',
      feature6: 'В продаже остались квартиры со сквозными планировками и видами на разные части города.',
      feature7: 'Жители дебютного ЖК «Ынтымак» снова выбирают нашу компанию и проект «CRYSTAL».',
      plansTitle: 'Планировки',
      plan1: '1-комнатная • 42 м²',
      plan2: '2-комнатная',
      plan3: '3-комнатная',
      galleryTitle: 'Галерея проекта',
      videoTitle: 'Видео проекта',
      videoFallback: 'Ваш браузер не поддерживает воспроизведение видео.'
    },
    en: {
      title: 'CRYSTAL RC — GOLDEN STROY',
      back: '← Back',
      h1: 'Residential Complex “CRYSTAL”',
      lead: 'The building is located on the second line of Chyngyz Aitmatov Avenue, in the center of the city’s business and cultural life.',
      feature1: 'Everything needed for comfortable living is within walking distance.',
      feature2: 'The territory includes workout and children’s playgrounds, as well as gazebos for recreation.',
      feature3: '24/7 perimeter video surveillance (34 cameras) and on-site security service.',
      feature4: 'Apartments feature double sound insulation: between floors and between units.',
      feature5: 'All construction materials are certified and of high quality.',
      feature6: 'Available units include through-layout apartments with views of different parts of the city.',
      feature7: 'Residents of our first complex “YNTYMAK” are choosing our company and the “CRYSTAL” project again.',
      plansTitle: 'Layouts',
      plan1: '1-room • 42 m²',
      plan2: '2-room',
      plan3: '3-room',
      galleryTitle: 'Project Gallery',
      videoTitle: 'Project Video',
      videoFallback: 'Your browser does not support video playback.'
    }
  },

  provence: {
    ru: {
      title: 'ЖК PROVENCE — GOLDEN STROY',
      back: '← Назад',
      h1: 'Жилой комплекс «PROVENCE»',
      lead: 'Современный жилой проект с продуманной архитектурой и комфортной городской средой.',
      feature1: 'Удобная локация и развитая инфраструктура рядом.',
      feature2: 'Безопасная благоустроенная территория для всей семьи.',
      feature3: 'Качественные материалы и современные инженерные решения.',
      feature4: 'Функциональные планировки для разных сценариев жизни.',
      plansTitle: 'Планировки',
      plan1: '1-комнатная',
      plan2: '2-комнатная',
      plan3: '3-комнатная',
      galleryTitle: 'Галерея проекта',
      videoTitle: 'Видео проекта',
      videoFallback: 'Ваш браузер не поддерживает воспроизведение видео.'
    },
    en: {
      title: 'PROVENCE RC — GOLDEN STROY',
      back: '← Back',
      h1: 'Residential Complex “PROVENCE”',
      lead: 'A modern residential project with thoughtful architecture and a comfortable urban environment.',
      feature1: 'Convenient location with developed infrastructure nearby.',
      feature2: 'Safe and landscaped territory for the whole family.',
      feature3: 'High-quality materials and modern engineering solutions.',
      feature4: 'Functional layouts for different lifestyles.',
      plansTitle: 'Layouts',
      plan1: '1-room',
      plan2: '2-room',
      plan3: '3-room',
      galleryTitle: 'Project Gallery',
      videoTitle: 'Project Video',
      videoFallback: 'Your browser does not support video playback.'
    }
  }
};

(function initProjectI18n() {
  const page =
    document.documentElement.dataset.page ||
    location.pathname.split('/').pop().replace('.html', '');

  const pageDict = PROJECT_I18N[page];
  if (!pageDict) return;

  const langButtons = document.querySelectorAll('.lang-btn');

  const applyLang = (lang) => {
    const dict = pageDict[lang] || pageDict.ru;

    document.documentElement.lang = lang;
    if (dict.title) document.title = dict.title;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
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
})();