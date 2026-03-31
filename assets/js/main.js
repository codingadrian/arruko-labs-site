// Arruko Labs — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  }

  // ── Active nav link (skip CTA and lang-switch buttons) ──
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a:not(.cta-link):not(.lang-switch)').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.style.color = 'var(--color-teal)';
    }
  });

});
