# Tattoo Shop Management System — Static Demo Website

## Referensi Desain

Demo customer-facing website mengikuti struktur, navigasi, copy, dan UX dari [Canggu Ink Club](https://cangguinkclub.com/) sebagai **referensi layout** — dengan brand sendiri **Ink Flow Tattoo** (Jakarta).

Stack: **HTML + CSS + JavaScript vanilla** (tanpa npm/backend).

---

## Tujuan

Website statis untuk **demo penawaran jasa** website & sistem manajemen tattoo shop — bukan SaaS.

---

## Brand Demo

| Item | Nilai |
|------|-------|
| Nama | **Ink Flow Tattoo** |
| Tagline | Best Tattoo Shop in Jakarta |
| Lokasi | Kemang, Jakarta Selatan |
| Bahasa UI | English |
| CTA utama | **Talk to Our Team** |

---

## Struktur Navigasi

| Menu | Halaman | Keterangan |
|------|---------|------------|
| Bookings | `booking.html` | Booking online multi-step (demo) |
| Hygiene | `about.html` | Standar kebersihan & safety |
| Gallery ▾ | `gallery.html` + `?style=` | Dropdown 13 style filter |
| **Aftercare** | `aftercare.html` | **Panduan healing publik** (sesuai Canggu `/aftercare/`) |
| FAQ | `index.html#faq` | Accordion pertanyaan umum |
| Blog | `blog.html` | Artikel tips |
| **Talk to Our Team** | `contact.html` | WhatsApp / IG / FB |

### Gallery dropdown styles

All Styles · Fine Line · Barong · Realism · Mandala · Script · Conceptual · Japanese · Traditional · Floral · Ornamental · Micro · Colour

---

## Halaman Aftercare (`aftercare.html`)

Halaman publik terpisah — **bukan** customer dashboard. Struktur mengikuti [Canggu Ink Club Aftercare](https://cangguinkclub.com/aftercare/):

1. Intro + tanggal review guide  
2. **Step 1** — First 24 hours (plastic wrap & second skin)  
3. Days 2–3 care (no products yet)  
4. **Step 2** — Day 3 until healed (cream application)  
5. What to avoid during healing  
6. Healing timeline (Days 1–3 → Weeks 3–4)  
7. Normal vs NOT normal signs  
8. Recommended products  
9. Questions / Talk to Our Team CTA  

Portal pelanggan (booking, timeline, body map) ada di **`my-account.html`** — demo sistem, bukan halaman aftercare publik.

---

## Home Page (`index.html`)

Urutan section mengikuti referensi Canggu:

Hero → Trust bar → Gallery carousel → CTA → FAQ → Reviews → 4-step Process → Final CTA → Footer → Float widget

---

## Daftar Halaman

| File | Fungsi |
|------|--------|
| `index.html` | Home |
| `aftercare.html` | **Aftercare guide (nav Aftercare)** |
| `my-account.html` | Customer portal demo |
| `account.html` | Redirect → `my-account.html` |
| `booking.html` | Booking 4 langkah |
| `about.html` | Hygiene |
| `gallery.html` | Gallery + lightbox |
| `contact.html` | Hit Us Up |
| `blog.html` | Blog |
| `artists.html` | Profil artist (supplementary) |
| `privacy.html` · `terms.html` · `booking-policy.html` · `touch-up-policy.html` | Legal |
| `admin/owner.html` · `admin/artist.html` | Admin demo |
| `pitch.html` | Penawaran jasa (internal) |

---

## Admin Demo (tambahan)

Owner & artist dashboards — menunjukkan nilai sistem di balik website publik.

---

## JavaScript

| File | Peran |
|------|-------|
| `js/layout.js` | Nav, footer, float — brand **Ink Flow Tattoo** |
| `js/main.js` | Data: IMG, ARTISTS, GALLERY, FAQ |
| `js/site.js` | Home carousel, FAQ, reviews |
| `js/gallery.js` | Filter + lightbox |
| `js/booking.js` | Booking flow |
| `js/image-bind.js` | Images admin/account |
| `js/admin.js` | Tab account + panel admin (owner/artist) |

---

## UI / UX (refresh)

- **Typography:** DM Sans + Syne (`main.css`)
- **Palette:** warm gold accent, soft shadows, rounded cards (`--radius` 14px)
- **Navbar:** blur backdrop, mobile slide-in menu + overlay
- **Responsive:** breakpoint 1024px / 768px — gallery carousel swipe, booking stack, dashboard tabs scroll, admin mobile nav + `table-scroll` pada tabel lebar
- **File dihapus:** `css/demo.css`, `css/landing.css`, `js/dashboard.js`, `package-lock.json` (tidak dipakai)

`pitch.html` memakai `css/site.css` (bukan `landing.css`).

---

## Deskripsi Singkat (English)

> **Ink Flow Tattoo** — static demo tattoo studio website (Jakarta) with Canggu-inspired layout: gallery, aftercare guide, FAQ, booking, and optional admin dashboards. HTML, CSS, vanilla JS only.
