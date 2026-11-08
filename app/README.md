# JAKIM Revamp: app (Next.js)

Fase 1: Home + Daftar + navbar (6 menu + "Segera hadir"). Halaman Fase 2–3 masih placeholder.

## Jalanin
```bash
npm install
npm run dev        # buka http://localhost:3000
npm run build      # hasil static di folder out/
```

## Struktur
- `data/race.json`: satu sumber data (harga, status, COT, cara daftar, menu TBA). Ganti data cukup di sini.
- `src/lib/race.js`: helper data (format Rupiah, urutan kategori, tanggal cek)
- `src/lib/i18n.js`: semua teks ID & EN · `src/lib/menu.js`: menu navbar (= jakim.id) · `src/lib/meta.js`: title/description/OG/hreflang
- `src/components/`: Header, Footer, PriceCards, Countdown, Steps, Faq, StickyBar, Wip
- `src/views/`: HomeView, DaftarView (dipakai route ID & EN)
- `src/app/`: `/` dan `/daftar` (+ `/en/...`), placeholder `/kategori` `/race-pack` `/faq` `/galeri` `/kontak` `/sunmorun` `/syarat-ketentuan`
- `public/og.png`, `og-en.png`: gambar share 1200×630 · `src/app/icon.png`, `apple-icon.png`: favicon
- `src/app/globals.css`: semua style; design system di `../docs/07-DESIGN-SYSTEM-REVAMP.md`

## Deploy
Static export (`out/`). Di Vercel set env `NEXT_PUBLIC_SITE_URL=https://<domain>` supaya link OG & canonical benar.

Font lokal via @fontsource (Bebas Neue, Barlow Condensed, Inter). Foto & logo ditarik langsung dari jakim.id.
