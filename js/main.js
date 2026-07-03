// Echo Shell — minimal behavior, no framework needed.
// The hero drone-line animation is pure CSS (see style.css).

// Hero eyebrow: cycle through the genre/subgenre pool one at a time
// so the line stays short without dropping any of them.
(function () {
  var eyebrow = document.getElementById('hero-eyebrow');
  if (!eyebrow) return;

  var genres = eyebrow.dataset.genres.split(',');
  var i = 0;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  setInterval(function () {
    i = (i + 1) % genres.length;
    eyebrow.classList.add('is-fading');
    setTimeout(function () {
      eyebrow.textContent = genres[i];
      eyebrow.classList.remove('is-fading');
    }, 700);
  }, 4000);
})();
