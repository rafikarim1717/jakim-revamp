// Kamus ID / EN untuk Fase 1. Tambah key di dua bahasa sekaligus.
export const LANGS = ["id", "en"];
export const langFromPath = (p = "/") => (p === "/en" || p.startsWith("/en/") ? "en" : "id");
export const href = (lang, path) => (lang === "en" ? (path === "/" ? "/en" : "/en" + path) : path);
export const swapPath = (p) => {
  const lang = langFromPath(p);
  if (lang === "en") return p.replace(/^\/en/, "") || "/";
  return p === "/" ? "/en" : "/en" + p;
};

export const T = {
  id: {
    nav: { tba: "(to be announced)", daftar: "Daftar", kategori: "Kategori & Rute", racepack: "Race Pack", faq: "FAQ", galeri: "Galeri & Hasil", kontak: "Kontak", soon: "Segera hadir", soonTag: "SEGERA", active: "AKTIF", menuOpen: "Buka menu", menuClose: "Tutup menu", phase: "FASE 2–3", cta: "Daftar", ctaLong: "Daftar sekarang" },
    status: { l: "Pendaftaran general:", v: "tanggal menyusul", sold: "Early bird habis · Day 1 & 2" },
    hero: { eyebrow: "HUT Jakarta ke-500 · Just Run It.", when: "12–13 Juni 2027", pill: "Sold out", chipSold: "Early bird semua kategori", chipNext: "General segera dibuka", follow: "Pantau info general ↗", check: "Cek status daftar", more: "Lihat harga general ↓", alt: "Ribuan pelari JAKIM memenuhi jalan Thamrin, Jakarta" },
    price: { eyebrow: "Harga tiket · per", title: "Siapkan jarakmu", status: ["Early bird sudah habis untuk semua kategori.", " General registration belum dibuka, tanggalnya belum diumumkan."], wni: "WNI (National)", wna: "WNA (Open)", general: "Harga general", early: "Early bird", gone: "habis", earlyWni: "Early bird khusus WNI", onlyWni: "Khusus WNI", cot: "Batas waktu", age: "Usia min.", yr: "th", noteWni: "Semua kategori start pukul 04.00 WIB. Harga general berlaku saat general registration dibuka.", noteWna: "Kategori Open (WNA) hanya untuk Half Marathon & Marathon. Pendaftaran WNA dibuka 1–31 Des 2026.", master: "Ada kategori Master untuk 40+ dan 45+.", masterLink: "Lihat semua kategori →", register: "Daftar" },
    steps: { eyebrow: "Cara daftar", title: "Siap-siap sebelum general dibuka", more: "Lihat langkah lengkap →",
      short: [["Pilih jarak", "Saat general dibuka, klik Daftar lalu pilih kategori."], ["Isi data diri", "Kamu akan diarahkan ke Sporticx, partner tiket resmi JAKIM."], ["Bayar & cek email", "Email konfirmasi masuk = slotmu sudah aman."]],
      warnB: "Waktu isi data cuma 7 menit.", warn: " Siapkan data diri & metode bayar dulu.",
      full: [["Pilih hari & jarak", "Klik Daftar, pilih Day 1 (5K/10K) atau Day 2 (Half/Marathon)."], ["Pilih kategori", "Di halaman Sporticx, pilih kategori lalu klik Buy Ticket."], ["Isi data diri", "Isi data dengan benar, lalu klik Payment."], ["Bayar", "Pilih metode pembayaran dan selesaikan transaksi."], ["Cek email", "Setelah pembayaran berhasil, email konfirmasi akan masuk."]],
      fullWarnB: "Batas waktu cuma 7 menit.", fullWarn: " Lewat dari itu, kamu harus ulang dari awal." },
    cd: { eyebrow: "Menuju garis start", labels: ["HARI", "JAM", "MENIT", "DETIK"], growth: "Pelari JAKIM dari tahun ke tahun", k: "rb", aria: "Hitung mundur ke hari lomba" },
    mem: { eyebrow: "Memory lane", title: "3 tahun, 90rb pelari", runners: "pelari", more: "Galeri & hasil lomba →" },
    faq: { eyebrow: "FAQ", title: "Yang sering ditanya", lead: "Jawaban singkat seputar pendaftaran.", more: "Lihat semua FAQ →",
      items: [["Bedanya WNI (National) dan WNA (Open)?", "National untuk WNI, Open untuk WNA. Kategori Open hanya ada di Half Marathon dan Marathon. Pendaftaran WNA dibuka 1–31 Desember 2026."], ["Kapan general registration dibuka?", "Langsung setelah kuota early bird habis. Tanggal pastinya belum diumumkan penyelenggara."], ["Race pack diambil di mana?", "Kamis–Sabtu, 10–12 Juni 2027 di JICC Senayan. Wajib diambil. Peserta yang tidak mengambil race pack kehilangan status kepesertaan."], ["Batas umur minimal?", "5K minimal 13 tahun. 10K, Half Marathon, dan Marathon minimal 17 tahun."], ["Jam berapa start?", "Acara mulai pukul 04.00 WIB. Start di Monas (Silang Barat Laut), finish di Stadion Utama GBK."]] },
    closing: { title: "Sampai ketemu di garis start" },
    foot: { cs: "Customer service", hours: "Senin–Jumat, 09.00–18.00", other: "Kontak lain", org: "Penyelenggara", disclaim: "Konsep revamp tidak resmi oleh Rafi Karim. Tidak berafiliasi dengan JAKIM/IMRR. Data harga & status per 8 Nov 2026, aset visual milik JAKIM." },
    sticky: { title: "Early bird habis", sub: "General registration segera dibuka", cta: "Pantau info" },
    daftar: { crumb: "Daftar", title: "Amankan slotmu", pill: "Sold out", status: "Early bird semua kategori habis", next: "General segera dibuka",
      from: "General mulai", soldBtn: "Sold out", openBtn: "Daftar sekarang", check: "Cek pendaftaran", via: "Daftar & bayar lewat Sporticx, partner tiket resmi JAKIM.",
      priceEyebrow: "Harga tiket", priceTitle: "Semua harga, satu tabel", th: ["Kategori", "Early bird (habis)", "General WNI", "General WNA"], rupiah: "Semua harga dalam Rupiah.", masterB: "Ada kategori Master (khusus WNI)", master: "10K Master A (40–49 th) · 10K Master B (50+ th) · Half Marathon Master (45+ th) · Marathon Master (45+ th)",
      howEyebrow: "Cara daftar", howTitle: "5 langkah daftar", howLead: "Ini layar yang akan kamu lihat saat daftar.",
      steps: [["Pilih hari", "Buka halaman ini, klik Daftar di Day 1 (5K/10K) atau Day 2 (Half/Marathon)."], ["Pilih kategori", "Di Sporticx, pilih kategori lalu klik Buy Ticket."], ["Isi data diri", "Isi data peserta dengan benar, lalu klik Payment."], ["Bayar", "Pilih QRIS, transfer bank (VA), atau e-wallet."], ["Cek email", "Email konfirmasi masuk = slotmu sudah aman."]],
      warn: "Waktu isi data cuma 7 menit. Siapkan data diri & metode bayar dulu." },

    wip: { phase: "Revamp", body: "Halaman ini masuk revamp", orig: "Sementara, lihat versi aslinya di", back: "← Ke halaman Daftar" },
    days: { day1: "Sabtu, 12 Jun", day2: "Minggu, 13 Jun", day1Long: "Sabtu, 12 Juni 2027", day2Long: "Minggu, 13 Juni 2027" },
    cats: { fm: "Marathon", hm: "Half Marathon", "10k": "10K", "5k": "5K" },
    cot: { "1 jam": "1 jam", "2 jam": "2 jam", "3,5 jam": "3,5 jam", "7 jam": "7 jam" },
  },
  en: {
    nav: { tba: "(to be announced)", daftar: "Register", kategori: "Categories & Route", racepack: "Race Pack", faq: "FAQ", galeri: "Gallery & Results", kontak: "Contact", soon: "Coming soon", soonTag: "SOON", active: "LIVE", menuOpen: "Open menu", menuClose: "Close menu", phase: "PHASE 2–3", cta: "Register", ctaLong: "Register now" },
    status: { l: "General registration:", v: "date TBA", sold: "Early bird sold out · Day 1 & 2" },
    hero: { eyebrow: "Jakarta's 500th anniversary · Just Run It.", when: "12–13 June 2027", pill: "Sold out", chipSold: "Early bird, all categories", chipNext: "General registration opening soon", follow: "Get general registration updates ↗", check: "Check my registration", more: "See general prices ↓", alt: "Thousands of JAKIM runners filling Jalan Thamrin, Jakarta" },
    price: { eyebrow: "Ticket prices · as of", title: "Pick your distance", status: ["Early bird is sold out in every category.", " General registration hasn't opened yet. The date has not been announced."], wni: "Indonesian (National)", wna: "International (Open)", general: "General price", early: "Early bird", gone: "sold out", earlyWni: "Early bird for Indonesians only", onlyWni: "Indonesians only", cot: "Cut-off", age: "Min. age", yr: "", noteWni: "All categories start at 04:00 WIB (UTC+7). General prices apply once general registration opens.", noteWna: "The Open (international) category is available for Half Marathon & Marathon only. International registration runs 1–31 Dec 2026.", master: "Master categories are available for runners 40+ and 45+.", masterLink: "See all categories →", register: "Register" },
    steps: { eyebrow: "How to register", title: "Get ready before general opens", more: "See all steps →",
      short: [["Pick a distance", "When general opens, click Register and choose your category."], ["Fill in your details", "You'll be redirected to Sporticx, JAKIM's official ticketing partner."], ["Pay & check your email", "Confirmation email in your inbox = your slot is secured."]],
      warnB: "You only get 7 minutes to fill in your details.", warn: " Have your info & payment ready.",
      full: [["Pick a day & distance", "Click Register, then choose Day 1 (5K/10K) or Day 2 (Half/Marathon)."], ["Pick a category", "On Sporticx, choose your category and click Buy Ticket."], ["Fill in your details", "Enter your details correctly, then click Payment."], ["Pay", "Choose a payment method and complete the transaction."], ["Check your email", "Once payment succeeds, a confirmation email will arrive."]],
      fullWarnB: "There is a 7-minute time limit.", fullWarn: " If it runs out, you'll have to start over." },
    cd: { eyebrow: "Countdown to the start line", labels: ["DAYS", "HOURS", "MINUTES", "SECONDS"], growth: "JAKIM runners year by year", k: "K", aria: "Countdown to race day" },
    mem: { eyebrow: "Memory lane", title: "3 years, 90K runners", runners: "runners", more: "Gallery & race results →" },
    faq: { eyebrow: "FAQ", title: "Common questions", lead: "Quick answers about registration.", more: "See all FAQ →",
      items: [["What's the difference between National and Open?", "National is for Indonesian citizens, Open is for international runners. Open is only available for Half Marathon and Marathon. International registration runs 1–31 December 2026."], ["When does general registration open?", "Right after the early bird quota sells out. The exact date has not been announced yet."], ["Where do I collect my race pack?", "Thursday–Saturday, 10–12 June 2027 at JICC Senayan. Collection is mandatory. Runners who don't collect their race pack lose their participant status."], ["Is there a minimum age?", "5K: at least 13 years old. 10K, Half Marathon and Marathon: at least 17 years old."], ["What time is the start?", "The event starts at 04:00 WIB (UTC+7). Start at Monas (northwest corner), finish at Gelora Bung Karno Main Stadium."]] },
    closing: { title: "See you at the start line" },
    foot: { cs: "Customer service", hours: "Monday–Friday, 09:00–18:00 WIB", other: "Other contacts", org: "Organizers", disclaim: "Unofficial redesign concept by Rafi Karim. Not affiliated with JAKIM/IMRR. Prices & status as of 8 Nov 2026; visual assets belong to JAKIM." },
    sticky: { title: "Early bird sold out", sub: "General registration opening soon", cta: "Get updates" },
    daftar: { crumb: "Register", title: "Lock your slot", pill: "Sold out", status: "Early bird sold out in all categories", next: "General registration opening soon",
      from: "General from", soldBtn: "Sold out", openBtn: "Register now", check: "Check registration", via: "Register & pay via Sporticx, JAKIM's official ticketing partner.",
      priceEyebrow: "Ticket prices", priceTitle: "Every price, one table", th: ["Category", "Early bird (sold out)", "General (National)", "General (Open)"], rupiah: "All prices in Indonesian Rupiah (IDR).", masterB: "Master categories (Indonesians only)", master: "10K Master A (40–49) · 10K Master B (50+) · Half Marathon Master (45+) · Marathon Master (45+)",
      howEyebrow: "How to register", howTitle: "5 steps to register", howLead: "The exact screens you'll see while registering.",
      steps: [["Pick a day", "On this page, click Register on Day 1 (5K/10K) or Day 2 (Half/Marathon)."], ["Pick a category", "On Sporticx, choose your category and click Buy Ticket."], ["Fill in your details", "Enter the participant details correctly, then click Payment."], ["Pay", "Choose QRIS, bank transfer (VA) or e-wallet."], ["Check your email", "Confirmation email in your inbox = your slot is secured."]],
      warn: "You get 7 minutes to fill in your details. Have your info & payment ready." },

    wip: { phase: "Redesign", body: "This page is part of redesign", orig: "For now, see the original at", back: "← Back to Register" },
    days: { day1: "Sat, 12 Jun", day2: "Sun, 13 Jun", day1Long: "Saturday, 12 June 2027", day2Long: "Sunday, 13 June 2027" },
    cats: { fm: "Marathon", hm: "Half Marathon", "10k": "10K", "5k": "5K" },
    cot: { "1 jam": "1 hr", "2 jam": "2 hrs", "3,5 jam": "3.5 hrs", "7 jam": "7 hrs" },
  },
};

export const money = (lang, n) => (lang === "en" ? "IDR " + Number(n).toLocaleString("en-US") : "Rp" + Number(n).toLocaleString("id-ID"));
export const num = (lang, n) => Number(n).toLocaleString(lang === "en" ? "en-US" : "id-ID");
export const km = (lang, k) => k.toLocaleString(lang === "en" ? "en-US" : "id-ID", { maximumFractionDigits: 4 }) + " km";
