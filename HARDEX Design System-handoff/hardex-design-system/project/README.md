# HARDEX Design System

**Build Harder. Last Longer.** · Green Chemistry · Est. 1980

A modernized, light-and-poppy visual system for **HARDEX India Private Limited (HIPL)** — an Indian manufacturer of industrial construction chemicals and specialty coating systems. The brand spans waterproofing, industrial flooring, repair & rehabilitation, and protective coatings, with a 150+ formulation portfolio engineered for India's site conditions.

This system reimagines the existing HARDEX visual identity around a fresh, vivid **jade-green hero color** (Green Chemistry as the dominant motif), warm cement-tinted neutrals, and a confident contractor-grade type system. The fidelity goal was *reimagine*, not pixel-faithful — see the user brief in CONTENT FUNDAMENTALS for tone, and VISUAL FOUNDATIONS for the motif language.

---

## Sources used

| Source | What we got | Access |
|---|---|---|
| **hardexindia.com** (public site) | Tagline, product taxonomy, copy voice, certifications, contact details, "Green Chemistry" positioning | Fetched as plain text via web_fetch — markdown extract is reflected in this README. We could not see the live visual design from the fetch (text only). |
| **Provided logo asset** | Hardex white wordmark on teal/green ground with bubble dot motif on the "x" + "GREEN CHEMISTRY" sub-lockup | `uploads/logo_files-1778652449707.Hardex white on Green Logo` → copied to `assets/hardex-logo-white-on-green.jpg` |
| **User direction** | "Existing palette wasn't designed. Use lighter colours which pop more to the eye." Green-chemistry as hero. Reimagine fidelity. Tone: contractor-friendly + technical + premium + sustainability-forward + Hindi/English bilingual cues. | Captured in the questions_v2 round at start of project. |

> **Note for future maintainers**: the original brand uses a darker teal-leaning green (≈ `#1AA89A` from the supplied logo background). This design system intentionally diverges with a **lighter, brighter jade ramp** at the user's request. If you need to roll back to the original teal, swap `--hardex-green-500` to `#1AA89A` and regenerate the ramp.

---

## CONTENT FUNDAMENTALS

### Voice in one line
**A senior site engineer who's seen ten monsoons** — technical, plainspoken, faintly weathered, allergic to fluff. Confidence comes from specs and tenure (since 1980), not adjectives.

### Tone dial
- **Contractor-friendly** first: copy is read by people in muddy boots, not procurement officers in boardrooms. Plain nouns, short sentences, real verbs.
- **Engineering-grade** second: when specs are quoted, they are *exact* — values, units, standards (ASTM, IS, BS), Shore hardness, VOC content, coverage in sq.m/L.
- **Quietly premium**: confidence through restraint. Never "industry-leading," "world-class," "best-in-class."
- **Sustainability-forward**: "Green Chemistry" and "Low VOC" sit alongside performance claims, not in a separate sustainability silo.

### Casing
- **Headlines**: Sentence case with intentional line breaks for rhythm. Periods at end of headline statements (declarative, not click-baity). Example from the live site: **Build Harder. Last Longer.**
- **Section headers**: Title Case for nav and product family names ("Industrial Flooring", "Repair & Rehabilitation"). Sentence case for in-page H2/H3.
- **Eyebrows**: ALL CAPS, wide letter-spacing (`--ls-ext`). Used for category markers above headlines: `CONSTRUCTION CHEMICALS · EST. 1980`.
- **Buttons**: Sentence case ("Explore products", "Request a sample"). Trailing arrow `→` only on primary forward-progress CTAs.

### Person & address
- **"We"** (HARDEX) and **"You"** (the contractor / site engineer / specifier). Never "us." Never "our valued customers."
- Direct address: "You need it on the truck Monday." not "Customers can expect dispatch by Monday."

### Numerals & units
- Always numerals over words (3 not three) when next to a unit, spec, or year.
- Units close to numbers, no space: `3.0mm`, `<50 g/L VOC`, `≥1.5 N/mm²`. Standards in monospace where they appear inline: `IS 2645`, `ASTM D543`.
- Quantities use Indian-style large-number grouping where relevant (`1,50,000 sq.ft.`) in dealer-facing screens.

### Bilingual cues (Hindi/English)
- English is the primary tongue. Hindi appears as **co-headlines** for emphasis, dealer-facing materials, and packaging glance-cues. Always in Devanagari script, never transliterated as "Hindi-in-Latin."
- Pairing pattern: short Hindi phrase on the eyebrow line OR as a second line under English H1. Example: `BUILD HARDER. LAST LONGER. / मज़बूत निर्माण, लंबा भरोसा.`
- Use `--font-deva` (Hind) for Devanagari. Weight-match Manrope so the two scripts feel like the same voice.

### Emoji & punctuation
- **No emoji** in product or marketing copy. They cheapen the engineering grade.
- **Em-dashes** (`—`) for asides; **middot** (`·`) as a separator in eyebrows and stat strips (e.g. `Low VOC · Green Chemistry`).
- **Arrows**: `→` for forward CTAs, `↗` for external/PDF links, `✓` for credentialing chips ("ISO ✓").

### Specific copy examples (good vs. avoid)

| ✅ Use | ❌ Avoid |
|---|---|
| "150+ formulations engineered for India's toughest conditions." | "Industry-leading product portfolio for your construction needs." |
| "TDS + MSDS with every product." | "Comprehensive documentation suite available upon request." |
| "Build Harder. Last Longer." | "Innovating tomorrow's construction." |
| "No resellers. No compromises." | "Direct-to-customer value proposition." |
| "Formulated for real conditions." | "Engineered with passion for excellence." |

### Product naming pattern
Format: `HARDEX <FAMILY-CODE> <NN>` — e.g. `HARDEX WP 42`, `HARDEX FH 110`, `HARDEX PUR 7`. Family codes: `WP` (waterproofing), `FH` (floor hardener), `EP` (epoxy), `PUR` (polyurethane), `RC` (repair compound), `AC` (admixture/curing), `PC` (protective coating). Always typeset in mono (`--font-mono`) when the code stands alone.

---

## VISUAL FOUNDATIONS

### Motif language — what this brand looks like
1. **The bubble dot** from the logo "x" is the brand's secret weapon. It scales up and down across compositions — as a single accent on a tagline, as a cluster behind a stat, as a quiet pattern at 8% opacity on hero blocks. **Always green or lime, never decorative grey.**
2. **Spec strips**: horizontal rows of monospace specs with middot separators are a recurring rhythm element. They reinforce the engineering grade without needing icons. Example: `LOW VOC · ISO ✓ · TDS+MSDS · SINCE 1980`.
3. **The slab** — large flat green blocks of pure `--hardex-green-500` running edge-to-edge. Used for hero sections and CTA panels. Generous breathing room inside; never crowded.
4. **Cement-warm canvas**: the page is never pure white. Default background is `--hardex-cement-50` (#FBFAF6) — a barely-warm off-white that reads as light but has weight. Pure white (`--bg-0`) is reserved for raised cards and inputs.
5. **Bricolage display**: large headlines use Bricolage Grotesque at heavy weight (700–800) with tight tracking. The optical-sizing variable axis is set per breakpoint via `font-optical-sizing: auto`.

### Color
- **Primary hero**: `--hardex-green-500` (#15C172). Used for the brand mark, primary buttons, key data callouts, focus states. NOT used as a body-text color.
- **Hero on dark**: `--hardex-green-400` (#2FD180) at minimum contrast 4.5:1 against `--hardex-cement-900`.
- **Lime accent**: `--hardex-lime-500` (#C5F532) is for high-energy moments — "NEW" tags, sustainability flags, energy diagrams. Never primary CTAs. Pair with green-800 ink, never with cement greys.
- **Neutrals are warm**: the cement ramp has a slight yellow-green undertone. Avoid mixing in cool greys — they will read as "broken" against the brand.
- **Signal**: solar (#FFC529), coral (#FF5A45), sky (#2BB0FF). Used only inside data UI (datasheet badges, dealer portal status pills, mobile app PPE alerts). NEVER decoratively.

### Typography
- **Display**: Bricolage Grotesque, 700/800, tight tracking (`--ls-tight`), `text-wrap: balance` on every multi-line H1/H2. Optical-sizing on.
- **Body**: Manrope 400/500/600. Body color is `--fg-1` (cement-900), never pure black.
- **Mono**: JetBrains Mono — exclusively for spec data, product codes, TDS values, and tabular numbers.
- **Devanagari**: Hind, weight-matched to Manrope for bilingual co-headlines.
- **Hierarchy rule**: never more than three sizes on one screen. Two if possible.

### Layout
- **Spacing rhythm**: built on a 4-px grid via `--s-1` through `--s-10`. Sections breathe with `--s-9` (96px) vertical between major blocks; cards group with `--s-5` (24px) internal padding.
- **Max content width**: 1200px for marketing; 1440px for dealer/portal dashboards. Edge-to-edge hero slabs are full-bleed.
- **Asymmetry over centering**: hero compositions favor left-aligned headlines with stat strips offset to the right. Centered layouts only for badges, modals, and signage moments.
- **Fixed elements**: top nav is fixed on marketing (translucent w/ blur on scroll). Mobile app has a fixed bottom tab bar. Portal sidebars are fixed.

### Backgrounds & textures
- **No gradients as decoration**. The only acceptable gradient is a *protection* gradient: a soft dark-to-transparent vignette behind hero text on photographic backgrounds, for legibility. NEVER blue-to-purple, sunset, or any AI-trope gradients.
- **Photography style**: high-contrast site photography — wet concrete, freshly-coated floors, contractors mid-application. **Warm-cool balanced**, not desaturated. Slight film grain optional. Avoid stock photos of generic businesspeople.
- **The bubble dot pattern** (8–15% opacity, green) is the one repeating-pattern background allowed. Apply sparingly: behind a single hero stat, behind a section footer.
- **Full-bleed images**: yes, on landing hero and product family covers. Always with a protection gradient at the bottom for the text overlay.

### Borders & dividers
- **Borders are crisp 1px lines** in `--border-1` (cement-200). For emphasis, 2px in `--border-strong`.
- **No double borders**. No inner-border-plus-shadow combos.
- Cards either have a 1px border OR a shadow, not both.

### Shadows & elevation
- Shadows are **warm and soft**, tinted with cement-900 alpha (never neutral grey-black). See `--shadow-sm` through `--shadow-xl` in `colors_and_type.css`.
- **Hero green glow** (`--shadow-glow`) is reserved for the primary CTA on landing hero and for the active state of dealer-portal "approved" pills. Use once per screen, max.
- Inset shadows (`--shadow-inset`) on raised buttons and chips create a subtle bevel — feels tactile, fits the industrial product context.

### Corner radii
- **Base radius is `--r-md` (12px)** for cards, inputs, dropdowns.
- **`--r-sm` (8px)** for chips, small badges, table cells.
- **`--r-pill`** for status pills, tags, the language toggle.
- **`--r-xl` (28px)** for hero CTA buttons and large feature cards.
- Sharp corners (`--r-none`) are used intentionally for spec-strip rows and the brand's monospaced data tables — they signal "data, not decoration."

### Cards
A standard HARDEX card is:
- `background: var(--bg-0)` (pure white) on the cement-tinted page
- `border-radius: var(--r-md)` (12px)
- `box-shadow: var(--shadow-sm)` for resting
- `box-shadow: var(--shadow-md)` on hover, with `transform: translateY(-2px)` (220ms)
- `padding: var(--s-5)` (24px)
- An eyebrow + a heading + a one-line description, in that order

### Buttons & interactive states
- **Primary** (`bg: --hardex-green-500`, `fg: white`): hover → `--hardex-green-600`, plus `--shadow-glow`. Active → `--hardex-green-700`, slight `scale(0.98)`.
- **Secondary** (`bg: --bg-0`, `border: 1px --border-strong`): hover → `bg: --hardex-cement-100`. Active → `bg: --hardex-cement-200`.
- **Ghost** (text only, green): hover → underline (1px) under text, NOT a background fill.
- **Press states use SCALE (0.98) not color shifts** for primary buttons, to reinforce tactility.
- **Focus rings**: 3px `--hardex-green-300`, outside the element. Always visible — accessibility is non-negotiable.

### Motion
- **Primary easing is `--ease-out`** (`cubic-bezier(0.16, 1, 0.3, 1)`) — soft, confident, never bouncy.
- **`--ease-spring`** is used **only** for the bubble-dot motif animation and for the "Added to cart / Sample requested" success tick. Sparingly.
- **Durations**: 140ms for hover state changes, 220ms for card lifts and panel slides, 420ms for page transitions and hero reveals.
- **Fades over slides** for most UI — slides only for nav drawers and onboarding sheets.
- **No infinite-loop animations** outside the marquee stat strip (the "150+ formulations · Pan-India · Since 1980" loop seen on the live site).

### Transparency & blur
- **Glass effect** on the marketing site's top nav after scroll: `background: rgba(251, 250, 246, 0.78)` + `backdrop-filter: blur(16px) saturate(140%)` + 1px bottom border.
- **Modals** sit on a `rgba(20, 19, 15, 0.55)` scrim with NO blur — keeps the focus crisp.
- Otherwise: do not stack transparent panels. The brand reads as solid, materially weighted.

### Imagery treatment
- Color photography is **warm-balanced**, never bleached or B&W.
- A faint green color cast in mid-tones is acceptable on product/application shots (mimics worksite lighting under shade cloth).
- **Crops favor textural close-ups**: wet membrane being rolled, troweling motion, gleaming epoxy floor reflecting overhead lights — material > people.
- People shots are environmental (contractor mid-task), not posed studio portraits.

---

## ICONOGRAPHY

### Approach
HARDEX iconography is **utility-first, line-based, monoline**. Icons in this system serve as **wayfinding and category markers**, not as decorative flourishes. The brand never uses emoji in product surfaces.

### Library
We standardize on **Lucide** (https://lucide.dev) — a clean, free-license, monoline icon set with consistent 24×24 viewBox, 1.5px stroke, rounded caps and joins. It pairs well with the geometric body type (Manrope) and the slight roundness of Bricolage Grotesque.

> **Substitution flag**: HARDEX does not ship a proprietary icon font or sprite. Lucide is our substitute. If the brand later commissions a custom set, swap the references in `ui_kits/**/*.jsx` — all icons are loaded by name (e.g. `<Icon name="droplet" />`).

### Usage rules
- **Stroke width is always 1.5px**. Never 1px (too fragile) or 2px (too thick for body alignment).
- **Default size is 20px** when adjacent to body text; **24px** in nav and tab bars; **32–48px** in feature panels.
- **Color**: icons take their color from `currentColor` — they inherit the surrounding text color. The only standalone-colored icon is the **bubble-dot logo motif**, which is always brand green or lime.
- **Solid-fill icons** are reserved for status indicators (filled check for "approved", filled droplet for "waterproof rating"). The default is always outlined.
- **No icons inside body paragraphs.** Icons live in: nav, button left-slots, feature cards, status pills, stat strips, and product-family covers.

### Unicode characters used as icon-like marks
- `→` `↗` `↓` for directional cues
- `✓` for credential chips (`ISO ✓`, `LOW VOC ✓`)
- `·` (middle dot) as a separator in eyebrows and stat strips
- `—` (em-dash) for editorial asides

These four marks are essentially part of the type system. Always typeset in the same family as the surrounding text.

### Where to find the icons we use
- Lucide CDN: `https://unpkg.com/lucide@latest`
- Selection of common HARDEX icons: `droplet`, `shield-check`, `flask-conical`, `hard-hat`, `truck`, `factory`, `file-text`, `clipboard-check`, `gauge`, `package`, `leaf`, `arrow-up-right`, `chevron-right`, `phone`, `mail-plus`, `map-pin`

### Logos & marks (in `assets/`)
- `assets/hardex-logo-white-on-green.jpg` — the original supplied lockup. White wordmark on teal-green ground with bubble dot on the "x" + "GREEN CHEMISTRY" tagline.
- Other logo variants (lockup on white, monogram only, vector SVG) — **NOT PROVIDED**. See CAVEATS at end.

---

## Index — what's in this folder

```
HARDEX Design System/
├── README.md                       ← you are here
├── SKILL.md                        ← portable skill manifest (use with Claude Code)
├── colors_and_type.css             ← all design tokens (colors, type, spacing, motion)
├── assets/                         ← logos & raw brand assets
│   └── hardex-logo-white-on-green.jpg
├── preview/                        ← cards rendered in the Design System tab
│   ├── colors-hero.html            ← hero green ramp
│   ├── colors-cement.html          ← cement neutrals
│   ├── colors-signal.html          ← signal palette (solar / coral / sky)
│   ├── colors-lime.html            ← lime accent
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-mono-and-deva.html
│   ├── type-scale.html
│   ├── spacing-radius.html
│   ├── elevation.html
│   ├── motion.html
│   ├── buttons.html
│   ├── chips-and-badges.html
│   ├── form-inputs.html
│   ├── cards-product.html
│   ├── stat-strip.html
│   ├── logo-lockups.html
│   └── motif-bubble.html
└── ui_kits/
    ├── marketing/                  ← public-facing marketing site
    │   ├── README.md
    │   ├── index.html
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── StatStrip.jsx
    │   ├── SolutionsGrid.jsx
    │   ├── FeaturedProducts.jsx
    │   ├── About.jsx
    │   ├── Footer.jsx
    │   └── ui.jsx                  ← shared primitives (Button, Eyebrow, Icon)
    ├── catalog/                    ← product catalog + datasheet pages
    │   ├── README.md
    │   ├── index.html
    │   ├── CatalogHeader.jsx
    │   ├── FilterRail.jsx
    │   ├── ProductGrid.jsx
    │   ├── ProductCard.jsx
    │   ├── DatasheetPanel.jsx
    │   └── ui.jsx
    └── portal/                     ← contractor / dealer portal
        ├── README.md
        ├── index.html
        ├── Sidebar.jsx
        ├── TopBar.jsx
        ├── DashboardCards.jsx
        ├── OrdersTable.jsx
        ├── SampleRequestModal.jsx
        └── ui.jsx
```

---

## CAVEATS — please help us iterate

**Read this before shipping.** A few important things you should know:

1. **Logo variants are missing.** We only have the *white-on-green* JPG. We need: (a) **vector SVG** of the wordmark, (b) **monogram / mark-only** version (just the "x" with bubbles), (c) **lockup on white / on dark** variants, (d) **horizontal vs stacked** options. Without these, the marketing site uses the white-on-green raster cropped into a green bar, which is workable but not ideal.
2. **Font substitution flag.** We use **Bricolage Grotesque** (display) + **Manrope** (body) + **JetBrains Mono** (mono) + **Hind** (Devanagari) from Google Fonts. If HARDEX has commissioned or licensed proprietary fonts, replace the `@import` in `colors_and_type.css` and re-test display sizes — Bricolage's optical sizing is unusual and most substitutes will look wider.
3. **The original brand teal is NOT used.** Per your direction, we lightened and brightened the green significantly. If anyone in marketing/leadership wants to keep the original `#1AA89A` teal as primary, ping us — it's a 5-minute swap.
4. **Iconography is Lucide, not custom.** No HARDEX-specific icon set was provided. Lucide is the substitute. A custom set is worth commissioning if the brand grows into more product surfaces.
5. **No real product photography.** UI kits use placeholder gradient blocks where photography would live. Please provide: hero application shots, product packaging photos, before/after of jobs, contractor environmental portraits.
6. **No Hindi co-headlines have been editorially reviewed.** The Devanagari examples in spec strips and headlines are *plausible direct translations* — they need a native Hindi copywriter pass before going to print or production.
7. **TDS/MSDS aesthetics are approximated.** Real TDS sheets follow regulatory formats. The datasheet card in `ui_kits/catalog` shows a digital *summary* of a TDS, not a regulatory-compliant document.
8. **Dealer portal flows are minimal.** Login → dashboard → orders → sample request. Anything beyond is not modeled (invoicing, dispatch tracking, technical query threads).

### Help us make this perfect
**Please send us:**
- Vector logo files (SVG/AI/EPS) — wordmark, mark only, lockup variants
- 8–15 production photos (application shots, packaging, contractors, factory floor)
- Approved Hindi copy for 2–3 hero statements
- Confirmation that the new lighter green ramp is going forward, OR a request to revert to the original teal
- Any existing brand guidelines, even informal (an internal PDF, a slide deck)

Once those land, this system goes from "strong reimagining" to "ready to ship."
