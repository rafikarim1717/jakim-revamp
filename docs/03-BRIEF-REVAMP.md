# 03: Brief Revamp JAKIM

> **Status:** docs lengkap (01–06), belum mulai build.
> **Sifat:** konsep tidak resmi untuk konten Threads (format "revamp"), bukan pesanan klien.

## 1. Satu kalimat
**Pelari cuma butuh 3 jawaban: kategori mana yang masih buka, berapa harganya, dan bagaimana cara daftarnya. Revamp ini menaruh ketiganya di layar pertama HP.**

## 2. Masalah utama (dari 01-REVIEW)
1. 5K/10K sudah sold out, tapi homepage tidak bilang apa-apa.
2. Harga tersembunyi di modal, di dalam carousel.
3. Cara daftar berupa gambar yang tidak terbaca di HP.
4. Layar pertama HP cuma video, tanpa info dan tanpa CTA yang jelas.
5. Halaman berat (±4,6 MB) dan menu penuh "to be announced".

## 3. Prinsip revamp
- **Bukan rebrand.** Tetap hitam-emas, Bebas Neue / Barlow / Inter, kotak tajam, ondel-ondel. Yang diubah **hirarki dan fungsinya**.
- **Mobile-first.** Didesain di 375px dulu, desktop menyusul.
- **Info dulu, suasana kemudian.** Foto dan video tetap ada, tapi di bawah info untuk mengambil keputusan.
- **Satu sumber data.** Status dan harga dari 1 file data, jadi homepage dan halaman registrasi tidak bisa beda lagi (masalah F1).

## 4. Struktur halaman (homepage revamp, urutan di HP)
| # | Section | Isi | Menyelesaikan |
|---|---|---|---|
| 1 | **Hero** | Logo, H1 "JAKARTA INTERNATIONAL MARATHON 2027", "12–13 Juni 2027 · Monas–GBK", chip status ("Early bird dibuka · 5K & 10K habis"), CTA utama **Daftar HM / FM** + link "Lihat semua harga ↓". Background 1 foto WebP (bukan video) | U1 |
| 2 | **Status & harga** | Tabel/list 4 kategori: hari, jarak, cut-off time, umur minimal, harga early bird → general, badge **BUKA / SOLD OUT**. Toggle **WNI (National) / WNA (Open)** dengan penjelasan 1 kalimat. Tambah info umur minimal dan "race pack wajib diambil" | F1 F2 F3 U2 |
| 3 | **Cara daftar** | 5 langkah teks bernomor + catatan "Pembayaran lewat Sporticx, partner tiket resmi" + tombol "Cek status pendaftaran" | F4 F5 |
| 4 | **Countdown + social proof** | Countdown dan angka 15rb → 30rb → 45rb pelari | dipertahankan |
| 5 | **FAQ singkat** | 5 pertanyaan teratas (Nasional vs Open? Kapan general dibuka? Race pack di mana? Refund? Batas waktu?) | kurangi DM |
| 6 | **Memory lane & results** | Galeri 2024–2026 + link hasil | dipertahankan |
| 7 | **Footer** | Kontak, sosmed, sponsor. Menu mengikuti IA baru (lihat 04-IA-SITEMAP); fitur TBA dikumpulkan di blok "Segera hadir" | F6, IA1 |

**Navigasi HP:** header tipis (logo + tombol Daftar), plus **sticky bottom bar** "Daftar sekarang" yang muncul setelah scroll melewati hero.

## 5. Arah desain
- **Token:** pakai "Token rapi untuk revamp" di `02-DESIGN-SYSTEM-ASLI.md`.
- **Tipografi HP:**
  - H1 Bebas Neue 56–64px
  - Angka harga Barlow Condensed 28px/800
  - Body Inter 16px
  - Label Inter 12px uppercase
- **Badge status** jadi elemen baru paling penting:
  - BUKA: hijau `--open` + titik berdenyut
  - SOLD OUT: abu `--sold`, harga dicoret tipis
- **Bahasa:** default Indonesia, toggle EN konsisten (tidak dicampur).

## 6. Target teknis
| Metrik | Asli | Target revamp |
|---|---|---|
| First load | ±4,6 MB | < 1 MB |
| Gambar | JPEG/PNG besar via CSS | WebP/AVIF, `next/image`, lazy |
| Hero | video autoplay tanpa poster | 1 foto (video opsional + poster) |
| Alt text | 17/26 kosong | 100% terisi |
| Duplikasi DOM | marquee 8×, kartu 3× | 0 |
| Meta | 1 kalimat | tanggal, lokasi, kategori, OG image |

**Stack:** Next.js (static export) + Tailwind. Data kategori/harga/status dari `data/race.json`. Hosting preview di Vercel untuk demo.

## 7. Scope
**Keputusan (7 Nov):** revamp **semua halaman yang sudah di-announce**. Menu TBA tetap di navbar tapi disabled (detail di `04-IA-SITEMAP.md`). Dikerjakan bertahap, dan tiap fase jadi 1 post Threads (format serial).

| Fase | Halaman | Konten Threads |
|---|---|---|
| **1** | Home + Daftar + navbar/footer | Post #1: "POV kalo gue jadi developer JAKIM" (3–4 frame sebelum/sesudah) |
| **2** | Kategori & Rute + Race Pack | Post #2: "Day 2 revamp JAKIM: info sebelum beli tiket" |
| **3** | FAQ + S&K, Galeri & Hasil, Sunmorun, Kontak | Post #3: "Day 3: 4.800 kata FAQ jadi bisa dicari" |

**Tidak dikerjakan:**
- Isi menu TBA (Expo, Race Weekend, dll.)
- Sistem registrasi/pembayaran (tetap link ke Sporticx)
- CMS

## 8. Deliverable konten (Threads)
3 gambar 1080×1350, format **sebelum → sesudah** di bingkai HP:
1. **Layar pertama:** asli (video, tanpa info) vs revamp (judul, tanggal, status, CTA).
2. **Cari harga:** asli (klik kartu → modal, 5K masih kelihatan buka) vs revamp (tabel 4 kategori + badge SOLD OUT).
3. **Cara daftar:** asli (gambar landscape kecil) vs revamp (5 langkah teks).

Teks post mengikuti pola **"POV kalo gue jadi developer JAKIM"** plus 1 kalimat cerita personal. Tutup dengan pertanyaan.

## 9. Risiko & catatan
- **Aset brand.** Logo dan foto milik JAKIM/IMRR. Wajib diberi label "Konsep revamp tidak resmi, tidak berafiliasi dengan JAKIM/IMRR". Kalau mau lebih aman, foto bisa diganti placeholder sendiri.
- **Data bisa berubah.** Status sold out dan harga diambil per 7 Nov 2026, jadi tulis tanggalnya di post.
- **Harga sudah dicek** (lihat tabel di 01-REVIEW). Open = WNA, khusus HM/FM. Pendaftaran internasional dibuka 1–31 Des 2026.
- **Jangan menjatuhkan.** Nada post: "ini versi gue", bukan "website mereka jelek". Penyelenggara bisa jadi lead.

## 10. Timeline usulan
| Hari | Kerjaan |
|---|---|
| H1 | Docs lengkap (selesai) → wireframe Fase 1 |
| H2 | Build Fase 1 (Home + Daftar + nav) → mockup sebelum/sesudah → post #1 |
| H3 | Build Fase 2 → post #2 |
| H4 | Build Fase 3 → post #3 |

## Update 8 Nov 2026
- Arah desain final: palet **"Hijau Gelora"** (hijau tua + emas + krem), bukan hitam-emas. Detail di `07-DESIGN-SYSTEM-REVAMP.md`.
- Website wajib responsive penuh (desktop = layout website biasa, bukan versi mobile yang dilebarin).
- Hero: 1 tombol emas + 1 text link, status 1 baris.
- Halaman Daftar mengikuti alur web asli yang simpel: kartu Day 1 & Day 2 → 5 langkah pakai screenshot layar asli → tabel harga.
