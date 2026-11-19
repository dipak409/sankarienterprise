# Sankari Enterprise

Modern marketing website for Sankari Enterprise — custom steel furniture by Tapan Mondal, with 35+ years of trusted experience.

Built with React 19, Vite and React Router.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Pages

- `/` — Home
- `/products` — Filterable product catalogue
- `/products/:slug` — Product detail pages
- `/services` — Fabrication, repair, maintenance and lockers
- `/about` — Tapan Mondal and the workshop story
- `/contact` — Enquiry form (prepares an email or WhatsApp message)

## Editing content

- **Business details** (phone, WhatsApp, email, address, hours): `src/data/site.js`
- **Products, descriptions and features**: `src/data/products.js`
- **Global styles / design tokens**: `src/index.css`
- **Page copy**: `src/pages/`

> The phone number, WhatsApp link, email and address currently use placeholders. Update them in `src/data/site.js` before publishing.
