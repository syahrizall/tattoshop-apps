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
  { id: 1, category: 'barong', title: 'Barong & Bali Map', caption: 'Barong and Bali map tattoo on inner forearm', image: IMG.tattooSacredGeometry, artist: 'Made Wirata' },
  { id: 2, category: 'floral', title: 'Peony Floral', caption: 'Peony floral tattoo on thigh', image: IMG.tattooRoseTraditional, artist: 'Sari Dewi' },
  { id: 3, category: 'japanese', title: 'Dragon Sleeve', caption: 'Elaborate dragon with flowers on full arm', image: IMG.tattooJapaneseKoi, artist: 'Rio Santoso' },
  { id: 4, category: 'micro', title: 'Shark & Turtle', caption: 'Detailed shark and turtle on leg', image: IMG.tattooMicroScript, artist: 'Sari Dewi' },
  { id: 5, category: 'japanese', title: 'Mask Back Piece', caption: 'Bold mask tattoo on entire back', image: IMG.tattooBlackGreySleeve, artist: 'Rio Santoso' },
  { id: 6, category: 'colour', title: 'Passport Stamps', caption: 'Vibrant passport stamps tattoo on calf', image: IMG.tattooButterflyWatercolor, artist: 'Maya Kirana' },
  { id: 7, category: 'realism', title: 'Portrait Realism', caption: 'Portrait realism on forearm', image: IMG.tattooPortraitRealism, artist: 'Rio Santoso' },
  { id: 8, category: 'realism', title: 'Animal Realism', caption: 'Lion realism tattoo', image: IMG.tattooLionRealism, artist: 'Rio Santoso' },
  { id: 9, category: 'traditional', title: 'Classic Rose', caption: 'Traditional rose on arm', image: IMG.tattooEagleNeoTrad, artist: 'Maya Kirana' },
  { id: 10, category: 'traditional', title: 'Skull Traditional', caption: 'Traditional skull & roses', image: IMG.tattooSkullTraditional, artist: 'Maya Kirana' },
  { id: 11, category: 'mandala', title: 'Mandala Dotwork', caption: 'Mandala dotwork back piece', image: IMG.tattooMandalaDotwork, artist: 'Danu Pratama' },
  { id: 12, category: 'fineline', title: 'Fine Line Floral', caption: 'Fine line floral wrist tattoo', image: IMG.tattooFineLineFloral, artist: 'Sari Dewi' },
  { id: 13, category: 'script', title: 'Micro Script', caption: 'Micro script lettering collarbone', image: IMG.tattooMicroScript, artist: 'Sari Dewi' },
  { id: 14, category: 'realism', title: 'Eye Detail', caption: 'Hyper-realistic eye tattoo', image: IMG.tattooEyeRealism, artist: 'Rio Santoso' },
  { id: 15, category: 'ornamental', title: 'Ornamental Geometry', caption: 'Ornamental geometric forearm piece', image: IMG.tattooMinimalGeometric, artist: 'Danu Pratama' },
  { id: 16, category: 'conceptual', title: 'Conceptual Line Work', caption: 'Conceptual abstract line composition', image: IMG.tattooSacredGeometry, artist: 'Danu Pratama' },
  { id: 17, category: 'fineline', title: 'Butterfly Watercolor', caption: 'Watercolor butterfly shoulder', image: IMG.tattooButterflyWatercolor, artist: 'Sari Dewi' },
  { id: 18, category: 'colour', title: 'Neo-Trad Colour', caption: 'Bold colour neo-traditional chest piece', image: IMG.tattooEagleNeoTrad, artist: 'Maya Kirana' }
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
    name: 'James Mitchell',
    role: 'Fine Line — Jakarta',
    text: 'Sent my idea on WhatsApp, got honest advice, and walked out with exactly what I wanted. Clean studio, zero stress.',
    avatar: IMG.customerAndi
  },
  {
    name: 'Sophie Laurent',
    role: 'Japanese Sleeve',
    text: 'The artists actually listen. Pricing was clear before we started — no surprises. Best tattoo experience in Jakarta.',
    avatar: IMG.customerLisa
  },
  {
    name: 'Marcus Chen',
    role: 'Realism Portrait',
    text: 'Walked in without an appointment and they still made it work. Quality work, not a rushed holiday tattoo.',
    avatar: IMG.customerBudi
  }
];

var CUSTOMER_FAQ = [
  {
    q: 'Why are you the best?',
    a: 'We say we\'re the best because it helps with Google SEO — that\'s the truth <strong>(lol)</strong>.<br><br>But the "best" shop is different for everyone — it depends on your style, your budget, and your expectations.<br><br><strong>Here\'s what we offer:</strong> clean work, a safe studio, fair pricing, and artists who actually listen.<br><br>We <strong>ACTUALLY</strong> care about you (<em>and your money of course</em>).<br><br>If that\'s what you\'re looking for, we\'ll be the best for you.'
  },
  {
    q: 'What\'s the price for your tattoos?',
    a: 'Our minimum price (per person) for any tattoo is <strong>1 million rupiah</strong>.<br><br><strong>Small Tattoo Package</strong><br>For simple designs 5×5cm or smaller.<ul><li>1 small tattoo = 1M rupiah</li><li>2 small tattoos = 1.25M rupiah</li><li>3 small tattoos = 1.5M rupiah</li></ul><strong>Priced per person. T&amp;C\'s apply.</strong><br><br><strong>All Other Tattoos</strong><br>This applies to any tattoo bigger than 5×5cm.<ul><li>We price per design, not per hour</li><li>You\'ll know the exact price before we start</li><li>No hidden fees, no surprises</li><li>Pricing depends on style, detail, and size</li></ul>'
  },
  {
    q: 'How do I book a tattoo?',
    a: 'Send us a message on <strong>WhatsApp</strong>, <strong>Instagram</strong>, or <strong>Facebook</strong>.<br><br>Tell us your tattoo idea and we will:<ul><li>Give you <strong>honest advice</strong> on your design</li><li>Help you choose the <strong>right artist</strong></li><li>Guide you on sizing and placement</li><li>Work with you on the design so it fits <strong>your style</strong> and your body</li></ul>Once you\'re happy, we book you in.<br><br><strong>Simple.</strong>'
  },
  {
    q: 'Do you accept walk-in tattoos?',
    a: 'Yes, we accept walk-ins.<br><br>We\'re open from <strong>10am to 8pm</strong> every day.<br><br>Availability depends on how busy we are at the time — if an artist is free, we can do your tattoo right away.<br><br>If you want to be sure, it\'s best to message us first or book an appointment.'
  },
  {
    q: 'Can you do fine line tattoos?',
    a: '<strong>F*ck yes we can.</strong><br><br>Fine-line tattoos are our most requested style.<br><br>We have <strong>10+ tattoo artists</strong> who specialise in fine-line work, so you\'ll always be matched with someone who does this every day.<br><br>We\'ll be honest about what will look good long-term.<br><br>Send us your idea and we\'ll tell you exactly how we\'d approach it.'
  }
];

var PROCESS_STEPS = [
  { num: '1', title: 'Send Your Idea', desc: 'Tell us what you want. A photo, a sketch, a sentence — whatever you\'ve got.' },
  { num: '2', title: 'Get a Proper Plan', desc: 'We sort out the design direction, sizing, placement, and the right artist for your style.' },
  { num: '3', title: 'Book Your Session', desc: 'Choose a date that works for you. We confirm your artist and lock everything in.' },
  { num: '4', title: 'Tattoo Day', desc: 'Come in, get comfortable, and let your artist do their thing. No stress, no confusion.' }
];

var GALLERY_FILTERS = [
  { id: 'all', label: 'All Styles' },
  { id: 'fineline', label: 'Fine Line' },
  { id: 'realism', label: 'Realism' },
  { id: 'floral', label: 'Floral' },
  { id: 'barong', label: 'Barong' },
  { id: 'mandala', label: 'Mandala' },
  { id: 'conceptual', label: 'Conceptual' },
  { id: 'script', label: 'Script' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'micro', label: 'Micro' },
  { id: 'ornamental', label: 'Ornamental' },
  { id: 'colour', label: 'Colour' }
];

/* Apply data-img attributes on page load */
function bindPageImages() {
  document.querySelectorAll('[data-img]').forEach(function (el) {
    var key = el.getAttribute('data-img');
    if (IMG[key]) el.src = IMG[key];
  });
}

/* ===== Navigation (mobile toggle — dropdown handled in layout.js) ===== */
function initNav() {
  /* noop — layout.js handles nav after mount */
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
