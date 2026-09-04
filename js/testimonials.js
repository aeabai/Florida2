(function () {
  'use strict';

  var container = document.getElementById('approved-testimonials');
  if (!container) return;

  fetch('data/approved-testimonials.json', { cache: 'no-store' })
    .then(function (response) {
      if (!response.ok) throw new Error('Unable to load approved testimonials.');
      return response.json();
    })
    .then(function (testimonials) {
      if (!Array.isArray(testimonials)) return;

      testimonials.slice().reverse().forEach(function (item) {
        if (!item || !item.quote || !item.displayName || !item.category) return;

        var card = document.createElement('div');
        card.className = 'quote-card reveal visible';

        var tag = document.createElement('div');
        tag.className = 'quote-tag';
        tag.textContent = item.category;

        var quote = document.createElement('p');
        quote.textContent = '\u201c' + item.quote + '\u201d';

        var name = document.createElement('div');
        name.className = 'featured-meta';
        name.textContent = item.displayName;

        card.appendChild(tag);
        card.appendChild(quote);
        card.appendChild(name);
        container.appendChild(card);
      });
    })
    .catch(function () {
      /* Existing testimonials remain visible if approved data is unavailable. */
    });
})();
