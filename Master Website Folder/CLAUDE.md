# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Overview

**Hardex India Website** — A token-optimized static website for a construction chemicals company. Design philosophy: all content lives in **two source-of-truth config files**, with HTML/CSS/JS as rendering shells that consume this data.

**Key Files:**
- `config/products-data.js` — All product info (add/edit products here)
- `config/site-config.js` — Company info, colors, navigation (site-wide defaults)
- `css/styles.css` — Main stylesheet (responsive, CSS variables for theming)
- `js/main.js` — Navigation, forms, event handling
- `components/` — Reusable JavaScript components (product-cards, seo, tooltips)

**Current Status:** Pre-deployment (all features working, DNS + hosting next)

---

## Common Development Tasks

### Adding a Product

Edit `config/products-data.js`. Copy the template at the bottom of the PRODUCTS array:

```javascript
{
  id: 'lowercase-hyphenated-id',
  name: 'PRODUCT NAME',
  icon: '🛡️',
  category: 'Category',
  subcategory: 'Type',
  featured: true/false,
  shortDesc: 'Brief description',
  application: 'Where it goes',
  coverage: '1.5-2 kg/m²',
  tds: '/assets/tds/product-id.pdf',  // or null
  msds: null,
  seo: {
    title: 'SEO Title | Hardex India',
    description: 'Meta description...',
    keywords: ['waterproofing', '...']
  }
}
```

**Result:** Auto-updates homepage, products page, navigation dropdowns, SEO tags. **Cost:** ~200 tokens per batch.

---

### Changing Company Info

Edit `config/site-config.js`:
- Company name, tagline, founding year → `company` object
- Contact details → `contact` object
- Colors (primary, dark, accent) → `colors` object
- Navigation items → `navigation` array
- Hours → `hours` object

**Result:** All pages automatically reflect changes. **Cost:** ~100 tokens.

---

### Updating Site-Wide Color Scheme

1. Edit `config/site-config.js` → `colors` object
2. CSS will automatically use these via JavaScript or reference `css/styles.css` CSS variables

If editing CSS directly, update `:root` variables in `css/styles.css` (e.g., `--primary: #00BCD4`).

**Cost:** ~100 tokens.

---

### Adding a New Page

1. Copy `products.html` or `index.html`
2. Update the `<title>`, hero section, main content
3. Keep `<script>` tags for config and components
4. Add link to `config/site-config.js` navigation array

**Cost:** ~300-500 tokens.

---

### Modifying Styling

Edit `css/styles.css`:
- **Component styles:** `.hero`, `.product-card`, `.tooltip`, etc.
- **CSS Variables:** All colors defined at `:root` — change once, updates everywhere
- **Responsive:** Mobile-first approach, `@media` queries for desktop

**Cost:** 300-1000 tokens depending on scope.

---

### Testing Changes Locally

Before deploying:
1. Open `index.html` in a browser (or use a local server)
2. Check featured products appear → ✓
3. Navigate to `products.html` → check full catalog by category
4. Test mobile menu (resize to <768px)
5. Hover/tap product cards → tooltips show TDS/MSDS links
6. Click navigation links → smooth scroll and active highlighting
7. Check page source (`Ctrl+U`) → verify `<meta>` SEO tags are present

---

## Architecture Principles

### Data-Driven Rendering

```
products-data.js → product-cards.js → index.html + products.html
site-config.js → All pages (footer, nav, colors, company info)
```

When you edit `products-data.js`, these components automatically re-render:
- Homepage featured product grid
- Products page catalog (by category)
- Navigation dropdown (Products section)
- SEO meta tags for each product

### Component System

| Component | Purpose | Cost to Modify |
|-----------|---------|----------------|
| `product-cards.js` | Renders product grid from data | 300-500 tokens |
| `seo.js` | Auto-generates meta tags | 300 tokens |
| `tooltip.js` + `tooltip.css` | Product hover/tap details | 200-300 tokens |
| `shared-nav.js` | Navigation injection | 200-400 tokens |

### Script Load Order (Important!)

```html
<head>
  <script src="config/site-config.js"></script>     <!-- 1st: globals -->
  <script src="config/products-data.js"></script>   <!-- 2nd: data -->
  <link href="css/styles.css">                      <!-- CSS -->
  <script src="components/seo.js" defer></script>   <!-- 3rd: SEO -->
</head>

<body>
  <!-- HTML content -->
  <script src="js/main.js" defer></script>          <!-- 4th: behavior -->
</body>
```

Mis-ordered scripts → undefined variables. Always load config before data before components.

---

## File Structure Reference

```
hardex-website/
├── *.html                    # Shell pages (index, products, solutions, etc.)
├── config/
│   ├── products-data.js      ⭐ Products (add/edit here)
│   ├── products-config.js    # Product category labels/icons
│   ├── solutions-data.js     # Solutions page content
│   ├── dealers-data.js       # Dealer info
│   └── site-config.js        ⭐ Company info, colors, navigation
├── components/
│   ├── shared-nav.js         # Navigation component
│   ├── product-cards.js      # Product grid renderer
│   ├── seo.js                # Auto-generated meta tags
│   ├── tooltip.js            # Product detail tooltips
│   └── tooltip.css
├── css/
│   ├── styles.css            # Main stylesheet
│   └── pages.css             # Page-specific styles
├── js/
│   └── main.js               # Global behavior
├── assets/
│   ├── images/               # Images (logo, backgrounds)
│   ├── icons/                # Icon files
│   └── tds/, msds/           # Product PDFs
└── Documentation/
    ├── ARCH.md               # Detailed architecture (read if you need context)
    └── TOKEN-COST-CALCULATOR.md  # Iteration cost breakdown
```

---

## Key Concepts

### "Source of Truth" Pattern

The site uses **only 2 source-of-truth files**:
1. **products-data.js** — Edit this. Every product reference everywhere updates automatically.
2. **site-config.js** — Edit this. Company colors, names, navigation, all pages update.

**Never hardcode product names or company info into HTML.** Reference config instead.

### CSS Variables for Theming

All brand colors are CSS variables at `:root`:
```css
:root {
  --primary: #00A99D;
  --primary-dark: #007A72;
  --primary-light: #00D9CC;
  /* ... more colors ... */
}
```

Change `--primary` → every `.btn-primary`, `border-color: var(--primary)`, etc. updates everywhere.

### Mobile-First Responsive Design

- Base styles = mobile view
- `@media (min-width: 768px)` = tablet/desktop adjustments
- **Always test on mobile.** Resize browser to <480px and verify layout.

---

## Deployment

### Current Status
- ✅ Domain secured: `hardexindia.com`
- ❌ DNS configured (pending)
- ❌ Hosted (recommended: Netlify or Vercel)

### Deploy to Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag-drop entire website folder
4. Configure DNS at your domain registrar to point to Netlify
5. Done — auto-scaling, edge caching included

### Deploy to Vercel
Same as Netlify, but with Vercel UI.

### GitHub Pages (if Git available)
Push entire folder to GitHub, enable Pages in repo settings.

---

## Token Cost Guidance

When asking Claude for changes, **be specific**:

✅ **Efficient:** "Add product to products-data.js" (~200 tokens)  
✅ **Efficient:** "Change site-config.js colors.primary to #FF5722" (~100 tokens)  
✅ **Efficient:** "Update line 45 of index.html" (~150 tokens)  

❌ **Wasteful:** "Regenerate index.html" (~1000+ tokens)  
❌ **Wasteful:** "Update the whole site" (~3000+ tokens)  

**Rule:** Edit specific lines in data/config files. Avoid regenerating entire HTML files.

---

## Troubleshooting

### Products don't appear on homepage
- Check `featured: true` in `products-data.js`
- Verify `config/products-data.js` loads before `components/product-cards.js`
- Check browser console for errors

### Navigation links inactive
- Check `config/site-config.js` navigation array matches `*.html` filenames
- Verify `js/main.js` page detection logic (detects current page from URL)

### Tooltips don't show
- Ensure `components/tooltip.js` and `tooltip.css` load
- Check `products-data.js` has `tds` or `msds` URLs
- Verify CSS z-index isn't buried (tooltip has `z-index: 1000`)

### SEO meta tags missing
- Verify `components/seo.js` has `seo` object in product data
- Check page source (`Ctrl+U`) for `<meta>` tags — they won't render visually
- Google/social media may cache old tags — wait 24h or use their preview tools

---

## Related Documentation

For deeper context, see:
- **ARCH.md** — Complete architecture reference, component details, deployment paths
- **TOKEN-COST-CALCULATOR.md** — Token cost breakdown and iteration strategy
- **bob.html** — Chatbot integration (currently disabled)

---

## Quick Reference

| Task | File | Cost |
|------|------|------|
| Add product | `config/products-data.js` | 200 tokens |
| Change company name | `config/site-config.js` | 100 tokens |
| Change primary color | `config/site-config.js` | 100 tokens |
| Update product category | `config/products-config.js` | 100 tokens |
| Modify button styles | `css/styles.css` | 300-500 tokens |
| Add navigation link | `config/site-config.js` | 100 tokens |
| Redesign product cards | `components/product-cards.js` + CSS | 400-600 tokens |
| Add new page | Copy HTML, update nav | 300-500 tokens |

---

**Built for token efficiency, designed for scale, ready for production.**
