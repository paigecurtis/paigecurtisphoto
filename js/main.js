(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !open);
      nav.classList.toggle('is-open');
      document.body.style.overflow = open ? '' : 'hidden';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* Portfolio: 1–4 are in HTML; load 5, 6, 7, ... until one is missing. Add more files (e.g. port-couples-10.jpg), they appear. */
  var maxPerCategory = 99;
  var baseUrl = window.location.href.replace(/[#?].*$/, '').replace(/\/[^/]*$/, '/');
  document.querySelectorAll('.portfolio-scroll-inner[data-prefix]').forEach(function (container) {
    var prefix = container.getAttribute('data-prefix');
    var altBase = container.getAttribute('data-alt') || 'Photo';
    var index = 5;

    function addNext() {
      if (index > maxPerCategory) return;
      var img = document.createElement('img');
      img.alt = altBase + ' ' + index;
      img.src = baseUrl + 'images/' + prefix + '-' + index + '.jpg';
      img.onload = function () {
        container.appendChild(img);
        index += 1;
        addNext();
      };
      img.onerror = function () {
        /* no more images in this category */
      };
    }

    addNext();
  });
})();
