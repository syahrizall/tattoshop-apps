/* ===== Admin & Account image binding ===== */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof IMG === 'undefined' || typeof ARTISTS === 'undefined') return;

  /* Artist portfolio grids */
  document.querySelectorAll('[data-artist-portfolio]').forEach(function (el) {
    var id = el.getAttribute('data-artist-portfolio');
    var artist = ARTISTS.find(function (a) { return a.id === id; });
    if (!artist) return;
    el.innerHTML = artist.portfolio.map(function (url, i) {
      return '<img src="' + url + '" alt="' + artist.name + ' portfolio ' + (i + 1) + '" loading="lazy">';
    }).join('');
  });

  /* Artist manage cards in owner panel */
  var artistManage = document.getElementById('artist-manage-list');
  if (artistManage) {
    artistManage.innerHTML = ARTISTS.map(function (a, i) {
      var link = i === 0
        ? '<a href="artist.html" class="btn btn-outline btn-sm">View Panel</a>'
        : '<button class="btn btn-outline btn-sm">View Panel</button>';
      return '<div class="artist-manage-card">' +
        '<img src="' + a.photo + '" alt="' + a.name + '">' +
        '<div style="flex:1"><h4 style="font-weight:800;text-transform:uppercase">' + a.name + '</h4>' +
        '<p style="font-size:0.82rem;color:var(--text-muted)">' + a.specialty + ' · ' + a.sessions + ' sessions</p></div>' +
        link + '</div>';
    }).join('');
  }

  /* Artist active table in owner dashboard */
  var artistActiveBody = document.getElementById('artist-active-body');
  if (artistActiveBody) {
    var statuses = ['Busy', 'Open', 'Busy', 'Open'];
    var badges = ['badge-info', 'badge-success', 'badge-info', 'badge-success'];
    var today = [3, 2, 2, 1];
    artistActiveBody.innerHTML = ARTISTS.map(function (a, i) {
      return '<tr><td><div class="customer-row"><img src="' + a.photo + '" alt="' + a.name + '"> ' +
        a.name.split(' ')[0] + '</div></td>' +
        '<td><span class="badge ' + badges[i] + '">' + statuses[i] + '</span></td><td>' + today[i] + '</td></tr>';
    }).join('');
  }

  /* Customer table in owner panel */
  var customerTableBody = document.getElementById('customer-table-body');
  if (customerTableBody) {
    var rows = [
      { c: CUSTOMERS.budi, phone: '0812-xxxx', last: '—', spent: 'Rp 3.0jt', bookings: 2 },
      { c: CUSTOMERS.lisa, phone: '0813-xxxx', last: 'May 2026', spent: 'Rp 2.2jt', bookings: 3 },
      { c: CUSTOMERS.andi, phone: '0815-xxxx', last: 'Jun 2026', spent: 'Rp 8.5jt', bookings: 5 },
      { c: CUSTOMERS.siti, phone: '0816-xxxx', last: '—', spent: 'Rp 1.8jt', bookings: 1 }
    ];
    customerTableBody.innerHTML = rows.map(function (r) {
      return '<tr><td><div class="customer-row"><img src="' + r.c.photo + '" alt="' + r.c.name + '"> ' + r.c.name + '</div></td>' +
        '<td>' + r.phone + '</td><td>' + r.last + '</td><td>' + r.spent + '</td><td>' + r.bookings + '</td></tr>';
    }).join('');
  }

  /* Artist panel — portfolio grid */
  var artistPortfolioGrid = document.getElementById('artist-portfolio-grid');
  if (artistPortfolioGrid) {
    var rio = ARTISTS[0];
    artistPortfolioGrid.innerHTML = rio.portfolio.concat(rio.portfolio).map(function (url, i) {
      return '<img src="' + url + '" alt="Rio Santoso work ' + (i + 1) + '" loading="lazy">';
    }).join('');
  }

  /* Artist panel — appointments */
  var appointmentsList = document.getElementById('appointments-list');
  if (appointmentsList) {
    var appts = [
      { c: CUSTOMERS.budi, title: 'Realism Portrait', meta: '12 Jul 2026 · 14:00 · Lengan kanan · Deposit: Lunas', badge: 'Confirmed', cls: 'badge-success' },
      { c: CUSTOMERS.andi, title: 'Realism Sleeve', meta: '18 Jul 2026 · 10:00 · Full arm · Design review pending', badge: 'Design Phase', cls: 'badge-warm' },
      { c: CUSTOMERS.rizky, title: 'Portrait Session', meta: '5 Jul 2026 · 16:00 · Dada · Walk-in converted', badge: 'Today', cls: 'badge-info' }
    ];
    appointmentsList.innerHTML = appts.map(function (a) {
      return '<div class="appointment-card"><img src="' + a.c.photo + '" alt="' + a.c.name + '">' +
        '<div style="flex:1"><h4>' + a.c.name + ' — ' + a.title + '</h4><p>' + a.meta + '</p></div>' +
        '<span class="badge ' + a.cls + '">' + a.badge + '</span></div>';
    }).join('');
  }

  /* Artist panel — customer history */
  var artistCustomerBody = document.getElementById('artist-customer-body');
  if (artistCustomerBody) {
    var clients = [
      { c: CUSTOMERS.budi, last: '—', tattoo: 'Realism Portrait', visits: 1, notes: 'Design in progress' },
      { c: CUSTOMERS.andi, last: 'Mar 2026', tattoo: 'Realism Sleeve', visits: 3, notes: 'Returning client' },
      { c: CUSTOMERS.lisa, last: 'Jan 2026', tattoo: 'Portrait — Pet', visits: 2, notes: 'Referred 2 friends' },
      { c: CUSTOMERS.rizky, last: 'Dec 2025', tattoo: 'Black & Grey', visits: 1, notes: '—' }
    ];
    artistCustomerBody.innerHTML = clients.map(function (r) {
      return '<tr><td><div class="customer-row"><img src="' + r.c.photo + '" alt="' + r.c.name + '"> ' + r.c.name + '</div></td>' +
        '<td>' + r.last + '</td><td>' + r.tattoo + '</td><td>' + r.visits + '</td><td>' + r.notes + '</td></tr>';
    }).join('');
  }

  /* Account — favorites */
  var favoritesGrid = document.getElementById('favorites-grid');
  if (favoritesGrid) {
    favoritesGrid.innerHTML = [ARTISTS[0], ARTISTS[1]].map(function (a) {
      return '<div class="favorite-card"><img src="' + a.photo + '" alt="' + a.name + '">' +
        '<div><h4>' + a.name + '</h4><p>' + a.specialty + '</p>' +
        '<a href="booking.html" class="btn btn-primary btn-sm">Book ' + a.name.split(' ')[0] + '</a></div></div>';
    }).join('');
  }

  /* Account — body map tattoos */
  var bodyTattooList = document.getElementById('body-tattoo-list');
  if (bodyTattooList) {
    var tattoos = [
      { img: IMG.tattooRoseTraditional, title: 'Traditional Rose', meta: 'Right arm · Maya Kirana · May 2026' },
      { img: IMG.tattooButterflyWatercolor, title: 'Watercolor Butterfly', meta: 'Left shoulder · Sari Dewi · Mar 2026' },
      { img: IMG.tattooMinimalGeometric, title: 'Small Geometric', meta: 'Right wrist · Danu Pratama · Jan 2026' }
    ];
    bodyTattooList.innerHTML = tattoos.map(function (t) {
      return '<div class="body-tattoo-item"><img src="' + t.img + '" alt="' + t.title + '">' +
        '<div><h4>' + t.title + '</h4><p>' + t.meta + '</p></div></div>';
    }).join('');
  }
});
