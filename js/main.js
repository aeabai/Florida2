/* ─────────────────────────────────────────────────────────────
   Anthony | Executive Coach & Mentor | Unleashing Genius
   Main JavaScript
   ───────────────────────────────────────────────────────────── */

/* ─── MOBILE NAV TOGGLE ───────────────────────── */
(function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ─── SCROLL REVEAL ───────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal, .stat-item').forEach(el => observer.observe(el));
})();

/* ─── CONTACT FORM ────────────────────────────── */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Client-side validation feedback
  form.addEventListener('submit', (e) => {
    const name    = form.querySelector('[name="name"]');
    const email   = form.querySelector('[name="email"]');
    let valid = true;

    [name, email].forEach(field => {
      if (!field) return;
      if (!field.value.trim()) {
        field.style.borderColor = '#E8525A';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      e.preventDefault();
    }
  });

  // Clear error state on input
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
})();
