# 01: Review jakim.id

**Tanggal cek:** 7 Nov 2026
**Cara cek:** dibuka langsung di browser, versi desktop dan HP (emulasi 375×812). Data ukuran halaman dan struktur diambil dari browser.

> **Kesimpulan:** sebagai poster event, website-nya keren. Sebagai alat untuk daftar, lemah. Pelari harus menggali dulu untuk tahu 3 hal paling dasar: **kategori mana yang masih buka, berapa harganya, dan bagaimana cara daftarnya.**

---

## Konteks
- **Event:** JAKIM 2027, 12–13 Juni 2027, Monas–GBK. Penyelenggara IMRR.
- **Kategori:**
  - Day 1 (Sabtu): 5K & 10K
  - Day 2 (Minggu): HM & FM
- **Early bird:** buka 5 Nov 2026. General registration dibuka setelah early bird habis.
- **Peserta tahun-tahun sebelumnya:** 15.000+ (2024), 30.000+ (2025), 45.000+ (2026).
- **Registrasi:** lewat pihak ketiga, sporticx.com.

## Skor ringkas (opini)
| Aspek | Nilai | Catatan |
|---|---|---|
| Visual / brand | 8/10 | Hitam-emas plus ondel-ondel, kerasa Jakarta |
| Fungsi daftar | 4/10 | Info penting tersembunyi atau tidak sinkron |
| UX mobile | 5/10 | Layar pertama tanpa info inti |
| Performa | 5/10 | ±4,6 MB, gambar berat |
| Konten / SEO / a11y | 4/10 | Alt kosong, duplikasi, meta tipis |

---

## 1. Fungsi & alur daftar 🔴 (paling krusial)
| # | Temuan | Bukti | Dampak |
|---|---|---|---|
| F1 | **5K & 10K sudah SOLD OUT, tapi homepage masih mempromosikan keduanya** | Di `/registration`, kartu Day 1 bertulisan "Sold Out". Di homepage, kartu 5K/10K tidak punya label status | Pelari baru tahu sudah habis setelah 2–3 klik, jadi kecewa |
| F2 | **Harga tersembunyi** | Harga hanya muncul setelah klik "Ticket price details" di tiap kartu, dan kartunya ada di carousel horizontal | Pertanyaan paling umum ("berapa?") butuh banyak klik |
| F3 | **National vs Open tidak dijelaskan di dekat harga** | Contoh: HM National Rp850.000 vs Open Rp1.270.430 (angka ganjil). Artinya (WNI vs WNA) baru ada di halaman FAQ | Bingung, lalu nanya ke DM/WA. WNA tidak tahu harus pilih yang mana |
| F4 | **"How to Register" berupa 1 gambar** | Gambar 1920×1080 landscape, di HP tampil ±330px | Teksnya tidak terbaca di HP dan tidak bisa dicari Google |
| F5 | **Pindah ke sporticx.com tanpa penjelasan** | Tombol Register Now langsung ke domain lain | Pelari ragu situsnya resmi atau bukan |
| F6 | **Menu penuh "(to be announced)"** | 28 item TBA, cuma 9 link aktif | Website terkesan belum jadi, padahal pendaftaran sudah buka |

Harga per kategori (dicek dari `data-price-category` di modal, 7 Nov 2026):

| Kategori | Hari | Early bird | General (National / WNI) | General Open (WNA) |
|---|---|---|---|---|
| 5K | Sabtu 12 Jun | 375.000 | 500.000 | – |
| 10K | Sabtu 12 Jun | 487.500 | 650.000 | – |
| HM 21K | Minggu 13 Jun | 637.500 (National only) | 850.000 | 1.270.430 |
| FM 42K | Minggu 13 Jun | 750.000 (National only) | 1.000.000 | 1.814.900 |

**Arti National vs Open** baru dijelasin di halaman FAQ (`/pre-race`), bukan di dekat harga:
- **National** = WNI.
- **Open** = WNA, khusus HM & FM.
- **"National only"** di early bird artinya early bird HM/FM cuma buat WNI. Pendaftaran internasional baru dibuka 1–31 Des 2026.

**Info penting lain yang terkubur di FAQ:**
- Batas umur: 5K minimal 13 tahun, kategori lain minimal 17 tahun.
- Race pack **wajib** diambil di JICC, 10–12 Jun 2027. Kalau tidak diambil, status peserta hangus.
- Tidak ada info refund.
- General registration tidak punya tanggal pasti, dibuka "setelah early bird habis".


### Temuan tambahan (cek isi FAQ & gambar "How to Register")
| # | Temuan | Dampak |
|---|---|---|
| F7 | FAQ no. 8 "Bagaimana tata cara registrasi?" dijawab **"Akan diinformasikan selanjutnya"**, padahal pendaftaran sudah buka dan caranya ada di gambar `/registration` | Info bertentangan, sehingga kredibilitas turun |
| F8 | Sebenarnya ada **10 kategori** (termasuk Master: 10K Master A 40–49, Master B 50+, HM & FM Master 45+, khusus WNI), tapi homepage cuma menampilkan 4 | Pelari 40+ tidak tahu ada kategori untuk mereka |
| F9 | **Batas isi data cuma 7 menit** di Sporticx, dan info ini cuma ada di dalam gambar "How to Register" | Info kritis tidak terbaca di HP. Pelari bisa gagal checkout |
| F10 | FAQ no. 10 "Apa yang didapat?" dijawab "berupa link berikut", tapi link-nya tidak ada | Rujukan putus |
| F11 | Format harga tidak konsisten ("Rp375.000" vs "IDR 487.500") | Kecil, tapi kelihatan tidak rapi |
| F12 | Setiap pertanyaan FAQ muncul **2×** di DOM, ditambah versi EN & ID | Halaman ±4.800 kata, berat dan SEO berantakan |

## 2. UX mobile 🟠
- **U1:** Layar pertama di HP berisi kolase video saja. Judul ("RUN WITH JAKARTA"), tanggal, dan CTA baru muncul setelah scroll. Satu-satunya CTA adalah tombol "Register Now" kecil di header, dengan font 11px.
- **U2:** Kartu kategori berbentuk carousel horizontal, jadi di HP cuma 1 dari 4 kategori yang terlihat. Perbandingan antar kategori tidak mungkin dilakukan.
- **U3:** Ada area kosong panjang sebelum gambar lazy-load muncul. Belum pasti ini masalah, mungkin cuma soal timing waktu dicek.
- **U4:** Halaman registrasi bergaya terang (abu-abu/putih), beda nuansa dengan homepage yang gelap, jadi kerasa seperti situs lain.
- **U5:** Banyak teks 10–11px (eyebrow, tombol header). Terlalu kecil untuk dibaca di HP.

## 3. Performa 🟠
| Item | Angka |
|---|---|
| Total transfer saat load | ±4,6 MB (31 request) |
| Gambar via CSS background | ±3,7 MB (tidak ikut lazy-load) |
| File terberat | `bg_city_new.jpg.jpeg`: 1,5 MB (nama file juga dobel ekstensi) |
| | `GALERI 2025.jpg` / `bg_10k.jpeg`: 650 KB |
| | 2 PNG ondel-ondel: ±330 KB per file |
| Video hero | autoplay, muted, **tanpa poster** |
| TTFB / load | 0,27 s / ±2,0 s (koneksi cepat) |

*Asumsi: di 4G biasa, load-nya akan jauh lebih lama. Belum dites di perangkat asli.*

## 4. Konten, SEO, aksesibilitas 🟡
- **C1:** 17 dari 26 gambar tidak punya `alt`.
- **C2:** Duplikasi di DOM. Marquee "12–13 JUNE 2027. MONAS–GBK. JUST RUN IT." diulang 8×, dan kartu kategori dirender 3× (12 kartu untuk 4 kategori). Jadi noise untuk screen reader dan Google.
- **C3:** Meta description cuma "Jakarta International Marathon 2027", tanpa tanggal, lokasi, kategori, atau harga.
- **C4:** Bahasa campur dalam satu halaman ("Lapor BIB", "Hadiah" berdampingan dengan "Results", "Entry"), padahal `lang="en"`.
- **C5:** Heading tidak rapi. Ada `H3` kosong, dan H2 dipakai untuk elemen dekoratif.

## 5. Desain
**Sudah kuat:**
- Identitas hitam + emas, ondel-ondel geometris, nuansa "5 Abad Jakarta".
- Tipografi condensed (Bebas Neue / Barlow Condensed) cocok untuk olahraga.
- Foto Memory Lane bagus, dan angka 15rb → 30rb → 45rb jadi social proof yang kuat.

**Kurang:**
- **Hirarki terbalik.** Yang paling besar justru foto suasana, sedangkan info untuk mengambil keputusan (status, harga, cara daftar) paling kecil atau tersembunyi.
- **Token warna berantakan** (detail di `02-DESIGN-SYSTEM-ASLI.md`):
  - `--blue` jadi theme-color, padahal visualnya tidak biru
  - `--white-soft` justru warna gelap
  - 3 token background semuanya `#fff`
- **Gold dipakai 2 versi** (`#d4af37` dan `#ffd13b`) tanpa aturan jelas kapan pakai yang mana.
- **Gaya halaman tidak konsisten** antara homepage dan registrasi.

## Yang sudah benar
- TTFB cepat (0,27 s), tidak ada error di console.
- 19 dari 26 gambar sudah `loading="lazy"`.
- Konsep halaman registrasi yang dibagi Day 1 / Day 2 sudah jelas, tinggal dibawa ke homepage.
- Countdown jalan (216 hari saat dicek).

---

## Prioritas perbaikan (dibawa ke revamp)
1. Status + harga semua kategori terlihat **tanpa klik**, termasuk badge Sold Out (F1, F2, U2).
2. Layar pertama HP: judul, tanggal, status, dan 1 CTA (U1).
3. Cara daftar dalam bentuk teks 5 langkah, plus penjelasan Sporticx sebagai partner resmi (F4, F5).
4. Penjelasan National vs Open (F3).
5. Menu hanya berisi yang live, sisanya dikumpulkan jadi "Segera hadir" (F6).
6. Gambar WebP/AVIF, poster video, target < 1 MB first load (performa).
