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
      background: var(--bg-0, #fff);
      border-bottom: 1px solid var(--border-1, #E8E4D9);
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
      border: none; background: transparent;
      color: var(--fg-3, #8C8676);
      font-family: var(--font-body, 'Manrope', sans-serif);
      font-size: 13px; font-weight: 500; letter-spacing: 0.01em;
      cursor: pointer; white-space: nowrap;
      border-bottom: 2px solid transparent;
      transition: all 0.18s ease; flex-shrink: 0;
    }
    .filter-tab:hover { color: var(--fg-1, #14130F); background: var(--bg-2, #E8E4D9); }
    .filter-tab.active { color: var(--hardex-green-600, #0EA160); border-bottom-color: var(--hardex-green-500, #15C172); }

    /* ── Grid ── */
    .products-catalog {
      max-width: 1400px; margin: 0 auto; padding: 40px;
    }
    .category-section { margin-bottom: 50px; }
    .category-section-title {
      font-family: var(--font-display, 'Bricolage Grotesque', sans-serif);
      font-size: 18px; font-weight: 700; letter-spacing: -0.01em;
      color: var(--fg-1, #14130F); margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--hardex-green-500, #15C172);
    }
    .category-count {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 11px; color: var(--fg-3, #8C8676); margin-left: 10px;
      font-weight: 400;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px; margin-top: 20px;
    }

    /* ── Card ── */
    .product-card {
      background: var(--bg-0, #fff);
      border: 1px solid var(--border-1, #E8E4D9);
      border-radius: var(--r-md, 12px); padding: 20px;
      transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
      cursor: pointer;
      display: flex; flex-direction: column;
      text-decoration: none; color: inherit;
    }
    .product-card:hover {
      border-color: var(--hardex-green-300, #6FE5A6);
      box-shadow: var(--shadow-md, 0 6px 18px rgba(20,19,15,0.07));
      transform: translateY(-2px);
    }
    .product-icon  { font-size: 28px; margin-bottom: 12px; display: block; }
    .product-subcategory {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 9px; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--hardex-green-600, #0EA160);
      margin-bottom: 6px; font-weight: 500;
    }
    .product-name {
      font-family: var(--font-display, 'Bricolage Grotesque', sans-serif);
      font-size: 15px; font-weight: 700; letter-spacing: -0.01em;
      color: var(--fg-1, #14130F); margin-bottom: 10px;
      line-height: 1.25;
    }
    .product-desc {
      font-family: var(--font-body, 'Manrope', sans-serif);
      font-size: 12px; line-height: 1.55;
      color: var(--fg-2, #3D3B33); margin-bottom: 12px; flex-grow: 1;
    }
    .product-coverage {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 10px; color: var(--fg-3, #8C8676);
      margin-bottom: 12px;
      border-top: 1px solid var(--border-1, #E8E4D9); padding-top: 12px;
    }
    .product-cta {
      color: var(--hardex-green-600, #0EA160); font-weight: 600;
      font-size: 11px; display: flex;
      align-items: center; gap: 6px;
      font-family: var(--font-body, 'Manrope', sans-serif);
    }

    /* ── Empty / loading ── */
    .products-empty {
      text-align: center; padding: 60px 20px; color: var(--fg-3, #8C8676);
    }
    .products-empty-title {
      font-family: var(--font-display, 'Bricolage Grotesque', sans-serif);
      font-size: 20px; font-weight: 700; color: var(--fg-1, #14130F); margin-bottom: 10px;
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
    this.products   = window.PRODUCTS || [];
    this.categories = this._extractCategories();
    this.current    = '';
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
    var catalog = document.querySelector('.products-catalog') ||
                  document.getElementById('all-products-grid');
    if (!catalog) return;

    var bar = document.createElement('div');
    bar.className = 'category-filter-bar';
    bar.innerHTML = '<div class="filter-container" id="hx-filter-tabs"></div>';
    catalog.parentNode.insertBefore(bar, catalog);

    var container = document.getElementById('hx-filter-tabs');
    var self = this;

    var allTab = this._makeTab('All Products', '', true);
    allTab.addEventListener('click', function () { self._switch(''); });
    container.appendChild(allTab);

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
      var slug  = this.current;
      var items = this.products.filter(function (p) { return toSlug(p.category) === slug; });
      if (!items.length) {
        html = '<div class="products-empty"><div class="products-empty-title">No products found</div>' +
               '<p>Try a different category or <a href="products.html" style="color:var(--hardex-green-600)">view all products</a>.</p></div>';
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
