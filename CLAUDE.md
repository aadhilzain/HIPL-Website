# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Repository Layout

```
HIPL-Website/
├── Master Website Folder/        ← Production website (the target)
└── HARDEX Design System-handoff/ ← New design system to merge in
```

The primary task is **merging the new design system into `Master Website Folder/`** — bringing updated tokens, typography, component patterns, solution pages, and UI kits into the live site without breaking its data-driven rendering model.

---

## Master Website Folder

### Architecture

This is a **vanilla HTML/CSS/JS static site** built around a config-first, data-driven model. HTML pages are rendering shells; all content is generated from two source-of-truth files:

| Source of truth | What it controls | Auto-updates |
|---|---|---|
| `config/products-data.js` | All product info (id, name, specs, SEO) | Homepage, products page, nav dropdowns, meta tags |
| `config/site-config.js` | Company info, colors, navigation, feature flags | All pages |

**Script load order is critical** — mis-ordering causes undefined-variable errors:
```html
<script src="config/site-config.js"></script>   <!-- 1st -->
<script src="config/products-data.js"></script>  <!-- 2nd -->
<link href="css/styles.css">
<script src="components/seo.js" defer></script>  <!-- 3rd -->
<!-- page body -->
<script src="js/main.js" defer></script>         <!-- 4th -->
```

### Key files

- `config/products-data.js` — Add/edit products here. Triggers auto-updates everywhere.
- `config/site-config.js` — Company name, colors, nav links, feature flags.
- `css/styles.css` — Main stylesheet; all brand colors as CSS variables at `:root`.
- `css/pages.css` — Page-specific styles.
- `js/main.js` — Mobile menu, smooth scroll, form handling, active nav state.
- `components/product-cards.js` — Renders product grids from PRODUCTS array.
- `components/seo.js` — Injects `<meta>` tags + JSON-LD from product SEO data.
- `components/shared-nav.js` — Navigation injection.
- `components/tooltip.js` + `tooltip.css` — Hover/tap product detail tooltips.

### Adding a product

Edit `config/products-data.js`, add an object to the `PRODUCTS` array:
```javascript
{
  id: 'lowercase-hyphenated-id',
  name: 'PRODUCT NAME',
  category: 'Waterproofing',
  subcategory: 'Heat Reflective',
  featured: true,
  shortDesc: '...',
  application: '...',
  coverage: '1.5–2 kg/m²',
  tds: '/assets/tds/product-id.pdf',  // or null
  msds: null,
  seo: { title: '...', description: '...', keywords: [] }
}
```

### Testing locally

Open `index.html` in a browser (no build step needed). Check:
- Featured products on homepage and full catalog on `products.html`
- Mobile menu at <768px width
- Tooltip hover/tap on product cards
- Page source (`Ctrl+U`) for injected `<meta>` SEO tags

---

## HARDEX Design System (`HARDEX Design System-handoff/`)

### What it is

A pixel-faithful design reimagining produced by Claude Design. It is **not production code** — it is a handoff bundle of HTML/CSS prototypes and React-in-Babel UI kits to implement into the master site. Match the visual output; do not copy internal prototype structure.

### File index

```
project/
├── colors_and_type.css        ← ALL design tokens (import this first in any new page)
├── assets/                    ← Brand assets (white-on-green logo JPG)
├── preview/                   ← Standalone HTML specimens for each token category
├── solutions/                 ← New/redesigned solution pages + base.css
│   ├── base.css               ← Solution-pages shared styles
│   └── *.html                 ← One per solution category
├── ui_kits/
│   ├── marketing/             ← Redesigned marketing homepage sections (JSX + index.html)
│   ├── catalog/               ← Product catalog with filter rail + datasheet panel (JSX)
│   └── portal/                ← Contractor/dealer portal (JSX, out of scope for initial merge)
└── uploads/                   ← Original uploaded solution pages (source reference)
```

### Design tokens (`colors_and_type.css`)

This is the canonical token file. When merging into the master site, either inline its `:root` block into `css/styles.css` or link it before `styles.css`. All other files reference these vars.

Key semantic vars to know:

| Token | Value | Use |
|---|---|---|
| `--hardex-green-500` | `#15C172` | Primary hero / brand / CTA buttons |
| `--bg-1` | `#FBFAF6` | Page background (cement-warm, never pure white) |
| `--bg-0` | `#FFFFFF` | Raised cards and inputs only |
| `--fg-1` | `#14130F` | Primary text |
| `--font-display` | Bricolage Grotesque | H1/H2, 700–800 weight |
| `--font-body` | Manrope | All body text |
| `--font-mono` | JetBrains Mono | Spec values, product codes, TDS data |
| `--font-deva` | Hind | Hindi/Devanagari co-headlines |

### Brand rules (non-negotiable during merge)

- **Hero color is jade green** `#15C172`. Do not substitute the old teal.
- **Page background is cement-warm** `--bg-1` (`#FBFAF6`), never pure white.
- **No decorative gradients.** Only allowed: a protection vignette behind hero text on photos.
- **No emoji** in product or marketing copy. Use Lucide icons or unicode marks (`→` `↗` `✓` `·`).
- **Bubble-dot motif** — the brand's signature. One prominent use per screen, max.
- **Press states: `scale(0.98)`**, not color shifts, on primary buttons.
- Headlines use `text-wrap: balance`; long paragraphs use `text-wrap: pretty`.
- Cards: white bg, 12px radius, `box-shadow` OR 1px border — never both.
- Nav becomes translucent glass on scroll: `backdrop-filter: blur(16px) saturate(140%)`.

### Typography

- Display: Bricolage Grotesque 700/800, tight tracking, `font-optical-sizing: auto`
- Body: Manrope 400/500/600
- Mono: JetBrains Mono — for specs, product codes, tabular numbers only
- Devanagari: Hind — for bilingual Hindi co-headlines (needs native review before shipping)
- Rule: never more than three type sizes per screen

### Copy voice

Senior site engineer who's been on 10 monsoons — technical, plainspoken, no fluff.
- Confidence through specs, not adjectives ("150+ formulations engineered for India's toughest conditions" not "industry-leading portfolio")
- Short sentences. Real verbs. Direct address ("You" not "our valued customers").
- Numerals over words next to units: `3.0mm`, `<50 g/L VOC`
- Headlines in sentence case with periods for declarative statements: **Build Harder. Last Longer.**
- Eyebrows in ALL CAPS with wide tracking: `CONSTRUCTION CHEMICALS · EST. 1980`

---

## Merge Strategy

### What maps where

| Design system file | Target in Master Website Folder |
|---|---|
| `colors_and_type.css` | Merge `:root` block into `css/styles.css` |
| `solutions/base.css` + `solutions/*.html` | Replace `solution-*.html` pages + fold base.css into `css/pages.css` |
| `uploads/solutions.html` | Replace `solutions.html` |
| `ui_kits/marketing/` | Recreate in vanilla JS — match visual output of Header/Hero/StatStrip/SolutionsGrid/FeaturedProducts/About/Footer |
| `ui_kits/catalog/` | Enhance `products.html` with filter rail + datasheet panel pattern |
| `ui_kits/portal/` | Future scope — dealer portal not yet in master site |

### Data-driven constraint

The master site's components (`product-cards.js`, `seo.js`, etc.) read from `config/products-data.js`. When implementing the catalog UI kit's `ProductCard` and `DatasheetPanel` patterns, render from the existing PRODUCTS array — do not hardcode product data from the UI kit's mock data.

### Assets gap

Only a white-on-green raster logo JPG is available. The CSS-built `<Wordmark>` component from `ui_kits/marketing/ui.jsx` is the preferred logo approach until vector files arrive. No product photography exists — placeholder gradient blocks stand in.

### Known caveats

- Hindi co-headlines need a native reviewer before shipping to production.
- Lucide icons are the standard (not a custom icon set). CDN: `https://unpkg.com/lucide@latest`.
- The design intentionally diverges from the original teal (`#1AA89A`) to jade green (`#15C172`). To revert, swap `--hardex-green-500`.

---

## Deployment

No build step. Static files served directly. Recommended: Netlify or Vercel (drag-drop folder, free tier). Domain `hardexindia.com` is secured; DNS not yet configured.
