// ═══════════════════════════════════════════════════════════════════
// HARDEX — MAIN.JS
// Site-wide utilities: smooth scroll, active nav highlight,
// contact form fallback handler.
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Smooth-scroll all anchor links ───────────────────────────────
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ── Mark current nav link active ─────────────────────────────────
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a.hn-link, a.hn-drawer-link').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('hn-link--active');
  });

  // ── Index page contact form fallback (no Formspree) ──────────────
  var form = document.getElementById('contactForm');
  if (form && form.id === 'contactForm' && !form.getAttribute('action')) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn  = form.querySelector('[type="submit"]');
      var orig = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(function () {
        if (btn) {
          btn.textContent      = '✓ Sent!';
          btn.style.background = '#4CAF50';
          setTimeout(function () {
            btn.textContent      = orig;
            btn.style.background = '';
            btn.disabled         = false;
            form.reset();
          }, 3000);
        }
      }, 1000);
    });
  }

})();
