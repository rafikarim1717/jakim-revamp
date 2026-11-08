# 02: Design System jakim.id (asli)

Hasil ekstrak dari CSS variables dan computed style di halaman `jakim.id`, 7 Nov 2026.
Tujuannya supaya revamp tetap **pakai DNA brand mereka** (bukan rebrand), cuma dirapikan.

---

## 1. Warna

### Token yang didefinisikan di `:root`
| Token | Nilai | Catatan |
|---|---|---|
| `--black` | `#08090c` | Hitam utama (header, teks di tombol emas) |
| `--gold` | `#d4af37` | Emas "metalik": border, garis |
| `--gold-bright` | `#ffd13b` | Emas terang: tombol CTA, aksen teks |
| `--gold-dim` | `#a88428` | Emas gelap: eyebrow/label |
| `--gold-light` | `#fcf8ec` | Krem tipis (background) |
| `--gold-border` / `--line` | `rgba(212,175,55,.35)` | Garis tipis emas |
| `--gold-glow` | `rgba(212,175,55,.28)` | Glow/shadow emas |
| `--gold-gradient` | `135deg #ffd700 → #d4af37 → #aa8012` | Gradient emas |
| `--blue` | `#125efa` | ⚠️ Jadi `theme-color`, tapi hampir tidak dipakai di visual |
| `--red` | `#e8000e` | Merah (jarang) |
| `--gray` | `#6c757d` | Abu |
| `--light` | `#f7f8fa` | Background terang |
| `--white` | `#ffffff` | |
| `--white-soft` | `#1a1d28` | ⚠️ Namanya "white" tapi warnanya gelap (dipakai untuk teks gelap) |
| `--white-dim` | `#555d6e` | ⚠️ Sama, sebenarnya abu gelap |
| `--bg-card` / `--bg-deep` / `--bg-surface` | semua `#ffffff` | ⚠️ 3 token, nilainya sama |

### Warna yang paling sering muncul di halaman
- **Teks:**
  - putih `#fff`
  - `#1a1d28` (gelap)
  - `#8c93a4` / `#9ca2ae` (abu)
  - `#ffd13b` (emas)
- **Background:**
  - putih
  - `#14212b` (navy gelap)
  - `rgba(10,20,30,.78)` (overlay di atas foto)
  - `#08090c`
  - `#e9e9e9`

**Kesimpulan:** brand-nya **hitam + emas**, dengan selingan section putih. Biru cuma sisa template.

## 2. Tipografi
| Peran | Font | Contoh ukuran/gaya |
|---|---|---|
| Display / judul besar | **Bebas Neue** | 72px, uppercase, letter-spacing −1.8px, line-height 0.86 |
| Sub-display / angka / label | **Barlow Condensed** | 25px/900 uppercase; 12–16px/700 uppercase |
| Body & UI | **Inter** | 14px/500 (body), 11px/400–900 (label, tombol), 21px/800–900 uppercase (sub-judul) |
| Sisa / fallback | Arial Black 42px, Times New Roman | ⚠️ Kemungkinan elemen yang font-nya tidak ter-set |

**Catatan:**
- Banyak teks **10–11px**. Terlalu kecil untuk HP (minimal ideal 14px body, 12px label).
- Gaya label pakai pola "eyebrow": Inter 10–11px/900, uppercase, letter-spacing 1.1–1.8px, warna emas gelap. Contoh: "01 / RACE CATEGORY", "RACE REGISTRATION".

## 3. Bentuk & garis
- **Radius:** praktis **0** di semua tempat (kotak tajam), kecuali elemen bulat 50%. Ini ciri khas mereka, jadi dipertahankan.
- **Border:** garis tipis 1px emas transparan (`rgba(212,175,55,.3–.5)`) atau putih transparan (`.55–.72`). Aksen tebal 3px `#ffd13b`.
- **Shadow:**
  - Kartu: `0 16px 40px rgba(0,0,0,.12)` + ring 1px emas
  - Elemen gelap: `0 10px 30px rgba(0,0,0,.5)`
  - Glow emas: `0 8px 32px rgba(212,175,55,.45)`

## 4. Komponen
| Komponen | Spesifikasi |
|---|---|
| **Header** | Tinggi 90px (`--header-h`). Hitam dengan motif ornamen. Logo kiri, menu dropdown, tombol Register Now, bendera ID/EN |
| **Tombol primer** | Background `#ffd13b`, teks `#08090c`, Inter 11px/900, padding 0 8px, radius 0, border 1px gold. ⚠️ Terlalu kecil di HP |
| **Tombol garis (ghost)** | Transparan, teks putih, border 1px emas .3–.5, padding 22–26px. Dipakai di galeri dan results |
| **Kartu kategori** | Foto background + overlay gelap, eyebrow "0X / RACE CATEGORY", singkatan besar (FM/HM), jarak km, tombol "Ticket price details" yang membuka modal |
| **Modal harga** | Eyebrow, tombol ×, grup "Registration date" + "Ticket price" |
| **Kartu registrasi** (halaman /registration) | Background terang `#e9e9e9` atau putih, border emas, judul "Day 1/2" besar, tombol kuning / abu (Sold Out) / hitam (cek registrasi) |
| **Countdown strip** | Angka besar + label DAYS/HOURS/MINUTES/SECONDS |
| **Stats** | 3 baris angka besar (15.000+ / 30.000+ / 45.000+) + label emas |
| **Marquee** | Teks berjalan tanggal & tagline |
| **Galeri / Memory lane** | Kartu foto per tahun + "View gallery" |

## 5. Layout & spacing
- **Section padding:** 56–82px atas (desktop), sebagian 0 (full-bleed).
- **Pola section:** hero (video) → countdown → story (putih) → stats → five-centuries (gelap `#07090e`) → race (putih) → social (putih) → sponsor → CTA registrasi → footer.
- Tidak ada container max-width yang konsisten. Sebagian besar section full-width dengan padding sendiri-sendiri.

## 6. Motion
- Transisi pendek 0.18–0.3s pada warna, background, dan border.
- Banyak `transition: all`. Kurang efisien, tapi tidak fatal.
- Marquee dan countdown animasi terus.

## 7. Aset brand
- Logo JAKIM 2027 (Monas + teks emas).
- Ilustrasi ondel-ondel geometris (pria/wanita) dan ornamen "gigi balang".
- Foto event 2024–2026, video landscape.
- Tagline: **"Just Run It."**, **"Run with Jakarta."**

---

## Token rapi untuk revamp (usulan)
Tetap pakai DNA mereka, tapi namanya jujur dan jumlahnya lebih sedikit:

```css
:root {
  /* warna */
  --ink:        #08090c;  /* bg gelap utama */
  --ink-2:      #14212b;  /* bg gelap kedua (navy) */
  --paper:      #ffffff;
  --paper-2:    #f7f8fa;
  --text:       #1a1d28;  /* teks di bg terang */
  --text-mute:  #6b7280;
  --gold:       #ffd13b;  /* CTA & aksen (satu-satunya gold untuk aksi) */
  --gold-line:  rgba(212,175,55,.4); /* garis & border */
  --gold-dim:   #a88428;  /* eyebrow */
  --sold:       #8c93a4;  /* status sold out */
  --open:       #2fbf71;  /* status buka (baru, untuk kejelasan status) */

  /* tipe */
  --font-display: "Bebas Neue", sans-serif;
  --font-sub:     "Barlow Condensed", sans-serif;
  --font-body:    "Inter", sans-serif;
  /* skala HP: 12 / 14 / 16 / 20 / 28 / 44 / 64 */

  /* bentuk */
  --radius: 0;            /* tetap kotak tajam */
  --line: 1px solid var(--gold-line);
}
```

**Aturan:**
- `--gold` cuma untuk aksi (CTA dan status penting).
- Teks minimal 14px. Tombol minimal 16px dengan tinggi 48px.
