/* ===== Dashboard Tabs ===== */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabGroup = btn.closest('.dashboard-main') || btn.closest('.tab-nav').parentElement;
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
    });
  });
});
