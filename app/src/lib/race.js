import race from "@data/race.json";

export const IMG = "https://jakim.id/assets/images/";
export const rp = (n) => "Rp" + Number(n).toLocaleString("id-ID");
export const num = (n) => Number(n).toLocaleString("id-ID");

// status kategori: "open" | "early_sold_out" (early habis, general belum buka) | "sold_out"
export const isOpen = (c) => c.status === "open";
export const categoriesSorted = [...race.categories].sort((a, b) =>
  isOpen(a) === isOpen(b) ? b.distanceKm - a.distanceKm : isOpen(a) ? -1 : 1
);
export const openCats = race.categories.filter(isOpen);
export const anyOpen = openCats.length > 0;
export const cheapestOpen = anyOpen ? Math.min(...openCats.map((c) => c.price.early)) : null;
export const cheapestGeneral = Math.min(...race.categories.map((c) => c.price.generalNational));
export const shortDay = (id) => ({ day1: "Sabtu, 12 Jun", day2: "Minggu, 13 Jun" })[id];
export const kmLabel = (km) => km.toLocaleString("id-ID", { maximumFractionDigits: 4 }) + " km";
export const CHECKED = "8 Nov 2026";

export const NAV = [
  { href: "/daftar", label: "Daftar" },
  { href: "/kategori", label: "Kategori & Rute" },
  { href: "/race-pack", label: "Race Pack" },
  { href: "/faq", label: "FAQ" },
  { href: "/galeri", label: "Galeri & Hasil" },
  { href: "/kontak", label: "Kontak" },
];

export default race;
