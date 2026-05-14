# Catalog UI Kit

Product catalog page with side-pinned datasheet panel. Users browse families, search by code, click a card to open its TDS in the right rail.

## Layout
- Sticky top header with brand, primary nav, search command bar (⌘K), CTA
- 3-column body: filter rail (left) · product grid (center) · datasheet panel (right, sticky)

## Components
- `CatalogApp.jsx` — exports `<CatalogApp>` which composes:
  - `<CatalogHeader>` — brand + nav + search
  - `<FilterRail>` — family filter, tag chips, custom-formulation CTA card
  - `<ProductGrid>` — 2-up product cards with code/family/tags
  - `<DatasheetPanel>` — sticky right panel: typical spec table, sample CTA, TDS/MSDS download

The catalog re-uses `<Wordmark>` from `../marketing/ui.jsx`. All other UI is local.

## Interactions
- Family filter persists; product grid filters live
- Search filters by title + code + description (case-insensitive)
- Click any product card → opens its datasheet panel
- Datasheet has Request sample / Download TDS / Download MSDS CTAs (placeholder)

## Data
8 representative products covering Waterproofing, Floor Hardener, Epoxy, Repair, Protective coating, Admixture. Specs are realistic but illustrative — not regulatory documents.
