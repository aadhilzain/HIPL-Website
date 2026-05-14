---
name: hardex-design
description: Use this skill to generate well-branded interfaces and assets for HARDEX India Private Limited (HIPL), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the HARDEX construction-chemicals brand with its green-chemistry visual identity.
user-invocable: true
---

# HARDEX Design System Skill

HARDEX is an Indian manufacturer of industrial construction chemicals — waterproofing, industrial flooring, repair systems, protective coatings. The brand is contractor-friendly + engineering-grade + sustainability-forward, with a fresh jade-green hero color ("Green Chemistry").

Read **`README.md`** in this folder first. It contains:
- CONTENT FUNDAMENTALS — voice, tone, casing, bilingual cues (Hindi co-headlines), copy examples
- VISUAL FOUNDATIONS — motifs (bubble dots, spec strips, cement-warm canvas), color, type, motion, elevation rules
- ICONOGRAPHY — Lucide-based, 1.5px stroke, when to use solid vs outline
- An index of every file in this skill

Then explore the other files:
- **`colors_and_type.css`** — all design tokens (color ramps, semantic vars, type scale, spacing, radius, shadow, motion). Always link this file at the top of any HTML you produce.
- **`assets/`** — logos and brand imagery (currently just the white-on-green wordmark JPG; flag this gap to the user).
- **`preview/`** — small standalone HTML specimens you can crib from for swatches, buttons, chips, motifs.
- **`ui_kits/marketing/`**, **`ui_kits/catalog/`**, **`ui_kits/portal/`** — full React-in-Babel recreations of the marketing site, product catalog, and dealer portal. Use them as both reference and a parts bin (`<Wordmark>`, `<Eyebrow>`, `<BubbleCluster>`, `<Icon>`, `<Marquee>` live in `ui_kits/marketing/ui.jsx`).

## How to use this skill

### If creating visual artifacts (slides, mocks, throwaway prototypes)
1. Copy `colors_and_type.css` (and any assets you need from `assets/`) into the working folder.
2. Reference the README's VISUAL FOUNDATIONS section and follow it strictly — especially the bubble-dot motif, cement-warm canvas, no-decorative-gradients rule.
3. Lift components from `ui_kits/*/ui.jsx` and the section JSX files.
4. Build static HTML files for the user to view.

### If working on production code
1. Read all the rules in README.md to become an expert in the brand.
2. Use the design tokens from `colors_and_type.css` as the source of truth.
3. The UI kits are pixel-faithful recreations of the new design language — match their patterns, don't reinvent.

### If the user invokes this skill without specific guidance
Ask what they want to build or design (slide deck? landing page section? dashboard? mobile app screen?), gather any product/copy specifics they have, then act as an expert designer and output HTML artifacts or production code as appropriate.

## Critical brand rules — always honor

- **Hero color is jade green** (`--hardex-green-500` / `#15C172`). Don't substitute teal, mint, or kelly green.
- **Page background is cement-warm** (`--bg-1` / `#FBFAF6`), never pure white. White is for raised cards.
- **No decorative gradients.** The only gradient allowed is a protection vignette behind hero text on photos.
- **No emoji** in product or marketing surfaces. Use Lucide icons or unicode marks (→ ↗ ✓ ·).
- **No icon-on-colored-card with rounded left border** pattern. (AI trope, avoid.)
- **Headlines balance, body wraps pretty.** Use `text-wrap: balance` on H1–H3 and `text-wrap: pretty` on long paragraphs.
- **Press states scale (0.98)**, hover states elevate or color-shift — never both.
- **Bubble-dot motif** is the brand's signature. Use it sparingly: one big moment per screen, max.
- **Bilingual** — Hindi co-headlines are encouraged for hero moments; flag that the Hindi needs native review.

## Caveats baked into this system
- Only a white-on-green raster logo was provided. Vector and other lockup variants are pending from the client. Use the CSS-built `<Wordmark>` component instead of the JPG wherever possible.
- Fonts are substitutions from Google Fonts (Bricolage Grotesque + Manrope + JetBrains Mono + Hind). If proprietary HARDEX fonts arrive, swap in the `@import` at the top of `colors_and_type.css`.
- No product photography or environmental shots have been supplied. Placeholder gradient blocks stand in for product covers — replace with real photography ASAP.
