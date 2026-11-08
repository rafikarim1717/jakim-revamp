# JAKIM Revamp (konsep)

Revamp tidak resmi untuk website **Jakarta International Marathon 2027** (https://jakim.id).
Project pertama format "revamp" di Threads. Bukan pesanan klien dan tidak berafiliasi dengan JAKIM atau IMRR.

## Isi folder
| File | Isi |
|---|---|
| `docs/01-REVIEW.md` | Hasil review website asli: fungsi, UX, performa, konten/SEO, desain |
| `docs/02-DESIGN-SYSTEM-ASLI.md` | Design system jakim.id hasil ekstrak (warna, font, komponen, spacing) |
| `docs/03-BRIEF-REVAMP.md` | Ide revamp: masalah, solusi, arah desain, scope bertahap (3 fase), timeline, rencana konten |
| `docs/04-IA-SITEMAP.md` | Peta halaman & menu asli, masalah IA, usulan IA revamp |
| `docs/05-PAGE-SPECS.md` | Isi per halaman (section, konten, sumber) + komponen yang dipakai ulang |
| `docs/06-DATA.md` | Penjelasan satu sumber data + snapshot harga/status |
| `docs/07-DESIGN-SYSTEM-REVAMP.md` | Design system revamp "Hijau Gelora": warna, font, skala, spacing, komponen, meta |
| `preview/` | Screenshot & perbandingan sebelum/sesudah per keputusan desain |
| `app/` | Project Next.js (lihat `app/README.md`) |
| `data/race.json` | Data event, kategori, harga, status, cara daftar, kontak, menu "Segera hadir" |

## Status (8 Nov 2026)
- [x] Review, design system asli, IA, brief, page specs, data (7 Nov)
- [x] Wireframe & visual statis awal (`wireframe/`, `visual/`, versi hitam-emas, sudah tidak dipakai)
- [x] Build Next.js Fase 1: Home + Daftar, responsive desktop & mobile, ID/EN (`/en/...`)
- [x] Palet "Hijau Gelora" + typography & spacing system (lihat `docs/07`)
- [x] Navbar = menu jakim.id (TBA disabled), pill ID | EN
- [x] Data per 8 Nov: early bird Day 1 & Day 2 sold out, general belum dibuka
- [x] Meta, OG image, favicon (noindex)
- [ ] Deploy (Vercel) + set `NEXT_PUBLIC_SITE_URL`
- [ ] Frame Threads post #1 dibuat ulang dari desain terbaru (`threads/` masih versi lama)
- [ ] Halaman yang sudah di-announce jakim.id tapi masih placeholder: FAQ, Kategori/Route, Race Pack, Kontak, S&K, Sunmorun, Galeri (prioritas: FAQ, Kategori)
