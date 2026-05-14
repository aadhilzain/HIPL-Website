# Marketing UI Kit

Public-facing marketing site for HARDEX India. Modernized reimagining of `hardexindia.com` using the new green-chemistry-hero design language.

## Screens / sections covered
- **Header** — fixed translucent nav with glass blur, language toggle (EN / हिं), primary CTA
- **Hero** — full-bleed cement-toned hero with "Build Harder. Last Longer." headline, floating stat panel
- **StatStrip** — infinite marquee of credentials (Low VOC · ISO ✓ · TDS+MSDS · ...) on cement-900
- **SolutionsGrid** — 2×2 solutions cards (waterproofing / flooring / repair / coatings) with family codes & counts
- **FeaturedProducts** — 4-up product card grid with cover gradients, mono spec tables, TDS links
- **About** — dark hero section with credential grid + bubble cluster motif
- **Contact** — split form layout (info + form), pill-toggle inquiry types
- **Footer** — 4-column dark footer with credential strip

## Component files
- `ui.jsx` — shared primitives: `<Wordmark>`, `<Eyebrow>`, `<BubbleCluster>`, `<Icon>`, `<Marquee>`
- `Header.jsx`, `Hero.jsx`, `StatStrip.jsx`, `SolutionsGrid.jsx`, `FeaturedProducts.jsx`, `About.jsx`, `Footer.jsx` (Footer.jsx also exports Contact)

## How to recompose
Each section is independent and self-contained. To use elsewhere, lift the section function + the primitives it needs from `ui.jsx`. All styling is via CSS variables defined in `../../colors_and_type.css`.
