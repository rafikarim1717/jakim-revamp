# 06: Data (satu sumber kebenaran)

**File:** `data/race.json`. Semua halaman membaca dari sini.

## Kenapa
Di website asli, homepage dan `/registration` bisa beda info. Contohnya 5K & 10K sudah sold out di halaman daftar, tapi homepage masih mempromosikan keduanya. FAQ juga bilang cara daftar "akan diinformasikan", padahal sudah buka.
Dengan 1 file data, **status, harga, dan tanggal cuma ditulis sekali**, jadi tidak mungkin beda antar halaman.

## Isi
| Key | Isi | Dipakai di |
|---|---|---|
| `event` | Nama, tanggal per hari, jam start, lokasi start/finish, riwayat peserta | Home (hero, stats), footer |
| `registration.phases` | Early bird, General, Internasional (1–31 Des) | Home (chip status), Daftar |
| `registration.steps` | 5 langkah daftar dalam bentuk **teks**, termasuk peringatan **batas isi data 7 menit** | Daftar, FAQ |
| `registration.registerUrl` / `checkUrl` | Link Sporticx | Semua tombol Daftar, Cek status |
| `categories[]` | 4 jarak: status (`open` / `sold_out`), harga (early, general WNI, general WNA), COT, umur minimal, varian (termasuk Master) | Home (tabel harga), Daftar, Kategori & Rute |
| `racePack` | Tanggal, lokasi, wajib diambil, daftar benefit | Race Pack, FAQ |
| `contact` | WA CS + jam, sponsorship, commercial, email, IG | Kontak, footer |
| `results` | Link hasil 2024–2026 | Galeri & Hasil |
| `comingSoon` | Semua menu TBA per grup | Navbar dropdown "Segera hadir" (disabled) |

## Aturan
- **Harga** disimpan sebagai angka (`375000`) dan diformat di UI jadi `Rp375.000`. Tidak dicampur dengan "IDR" (masalah F11).
- **Status kategori** cuma 2 nilai: `open` atau `sold_out`. Ini yang menentukan badge dan apakah tombol daftar aktif.
- **`_meta.checkedAt`** ditampilkan kecil di footer revamp ("Data per 8 Nov 2026"), karena ini konsep dan datanya bisa berubah.
- **Ganti data = edit JSON saja.** Tidak perlu menyentuh komponen. Ini juga yang mau ditunjukkan ke penyelenggara: update tanpa developer (siap di-upgrade ke CMS).

## Snapshot data per 7 Nov 2026
| Kategori | Hari | Status | Early bird | General WNI | General WNA | COT | Umur min |
|---|---|---|---|---|---|---|---|
| 5K | Sab 12 Jun | **Sold out** | 375.000 | 500.000 | – | 1 jam | 13 |
| 10K | Sab 12 Jun | **Sold out** | 487.500 | 650.000 | – | 2 jam | 17 |
| Half Marathon | Min 13 Jun | Buka | 637.500 (WNI) | 850.000 | 1.270.430 | 3,5 jam | 17 |
| Marathon | Min 13 Jun | Buka | 750.000 (WNI) | 1.000.000 | 1.814.900 | 7 jam | 17 |

**Varian Master** (khusus WNI):
- 10K Master A (40–49) dan Master B (50+)
- HM Master (45+)
- FM Master (45+)

*Asumsi: status sold out 5K/10K berlaku untuk semua varian Day 1 (berdasarkan kartu Day 1 di `/registration`).*

## Update 8 Nov 2026
- Early bird **Day 1 (5K, 10K) sold out 7 Nov**, **Day 2 (HM, FM) sold out 8 Nov**. Semua kategori di `race.json` sekarang `status: "early_sold_out"`.
- General registration **belum dibuka, tanggal belum diumumkan**. UI menulis "tanggal menyusul / date TBA", bukan "segera dibuka" (tidak menjanjikan waktu).
- Pendaftaran WNA (Open) tetap 1–31 Des 2026.
- CTA utama sementara diarahkan ke IG JAKIM (`registration.now.followUrl`) untuk pantau info general.
- Info kategori **Master** dihapus dari Home & Daftar (di jakim.id cuma ada di FAQ). Nanti masuk halaman FAQ/Kategori.
