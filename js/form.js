/* ─────────────────────────────────────────────
   FORM.JS — Contact form validation
   Anthony | Unleashing Genius
───────────────────────────────────────────── */

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  /* ── Helpers ── */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function showError(group, msg) {
    group.classList.add('has-error');
    var err = group.querySelector('.form-error');
    if (err) err.textContent = msg;
  }

  function clearError(group) {
    group.classList.remove('has-error');
  }

  function getGroup(field) {
    return field.closest('.form-group');
  }

  /* ── Live validation: clear errors on input ── */
  form.querySelectorAll('input, select, textarea').forEach(function (field) {
    field.addEventListener('input', function () {
      clearError(getGroup(field));
    });
    field.addEventListener('change', function () {
      clearError(getGroup(field));
    });
  });

  /* ── Validate single field ── */
  function validateField(field) {
    var group = getGroup(field);
    var value = field.value.trim();
    var name = field.getAttribute('name') || field.id;
    var required = field.hasAttribute('required');

    // Required check
    if (required && value === '') {
      showError(group, 'This field is required.');
      return false;
    }

    // Email check
    if (field.type === 'email' && value !== '' && !isValidEmail(value)) {
      showError(group, 'Please enter a valid email address.');
      return false;
    }

    // Select placeholder check
    if (field.tagName === 'SELECT' && required && value === '') {
      showError(group, 'Please choose an option.');
      return false;
    }

    clearError(group);
    return true;
  }

  /* ── Submit handler ── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    var valid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) valid = false;
    });

    // Also validate optional email if filled in
    var emailField = form.querySelector('input[type="email"]');
    if (emailField && !emailField.hasAttribute('required') && emailField.value.trim() !== '') {
      if (!validateField(emailField)) valid = false;
    }

    if (!valid) {
      // Scroll to first error
      var firstError = form.querySelector('.has-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.querySelector('input, select, textarea').focus();
      }
      return;
    }

    // ── Successful submit ──
    // For static hosting: redirect to thank-you page
    // For Netlify: form data is handled by Netlify Forms attribute
    window.location.href = 'thank-you.html';
  });

})();
