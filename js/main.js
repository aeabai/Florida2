/* ─────────────────────────────────────────────
   MAIN.JS — Scroll reveal, nav behavior
   Anthony | Unleashing Genius
───────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── NAV: Active page highlight ── */
  function setActiveNav() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;

      // Match exact page or root → index
      const linkFile = href.split('/').pop() || 'index.html';
      const isHome = (filename === '' || filename === 'index.html') &&
                     (href === 'index.html' || href === './' || href === '/');
      const isMatch = linkFile === filename;

      if (isHome || isMatch) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── NAV: Scroll shadow ── */
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ── NAV: Mobile drawer toggle ── */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var drawer = document.querySelector('.nav-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', function () {
      var isOpen = drawer.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!drawer.contains(e.target) && !toggle.contains(e.target)) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── SCROLL REVEAL ── */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Follow the philosophy copy, then stop at the section bottom. */
  function initPhilosophyRoadmap() {
    var layout = document.querySelector('.philosophy-layout');
    var roadmap = document.querySelector('.philosophy-roadmap');
    if (!layout || !roadmap) return;

    var ticking = false;

    function updateRoadmap() {
      ticking = false;

      if (window.innerWidth <= 900) {
        roadmap.style.transform = '';
        return;
      }

      var layoutTop = layout.getBoundingClientRect().top + window.scrollY;
      var start = layoutTop - 88;
      var maximum = Math.max(0, layout.offsetHeight - roadmap.offsetHeight);
      var distance = Math.min(maximum, Math.max(0, window.scrollY - start));
      roadmap.style.transform = 'translateY(' + distance + 'px)';
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateRoadmap);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('load', requestUpdate);
    updateRoadmap();
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initNavScroll();
    initMobileNav();
    initScrollReveal();
    initPhilosophyRoadmap();
  });

})();
