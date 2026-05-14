// ═══════════════════════════════════════════════════════════════════
// HARDEX SHARED NAV COMPONENT
// Injects navigation into #shared-nav on every page.
// Dropdowns: Solutions (static) + Products (from PRODUCTS data)
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Product category map ─────────────────────────────────────────
  // Icons and slugs for the 8 main categories
  const PRODUCT_CATEGORIES = [
    { label: 'Waterproofing',       icon: '💧', slug: 'waterproofing' },
    { label: 'Flooring Systems',    icon: '🏭', slug: 'flooring-systems' },
    { label: 'Repair Systems',      icon: '🔧', slug: 'repair-systems' },
    { label: 'Epoxy Systems',       icon: '🔷', slug: 'epoxy-systems' },
    { label: 'Concrete Admixtures', icon: '🧱', slug: 'concrete-admixtures' },
    { label: 'Surface Protection',  icon: '🛡️', slug: 'surface-protection' },
    { label: 'Decorative Concrete', icon: '✨', slug: 'decorative-concrete' },
    { label: 'Sports Flooring',     icon: '🏃', slug: 'sports-flooring' },
  ];

  // ── Solutions ───────────────────────────────────────────────────
  const SOLUTION_ITEMS = [
    { label: 'Roofing & Terraces',      href: 'solutions-terrace-waterproofing.html', icon: '🏠' },
    { label: 'Industrial Floors',        href: 'solution-industrial-flooring.html',     icon: '🏭' },
    { label: 'Basement Waterproofing',   href: 'solution-basement-waterproofing.html',  icon: '🏗️' },
    { label: 'Bathroom & Wet Areas',     href: 'solution-bathroom-waterproofing.html',  icon: '🚿' },
    { label: 'Water Tanks & Pools',      href: 'solution-water-tanks.html',             icon: '💧' },
    { label: 'Facade Protection',        href: 'solution-protective-coatings.html',     icon: '🏢' },
    { label: 'Concrete Repair',          href: 'solution-concrete-repair.html',         icon: '🔧' },
    { label: 'Sports Flooring',          href: 'solution-sports-flooring.html',         icon: '🎾' },
    { label: 'Decorative Concrete',      href: 'solution-decorative-concrete.html',     icon: '✨' },
  ];

  // ── Detect current page for active states ────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return href && (page === href || page === href.split('#')[0]);
  }

  // ── Build dropdown items HTML ────────────────────────────────────
  function buildProductsDropdown() {
    return PRODUCT_CATEGORIES.map(cat => `
      <a class="nav-drop-item" href="products.html?cat=${cat.slug}">
        <span class="nav-drop-icon">${cat.icon}</span>
        <span>${cat.label}</span>
      </a>
    `).join('') + `
      <div class="nav-drop-divider"></div>
      <a class="nav-drop-item nav-drop-all" href="products.html">
        <span class="nav-drop-icon">📋</span>
        <span>All Products</span>
      </a>
    `;
  }

  function buildSolutionsDropdown() {
    return SOLUTION_ITEMS.map(s => `
      <a class="nav-drop-item" href="${s.href}">
        <span class="nav-drop-icon">${s.icon}</span>
        <span>${s.label}</span>
      </a>
    `).join('');
  }

  // ── Nav HTML ─────────────────────────────────────────────────────
  const navHTML = `
    <nav class="hn" id="hn">
      <div class="hn-inner">

        <!-- Logo -->
        <a href="index.html" class="hn-logo">
          <span class="hn-logo-word"><em>hard</em>ex</span>
          <span class="hn-logo-sub">India</span>
        </a>

        <!-- Desktop links -->
        <ul class="hn-links">

          <li><a href="index.html" class="hn-link ${isActive('index.html') ? 'hn-link--active' : ''}">Home</a></li>
          <li><a href="about.html" class="hn-link ${isActive('about.html') ? 'hn-link--active' : ''}">About</a></li>

          <!-- Solutions dropdown -->
          <li class="hn-has-drop">
            <button class="hn-link hn-drop-btn ${isActive('solutions.html') || isActive('solutions-terrace-waterproofing.html') ? 'hn-link--active' : ''}">
              Solutions
              <svg class="hn-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="hn-dropdown">
              <div class="hn-dropdown-inner">
                ${buildSolutionsDropdown()}
              </div>
            </div>
          </li>

          <!-- Products dropdown -->
          <li class="hn-has-drop">
            <button class="hn-link hn-drop-btn ${isActive('products.html') || isActive('product-detail.html') ? 'hn-link--active' : ''}">
              Products
              <svg class="hn-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="hn-dropdown hn-dropdown--wide">
              <div class="hn-dropdown-inner">
                ${buildProductsDropdown()}
              </div>
            </div>
          </li>

          <li><a href="dealers.html" class="hn-link ${isActive('dealers.html') ? 'hn-link--active' : ''}">Dealers</a></li>
          <li><a href="downloads.html" class="hn-link ${isActive('downloads.html') ? 'hn-link--active' : ''}">Downloads</a></li>

        </ul>

        <!-- Bob button -->
        <button class="hn-bob-btn" id="hn-bob-btn" onclick="hxToggleBob()" title="Ask Bob">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Hardhat -->
            <ellipse cx="20" cy="22" rx="14" ry="9" fill="#f0c330"/>
            <rect x="6" y="21" width="28" height="4" rx="2" fill="#e6b800"/>
            <path d="M12 22 Q20 8 28 22" fill="#f0c330" stroke="#e6b800" stroke-width="1"/>
            <!-- Brim -->
            <rect x="4" y="22" width="32" height="3" rx="1.5" fill="#e6b800"/>
            <!-- Face -->
            <ellipse cx="20" cy="30" rx="8" ry="6" fill="#FDDBB4"/>
            <!-- Eyes -->
            <circle cx="17" cy="29" r="1.2" fill="#333"/>
            <circle cx="23" cy="29" r="1.2" fill="#333"/>
            <!-- Smile -->
            <path d="M17 32 Q20 34.5 23 32" stroke="#333" stroke-width="1.2" stroke-linecap="round" fill="none"/>
          </svg>
        </button>

        <!-- CTA -->
        <a href="contact.html" class="hn-cta">Contact Us</a>

        <!-- Hamburger -->
        <button class="hn-burger" id="hn-burger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>

      </div>
    </nav>

    <!-- Mobile drawer -->
    <div class="hn-drawer" id="hn-drawer">
      <div class="hn-drawer-inner">
        <a href="index.html" class="hn-drawer-logo"><em>hard</em>ex India</a>
        <button class="hn-drawer-close" id="hn-drawer-close">✕</button>
        <nav class="hn-drawer-nav">
          <a href="index.html" class="hn-drawer-link">Home</a>
          <a href="about.html" class="hn-drawer-link">About</a>

          <div class="hn-drawer-group">
            <button class="hn-drawer-link hn-drawer-toggle" data-target="mob-solutions">
              Solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="hn-drawer-sub" id="mob-solutions">
              ${SOLUTION_ITEMS.map(s => `<a href="${s.href}" class="hn-drawer-sub-link">${s.icon} ${s.label}</a>`).join('')}
            </div>
          </div>

          <div class="hn-drawer-group">
            <button class="hn-drawer-link hn-drawer-toggle" data-target="mob-products">
              Products <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="hn-drawer-sub" id="mob-products">
              ${PRODUCT_CATEGORIES.map(c => `<a href="products.html?cat=${c.slug}" class="hn-drawer-sub-link">${c.icon} ${c.label}</a>`).join('')}
              <a href="products.html" class="hn-drawer-sub-link">📋 All Products</a>
            </div>
          </div>

          <a href="dealers.html" class="hn-drawer-link">Dealers</a>
          <a href="downloads.html" class="hn-drawer-link">Downloads</a>
          <button class="hn-drawer-link" onclick="hxToggleBob();document.getElementById('hn-drawer').classList.remove('open');document.getElementById('hn-overlay').classList.remove('open');" style="background:none;border:none;text-align:left;cursor:pointer;color:rgba(255,255,255,0.7);font-size:15px;font-weight:500;padding:12px 8px;border-bottom:1px solid rgba(255,255,255,0.05);width:100%;font-family:'DM Sans',sans-serif;">🧱 Ask Bob</button>
          <a href="contact.html" class="hn-drawer-cta">Contact Us →</a>
        </nav>
      </div>
    </div>
    <div class="hn-overlay" id="hn-overlay"></div>
  `;

  // ── Styles ───────────────────────────────────────────────────────
  const css = `
    :root {
      --hn-h: 64px;
      --teal: #00a99d;
      --navy: #0d1b26;
      --yellow: #f0c330;
    }

    /* ── Base ── */
    .hn {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: var(--hn-h);
      background: rgba(13,27,38,0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      transition: background 0.25s ease, box-shadow 0.25s ease;
    }
    .hn.scrolled {
      background: rgba(13,27,38,0.97);
      box-shadow: 0 2px 24px rgba(0,0,0,0.35);
    }
    body { padding-top: var(--hn-h); }

    .hn-inner {
      max-width: 1280px; margin: 0 auto;
      height: 100%; padding: 0 24px;
      display: flex; align-items: center; gap: 32px;
    }

    /* ── Logo ── */
    .hn-logo {
      display: flex; align-items: baseline; gap: 4px;
      text-decoration: none; flex-shrink: 0;
    }
    .hn-logo-word {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 26px; letter-spacing: 0.04em;
      color: #fff;
    }
    .hn-logo-word em {
      font-style: normal;
      color: var(--teal);
    }
    .hn-logo-sub {
      font-family: 'DM Mono', monospace;
      font-size: 9px; letter-spacing: 0.14em;
      color: rgba(255,255,255,0.35);
      text-transform: uppercase;
      margin-left: 2px;
    }

    /* ── Desktop links ── */
    .hn-links {
      display: flex; align-items: center; gap: 4px;
      list-style: none; margin: 0; padding: 0;
      flex: 1;
    }
    .hn-link {
      display: flex; align-items: center; gap: 4px;
      padding: 6px 12px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px; font-weight: 500;
      color: rgba(255,255,255,0.65);
      text-decoration: none;
      background: none; border: none; cursor: pointer;
      border-radius: 6px;
      transition: color 0.15s, background 0.15s;
      white-space: nowrap;
    }
    .hn-link:hover, .hn-link--active { color: #fff; }
    .hn-link--active { color: var(--teal) !important; }
    .hn-chevron {
      width: 12px; height: 12px;
      transition: transform 0.2s ease;
      opacity: 0.5;
    }

    /* ── Dropdown ── */
    .hn-has-drop { position: relative; }
    .hn-has-drop:hover .hn-chevron { transform: rotate(180deg); opacity: 1; }
    .hn-dropdown {
      position: absolute; top: 100%; left: 0;
      min-width: 220px;
      padding-top: 8px;
      opacity: 0; pointer-events: none;
      transform: translateY(-4px);
      transition: opacity 0.18s ease, transform 0.18s ease;
    }
    .hn-dropdown-inner {
      background: #0d1b26;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 8px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.45);
    }
    .hn-dropdown--wide { min-width: 280px; }
    .hn-has-drop:hover .hn-dropdown,
    .hn-has-drop:focus-within .hn-dropdown {
      opacity: 1; pointer-events: auto; transform: translateY(0);
    }
    .nav-drop-item {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 12px;
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px; font-weight: 400;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.12s, color 0.12s;
    }
    .nav-drop-item:hover { background: rgba(0,169,157,0.1); color: #fff; }
    .nav-drop-icon { font-size: 14px; width: 20px; text-align: center; flex-shrink: 0; }
    .nav-drop-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 6px 8px; }
    .nav-drop-all { color: var(--teal); font-weight: 500; }
    .nav-drop-all:hover { background: rgba(0,169,157,0.15); color: var(--teal); }

    /* ── CTA ── */
    .hn-cta {
      flex-shrink: 0;
      padding: 8px 20px;
      background: var(--teal);
      color: #0d1b26;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px; font-weight: 700;
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.15s, transform 0.15s;
      white-space: nowrap;
    }
    .hn-cta:hover { background: #00c4b8; transform: translateY(-1px); }

    /* ── Bob button ── */
    .hn-bob-btn {
      width: 36px; height: 36px; border-radius: 50%;
      background: #f0c330; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; padding: 0;
      box-shadow: 0 2px 10px rgba(240,195,48,0.4);
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .hn-bob-btn:hover { transform: scale(1.1); box-shadow: 0 4px 16px rgba(240,195,48,0.6); }

    /* ── Hamburger ── */
    .hn-burger {
      display: none;
      flex-direction: column; justify-content: center; align-items: center;
      width: 40px; height: 40px; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
      flex-shrink: 0;
    }
    .hn-burger span {
      display: block; width: 22px; height: 2px;
      background: rgba(255,255,255,0.75);
      border-radius: 2px;
      transition: transform 0.2s, opacity 0.2s;
    }
    .hn-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hn-burger.open span:nth-child(2) { opacity: 0; }
    .hn-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── Drawer ── */
    .hn-overlay {
      display: none; position: fixed; inset: 0; z-index: 1001;
      background: rgba(0,0,0,0.55);
    }
    .hn-overlay.open { display: block; }
    .hn-drawer {
      position: fixed; top: 0; right: 0; bottom: 0;
      width: min(360px, 90vw);
      background: #0d1b26;
      z-index: 1002;
      transform: translateX(100%);
      transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
      overflow-y: auto;
    }
    .hn-drawer.open { transform: translateX(0); }
    .hn-drawer-inner { padding: 24px; }
    .hn-drawer-logo {
      display: block;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px; color: #fff; text-decoration: none;
      margin-bottom: 32px;
    }
    .hn-drawer-logo em { font-style: normal; color: var(--teal); }
    .hn-drawer-close {
      position: absolute; top: 20px; right: 20px;
      background: rgba(255,255,255,0.07); border: none;
      color: rgba(255,255,255,0.6); font-size: 16px;
      width: 32px; height: 32px; border-radius: 6px; cursor: pointer;
    }
    .hn-drawer-nav { display: flex; flex-direction: column; gap: 2px; }
    .hn-drawer-link {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 8px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px; font-weight: 500;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      background: none; border-left: none; border-right: none; border-top: none;
      cursor: pointer; width: 100%; text-align: left;
      transition: color 0.15s;
    }
    .hn-drawer-link:hover { color: #fff; }
    .hn-drawer-link svg { width: 14px; height: 14px; opacity: 0.4; transition: transform 0.2s; }
    .hn-drawer-link.open svg { transform: rotate(180deg); opacity: 0.8; }
    .hn-drawer-sub {
      display: none; flex-direction: column; gap: 0;
      padding: 4px 0 8px 0;
    }
    .hn-drawer-sub.open { display: flex; }
    .hn-drawer-sub-link {
      padding: 9px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.12s, color 0.12s;
    }
    .hn-drawer-sub-link:hover { background: rgba(0,169,157,0.1); color: #fff; }
    .hn-drawer-cta {
      display: block; text-align: center;
      margin-top: 24px; padding: 14px;
      background: var(--teal); color: #0d1b26;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px; font-weight: 700;
      text-decoration: none; border-radius: 8px;
    }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .hn-links, .hn-cta { display: none; }
      .hn-burger { display: flex; margin-left: auto; }
    }
  `;

  // ── Inject ────────────────────────────────────────────────────────
  function inject() {
    const target = document.getElementById('shared-nav');
    if (!target) return;

    // Styles
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // HTML
    target.innerHTML = navHTML;

    // ── Scroll behaviour ────────────────────────────────────────────
    const hn = document.getElementById('hn');
    window.addEventListener('scroll', function () {
      hn.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // ── Mobile drawer ───────────────────────────────────────────────
    const burger  = document.getElementById('hn-burger');
    const drawer  = document.getElementById('hn-drawer');
    const overlay = document.getElementById('hn-overlay');
    const closeBtn = document.getElementById('hn-drawer-close');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      burger.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Accordion toggles in mobile drawer
    document.querySelectorAll('.hn-drawer-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var sub = document.getElementById(targetId);
        var isOpen = sub.classList.contains('open');
        // Close all
        document.querySelectorAll('.hn-drawer-sub').forEach(function (s) { s.classList.remove('open'); });
        document.querySelectorAll('.hn-drawer-toggle').forEach(function (b) { b.classList.remove('open'); });
        // Toggle clicked
        if (!isOpen) {
          sub.classList.add('open');
          btn.classList.add('open');
        }
      });
    });

    // ── Bob widget — injected on every page ─────────────────────────
    injectBobWidget();
  }

  function injectBobWidget() {
    // Don't double-inject on bob.html itself
    if (window.location.pathname.indexOf('bob.html') !== -1) return;

    var style = document.createElement('style');
    style.textContent = `
      #hx-bob-float {
        position:fixed; bottom:24px; right:24px; z-index:9999;
        width:52px; height:52px; border-radius:50%;
        background:#f0c330; border:none; cursor:pointer;
        display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 20px rgba(240,195,48,0.5);
        transition:transform 0.2s, box-shadow 0.2s;
        padding:0;
      }
      #hx-bob-float:hover { transform:scale(1.12); box-shadow:0 6px 28px rgba(240,195,48,0.7); }
      #hx-bob-panel {
        position:fixed; bottom:86px; right:24px; z-index:9998;
        width:380px; height:560px; border-radius:16px;
        overflow:hidden; display:none; flex-direction:column;
        box-shadow:0 16px 48px rgba(0,0,0,0.5);
      }
      #hx-bob-panel.hx-open { display:flex; animation:hxBobUp 0.25s ease; }
      @keyframes hxBobUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      #hx-bob-bar {
        display:flex; align-items:center; justify-content:space-between;
        padding:8px 12px; background:#0d1b26;
        border-bottom:1px solid rgba(255,255,255,0.08); flex-shrink:0;
      }
      #hx-bob-bar a {
        font-family:'DM Mono',monospace; font-size:10px;
        letter-spacing:0.1em; text-transform:uppercase;
        color:#00a99d; text-decoration:none;
      }
      #hx-bob-bar a:hover { color:#fff; }
      #hx-bob-x {
        background:none; border:none; color:rgba(255,255,255,0.45);
        font-size:16px; cursor:pointer; padding:2px 6px; border-radius:4px;
        line-height:1;
      }
      #hx-bob-x:hover { color:#fff; background:rgba(255,255,255,0.1); }
      #hx-bob-frame { flex:1; border:none; width:100%; }
      @media(max-width:500px){
        #hx-bob-panel{ width:calc(100vw - 16px); right:8px; bottom:80px; height:72vh; }
      }
    `;
    document.head.appendChild(style);

    // Floating button
    var btn = document.createElement('button');
    btn.id = 'hx-bob-float';
    btn.title = 'Ask Bob';
    btn.setAttribute('onclick', 'hxToggleBob()');
    btn.innerHTML = '<svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="22" rx="14" ry="9" fill="#e6a800"/><path d="M12 22 Q20 8 28 22" fill="#f0c330" stroke="#e6a800" stroke-width="1.5"/><rect x="4" y="21" width="32" height="4" rx="2" fill="#cc9400"/><ellipse cx="20" cy="31" rx="8" ry="6" fill="#FDDBB4"/><circle cx="17" cy="30" r="1.3" fill="#333"/><circle cx="23" cy="30" r="1.3" fill="#333"/><path d="M17 33 Q20 35.5 23 33" stroke="#333" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg>';
    document.body.appendChild(btn);

    // Panel
    var panel = document.createElement('div');
    panel.id = 'hx-bob-panel';
    panel.innerHTML =
      '<div id="hx-bob-bar">' +
        '<a href="bob.html" target="_blank">⛶ Open full screen</a>' +
        '<button id="hx-bob-x" onclick="hxToggleBob()">✕</button>' +
      '</div>' +
      '<iframe id="hx-bob-frame" src="bob.html" title="Chat with Bob"></iframe>';
    document.body.appendChild(panel);
  }

  // Global toggle function used by navbar button + float button
  window.hxToggleBob = function () {
    var panel = document.getElementById('hx-bob-panel');
    if (panel) panel.classList.toggle('hx-open');
  };

  // Open Bob with a pre-filled message — used by solution page CTAs
  window.hxAskBob = function (msg) {
    var panel = document.getElementById('hx-bob-panel');
    if (panel && !panel.classList.contains('hx-open')) panel.classList.add('hx-open');
    // Give iframe time to be visible, then send the message
    setTimeout(function () {
      var frame = document.getElementById('hx-bob-frame');
      if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'hx-prefill', text: msg }, '*');
      }
    }, 500);
  };

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
