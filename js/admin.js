/* ===== Admin & Dashboard Panel Switching ===== */
document.addEventListener('DOMContentLoaded', function () {
  /* Customer account tabs */
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabGroup = btn.closest('.dashboard-main');
      if (!tabGroup) return;
      var target = btn.getAttribute('data-tab');

      tabGroup.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      tabGroup.querySelectorAll('.tab-content').forEach(function (c) {
        c.classList.remove('active');
      });

      btn.classList.add('active');
      var content = document.getElementById('tab-' + target);
      if (content) content.classList.add('active');

      tabGroup.querySelectorAll('.sidebar-nav a[data-tab]').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('data-tab') === target);
      });
    });
  });

  document.querySelectorAll('.sidebar-nav a[data-tab]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var tab = link.getAttribute('data-tab');
      var main = link.closest('.dashboard-layout, .page-content');
      var btn = main && main.querySelector('.tab-btn[data-tab="' + tab + '"]');
      if (btn) btn.click();
    });
  });

  /* Admin panels (owner & artist) */
  function switchAdminPanel(link) {
    var panel = link.getAttribute('data-panel');
    var root = link.closest('.page-content');
    if (!root || !panel) return;

    root.querySelectorAll('[data-panel]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-panel') === panel);
    });

    root.querySelectorAll('.admin-panel').forEach(function (p) {
      p.classList.remove('active');
    });
    var target = document.getElementById('panel-' + panel);
    if (target) target.classList.add('active');
  }

  document.querySelectorAll('.admin-sidebar a[data-panel], .admin-mobile-nav a[data-panel]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      switchAdminPanel(link);
    });
  });

  /* Dummy cancel / reschedule alerts */
  document.querySelectorAll('[data-action="cancel"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (confirm('Yakin ingin membatalkan booking ini? Deposit tidak dapat dikembalikan jika kurang dari 72 jam.')) {
        var card = btn.closest('.booking-card');
        if (card) {
          card.style.opacity = '0.4';
          card.querySelector('.badge').textContent = 'Cancelled';
          card.querySelector('.badge').className = 'badge badge-danger';
          btn.remove();
        }
      }
    });
  });

  document.querySelectorAll('[data-action="reschedule"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      alert('Fitur reschedule: pilih tanggal baru di halaman Booking. (Demo)');
    });
  });
});
