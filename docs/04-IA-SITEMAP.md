# 04: Information Architecture (IA) jakim.id

**Tanggal cek:** 7 Nov 2026. Semua halaman dibuka satu per satu, plus dicek `sitemap.xml`.

## 1. Halaman yang benar-benar ada
| URL | Isi | Catatan |
|---|---|---|
| `/` | Homepage: hero video, countdown, stats, memory lane, kategori (+ modal harga), social hub, sponsor, CTA | Lihat 01-REVIEW |
| `/registration` | "Lock your slot": kartu Day 1 (5K & 10K, **Sold Out**) & Day 2 (HM & FM, Register Now), "How to Register" (1 gambar) | Tombol daftar & cek status ke **sporticx.com** |
| `/pre-race` | Tab FAQ + Syarat & Ketentuan, **±4.800 kata** | Versi EN dan ID dua-duanya ada di DOM, sehingga ada beberapa `H1`. Info penting (WNI/WNA, umur minimal, race pack wajib) terkubur di sini |
| `/race` | Rute: 4 tab (5K / 10K / HM / FM), peta rute berupa **gambar**, info hari dan **cut-off time** (5K 1 jam, 10K 2 jam, HM 3,5 jam, FM 7 jam) | Cuma ±60 kata. COT termasuk info penting, tapi tidak muncul di homepage/harga |
| `/race-pack-collection` | Tanggal 10–12 Jun 2027, JICC, benefit peserta, size chart jersey | Bagus, tapi tidak di-link dari homepage |
| `/sunmorun` | Sunday Morning Run 2026 + "2027 April–May, Coming soon" | ±14 kata |
| `/kontak` | Partnership, Sponsorship, Commercial/Merch/Hotel, Customer Service, jam operasional | |
| `/galeri/2024`, `/2025`, `/2026` | Galeri foto per tahun (9–16 foto) | Tidak ada di sitemap |
| Results | **Eksternal**: result.sporticx.com (2024, 2025, 2026 day 1 & day 2) | |
| `/expo`, `/about`, `/faq`, `/results` | **404** | URL yang "ditebak" orang tidak ada |

**`sitemap.xml`** cuma berisi 6 URL (`/`, `/registration`, `/pre-race`, `/race`, `/sunmorun`, `/kontak`). Halaman galeri dan race-pack tidak masuk.

## 2. Struktur menu sekarang
`✅` = link aktif. Sisanya *(to be announced)*.

- **Entry:** ✅ Register Now · ✅ FAQ · ✅ SnK
- **Expo:**
  - Information
  - Exhibitors
  - Activity Race Expo
  - ✅ Race Pack Collection
- **Race Weekend**
  - **Pre Race:** Road closure · How to Entry · Race Center · Entertainment
  - **Race:**
    - Download Apps · ✅ Route · Pace Team · Guideline E-Book
    - Race Policies & Etiquette · Joy Zone · Route facilities & Medical
    - Media Policies · BIB Tracking
  - **After Race:** Prizes · Results · Photos · Report BIB · Entertainment
- **Training:** ✅ Sunmorun · Workshop · Training Program
- **Tourism:** Transport · Accommodation · Destination Partners
- **More:** Medal Monday · The City Club
- **About:** ✅ Contact Us · Sustainability

**Angka:** ±37 item menu, **cuma 9 link aktif** (±24%), dengan **28 item TBA**.

## 3. Masalah IA
| # | Masalah | Dampak |
|---|---|---|
| IA1 | Menu disusun untuk **event lengkap** (juni 2027), padahal kebutuhan sekarang (Nov 2026) cuma **daftar** | Pengunjung harus melewati 28 item kosong |
| IA2 | Info untuk mengambil keputusan tersebar di 4 tempat: harga di modal homepage, status di `/registration`, WNI/WNA & umur di `/pre-race`, COT di `/race` | Tidak ada satu halaman yang menjawab "gue bisa ikut kategori apa, berapa, sampai kapan" |
| IA3 | Results ada di menu After Race (TBA), tapi link-nya justru di homepage | Membingungkan |
| IA4 | "Route" ada di bawah Race Weekend → Race, padahal pelari mencarinya **sebelum daftar** | Rute dan COT jadi pertimbangan sebelum beli tiket |
| IA5 | `/pre-race` berisi FAQ dan S&K 2 bahasa dalam 1 halaman (±4.800 kata) | Berat, susah dicari, SEO berantakan (banyak H1) |
| IA6 | URL umum (`/faq`, `/results`, `/about`) 404 | Link yang dibagikan orang atau ditebak jadi mati |
| IA7 | Sitemap tidak lengkap | Galeri dan race-pack tidak terindeks |

## 4. IA usulan revamp
**Keputusan (7 Nov):** yang di-revamp hanya halaman yang **sudah di-announce/live**. Menu yang masih TBA **tetap muncul di navbar**, tapi **disabled** dengan label "Segera". Pengunjung tetap tahu apa saja yang akan ada, tapi tidak ada klik yang mentok.

Urutan menu disusun dari **kebutuhan pengunjung sekarang** (mau daftar), bukan dari jadwal event bulan Juni.

### Sitemap (halaman yang dibangun)
```
/                     Home
/daftar               Daftar          ← status per kategori, harga WNI/WNA, cara daftar (teks), cek status
/kategori             Kategori & Rute ← 10 kategori (incl. Master), jarak, hari, COT, umur min, rute per tab
/race-pack            Race Pack       ← jadwal & lokasi, benefit, size chart
/faq                  FAQ             ← dipisah dari S&K, bisa dicari, 1 bahasa per toggle
/syarat-ketentuan     S&K
/galeri               Galeri & Hasil  ← 2024 / 2025 / 2026 + link results Sporticx
/sunmorun             Sunmorun        ← 2026 recap + 2027 coming soon
/kontak               Kontak
```

### Navbar
```
[Logo]  Daftar  Kategori & Rute  Race Pack  FAQ  Galeri & Hasil  Kontak   [Segera hadir ▾]  [ID|EN]  [DAFTAR]
```
**Dropdown "Segera hadir":** semua item disabled, abu-abu, dengan label `Segera`, kecuali yang ditandai ✅.
- **Expo:** Information · Exhibitors · Activity Race Expo
- **Race Weekend:**
  - Road closure · How to Entry · Race Center · Entertainment
  - Download Apps · Pace Team · Guideline E-Book · Race Policies & Etiquette
  - Joy Zone · Route facilities & Medical · Media Policies · BIB Tracking
- **After Race:** Prizes · Results 2027 · Photos · Report BIB
- **Training:** ✅ Sunmorun (aktif) · Workshop · Training Program
- **Tourism:** Transport · Accommodation · Destination Partners
- **More:** Medal Monday · The City Club · Sustainability

**HP:** hamburger (menu utama di atas, "Segera hadir" collapsible di bawah) + sticky bottom bar **Daftar sekarang**.

**Redirect:** `/pre-race` → `/faq`, `/race` → `/kategori`, `/registration` → `/daftar`, `/race-pack-collection` → `/race-pack`, `/results` → `/galeri`, `/about` → `/kontak`.

**Kenapa begini:**
- Menu utama 6 item, **semuanya aktif**.
- Fitur TBA tetap terlihat (memberi rasa "event besar"), tapi dikelompokkan dan jelas statusnya.

## 5. Dampak ke build
Lihat `05-PAGE-SPECS.md` (isi per halaman) dan `06-DATA.md` (satu sumber data).

---

## Update 8 Nov 2026: menu disamakan dengan jakim.id
**Keputusan Rafi:** nama dan struktur menu navbar **disamakan persis** dengan website asli:
- Top-level: Entry · Expo · Race Weekend · Training · Tourism · More · About.
- Isi dropdown sama dengan aslinya.
- Item yang belum ada tetap tampil dengan keterangan "(to be announced)", **tidak bisa diklik**.

Usulan menu 6 item di atas **tidak dipakai**. Yang tetap berbeda dari aslinya:
- Desain dropdown lebih rapi. Race Weekend jadi mega-menu 3 kolom: Pre Race / Race / After Race.
- Item aktif dan item TBA dibedakan jelas lewat warna.
- Tombol "Register Now" di navbar diganti satu tombol DAFTAR di kanan + switch ID/EN.
- Data menu ada di `app/src/lib/menu.js`.

**Navbar final (8 Nov):** logo · 7 menu dropdown (Race Weekend = mega menu 3 kolom) · pill ID | EN (tanpa icon globe) · tombol Daftar. Bahasa: ID di `/`, EN di `/en/...`, switch tetap di halaman yang sama.
