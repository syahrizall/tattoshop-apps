/* ===== Home Page — Carousel & Gallery Filter ===== */

function renderHomeFAQ() {
  var faqEl = document.getElementById('customer-faq');
  if (!faqEl || typeof CUSTOMER_FAQ === 'undefined') return;
  faqEl.innerHTML = CUSTOMER_FAQ.map(function (f) {
    return '<div class="faq-item"><button class="faq-question">' + f.q + '<span class="faq-icon">+</span></button>' +
      '<div class="faq-answer"><div class="faq-answer-inner">' + f.a + '</div></div></div>';
  }).join('');
  initFAQ();
}

function renderReviews() {
  var el = document.getElementById('reviews-grid');
  if (!el || typeof TESTIMONIALS === 'undefined') return;
  el.innerHTML = TESTIMONIALS.map(function (t) {
    return '<div class="review-card">' +
      '<div class="review-stars">★★★★★</div>' +
      '<p class="review-text">"' + t.text + '"</p>' +
      '<div class="review-author">' +
      '<img class="review-avatar" src="' + t.avatar + '" alt="' + t.name + '">' +
      '<div><div class="review-name">' + t.name + '</div><div class="review-meta">' + t.role + '</div></div></div></div>';
  }).join('');
}

function renderProcess() {
  var el = document.getElementById('process-steps');
  if (!el || typeof PROCESS_STEPS === 'undefined') return;
  el.innerHTML = PROCESS_STEPS.map(function (s) {
    return '<div class="process-step"><div class="process-icon">' + s.num + '</div>' +
      '<h3>' + s.title + '</h3><p>' + s.desc + '</p></div>';
  }).join('');
}

function renderGalleryHome() {
  var filtersEl = document.getElementById('style-filters');
  var carouselEl = document.getElementById('gallery-carousel');
  if (!filtersEl || !carouselEl || typeof GALLERY_ITEMS === 'undefined') return;

  if (typeof GALLERY_FILTERS !== 'undefined') {
    filtersEl.innerHTML = GALLERY_FILTERS.map(function (f, i) {
      return '<button class="filter-pill' + (i === 0 ? ' active' : '') + '" data-filter="' + f.id + '">' + f.label + '</button>';
    }).join('');
  }

  function renderSlides(filter) {
    carouselEl.innerHTML = GALLERY_ITEMS.map(function (item) {
      var hidden = filter !== 'all' && item.category !== filter;
      return '<div class="gallery-slide' + (hidden ? ' hidden' : '') + '" data-category="' + item.category + '">' +
        '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
        '<div class="gallery-slide-caption">' + item.caption + '</div></div>';
    }).join('');
  }

  renderSlides('all');

  filtersEl.querySelectorAll('.filter-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      filtersEl.querySelectorAll('.filter-pill').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderSlides(btn.getAttribute('data-filter'));
    });
  });

  var prev = document.getElementById('carousel-prev');
  var next = document.getElementById('carousel-next');
  if (prev) prev.addEventListener('click', function () {
    carouselEl.scrollBy({ left: -carouselEl.offsetWidth * 0.5, behavior: 'smooth' });
  });
  if (next) next.addEventListener('click', function () {
    carouselEl.scrollBy({ left: carouselEl.offsetWidth * 0.5, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderHomeFAQ();
  renderReviews();
  renderProcess();
  renderGalleryHome();
});
