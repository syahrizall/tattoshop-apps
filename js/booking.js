/* ===== Booking System ===== */
(function () {
  var state = {
    step: 1,
    artist: null,
    date: null,
    time: null,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
  };

  var bookedSlots = {
    '2026-07-08': ['10:00', '14:00'],
    '2026-07-10': ['11:00', '15:00'],
    '2026-07-12': ['09:00', '13:00', '16:00']
  };

  var timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  var monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  function init() {
    if (!document.getElementById('booking-form')) return;

    renderArtistSelect();
    renderCalendar();
    renderTimeSlots();
    updateSteps();
    updateSummary();

    document.getElementById('btn-next').addEventListener('click', nextStep);
    document.getElementById('btn-prev').addEventListener('click', prevStep);
    document.getElementById('booking-form').addEventListener('submit', submitBooking);

    document.getElementById('cal-prev').addEventListener('click', function () {
      state.currentMonth--;
      if (state.currentMonth < 0) {
        state.currentMonth = 11;
        state.currentYear--;
      }
      renderCalendar();
    });

    document.getElementById('cal-next').addEventListener('click', function () {
      state.currentMonth++;
      if (state.currentMonth > 11) {
        state.currentMonth = 0;
        state.currentYear++;
      }
      renderCalendar();
    });
  }

  function renderArtistSelect() {
    var container = document.getElementById('artist-select-grid');
    if (!container || typeof ARTISTS === 'undefined') return;

    container.innerHTML = ARTISTS.map(function (a) {
      return '<div class="artist-select-card" data-id="' + a.id + '">' +
        '<img src="' + a.photo + '" alt="' + a.name + '" loading="lazy">' +
        '<h4>' + a.name + '</h4>' +
        '<p>' + a.specialty + '</p></div>';
    }).join('');

    container.querySelectorAll('.artist-select-card').forEach(function (card) {
      card.addEventListener('click', function () {
        container.querySelectorAll('.artist-select-card').forEach(function (c) {
          c.classList.remove('selected');
        });
        card.classList.add('selected');
        var id = card.getAttribute('data-id');
        state.artist = ARTISTS.find(function (a) { return a.id === id; });
        updateSummary();
      });
    });
  }

  function renderCalendar() {
    var grid = document.getElementById('calendar-grid');
    var label = document.getElementById('cal-month-label');
    if (!grid) return;

    label.textContent = monthNames[state.currentMonth] + ' ' + state.currentYear;

    var firstDay = new Date(state.currentYear, state.currentMonth, 1).getDay();
    var daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var html = '';
    var dayLabels = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayLabels.forEach(function (d) {
      html += '<div class="calendar-day-label">' + d + '</div>';
    });

    for (var i = 0; i < firstDay; i++) {
      html += '<div class="calendar-day empty"></div>';
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var dateStr = state.currentYear + '-' +
        String(state.currentMonth + 1).padStart(2, '0') + '-' +
        String(day).padStart(2, '0');
      var dateObj = new Date(state.currentYear, state.currentMonth, day);
      var isPast = dateObj < today;
      var isSunday = dateObj.getDay() === 0;
      var disabled = isPast || isSunday;
      var selected = state.date === dateStr;

      html += '<div class="calendar-day' +
        (disabled ? ' disabled' : '') +
        (selected ? ' selected' : '') +
        '" data-date="' + dateStr + '">' + day + '</div>';
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.calendar-day:not(.disabled):not(.empty)').forEach(function (dayEl) {
      dayEl.addEventListener('click', function () {
        grid.querySelectorAll('.calendar-day').forEach(function (d) {
          d.classList.remove('selected');
        });
        dayEl.classList.add('selected');
        state.date = dayEl.getAttribute('data-date');
        state.time = null;
        renderTimeSlots();
        updateSummary();
      });
    });
  }

  function renderTimeSlots() {
    var container = document.getElementById('time-slots');
    if (!container) return;

    var booked = state.date ? (bookedSlots[state.date] || []) : [];

    container.innerHTML = timeSlots.map(function (time) {
      var isBooked = booked.indexOf(time) !== -1;
      var selected = state.time === time;
      return '<div class="time-slot' +
        (isBooked ? ' disabled' : '') +
        (selected ? ' selected' : '') +
        '" data-time="' + time + '">' +
        (isBooked ? time + ' (Penuh)' : time) +
        '</div>';
    }).join('');

    container.querySelectorAll('.time-slot:not(.disabled)').forEach(function (slot) {
      slot.addEventListener('click', function () {
        container.querySelectorAll('.time-slot').forEach(function (s) {
          s.classList.remove('selected');
        });
        slot.classList.add('selected');
        state.time = slot.getAttribute('data-time');
        updateSummary();
      });
    });
  }

  function updateSteps() {
    document.querySelectorAll('.booking-step').forEach(function (step, i) {
      var num = i + 1;
      step.classList.remove('active', 'completed');
      if (num < state.step) step.classList.add('completed');
      if (num === state.step) step.classList.add('active');
    });

    document.querySelectorAll('.booking-panel').forEach(function (panel) {
      panel.classList.remove('active');
    });
    var activePanel = document.getElementById('panel-' + state.step);
    if (activePanel) activePanel.classList.add('active');

    document.getElementById('btn-prev').style.visibility = state.step === 1 ? 'hidden' : 'visible';
    document.getElementById('btn-next').style.display = state.step === 4 ? 'none' : 'inline-flex';
    document.getElementById('btn-submit').style.display = state.step === 4 ? 'inline-flex' : 'none';
  }

  function updateSummary() {
    var artistEl = document.getElementById('summary-artist');
    var dateEl = document.getElementById('summary-date');
    var timeEl = document.getElementById('summary-time');

    if (artistEl) artistEl.textContent = state.artist ? state.artist.name : '-';
    if (dateEl) dateEl.textContent = state.date ? formatDate(state.date) : '-';
    if (timeEl) timeEl.textContent = state.time || '-';
  }

  function formatDate(dateStr) {
    var parts = dateStr.split('-');
    return parseInt(parts[2]) + ' ' + monthNames[parseInt(parts[1]) - 1] + ' ' + parts[0];
  }

  function validateStep() {
    if (state.step === 1 && !state.artist) {
      alert('Silakan pilih artist terlebih dahulu.');
      return false;
    }
    if (state.step === 2 && !state.date) {
      alert('Silakan pilih tanggal terlebih dahulu.');
      return false;
    }
    if (state.step === 3 && !state.time) {
      alert('Silakan pilih jam terlebih dahulu.');
      return false;
    }
    return true;
  }

  function nextStep() {
    if (!validateStep()) return;
    if (state.step < 4) {
      state.step++;
      updateSteps();
    }
  }

  function prevStep() {
    if (state.step > 1) {
      state.step--;
      updateSteps();
    }
  }

  function submitBooking(e) {
    e.preventDefault();
    var name = document.getElementById('customer-name').value.trim();
    var phone = document.getElementById('customer-phone').value.trim();
    var email = document.getElementById('customer-email').value.trim();

    if (!name || !phone || !email) {
      alert('Mohon lengkapi semua data.');
      return;
    }

    document.querySelector('.booking-layout').style.display = 'none';
    var success = document.getElementById('booking-success');
    success.style.display = 'block';
    document.getElementById('success-details').innerHTML =
      '<p><strong>Artist:</strong> ' + state.artist.name + '</p>' +
      '<p><strong>Tanggal:</strong> ' + formatDate(state.date) + '</p>' +
      '<p><strong>Jam:</strong> ' + state.time + ' WIB</p>' +
      '<p><strong>Nama:</strong> ' + name + '</p>' +
      '<p><strong>Telepon:</strong> ' + phone + '</p>';
  }

  document.addEventListener('DOMContentLoaded', init);
})();
