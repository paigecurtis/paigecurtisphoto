(function () {
  var track = document.querySelector('.carousel-track');
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  if (!track || !prev || !next) return;

  var slideWidth = 260 + 16;
  function scroll(direction) {
    var current = track.scrollLeft;
    var max = track.scrollWidth - track.clientWidth;
    if (direction === 1) {
      track.scrollTo({ left: Math.min(current + slideWidth, max), behavior: 'smooth' });
    } else {
      track.scrollTo({ left: Math.max(current - slideWidth, 0), behavior: 'smooth' });
    }
  }

  prev.addEventListener('click', function () { scroll(-1); });
  next.addEventListener('click', function () { scroll(1); });
})();
