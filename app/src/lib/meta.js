// Metadata helper: title, description, OG/Twitter, hreflang — satu tempat buat semua halaman.
export const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://jakim-revamp.vercel.app"; // ganti setelah deploy

const BRAND = { id: "konsep revamp", en: "redesign concept" };
const DEF = {
  id: "Jakarta International Marathon 2027 · 12–13 Juni 2027 · Monas → GBK. Status, harga, dan cara daftar 5K, 10K, Half Marathon, Marathon. Konsep revamp tidak resmi.",
  en: "Jakarta International Marathon 2027 · 12–13 June 2027 · Monas → GBK. Status, prices and how to register for 5K, 10K, Half Marathon and Marathon. Unofficial redesign concept.",
};

export function meta({ title, description, lang = "id", path = "/" }) {
  const desc = description || DEF[lang];
  const idPath = path, enPath = path === "/" ? "/en/" : "/en" + path;
  const url = lang === "en" ? enPath : idPath;
  const img = { url: lang === "en" ? "/og-en.png" : "/og.png", width: 1200, height: 630, alt: "Jakarta International Marathon 2027 · " + BRAND[lang] };
  return {
    metadataBase: new URL(SITE),
    title, description: desc,
    alternates: { canonical: url, languages: { "id-ID": idPath, "en-US": enPath } },
    openGraph: { type: "website", siteName: "JAKIM 2027 · " + BRAND[lang], title, description: desc, url, locale: lang === "en" ? "en_US" : "id_ID", images: [img] },
    twitter: { card: "summary_large_image", title, description: desc, images: [img.url] },
    // konsep tidak resmi → jangan sampai nyaingin web asli di Google
    robots: { index: false, follow: false },
  };
}
