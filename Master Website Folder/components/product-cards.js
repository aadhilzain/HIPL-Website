// ═══════════════════════════════════════════════════════════════════
// HARDEX — PRODUCT CARDS RENDERER
// Renders the full product catalog on products.html
// Depends on: window.PRODUCTS (from config/products-data.js)
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Helpers ──────────────────────────────────────────────────────
  function toSlug(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }

  // ── Styles injected once ─────────────────────────────────────────
  var CSS = `
    /* ── Filter bar ── */
    .category-filter-bar {
      position: sticky; top: 64px;
      background: #fff;
      border-bottom: 2px solid #e0e0e0;
      z-index: 100;
    }
    .filter-container {
      max-width: 1400px; margin: 0 auto;
      display: flex; gap: 0;
      overflow-x: auto; scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .filter-container::-webkit-scrollbar { display: none; }
    .filter-tab {
      padding: 14px 24px;
      border: none; background: #fff;
      color: #666;
      font-family: 'Bebas Neue', serif;
      font-size: 13px; letter-spacing: 0.05em;
      cursor: pointer; white-space: nowrap;
      text-transform: uppercase;
      border-bottom: 3px solid transparent;
      transition: all 0.2s ease; flex-shrink: 0;
    }
    .filter-tab:hover { background: #f5f5f5; color: #00a99d; }
    .filter-tab.active { color: #00a99d; border-bottom-color: #00a99d; }

    /* ── Grid ── */
    .products-catalog {
      max-width: 1400px; margin: 0 auto; padding: 40px;
    }
    .category-section { margin-bottom: 50px; }
    .category-section-title {
      font-family: 'Bebas Neue', serif;
      font-size: 18px; letter-spacing: 0.05em;
      color: #1a1a1a; margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 2px solid #00a99d;
      text-transform: uppercase;
    }
    .category-count {
      font-family: 'DM Mono', monospace;
      font-size: 11px; color: #999; margin-left: 10px;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px; margin-top: 20px;
    }

    /* ── Card ── */
    .product-card {
      background: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 4px; padding: 20px;
      transition: all 0.25s ease;
      cursor: pointer;
      display: flex; flex-direction: column;
      text-decoration: none; color: inherit;
    }
    .product-card:hover {
      border-color: #00a99d;
      box-shadow: 0 4px 12px rgba(0,169,157,0.15);
      transform: translateY(-2px);
    }
    .product-icon  { font-size: 32px; margin-bottom: 12px; display: block; }
    .product-subcategory {
      font-family: 'DM Mono', monospace;
      font-size: 9px; letter-spacing: 0.1em;
      text-transform: uppercase; color: #00a99d;
      margin-bottom: 6px; font-weight: 600;
    }
    .product-name {
      font-family: 'Bebas Neue', serif;
      font-size: 15px; letter-spacing: 0.05em;
      color: #1a1a1a; margin-bottom: 10px;
      line-height: 1.3; text-transform: uppercase;
    }
    .product-desc {
      font-size: 12px; line-height: 1.5;
      color: #666; margin-bottom: 12px; flex-grow: 1;
    }
    .product-coverage {
      font-family: 'DM Mono', monospace;
      font-size: 10px; color: #999;
      margin-bottom: 12px;
      border-top: 1px solid #e8e8e8; padding-top: 12px;
    }
    .product-cta {
      color: #00a99d; font-weight: 600;
      font-size: 11px; display: flex;
      align-items: center; gap: 6px;
    }

    /* ── Empty / loading ── */
    .products-empty {
      text-align: center; padding: 60px 20px; color: #999;
    }
    .products-empty-title {
      font-family: 'Bebas Neue', serif;
      font-size: 20px; color: #1a1a1a; margin-bottom: 10px;
    }

    /* ── Responsive ── */
    @media (max-width: 1200px) { .products-grid { grid-template-columns: repeat(3,1fr); gap: 20px; } }
    @media (max-width: 768px)  {
      .products-grid { grid-template-columns: repeat(2,1fr); gap: 16px; }
      .filter-tab   { padding: 12px 16px; font-size: 12px; }
      .product-card { padding: 16px; }
      .products-catalog { padding: 24px 16px; }
    }
    @media (max-width: 480px)  { .products-grid { grid-template-columns: 1fr; } }
  `;

  function injectStyles() {
    if (document.getElementById('hx-product-cards-css')) return;
    var s = document.createElement('style');
    s.id  = 'hx-product-cards-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // ── Renderer class ───────────────────────────────────────────────
  function ProductsRenderer() {
    this.products  = window.PRODUCTS || [];
    this.categories = this._extractCategories();
    this.current   = '';   // active category slug, '' = all
    this._init();
  }

  ProductsRenderer.prototype._extractCategories = function () {
    var seen = {}, cats = [];
    this.products.forEach(function (p) {
      if (p.category && !seen[p.category]) {
        seen[p.category] = true;
        cats.push(p.category);
      }
    });
    return cats.sort();
  };

  ProductsRenderer.prototype._init = function () {
    injectStyles();
    this._injectFilterBar();
    this._loadFromURL();
    var self = this;
    window.addEventListener('popstate', function () { self._loadFromURL(); });
  };

  // ── Filter bar ───────────────────────────────────────────────────
  ProductsRenderer.prototype._injectFilterBar = function () {
    // Insert the sticky bar before .products-catalog
    var catalog = document.querySelector('.products-catalog') ||
                  document.getElementById('all-products-grid');
    if (!catalog) return;

    var bar = document.createElement('div');
    bar.className = 'category-filter-bar';
    bar.innerHTML = '<div class="filter-container" id="hx-filter-tabs"></div>';
    catalog.parentNode.insertBefore(bar, catalog);

    var container = document.getElementById('hx-filter-tabs');
    var self = this;

    // "All" tab
    var allTab = this._makeTab('All Products', '', true);
    allTab.addEventListener('click', function () { self._switch(''); });
    container.appendChild(allTab);

    // Category tabs
    this.categories.forEach(function (cat) {
      var tab = self._makeTab(cat, toSlug(cat), false);
      tab.addEventListener('click', function () { self._switch(toSlug(cat)); });
      container.appendChild(tab);
    });
  };

  ProductsRenderer.prototype._makeTab = function (label, slug, active) {
    var btn = document.createElement('button');
    btn.className    = 'filter-tab' + (active ? ' active' : '');
    btn.textContent  = label;
    btn.dataset.slug = slug;
    return btn;
  };

  // ── Navigation ───────────────────────────────────────────────────
  ProductsRenderer.prototype._switch = function (slug) {
    this.current = slug;
    this._updateTabs();
    this._render();
    var url = slug ? ('?cat=' + slug) : window.location.pathname;
    window.history.replaceState({}, '', url);
    var grid = document.querySelector('.products-catalog') ||
               document.getElementById('all-products-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  ProductsRenderer.prototype._loadFromURL = function () {
    var params = new URLSearchParams(window.location.search);
    this.current = params.get('cat') || '';
    this._updateTabs();
    this._render();
  };

  ProductsRenderer.prototype._updateTabs = function () {
    var current = this.current;
    document.querySelectorAll('.filter-tab').forEach(function (tab) {
      tab.classList.toggle('active', (tab.dataset.slug || '') === current);
    });
  };

  // ── Grid rendering ───────────────────────────────────────────────
  ProductsRenderer.prototype._render = function () {
    var grid = document.querySelector('#all-products-grid') ||
               document.querySelector('.products-catalog');
    if (!grid) return;

    var html = '';

    if (!this.current) {
      // All — grouped by category
      var self = this;
      this.categories.forEach(function (cat) {
        var items = self.products.filter(function (p) { return p.category === cat; });
        html += '<div class="category-section">';
        html += '<h2 class="category-section-title">' + cat +
                '<span class="category-count">' + items.length + ' products</span></h2>';
        html += '<div class="products-grid">' +
                items.map(function (p) { return self._card(p); }).join('') +
                '</div></div>';
      });
    } else {
      // Single category — flat grid
      var slug = this.current;
      var items = this.products.filter(function (p) { return toSlug(p.category) === slug; });
      if (!items.length) {
        html = '<div class="products-empty"><div class="products-empty-title">No products found</div>' +
               '<p>Try a different category or <a href="products.html" style="color:#00a99d">view all products</a>.</p></div>';
      } else {
        html = '<div class="products-grid">' +
               items.map(this._card.bind(this)).join('') + '</div>';
      }
    }

    grid.innerHTML = html;
  };

  // ── Card template ────────────────────────────────────────────────
  ProductsRenderer.prototype._card = function (p) {
    return '<a href="product-detail.html?id=' + encodeURIComponent(p.id) + '" class="product-card">' +
      '<span class="product-icon">'         + (p.icon || '🧪') + '</span>' +
      '<div class="product-subcategory">'   + (p.subcategory || '') + '</div>' +
      '<h3 class="product-name">'           + p.name + '</h3>' +
      '<p class="product-desc">'            + (p.shortDesc || '') + '</p>' +
      '<div class="product-coverage">Coverage: ' + (p.coverage || 'Contact us') + '</div>' +
      '<span class="product-cta">View Details →</span>' +
      '</a>';
  };

  // ── Boot ─────────────────────────────────────────────────────────
  function boot() {
    if (typeof window.PRODUCTS === 'undefined' || !window.PRODUCTS.length) {
      // PRODUCTS not loaded yet — wait a tick and retry once
      setTimeout(function () {
        if (typeof window.PRODUCTS !== 'undefined') new ProductsRenderer();
        else console.warn('[product-cards] window.PRODUCTS not found. Check config/products-data.js is loaded first.');
      }, 50);
      return;
    }
    new ProductsRenderer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
