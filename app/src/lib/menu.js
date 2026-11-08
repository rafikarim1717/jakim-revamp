// Struktur menu disamakan dengan jakim.id (per 7 Nov 2026).
// href = halaman yang sudah ada di revamp. Tanpa href = "to be announced" (disabled).
export const MENU = [
  { label: "Entry", items: [
    { label: "Register Now", href: "/daftar" },
    { label: "FAQ", href: "/faq" },
    { label: "SnK", href: "/syarat-ketentuan" },
  ] },
  { label: "Expo", items: [
    { label: "Information" }, { label: "Exhibitors" }, { label: "Activity Race Expo" },
    { label: "Race Pack Collection", href: "/race-pack" },
  ] },
  { label: "Race Weekend", groups: [
    { label: "Pre Race", items: [
      { label: "Road closure information" }, { label: "How to Entry Information" },
      { label: "Race Center Information" }, { label: "Entertainment" },
    ] },
    { label: "Race", items: [
      { label: "Download Apps" }, { label: "Route", href: "/kategori" }, { label: "Pace Team" },
      { label: "Jakim Guideline E-Book" }, { label: "Race Policies & Etiquette" }, { label: "Joy Zone" },
      { label: "Route facilities & Medical" }, { label: "Media Policies" }, { label: "BIB Tracking" },
    ] },
    { label: "After Race", items: [
      { label: "Prizes" }, { label: "Results" }, { label: "Photos" }, { label: "Report BIB" }, { label: "Entertainment" },
    ] },
  ] },
  { label: "Training", items: [
    { label: "Sunmorun", href: "/sunmorun" }, { label: "Workshop" }, { label: "Training Program" },
  ] },
  { label: "Tourism", items: [
    { label: "Transport Partners" }, { label: "Accommodation Partners" }, { label: "Destination Partners" },
  ] },
  { label: "More", items: [{ label: "Medal Monday" }, { label: "The City Club" }] },
  { label: "About", items: [{ label: "Contact Us", href: "/kontak" }, { label: "Sustainability" }] },
];
