/* ===== Gallery Page Filter & Lightbox ===== */
(function () {
  var currentIndex = 0;
  var visibleItems = [];

  function getVisibleItems() {
    return Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lightbox-img');
    if (!lb || !img || !visibleItems[currentIndex]) return;
    var itemImg = visibleItems[currentIndex].querySelector('img');
    img.src = itemImg.src;
    img.alt = itemImg.alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navLightbox(dir) {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    var img = document.getElementById('lightbox-img');
    var itemImg = visibleItems[currentIndex].querySelector('img');
    img.src = itemImg.src;
    img.alt = itemImg.alt;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var filterBtns = document.querySelectorAll('.filter-pill');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.gallery-item').forEach(function (item) {
          var cat = item.getAttribute('data-category');
          if (category === 'all' || cat === category) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      });
    });

    var grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.addEventListener('click', function (e) {
      var item = e.target.closest('.gallery-item');
      if (!item || item.classList.contains('hidden')) return;
      visibleItems = getVisibleItems();
      openLightbox(visibleItems.indexOf(item));
    });

    var closeBtn = document.getElementById('lightbox-close');
    var prevBtn = document.getElementById('lightbox-prev');
    var nextBtn = document.getElementById('lightbox-next');
    var lb = document.getElementById('lightbox');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function () { navLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { navLightbox(1); });
    if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });

    document.addEventListener('keydown', function (e) {
      var lb = document.getElementById('lightbox');
      if (!lb || !lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    });
  });
})();
