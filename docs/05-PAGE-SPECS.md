# 05: Page Specs (isi per halaman)

Semua halaman mobile-first (375px), memakai token di `02-DESIGN-SYSTEM-ASLI.md` dan data dari `data/race.json`.
**Sumber** = dari halaman asli mana kontennya diambil.

---

## Global
**Navbar** (detail di `04-IA-SITEMAP.md`):
- Logo · 6 menu aktif · dropdown "Segera hadir" (disabled + label Segera) · ID/EN · tombol **DAFTAR**.
- HP: hamburger + sticky bottom bar **Daftar sekarang** (muncul setelah lewat hero; tidak tampil di halaman Daftar).

**Footer:**
- Kontak CS (WA + jam operasional), email, IG.
- Presented by (Jakarta / 5 Abad Jakarta), organized by IMRR.
- Link menu utama + "Data per 7 Nov 2026".
- Label "Konsep revamp tidak resmi, tidak berafiliasi dengan JAKIM/IMRR".

**Bahasa:** default ID. Toggle EN mengganti seluruh teks (tidak dicampur).

---

## Fase 1

### `/` Home
| # | Section | Isi | Sumber |
|---|---|---|---|
| 1 | Hero | H1 "JAKARTA INTERNATIONAL MARATHON 2027", "12–13 Juni 2027 · Monas → GBK", chip status (`Early bird HM & FM dibuka · 5K & 10K habis`), CTA **Daftar HM / Marathon**, link "Lihat harga ↓". Bg 1 foto WebP + overlay | Homepage, /registration |
| 2 | Status & harga | 4 kartu vertikal (bukan carousel). Tiap kartu: jarak, hari, badge BUKA/SOLD OUT, harga early → general, COT, umur min. Toggle **WNI / WNA** (WNA cuma HM & FM, dengan catatan "dibuka 1–31 Des"). Link "Ada kategori Master 40+ →" | Modal harga, /pre-race FAQ 4–6, /race |
| 3 | Cara daftar | 3 langkah ringkas + peringatan **"Isi data maks 7 menit, siapkan KTP/data dulu"** + link "Lihat detail" ke /daftar | Gambar How to Register |
| 4 | Countdown + stats | Countdown ke 13 Jun 2027 + 12rb (2023) → 45rb (2026) pelari | Homepage, FAQ 1 |
| 5 | Kenapa JAKIM | 2–3 kalimat: HUT Jakarta ke-500, start Monas, finish GBK | FAQ 1–2 |
| 6 | Memory lane | 3 kartu foto 2024/2025/2026 → Galeri & Hasil | Homepage |
| 7 | FAQ singkat | 5 pertanyaan teratas (accordion) → link /faq | /pre-race |
| 8 | CTA penutup | "Sampai ketemu di garis start. 12–13 Juni 2027" + tombol Daftar | Homepage |

### `/daftar` Daftar
| # | Section | Isi | Sumber |
|---|---|---|---|
| 1 | Header | "Daftar JAKIM 2027" + fase pendaftaran sekarang (timeline: Early bird → General → Internasional) | FAQ 3 |
| 2 | Pilih hari | Kartu **Day 1** (5K & 10K: **SOLD OUT**, tombol disabled, link "Cek status pendaftaran") dan **Day 2** (HM & FM: **BUKA**, tombol Daftar) | /registration |
| 3 | Harga lengkap | Tabel: kategori × (early, general WNI, general WNA) + varian Master | Modal, FAQ 9 |
| 4 | Cara daftar | **5 langkah teks** bernomor, langkah 3 dengan kotak peringatan 7 menit | Gambar How to Register |
| 5 | Sebelum daftar | Checklist: umur minimal, WNI/WNA, race pack wajib diambil 10–12 Jun di JICC | FAQ 4, 11 |
| 6 | Tentang Sporticx | "Pembayaran diproses oleh Sporticx, partner tiket resmi JAKIM" + link cek status | /registration |

---

## Fase 2

### `/kategori` Kategori & Rute
| # | Section | Isi | Sumber |
|---|---|---|---|
| 1 | Tab kategori | 5K · 10K · HM · Marathon (sticky di atas) | /race |
| 2 | Ringkasan | Jarak, hari, jam start (04.00 WIB), COT ("dihitung setelah last start"), umur min, eligibility, status + harga singkat | /race, FAQ 4–6, 12 |
| 3 | Varian | List varian termasuk Master | FAQ 5 |
| 4 | Peta rute | Gambar rute (zoom/pinch, alt jelas) + start Monas / finish GBK | /race |
| 5 | CTA | Daftar kategori ini (disabled + "Sold out" jika habis) | data |

### `/race-pack` Race Pack
| # | Section | Isi | Sumber |
|---|---|---|---|
| 1 | Info utama | Tanggal, lokasi JICC, jam "diinformasikan kemudian", badge **WAJIB DIAMBIL** | /race-pack-collection, FAQ 11 |
| 2 | Benefit | Grid 9 benefit sebagai **teks + ikon** (bukan gambar PNG) | /race-pack-collection |
| 3 | Size chart | Tabel ukuran pria/wanita (teks), gambar asli sebagai cadangan | /race-pack-collection |

---

## Fase 3

### `/faq` FAQ
- Search box + grup:
  - Pendaftaran
  - Kategori
  - Race Pack
  - Hari H (start, penitipan barang, parkir, water station)
  - Kontak
- 1 bahasa per toggle (tidak dobel).
- Jawaban FAQ 8 diganti dengan cara daftar yang benar.
- **Sumber:** /pre-race tab FAQ (19 pertanyaan).

### `/syarat-ketentuan` S&K
- Daftar isi lompat ke bab: Ketentuan Umum · Registrasi · Race Expo · Perlombaan · Hadiah & Medali · Lainnya.
- **Sumber:** /pre-race tab S&K.

### `/galeri` Galeri & Hasil
- Tab tahun 2024 / 2025 / 2026.
- Album: Event Day, Shakeout Run, Road To, Sunmorun.
- Kartu Results per tahun (link ke Sporticx).
- **Sumber:** /galeri/20xx, homepage.

### `/sunmorun` Sunmorun
- Recap 2026 (foto komunitas: Le Minerale, Riot, Meta Run, Skolari, CEO Runners, Benerun).
- 2027 "April–Mei 2027, segera".
- **Sumber:** /sunmorun.

### `/kontak` Kontak
- 3 kartu WA: Customer Service (+ jam operasional), Sponsorship, Commercial/Merch/Hotel.
- Plus email dan IG.
- **Sumber:** /kontak.

---

## Komponen yang dipakai ulang
| Komponen | Dipakai di |
|---|---|
| `StatusBadge` (BUKA / SOLD OUT) | Home, Daftar, Kategori |
| `PriceCard` / `PriceTable` + toggle WNI/WNA | Home, Daftar |
| `Steps` (+ warning) | Home, Daftar, FAQ |
| `ComingSoonMenu` (disabled items) | Navbar, menu HP |
| `StickyRegisterBar` | Semua halaman kecuali /daftar |
| `Accordion` | Home FAQ, /faq |
