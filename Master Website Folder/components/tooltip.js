// ═══════════════════════════════════════════════════════════════════
// HARDEX INDIA — TOOLTIP COMPONENT
// CSS-driven tooltips via [data-tooltip] attribute.
// JS layer adds keyboard and touch support.
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  function initTooltips() {
    // Touch devices: toggle tooltip on tap
    document.querySelectorAll('[data-tooltip]').forEach(function (el) {
      el.addEventListener('touchstart', function (e) {
        e.preventDefault();
        var active = document.querySelector('[data-tooltip-open]');
        if (active && active !== el) active.removeAttribute('data-tooltip-open');
        el.toggleAttribute('data-tooltip-open');
      });
    });

    // Close on outside tap
    document.addEventListener('touchstart', function (e) {
      if (!e.target.closest('[data-tooltip]')) {
        document.querySelectorAll('[data-tooltip-open]').forEach(function (el) {
          el.removeAttribute('data-tooltip-open');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTooltips);
  } else {
    initTooltips();
  }

})();
