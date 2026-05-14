// ═══════════════════════════════════════════════════════════════════
// HARDEX INDIA — SEO UTILITIES
// Lightweight helpers for page-level SEO.
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  /**
   * Set page <title> and <meta name="description">
   */
  window.setPageSEO = function (title, description) {
    if (title) document.title = title;
    var meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    if (description) meta.content = description;
  };

  /**
   * Inject JSON-LD structured data
   */
  window.injectJsonLd = function (data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  /**
   * Organisation structured data (inject on all pages)
   */
  window.injectJsonLd({
    '@context':  'https://schema.org',
    '@type':     'Organization',
    'name':      'Hardex India Private Limited',
    'url':       'https://hardexindia.com',
    'logo':      'https://hardexindia.com/assets/logo.png',
    'telephone': '+919656866699',
    'email':     'info@hardexindia.com',
    'address': {
      '@type':           'PostalAddress',
      'addressLocality': 'Kochi',
      'addressRegion':   'Kerala',
      'addressCountry':  'IN'
    },
    'sameAs': []
  });

})();
