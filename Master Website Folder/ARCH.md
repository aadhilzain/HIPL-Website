# 🏗️ HARDEX INDIA WEBSITE - ARCHITECTURE REFERENCE

**Last Updated:** May 2026  
**Status:** Pre-deployment (DNS + hosting setup next)  
**Token Efficiency:** Config-first, modular, token-optimized

---

## 📋 Quick Navigation

- **For adding products:** `config/products-data.js`
- **For company info/colors:** `config/site-config.js`
- **For styling:** `css/styles.css`
- **For behavior:** `js/main.js` + component files
- **For iteration costs:** `TOKEN-COST-CALCULATOR.md`

---

## 🎯 Design Philosophy

**Core Principle:** All product and site content lives in **two source-of-truth files**. HTML/CSS/JS are **rendering shells** that consume this data.

| What | Where | Changes Auto-Update |
|------|-------|-------------------|
| Products | `config/products-data.js` | Homepage, Products Page, Navigation, SEO |
| Company Info | `config/site-config.js` | All pages, footer, navigation |
| Styling | `css/styles.css` | All pages |
| Behavior | `js/main.js` + components | All interactive elements |

**Benefit:** Edit one data file → updates propagate everywhere. No regenerating HTML.

---

## 📁 File Structure & Roles

```
hardex-website/
│
├── 📄 index.html                    # Homepage (HTML shell, renders from config)
├── 📄 products.html                 # Products catalog page (HTML shell)
│
├── 🔧 config/
│   ├── products-data.js             ⭐ SOURCE OF TRUTH #1: All products
│   └── site-config.js               ⭐ SOURCE OF TRUTH #2: Company info, colors, navigation
│
├── 🎨 css/
│   └── styles.css                   # Main stylesheet (responsive, token cost: 500-1000 per edit)
│
├── 💻 components/
│   ├── seo.js                       # Auto-generates meta tags from product data
│   ├── tooltip.js + tooltip.css      # Product hover/tap tooltips with TDS/MSDS links
│   ├── product-cards.js             # Renders product grid from products-data.js
│   └── [future: filter.js, etc]
│
├── 🚀 js/
│   └── main.js                      # Navigation, mobile menu, form behavior
│
├── 📚 assets/
│   ├── tds/                         # TDS PDF files (local or Drive links)
│   ├── msds/                        # MSDS PDF files (local or Drive links)
│   └── images/                      # Images (logo, backgrounds, etc)
│
└── 📖 Documentation
    ├── ARCH.md                      # THIS FILE: Architecture reference
    ├── README.md                    # User guide (add products, deploy, etc)
    ├── TOKEN-COST-CALCULATOR.md     # Token cost breakdown & iteration strategy
    ├── Bob-AI-System.md             # Chatbot system prompt (future integration)
    └── HARDEX-PROJECT-EXTRACTION.md # Project context (archived)
```

---

## 🔄 Data Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│  config/products-data.js (4 products in DB)         │
│  [Product objects with id, name, coverage, etc]     │
└──────────────┬──────────────────────────────────────┘
               │
       ┌───────┴─────────────────────────────────────────┐
       │                                                 │
       ▼                                                 ▼
┌──────────────────────┐                    ┌──────────────────────┐
│  components/         │                    │  components/         │
│  product-cards.js    │                    │  seo.js              │
│                      │                    │                      │
│  Renders: Product    │                    │  Generates: Meta     │
│  grid + cards        │                    │  tags per product    │
└──────────────┬───────┘                    └──────────┬───────────┘
               │                                      │
       ┌───────┴──────────────┬───────────────────────┴──────┐
       │                      │                               │
       ▼                      ▼                               ▼
   index.html          products.html              <meta> tags in <head>
   (Featured           (Full catalog,             (Auto-generated for
    cards)             organized by               SEO, social preview)
                       category)

┌─────────────────────────────────────────────────────┐
│  config/site-config.js (Company info, colors, nav) │
└──────────────┬──────────────────────────────────────┘
               │
       ┌───────┴────────────────────┐
       │                            │
       ▼                            ▼
   All HTML pages            css/styles.css
   (Footer, nav, etc)        (Color variables used)
```

---

## 💾 Source of Truth Files

### File 1: `config/products-data.js`

**Purpose:** Single source for all product information  
**Token Cost to Regenerate:** ~200 tokens  
**How to Edit:** Add/modify product objects

```javascript
const PRODUCTS = [
  {
    id: 'hardproof-coolcoat',           // Lowercase, hyphens
    name: 'HARDPROOF COOLCOAT',         // Display name
    icon: '🛡️',                         // Emoji
    category: 'Waterproofing',          // Main category
    subcategory: 'Heat Reflective',     // Type
    featured: true,                     // Homepage?
    
    // Product specs
    shortDesc: 'Elastomeric waterproofing coating with 350% elongation',
    application: 'Roofs, terraces, exterior walls',
    coverage: '1.5-2 kg/m²',
    
    // Downloads
    tds: '/assets/tds/hardproof-coolcoat.pdf',  // Local or Drive URL
    msds: null,                                   // null = not yet available
    
    // Auto-generates meta tags
    seo: {
      title: 'HARDPROOF COOLCOAT - Heat Reflective Waterproofing | Hardex India',
      description: '...',
      keywords: ['...']
    }
  }
  // ... more products
];
```

**Current Inventory (4 products):**
1. HARDPROOF COOLCOAT (waterproofing)
2. HARDFLOOR SL1000 (epoxy flooring)
3. HARDFLOOR MTP100 (primer)
4. PAVEGUARD WB (concrete sealer)

**To Add Products:** Copy template at bottom, paste above closing bracket. Token cost: ~200 per batch.

---

### File 2: `config/site-config.js`

**Purpose:** Company info, colors, navigation, feature flags  
**Token Cost to Regenerate:** ~100 tokens  
**How to Edit:** Update object properties

```javascript
const SITE_CONFIG = {
  company: {
    name: 'Hardex India Private Limited',
    shortName: 'Hardex India',
    tagline: 'GREEN CHEMISTRY',
    founded: '1980',
    description: '150+ formulations...',
    stats: [
      { number: '150+', label: 'Formulations' },
      { number: 'Pan-India', label: 'Distribution' }
    ]
  },
  
  contact: {
    email: 'info@hardexindia.com',
    phone: '+91-XXXX-XXXXXX',
    address: 'Kochi, Kerala, India'
  },
  
  colors: {
    primary: '#00BCD4',        // Change once, updates everywhere
    primaryDark: '#0097A7',
    accent: '#00E5FF',
    // ... more colors
  },
  
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: 'products.html' },
    // ... more nav items
  ],
  
  solutions: [
    { title: 'Waterproofing Systems', ... },
    // ... more solutions
  ],
  
  features: {
    showChat: false,
    showNewsletter: true,
    enableAnalytics: false
  },
  
  seo: {
    siteName: 'Hardex India',
    defaultTitle: '...',
    // ... SEO defaults
  }
};
```

**To Change:** Update properties directly. All HTML pages automatically reflect changes.

---

## 🧠 Component System

### `components/product-cards.js`

**Purpose:** Render product grid based on products-data.js  
**Inputs:** PRODUCTS array + SITE_CONFIG  
**Output:** HTML grid of product cards with tooltips

**Logic:**
1. Read PRODUCTS array
2. Filter by category (or show featured)
3. Generate card HTML
4. Attach tooltip event listeners
5. Insert into DOM

**Cost to Modify:** 300-500 tokens (depends on changes)

---

### `components/tooltip.js` + `components/tooltip.css`

**Purpose:** Show product details on hover/tap

**Features:**
- Desktop: hover to show
- Mobile: tap to show (slide up from bottom)
- Includes TDS/MSDS download buttons
- Styled with site colors from config

**Cost to Modify:** 300 tokens (styling), 200 tokens (behavior)

---

### `components/seo.js`

**Purpose:** Auto-generate `<meta>` tags from product data

**Logic:**
1. Read PRODUCTS array
2. For each product, extract SEO data
3. Inject `<meta name="description">`, `<meta property="og:title">`, etc.
4. Generate JSON-LD structured data for search engines

**Benefits:**
- Google/Bing understand products
- Social media previews work (Facebook, LinkedIn, Twitter)
- No manual meta tag maintenance

**Cost to Modify:** 300 tokens

---

## 🎨 Styling Architecture

### `css/styles.css`

**Design System:**
- **CSS Variables:** All colors, fonts, shadows defined at `:root`
- **Mobile-First:** Base styles = mobile, `@media` queries = desktop
- **Component Classes:** `.hero`, `.product-card`, `.tooltip`, etc.

**To Change Brand Color:**
```css
:root {
  --primary: #00BCD4;        /* Change once */
  --primary-dark: #0097A7;
  --primary-light: #00E5FF;
}
```

All elements using `var(--primary)` automatically update everywhere.

**Cost to Modify:** 500-1000 tokens (depends on scope)

---

## 🚀 HTML Shell Files

### `index.html` (Homepage)

**Structure:**
```html
<head>
  <script src="config/site-config.js"></script>     ← Load config first
  <script src="config/products-data.js"></script>   ← Load data second
  <link href="css/styles.css">
  <script src="components/seo.js" defer></script>   ← Generate SEO
</head>

<body>
  <nav id="nav">...</nav>
  <section id="home" class="hero">
    <div id="featured-products"></div>              ← Auto-populated by product-cards.js
  </section>
  <section id="solutions">...</section>
  <section id="about">...</section>
  <section id="contact">...</section>
  <footer>...</footer>
  
  <script src="js/main.js" defer></script>
</body>
```

**Key Points:**
- Scripts load in order: config → data → components → main.js
- HTML is a **static shell** — no logic
- Data binding happens via JavaScript
- SEO tags auto-injected into `<head>`

**Cost to Modify:** 150-500 tokens (avoid regenerating, edit specific sections)

---

### `products.html` (Catalog Page)

**Structure:**
- Similar to index.html
- Hero section with products header
- Grid section (`#all-products-grid`) auto-populated by product-cards.js
- Organized by category

**Cost to Modify:** 150-500 tokens

---

## 🔗 JavaScript Behavior (`js/main.js`)

**Responsibilities:**
1. **Navigation:** Mobile hamburger menu, smooth scroll, active link highlighting
2. **Forms:** Contact form submission (placeholder, needs backend)
3. **Animations:** Scroll effects, button interactions
4. **Event Listeners:** Attach event handlers to dynamically-rendered elements

**Cost to Modify:** 200-700 tokens (edit specific sections)

---

## 🛠️ Download Management (TDS/MSDS)

### Option 1: Local Files (Current Setup)

```
assets/
├── tds/
│   ├── hardproof-coolcoat.pdf
│   ├── hardfloor-sl1000.pdf
│   └── ...
└── msds/
    ├── hardproof-coolcoat.pdf
    └── ...
```

**Reference in products-data.js:**
```javascript
tds: '/assets/tds/hardproof-coolcoat.pdf'
```

**Pros:** Simple, no external dependencies  
**Cons:** File size limits on deployment

---

### Option 2: Google Drive Links

**Reference in products-data.js:**
```javascript
tds: 'https://drive.google.com/file/d/FILE_ID/view'
```

**Pros:** Unlimited storage, easy updates  
**Cons:** Google Drive limits (daily downloads), sharing settings needed

---

### Option 3: CDN (BunnyCDN, AWS S3)

**Reference in products-data.js:**
```javascript
tds: 'https://hardex-files.b-cdn.net/tds/hardproof-coolcoat.pdf'
```

**Pros:** Fast, reliable, scalable  
**Cons:** Small monthly cost ($1-5)

**Migration:** Just update URLs in products-data.js. No code changes.

---

## 🔄 Deployment Path

### Current State
- ✅ Domain: hardexindia.com (secured)
- ✅ Email package (hardexindia.com email)
- ❌ DNS configuration (pending)
- ❌ Hosting (Netlify/Vercel recommended)

### Next Steps
1. **Configure DNS** (domain registrar → Netlify/Vercel)
2. **Deploy to Netlify** (drag-drop entire folder)
3. **Verify:** Visit hardexindia.com
4. **Monitor:** Google Search Console, analytics

### Hosting Options

| Option | Cost | Setup Time | Scaling |
|--------|------|-----------|---------|
| **Netlify** | FREE | 2 min | Auto |
| **Vercel** | FREE | 2 min | Auto |
| **GitHub Pages** | FREE | 5 min (Git needed) | Manual |

**Recommendation:** Netlify (simplest, auto-scaling, edge caching)

---

## 💾 Token Cost Reference

### Cheap Operations (~100-200 tokens)

```
Add 1 product            → edit products-data.js
Change company info      → edit site-config.js
Update hero text         → edit index.html (specific lines)
Change button color      → edit site-config.js colors
Update navigation        → edit site-config.js navigation
```

### Moderate Operations (~300-600 tokens)

```
Change tooltip style     → edit tooltip.css
Redesign product cards   → edit product-cards.js + css
Add mobile menu animation → edit main.js
Change form behavior     → edit main.js
```

### Expensive Operations (~1000-3000+ tokens)

```
Add new page section     → edit HTML + CSS
Build new feature        → multiple file changes
Major design overhaul    → regenerate CSS, HTML
```

**Golden Rule:** Always edit data/config files, not HTML. Edit specific lines, not entire files.

---

## 🎯 Next Priorities (After Deployment)

### Phase 1: Core Product Presence (High Priority)
1. **Individual product detail pages** (`/products/hardproof-coolcoat/index.html`)
   - Full specs, application guide, coverage calc
   - Estimated token cost: 2-3K (one-time, then reuse template)

2. **Consultant/Architect Resources** (High Priority - Specification Strategy)
   - Technical specs, test reports, reference projects
   - Estimated token cost: 1-2K

### Phase 2: Credibility & Proof (Medium Priority)
3. **Reference Projects Showcase**
   - Before/after, contractor testimonials
   - Estimated token cost: 800-1K

4. **Lab Test Reports & Certifications**
   - Pending consultant outreach to determine which tests matter
   - Estimated token cost: Variable

### Phase 3: Engagement (Lower Priority)
5. **Integrate Bob chatbot widget** (currently disabled)
   - Uses Claude API via existing `[API_HOOK]` placeholder
   - Estimated token cost: 500 (integration only, logic already exists)

6. **Blog/Technical Articles**
   - Floor failure case studies, waterproofing deep-dives
   - Estimated token cost: Variable

---

## 🧪 Testing Checklist

Before deploying changes:

- [ ] Products appear on homepage (featured)
- [ ] Products appear on products.html (full catalog)
- [ ] Tooltips work (hover on desktop, tap on mobile)
- [ ] TDS/MSDS links work
- [ ] Navigation links work
- [ ] Mobile menu works
- [ ] SEO tags are in `<head>` (check page source)
- [ ] Footer links work
- [ ] Form doesn't break (backend not yet integrated)

---

## 🤖 Claude Code Integration Guide

### How to Ask Claude for Changes (Optimal Token Usage)

**❌ WASTEFUL:**
```
"Regenerate index.html"
"Update the whole site with new product"
"Fix the styling"
```

**✅ EFFICIENT:**
```
"In products-data.js, add this product: {...}"
"Change line 45 of index.html from 'X' to 'Y'"
"In site-config.js, update colors.primary to '#FF5722'"
"In tooltip.css, increase width from 320px to 400px"
```

### General Workflow

1. **Ask for config change** (cheapest: ~100-200 tokens)
   - Example: "Add 5 new products to products-data.js"
   - This auto-updates everywhere

2. **Ask for component fix** (moderate: ~300-600 tokens)
   - Example: "Make product cards wider on mobile"
   - This affects multiple pages

3. **Ask for HTML/CSS update** (expensive: avoid if possible)
   - Example: "Change homepage hero section"
   - Regenerate only if necessary, ask Claude to edit specific lines instead

4. **Test locally** (zero tokens)
   - Download files
   - Open index.html in browser
   - Verify changes before deploying

---

## 🔗 Quick Links

- **Edit Products:** `config/products-data.js`
- **Edit Company Info:** `config/site-config.js`
- **Edit Styles:** `css/styles.css`
- **Check Costs:** `TOKEN-COST-CALCULATOR.md`
- **User Guide:** `README.md`

---

## 📞 Support Questions

**Q: How do I add a new product?**  
A: Edit `config/products-data.js`, add object to PRODUCTS array. Cost: ~200 tokens.

**Q: How do I change the brand color?**  
A: Edit `config/site-config.js`, change `colors.primary`. Cost: ~100 tokens.

**Q: How do I add a new page?**  
A: Copy `products.html`, update navigation links. Cost: ~300 tokens.

**Q: How do I connect the contact form?**  
A: Use Formspree (free) or Netlify Forms. Cost: 0 tokens (external service).

**Q: How do I update TDS/MSDS links?**  
A: Edit `products-data.js`, change `tds: URL`. Cost: ~100 tokens per batch.

**Q: Will my token budget run out?**  
A: No. At 200 tokens per edit, you can add 575 products or make 1,150+ tweaks with 115K tokens remaining.

---

**Built for token efficiency. Designed for scale. Ready for specification status.**
