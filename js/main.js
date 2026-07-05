/* ===== Image Library — contextual Unsplash URLs ===== */
function img(photoId, w) {
  w = w || 800;
  return 'https://images.unsplash.com/photo-' + photoId + '?w=' + w + '&q=85&auto=format&fit=crop';
}

var IMG = {
  /* Scene & studio */
  hero: img('1769605767681-749db570b426', 1920),
  studioSetup: img('1526893299283-37e82b1e4da5', 1200),
  studioSession: img('1568515045052-f9a854d70bfd', 1200),
  contactStreet: img('1528909514045-2fa4ac7a08ba', 1200),

  /* Artist portraits — foto orang, bukan tattoo */
  artistRio: img('1508009603885-50cf7c579365', 600),
  artistMaya: img('1573496359142-b8d87734a5a2', 600),
  artistDanu: img('1560250097-0b93528c311a', 600),
  artistSari: img('1580489944761-15a19d654956', 600),

  /* Customer avatars — foto wajah pelanggan */
  customerBudi: img('1472099645785-5658abf4ff4e', 200),
  customerLisa: img('1494790108377-be9c29b29330', 200),
  customerAndi: img('1507003211169-0a1dd7228f2d', 200),
  customerSiti: img('1438761681033-6461ffad8d80', 200),
  customerRizky: img('1500648767791-00dcc994a43e', 200),

  /* Tattoo works — hasil tattoo di kulit */
  tattooPortraitRealism: img('1745777697297-8cb066d8268b', 800),
  tattooLionRealism: img('1605647533135-51b5906087d0', 800),
  tattooRoseTraditional: img('1562962230-16e4623d36e6', 800),
  tattooEagleNeoTrad: img('1613691028991-381d8931cfa3', 800),
  tattooSacredGeometry: img('1566492031773-4f4e44671857', 800),
  tattooMandalaDotwork: img('1562379825-415aea84ebcf', 800),
  tattooFineLineFloral: img('1586243287039-23f4c8e2e7ab', 800),
  tattooMicroScript: img('1531951829979-d658d7e5e8a6', 800),
  tattooEyeRealism: img('1565058379802-bbe93b2f703a', 800),
  tattooSkullTraditional: img('1571781926291-c477ebfd024b', 800),
  tattooMinimalGeometric: img('1542727365-19732a80dcfd', 800),
  tattooButterflyWatercolor: img('1598371839696-5c5bb00bdc28', 800),
  tattooBlackGreySleeve: img('1759247943688-5d47a84dd615', 800),
  tattooJapaneseKoi: img('1597852075234-fd721ac361d3', 800),

  /* Design & healing */
  designMockup: img('1662524518931-43f818c3ffa7', 600),
  healingDay1: img('1565058379802-bbe93b2f703a', 400),
  healingDay7: img('1562962230-16e4623d36e6', 400),
  healingDay30: img('1501939387519-cf9c35d4f4eb', 400),

  /* Promo */
  promoSummer: img('1613691028991-381d8931cfa3', 600),
  promoRefer: img('1516008684536-605574d804ce', 600)
};

var ARTISTS = [
  {
    id: 'rio',
    name: 'Rio Santoso',
    specialty: 'Realism & Portrait',
    photo: IMG.artistRio,
    tags: ['Realism', 'Portrait', 'Black & Grey'],
    bio: 'Spesialis tattoo realistis dengan pengalaman 8 tahun. Portraits, hewan, dan detail presisi tinggi.',
    experience: '8 tahun',
    sessions: '800+',
    portfolio: [
      IMG.tattooPortraitRealism,
      IMG.tattooLionRealism,
      IMG.tattooEyeRealism,
      IMG.tattooBlackGreySleeve
    ]
  },
  {
    id: 'maya',
    name: 'Maya Kirana',
    specialty: 'Traditional & Neo-Traditional',
    photo: IMG.artistMaya,
    tags: ['Traditional', 'Neo-Trad', 'Color'],
    bio: 'Ahli gaya tradisional dengan sentuhan modern. Rose, skull, dan bold color work.',
    experience: '6 tahun',
    sessions: '600+',
    portfolio: [
      IMG.tattooRoseTraditional,
      IMG.tattooEagleNeoTrad,
      IMG.tattooSkullTraditional,
      IMG.tattooEagleNeoTrad
    ]
  },
  {
    id: 'danu',
    name: 'Danu Pratama',
    specialty: 'Geometric & Dotwork',
    photo: IMG.artistDanu,
    tags: ['Geometric', 'Dotwork', 'Mandala'],
    bio: 'Master geometri presisi tinggi dan dotwork detail. Mandala, sacred geometry, minimal line.',
    experience: '7 tahun',
    sessions: '550+',
    portfolio: [
      IMG.tattooSacredGeometry,
      IMG.tattooMandalaDotwork,
      IMG.tattooMinimalGeometric,
      IMG.tattooMandalaDotwork
    ]
  },
  {
    id: 'sari',
    name: 'Sari Dewi',
    specialty: 'Fine Line & Watercolor',
    photo: IMG.artistSari,
    tags: ['Fine Line', 'Watercolor', 'Floral'],
    bio: 'Kreator tattoo artistik dengan gaya fine line dan watercolor. Floral, butterfly, ilustratif.',
    experience: '5 tahun',
    sessions: '400+',
    portfolio: [
      IMG.tattooFineLineFloral,
      IMG.tattooButterflyWatercolor,
      IMG.tattooMicroScript,
      IMG.tattooFineLineFloral
    ]
  }
];

var GALLERY_ITEMS = [
  { id: 1, category: 'realism', title: 'Portrait Realism', caption: 'Portrait realism on forearm', image: IMG.tattooPortraitRealism, artist: 'Rio Santoso' },
  { id: 2, category: 'realism', title: 'Animal Realism', caption: 'Lion realism tattoo', image: IMG.tattooLionRealism, artist: 'Rio Santoso' },
  { id: 3, category: 'traditional', title: 'Classic Rose', caption: 'Traditional rose on arm', image: IMG.tattooRoseTraditional, artist: 'Maya Kirana' },
  { id: 4, category: 'traditional', title: 'Neo-Trad Eagle', caption: 'Neo-traditional eagle chest piece', image: IMG.tattooEagleNeoTrad, artist: 'Maya Kirana' },
  { id: 5, category: 'geometric', title: 'Sacred Geometry', caption: 'Sacred geometry forearm sleeve', image: IMG.tattooSacredGeometry, artist: 'Danu Pratama' },
  { id: 6, category: 'mandala', title: 'Mandala Dotwork', caption: 'Mandala dotwork back piece', image: IMG.tattooMandalaDotwork, artist: 'Danu Pratama' },
  { id: 7, category: 'fineline', title: 'Fine Line Floral', caption: 'Fine line floral wrist tattoo', image: IMG.tattooFineLineFloral, artist: 'Sari Dewi' },
  { id: 8, category: 'fineline', title: 'Micro Script', caption: 'Micro script lettering collarbone', image: IMG.tattooMicroScript, artist: 'Sari Dewi' },
  { id: 9, category: 'realism', title: 'Eye Detail', caption: 'Hyper-realistic eye tattoo', image: IMG.tattooEyeRealism, artist: 'Rio Santoso' },
  { id: 10, category: 'traditional', title: 'Skull Traditional', caption: 'Traditional skull & roses', image: IMG.tattooSkullTraditional, artist: 'Maya Kirana' },
  { id: 11, category: 'geometric', title: 'Line Art Minimal', caption: 'Minimal geometric line work', image: IMG.tattooMinimalGeometric, artist: 'Danu Pratama' },
  { id: 12, category: 'fineline', title: 'Butterfly Watercolor', caption: 'Watercolor butterfly shoulder', image: IMG.tattooButterflyWatercolor, artist: 'Sari Dewi' }
];

var CUSTOMERS = {
  budi: { name: 'Budi Hartono', photo: IMG.customerBudi },
  lisa: { name: 'Lisa Permata', photo: IMG.customerLisa },
  andi: { name: 'Andi Wijaya', photo: IMG.customerAndi },
  siti: { name: 'Siti Rahma', photo: IMG.customerSiti },
  rizky: { name: 'Rizky Pratama', photo: IMG.customerRizky }
};

var TESTIMONIALS = [
  {
    name: 'Andi Wijaya',
    role: 'Realism Sleeve — Rio',
    text: 'Booking online-nya gampang banget. Gak perlu DM bolak-balik. Hasil realism-nya beyond expectation — detailnya gila.',
    avatar: IMG.customerAndi
  },
  {
    name: 'Lisa Permata',
    role: 'Traditional Rose — Maya',
    text: 'Studio-nya bersih, artist-nya profesional. Maya sangat detail pas konsultasi design. Highly recommended.',
    avatar: IMG.customerLisa
  },
  {
    name: 'Budi Hartono',
    role: 'Geometric Back — Danu',
    text: 'Mandala dotwork-nya presisi banget. Aftercare guide digital-nya juga membantu pas healing. Will come back.',
    avatar: IMG.customerBudi
  }
];

var CUSTOMER_FAQ = [
  {
    q: 'Kenapa harus di InkFlow?',
    a: 'Kami fokus pada <strong>kualitas kerja, studio aman, harga transparan</strong>, dan artist yang benar-benar dengerin ide kamu. Bukan sekadar "bisa tattoo" — tapi tattoo yang kamu banggakan bertahun-tahun.'
  },
  {
    q: 'Berapa harga tattoo di sini?',
    a: 'Harga minimum kami <strong>Rp 500.000</strong> (deposit) untuk mengamankan slot.<br><br><strong>Tattoo Kecil (≤ 5×5 cm)</strong><ul><li>1 tattoo = mulai Rp 800.000</li><li>2 tattoo = mulai Rp 1.200.000</li></ul><strong>Tattoo Besar</strong><ul><li>Harga per design, bukan per jam</li><li>Kamu tau harga pasti sebelum mulai</li><li>Tidak ada biaya tersembunyi</li></ul>'
  },
  {
    q: 'Gimana cara booking?',
    a: 'Klik <strong>Book Now</strong> di website, pilih artist, tanggal, dan jam. Atau chat kami via WhatsApp. Kami akan:<ul><li>Kasih saran jujur soal design kamu</li><li>Bantu pilih artist yang tepat</li><li>Guide sizing dan placement</li></ul>Setelah deal, slot kamu locked. <strong>Simple.</strong>'
  },
  {
    q: 'Bisa walk-in?',
    a: 'Bisa. Studio buka <strong>10:00 – 20:00</strong> (Sen–Jum), Sabtu sampai 22:00. Tergantung ketersediaan artist saat itu. Mau pasti? Booking online dulu.'
  },
  {
    q: 'Bisa fine line tattoo?',
    a: '<strong>Absolutely.</strong> Fine line adalah style paling sering dipesan. Sari Dewi spesialis fine line & watercolor. Kami jujur soal apa yang tahan lama dan apa yang perlu adjustment.'
  }
];

var PROCESS_STEPS = [
  { num: '1', title: 'Kirim Ide Kamu', desc: 'Foto, sketch, atau cuma satu kalimat — apapun yang kamu punya.' },
  { num: '2', title: 'Rencana yang Jelas', desc: 'Design, ukuran, placement, dan artist yang tepat buat style kamu.' },
  { num: '3', title: 'Book Session', desc: 'Pilih tanggal. Kami konfirmasi artist dan lock semuanya.' },
  { num: '4', title: 'Tattoo Day', desc: 'Datang, relax, biarkan artist kami bekerja. No stress.' }
];

var GALLERY_FILTERS = [
  { id: 'all', label: 'All Styles' },
  { id: 'realism', label: 'Realism' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'geometric', label: 'Geometric' },
  { id: 'mandala', label: 'Mandala' },
  { id: 'fineline', label: 'Fine Line' }
];

/* Apply data-img attributes on page load */
function bindPageImages() {
  document.querySelectorAll('[data-img]').forEach(function (el) {
    var key = el.getAttribute('data-img');
    if (IMG[key]) el.src = IMG[key];
  });
}

/* ===== Navigation ===== */
function initNav() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  bindPageImages();
  initNav();
  initFAQ();
  initSmoothScroll();
});
