# 07: Design System Revamp ("Hijau Gelora")

Sumber kebenaran: `app/src/app/globals.css` (layer paling bawah menang). Dokumen ini ringkasannya.
Versi asli jakim.id ada di `02-DESIGN-SYSTEM-ASLI.md`.

## 1. Warna
| Token | Hex | Dipakai untuk |
|---|---|---|
| `--ink` | #0F2A22 | Background gelap utama (navbar, hero, countdown, closing) |
| `--ink-2` | #133429 | Gelap sekunder |
| `--ink-3` | #1A3D31 | Card/box di atas gelap |
| `--paper-2` | #F4F1E8 | Background krem (harga, FAQ) |
| `#FFFFFF` | putih | Background terang (cara daftar, memory lane) |
| `--line-l` | #E2DDCF | Garis di background terang |
| `--text` | #1B2620 | Teks utama di terang |
| `--mute` | #5C665F | Teks sekunder di terang |
| `--mute-d` | #A7B5AC | Teks sekunder di gelap |
| `--sage` / `--sage-l` | #46614F / #B9C9BF | Eyebrow di terang / di gelap |
| `--gold` | #E3B341 | Aksen, tombol utama, status aktif |
| `--gold-dim` | #B08A2E | Aksen emas di background terang (angka step, ikon) |

**Ritme section Home:** hero gelap → harga krem → cara daftar putih → countdown gelap → memory lane putih → FAQ krem → closing gelap. Dua section gelap tidak boleh nempel.

**Kontras (WCAG AA, dicek 8 Nov 2026):** mute-d di ink 7.2:1 · mute di krem 5.3:1 · gold di ink 7.9:1 · label TBA menu #8FA398 di ink 5.7:1. Emas (#B08A2E) di putih cuma 3.2:1 → **hanya untuk teks besar/ikon**, jangan untuk body.

## 2. Font
| Peran | Font | Contoh |
|---|---|---|
| Display (h1, h2, angka countdown) | Bebas Neue 400, kapital | "Siapkan jarakmu" |
| Judul card & angka harga | Barlow Condensed 800, huruf besar-kecil | "Half Marathon", "Rp850.000" |
| Body, tombol, label | Inter 400–900 | semua teks lain |

**Huruf kapital cuma untuk eyebrow** (12px, letter-spacing .16em) dan judul display. Tombol, header tabel, footer pakai huruf biasa.

## 3. Skala
- **Font size:** 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 (+ hero clamp 56–86). Minimal 12px.
- **Line height:** body 1.6 · teks kecil (14px, note, meta) 1.5 · display .95 · judul card 1.
- **Lebar paragraf:** maks ±65 karakter (`max-width:65ch`, lead 62ch).
- **Spacing:** kelipatan 4/8 → 4 8 12 16 24 32 48 64 96.
  - Section: 96px desktop, 64px mobile. Gutter desktop `--gut: max(40px, (100vw − 1176px)/2)`, mobile 20px.
  - Eyebrow → judul 8px · judul → konten 32px (16px kalau ada lead, lead → konten 32px).

## 4. Komponen kunci
- **Navbar:** logo kiri, 7 menu tengah (nama & isi = jakim.id, TBA tampil tapi disabled "(to be announced)"), kanan pill ID | EN + tombol Daftar. Panah dropdown 13px, jarak 4px dari teks. Mobile: burger → drawer accordion.
- **Status hero:** satu baris, status aktif dulu ("● Pendaftaran general: tanggal menyusul"), info sold out abu kecil di belakang. Tidak pakai badge merah.
- **Tombol:** 1 tombol emas utama per layar + text link untuk aksi kedua.
- **Card harga:** putih, garis emas atas, 1 harga utama (general), early bird dicoret.
- **Peringatan 7 menit:** note di atas langkah + chip "⏱ 7:00" di layar step 3 (Daftar).

## 5. Meta & share
- Title/description per halaman ID & EN via `src/lib/meta.js`, hreflang id-ID/en-US, canonical.
- OG image 1200×630: `public/og.png` (ID), `public/og-en.png` (EN). Favicon `src/app/icon.png`, `apple-icon.png`.
- `robots: noindex` — konsep tidak resmi, jangan nyaingin jakim.id di Google.
- Setelah deploy: set env `NEXT_PUBLIC_SITE_URL` ke domain asli (default `https://jakim-revamp.vercel.app`).
