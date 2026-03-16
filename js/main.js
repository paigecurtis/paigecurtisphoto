(function () {
  /* Hero video: force autoplay (browsers often ignore the attribute on GitHub Pages, etc.) */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(function () {});
    heroVideo.addEventListener('loadeddata', function () {
      heroVideo.play().catch(function () {});
    });
  }

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
  document.querySelectorAll('.portfolio-scroll-inner[data-prefix]').forEach(function (container) {
    var prefix = container.getAttribute('data-prefix');
    var altBase = container.getAttribute('data-alt') || 'Photo';
    var baseUrl = container.getAttribute('data-base') || (window.location.href.replace(/[#?].*$/, '').replace(/\/[^/]*$/, '/'));
    var index = 5;

    function addNext() {
      if (index > maxPerCategory) return;
      var img = document.createElement('img');
      img.alt = altBase + ' ' + index;
      img.loading = 'lazy';
      img.decoding = 'async';
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

  /* Lazy-load CSS background images when the section is near the viewport (speeds up Book, Home, etc.) */
  var bgEls = document.querySelectorAll('.services-hero-bg, .process-bg, .faq-bg, .spreading-love-bg');
  if (bgEls.length && typeof IntersectionObserver !== 'undefined') {
    var bgObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('bg-loaded');
          bgObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '150px', threshold: 0 });
    bgEls.forEach(function (el) { bgObserver.observe(el); });
  } else if (bgEls.length) {
    bgEls.forEach(function (el) { el.classList.add('bg-loaded'); });
  }

  /* Kind Words From Clients: arrow through reviews (add more <blockquote class="testimonial-card"> in HTML to add reviews) */
  var track = document.querySelector('.testimonials-track');
  var prevBtn = document.querySelector('.testimonial-prev');
  var nextBtn = document.querySelector('.testimonial-next');
  if (track && (prevBtn || nextBtn)) {
    var cards = track.querySelectorAll('.testimonial-card');
    var total = cards.length;
    var current = 0;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
  }
})();
