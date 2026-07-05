/* ===== Shared layout — Ink Flow Tattoo ===== */
(function () {
  var SITE = {
    name: 'Ink Flow Tattoo',
    tagline: 'Best Tattoo Shop in Jakarta'
  };

  var GALLERY_NAV = [
    { label: 'All Styles', href: 'gallery.html' },
    { label: 'Fine Line', href: 'gallery.html?style=fineline' },
    { label: 'Barong', href: 'gallery.html?style=barong' },
    { label: 'Realism', href: 'gallery.html?style=realism' },
    { label: 'Mandala', href: 'gallery.html?style=mandala' },
    { label: 'Script', href: 'gallery.html?style=script' },
    { label: 'Conceptual', href: 'gallery.html?style=conceptual' },
    { label: 'Japanese', href: 'gallery.html?style=japanese' },
    { label: 'Traditional', href: 'gallery.html?style=traditional' },
    { label: 'Floral', href: 'gallery.html?style=floral' },
    { label: 'Ornamental', href: 'gallery.html?style=ornamental' },
    { label: 'Micro', href: 'gallery.html?style=micro' },
    { label: 'Colour', href: 'gallery.html?style=colour' }
  ];

  function isDark(active) {
    return active === 'home';
  }

  function navLink(href, label, active, key) {
    var cls = active === key ? ' class="active"' : '';
    return '<a href="' + href + '"' + cls + '>' + label + '</a>';
  }

  function renderNav(mount) {
    var active = mount.getAttribute('data-active') || '';
    var dark = isDark(active) ? ' dark' : '';
    var root = mount.getAttribute('data-root') || '';
    var ctaClass = dark ? 'btn-white' : 'btn-primary';
    var galleryLinks = GALLERY_NAV.map(function (g) {
      return '<a href="' + root + g.href + '">' + g.label + '</a>';
    }).join('');
    var mobileGallery = GALLERY_NAV.slice(1).map(function (g) {
      return '<a href="' + root + g.href + '">' + g.label + '</a>';
    }).join('');

    mount.outerHTML =
      '<nav class="navbar' + dark + '">' +
        '<div class="container">' +
          '<a href="' + root + 'index.html" class="logo"><span class="logo-mark">IF</span>' + SITE.name + '</a>' +
          '<button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
          '<div class="nav-links">' +
            navLink(root + 'booking.html', 'Bookings', active, 'bookings') +
            navLink(root + 'about.html', 'Hygiene', active, 'hygiene') +
            '<div class="nav-dropdown">' +
              '<button type="button" class="nav-dropdown-toggle' + (active === 'gallery' ? ' active' : '') + '" aria-expanded="false">Gallery <span class="nav-caret">▾</span></button>' +
              '<div class="nav-dropdown-menu">' + galleryLinks + '</div>' +
            '</div>' +
            navLink(root + 'aftercare.html', 'Aftercare', active, 'aftercare') +
            navLink(root + 'index.html#faq', 'FAQ', active, 'faq') +
            navLink(root + 'blog.html', 'Blog', active, 'blog') +
            '<a href="' + root + 'contact.html" class="btn ' + ctaClass + ' btn-sm nav-cta">Talk to Our Team</a>' +
            '<div class="mobile-nav-groups">' +
              '<div class="mobile-nav-label">Navigation</div>' +
              navLink(root + 'booking.html', 'Bookings', active, 'bookings') +
              navLink(root + 'about.html', 'Hygiene', active, 'hygiene') +
              navLink(root + 'aftercare.html', 'Aftercare', active, 'aftercare') +
              navLink(root + 'index.html#faq', 'FAQ', active, 'faq') +
              '<div class="mobile-nav-label">Tattoo Gallery</div>' +
              mobileGallery +
              '<a href="' + root + 'gallery.html" class="mobile-nav-extra">View All Styles</a>' +
              '<a href="' + root + 'blog.html" class="mobile-nav-extra">Read Our Blog →</a>' +
              '<a href="' + root + 'contact.html" class="btn ' + ctaClass + ' btn-sm nav-cta mobile-nav-cta">Talk to Our Team</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  function renderFooter(mount) {
    var root = mount.getAttribute('data-root') || '';
    mount.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="site-footer-grid site-footer-compact">' +
            '<div class="site-footer-brand">' +
              '<span class="logo"><span class="logo-mark">IF</span>' + SITE.name + '</span>' +
              '<div class="site-footer-links-row">' +
                '<a href="' + root + 'gallery.html">Gallery</a>' +
                '<a href="' + root + 'booking.html">Booking</a>' +
                '<a href="' + root + 'about.html">Hygiene</a>' +
                '<a href="' + root + 'index.html#faq">FAQ</a>' +
                '<a href="' + root + 'blog.html">Blog</a>' +
              '</div>' +
              '<div class="site-footer-legal">' +
                '<a href="' + root + 'privacy.html">Privacy Policy</a>' +
                '<a href="' + root + 'terms.html">Terms &amp; Conditions</a>' +
                '<a href="' + root + 'booking-policy.html">Booking Policy</a>' +
                '<a href="' + root + 'touch-up-policy.html">Touch-Up Policy</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="site-footer-bottom">' +
            '<span>&copy; 2026 ' + SITE.name + '. All Rights Reserved.</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function renderFloat(mount) {
    var root = mount.getAttribute('data-root') || '';
    mount.outerHTML =
      '<div class="float-widget" id="float-widget">' +
        '<button type="button" class="float-widget-toggle" aria-expanded="false">Talk to Our Team</button>' +
        '<div class="float-widget-panel">' +
          '<button type="button" class="float-widget-close" aria-label="Close">×</button>' +
          '<h4>Hit Us Up</h4>' +
          '<p>Choose your favorite platform to start the conversation. We\'re just a message away!</p>' +
          '<div class="float-widget-links">' +
            '<a href="' + root + 'contact.html" class="float-link wa">WhatsApp</a>' +
            '<a href="' + root + 'contact.html" class="float-link ig">Instagram</a>' +
            '<a href="' + root + 'contact.html" class="float-link fb">Facebook</a>' +
          '</div>' +
          '<p class="float-widget-meta">Average response time: 15 minutes</p>' +
        '</div>' +
      '</div>';
  }

  function initNavBehavior() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
        document.body.classList.toggle('nav-open', links.classList.contains('open'));
      });
    }

    document.querySelectorAll('.nav-dropdown-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var menu = btn.nextElementSibling;
        var open = menu.classList.contains('open');
        document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.classList.remove('open'); });
        document.querySelectorAll('.nav-dropdown-toggle').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
        if (!open) {
          menu.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.classList.remove('open'); });
      document.querySelectorAll('.nav-dropdown-toggle').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    });

    if (links) {
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('open');
          document.body.classList.remove('nav-open');
        });
      });
    }
  }

  function initFloatWidget() {
    var widget = document.getElementById('float-widget');
    if (!widget) return;
    var toggle = widget.querySelector('.float-widget-toggle');
    var close = widget.querySelector('.float-widget-close');
    function openPanel() {
      widget.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closePanel() {
      widget.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function () {
      widget.classList.contains('open') ? closePanel() : openPanel();
    });
    if (close) close.addEventListener('click', closePanel);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-site-nav]').forEach(renderNav);
    document.querySelectorAll('[data-site-footer]').forEach(renderFooter);
    document.querySelectorAll('[data-site-float]').forEach(renderFloat);
    initNavBehavior();
    initFloatWidget();
    if (typeof initSmoothScroll === 'function') initSmoothScroll();
  });
})();
