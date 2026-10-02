# Chris Oppong — Portfolio (React)

A React + TypeScript + Tailwind rebuild of the single-file site, same content,
same forest-green-and-gold design, now componentised and set up for strong SEO.

## Run it

This project was built without internet access, so dependencies have **not**
been installed and the build has **not** been test-compiled. On your machine:

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

Node 18+ recommended.

## Before you deploy

Two placeholders still need real values — search for them by name:

1. **Canonical domain** — `index.html` and `public/robots.txt` /
   `public/sitemap.xml` use `https://www.chrisoppong.com/` as a placeholder.
   Replace every instance with the real domain once you have one.
2. **LinkedIn URL** — `src/data/content.ts` → `contact.linkedin` still points
   at `https://www.linkedin.com/`. Swap in Chris's profile URL (it's used in
   the Ideas section, the Contact section, and the Person schema's `sameAs`).

Everything else — copy, stats, work items, About text — lives in
`src/data/content.ts`, so you can edit the site without touching any
component markup.

## Project structure

```
src/
  components/     one component per section (Hero, Belief, Impact, Work, Ideas, About, Contact, Footer, Nav, FloatButtons)
  data/
    content.ts    every piece of copy on the site
    images.ts     typed imports for the four photos (jpg + webp pairs)
  assets/images/  the actual photo files
public/
  robots.txt, sitemap.xml, manifest.webmanifest, favicon.svg,
  apple-touch-icon.png, og-image.jpg
```

## SEO — what's implemented

- **Meta tags**: unique title and description, keywords, canonical URL,
  robots directive, theme-color.
- **Open Graph + Twitter Card**: title, description, a generated 1200×630
  `og-image.jpg`, locale, profile type.
- **Structured data (JSON-LD)**: `Person` schema for Chris (with
  affiliations to Glinax, Hilth Foundation, GTECH, Learn With Chris) and a
  `WebSite` schema — both static in `index.html`'s `<head>`, so they're
  readable without JavaScript running.
- **robots.txt + sitemap.xml** in `/public`.
- **Semantic HTML**: one `<h1>` (the hero), `<h2>` per section in document
  order, `<h3>` for sub-items, `<nav>`/`<main>`/`<footer>` landmarks,
  `aria-labelledby` tying each section to its heading.
- **Image performance**: every photo ships as WebP with a JPEG fallback via
  `<picture>`, with explicit `width`/`height` (prevents layout shift) and
  descriptive `alt` text. The hero photo loads eager + high priority since
  it's the largest above-the-fold element (LCP); every other photo is lazy.
- **Accessibility extras that double as SEO signals**: skip-to-content link,
  visible focus states, a `<noscript>` fallback with the core message and an
  email contact.
- **PWA basics**: manifest, favicon, apple-touch-icon — helps mobile
  "add to home screen" and looks correct in search result rich snippets.

### One honest limitation

This is a client-rendered single-page app (Vite + React), not
server-rendered. Modern Google indexing does execute JavaScript reliably, and
all the meta/structured data above is already static HTML regardless — but
if you later want guaranteed-instant indexing with zero reliance on
JS execution (or faster perceived load), the next step would be adding a
prerendering step (e.g. `vite-plugin-ssg`) or moving to a framework with
server rendering (e.g. Next.js). Not done here since it would need testing
against a live build, which wasn't possible in this environment.

## Mobile responsiveness

Every section uses the same breakpoints as the original build (700 / 720 /
800 / 860 / 900px, via Tailwind arbitrary variants like `min-[860px]:`), so
layout, type scale, and the floating WhatsApp/Email buttons on mobile all
carry over exactly.
