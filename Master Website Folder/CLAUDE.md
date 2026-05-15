# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Overview

**Hardex India Private Limited (HIPL) website** — a vanilla HTML/CSS/JS static site. No build step; files open directly in a browser. All product and company content lives in config files; HTML pages are rendering shells.

---

## Architecture

### Data flow

```
config/products-data.js  (96 products, PRODUCTS[])
      ↓
components/product-cards.js   → products.html (filterable catalog grid)
components/shared-nav.js      → every page (nav dropdowns + Bob widget)
components/seo.js             → every page (<meta> tags)

config/products-config.js  (TDS_PRODUCTS{} — detailed TDS/MSDS specs for hero products)
      ↓
assets/tds/tdsData.js         → assets/tds/index.html (TDS viewer)
assets/tds/tds-*.html         → individual rendered TDS pages

config/solutions-data.js  (SOLUTIONS[])
      → solutions.html + solution-*.html pages

config/site-config.js  (SITE_CONFIG — company info, contact, social)
      → footer, contact page, SEO defaults

config/dealers-data.js  (DEALERS[], REGIONS[])
      → dealers.html
```

### Script load order (critical — mis-ordering causes undefined-variable errors)

```html
<head>
  <script src="config/site-config.js"></script>    <!-- 1st -->
  <script src="config/products-data.js"></script>  <!-- 2nd -->
  <link rel="stylesheet" href="css/styles.css">
  <script src="components/seo.js" defer></script>  <!-- 3rd -->
</head>
<body>
  <div id="shared-nav"></div>
  <!-- page content -->
  <script src="components/shared-nav.js" defer></script>  <!-- 4th -->
  <script src="js/main.js" defer></script>                <!-- 5th -->
</body>
```

---

## Config Files — Sources of Truth

### `config/products-data.js` — `PRODUCTS[]` (96 products)

Each product object shape:
```javascript
{
  id: 'hp410-coolcoat',          // kebab-case, used in product-detail.html?id=
  name: 'HARDPROOF COOLCOAT',
  icon: '🎨',                    // emoji (legacy — do not add to new design work)
  category: 'Waterproofing',     // drives filter tabs on products.html
  subcategory: 'Elastomeric Coatings',
  featured: true,                // shows on homepage hero grid
  shortDesc: '...',              // professional one-liner shown on cards
  realTalk: '...',               // collapsible honest copy shown on product-detail.html
  application: '...',
  coverage: '1.5–2.0 kg/m²',
  tds: '/assets/tds/tds-hf100.html',  // null if not yet available
  msds: null,
  seo: { title: '...', description: '...', keywords: [] }
}
```

**8 product categories:** Waterproofing · Flooring Systems · Repair Systems · Epoxy Systems · Concrete Admixtures · Surface Protection · Decorative Concrete · Sports Flooring

### `config/products-config.js` — `TDS_PRODUCTS{}` (5 hero products, full specs)

Separate from `products-data.js`. Contains complete TDS + MSDS data (physical properties, application, drying times, packaging, hazards, first aid, PPE) for the 5 products with finished data sheets. Used by `assets/tds/tdsData.js` to render TDS pages. Add new entries using the skeleton at the bottom of the file.

### `config/site-config.js` — `SITE_CONFIG`

Company name, contact (phone, WhatsApp, email), address, hours, social links, SEO domain. Edit here; all pages auto-reflect.

### `config/solutions-data.js` — `SOLUTIONS[]`

9 solution categories. Each links to a `solution-*.html` page. Note: one solution page is named `solutions-terrace-waterproofing.html` (plural) while the rest are `solution-*.html` (singular) — don't normalise without updating all references in `shared-nav.js` and `solutions-data.js`.

### `config/dealers-data.js` — `DEALERS[]`, `REGIONS[]`

Dealer/distributor records. Currently only HQ placeholder — add real dealers here.

---

## Components

### `components/shared-nav.js`

Self-contained — injects its own CSS, nav HTML, mobile drawer, and the **Bob chatbot widget** (floating button + iframe panel) into every page that has `<div id="shared-nav"></div>`. Does not depend on any other component at runtime.

**Bob widget globals** (available on every page after shared-nav loads):
- `hxToggleBob()` — opens/closes the chat panel
- `hxAskBob(msg)` — opens panel and pre-fills a message (used by solution page CTAs)

The Bob panel is an iframe pointing to `bob.html`. `shared-nav.js` skips injecting the float button on `bob.html` itself to avoid nesting.

### `components/product-cards.js`

Reads `window.PRODUCTS`, renders a sticky category filter bar and a product grid into `#all-products-grid`. Filter state syncs to the URL via `?cat=slug`. Cards link to `product-detail.html?id=PRODUCT-ID`.

### `components/seo.js`

Injects `<meta>` tags and JSON-LD from each product's `seo` object. Must load after `products-data.js`.

### `components/tooltip.js` / `tooltip.css`

Legacy hover/tap tooltip for TDS/MSDS links. Still present but superseded on newer pages by the product-detail page pattern.

---

## Page Patterns

### `product-detail.html`

Reads `?id=` from URL, finds the product in `PRODUCTS`, renders the full detail view. Includes a collapsible **RealTalk** block (`realTalk` field) styled in dark navy with yellow border.

### `assets/tds/index.html` + `tdsData.js`

Standalone TDS viewer (separate from the main site CSS). Reads `?product=` from URL, looks up `TDS_PRODUCTS`, calls `createTds()` to render the HTML document. Individual pre-rendered TDS pages live alongside it as `tds-*.html`.

### `downloads.html`

Searchable, filterable table of all TDS/MSDS documents. Built from `PRODUCTS` at runtime — no separate data file.

### Solution pages (`solution-*.html`)

9 pages, one per solution category. Each has a CTA that calls `hxAskBob(msg)` to open Bob with a pre-filled message. All use `<div id="shared-nav"></div>` + `shared-nav.js`.

---

## Styling

### Fonts (Google Fonts, loaded in HTML `<head>`)

- **Bebas Neue** — display headings (`--font-disp`)
- **DM Sans** — body text (`--font-body`)
- **DM Mono** — spec data, codes, monospace labels (`--font-mono`)

### CSS variables (defined in `css/styles.css` `:root`)

```css
--teal: #00a99d;       /* primary brand / CTA / active states */
--navy: #0d1b26;       /* dark backgrounds, nav */
--yellow: #f0c330;     /* Bob widget accent, highlights */
--bg-off: #f9f9f7;     /* page background tint */
--font-disp / --font-body / --font-mono
--nav-h: 72px;         /* must match shared-nav.js --hn-h: 64px (nav uses its own var) */
--max-w: 1200px;
```

Note: `shared-nav.js` injects its own `:root { --hn-h: 64px }` — the nav height it uses is 64px, not the `--nav-h: 72px` in `styles.css`. `body { padding-top }` in `styles.css` uses `var(--nav-h)` while the nav itself uses `var(--hn-h)`.

### `css/pages.css`

Page-specific styles for inner pages (breadcrumbs, page heroes, solution layouts, product detail, etc.). Loaded in addition to `styles.css` on non-homepage pages.

---

## Testing Locally

No build step. Open any `.html` file directly in a browser, or serve with:
```
npx serve "Master Website Folder"
# or
python3 -m http.server 8000
```

Key checks:
- Products render on `products.html` — filter tabs work, clicking a card navigates to `product-detail.html?id=`
- Mobile drawer opens at <900px
- Bob float button appears on all pages except `bob.html`; `hxAskBob('test')` from console opens and pre-fills
- TDS viewer: `assets/tds/index.html?product=hp410-coolcoat` renders a full TDS
- Downloads table on `downloads.html` populates from PRODUCTS

---

## Adding Content

**Add a product:** Edit `config/products-data.js`. A product with `featured: true` appears on the homepage grid. `tds` path should point to either a `/assets/tds/tds-*.html` page or `null`.

**Add a TDS page:** Add the product's full spec data to `config/products-config.js` (`TDS_PRODUCTS`), then create a `assets/tds/tds-PRODUCTID.html` using the existing ones as a template (they call `tdsData.js` to render).

**Add a dealer:** Edit `config/dealers-data.js`, add to `DEALERS[]`.

**Add a solution page:** Copy an existing `solution-*.html`, update content, add to `config/solutions-data.js` and `shared-nav.js` (`SOLUTION_ITEMS` array).
