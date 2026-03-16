# Golden Stroy Website

Official website for **Golden Stroy** construction company based in Kyrgyzstan, with a bilingual interface (RU/EN), project pages, media sections, and responsive layout.

## Features

- Responsive landing page (`index.html`)
- Project detail pages:
  - `projects/yntymak.html`
  - `projects/crystal.html`
  - `projects/provence.html`
- RU/EN language switch (persistent via `localStorage`)
- Shared i18n logic for project pages (`assets/js/project-i18n.js`)
- Main page interactions in `assets/js/index.js`
- Static assets (images/video/fonts) in `assets/src` and styles in `assets/css`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no framework)


## Language System

- Main page uses translations in `assets/js/index.js`
- Project pages use shared translations in `assets/js/project-i18n.js`
- Language preference key: `siteLang` in `localStorage`
- Each translatable element uses `data-i18n="key"`

## How to Add/Update Translations

1. Add or update translation keys in:
   - `assets/js/index.js` (main page)
   - `assets/js/project-i18n.js` (project pages)
2. Ensure matching `data-i18n` attributes exist in HTML.
3. Test RU/EN toggle on all pages.

## Deployment

Deploy as a static site on any hosting provider (GitHub Pages, Netlify, Vercel static hosting, etc.).

## License

All rights reserved unless stated otherwise by project owner.
