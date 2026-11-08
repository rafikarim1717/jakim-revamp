import Link from "next/link";
import { T, href } from "@/lib/i18n";

export default function Wip({ lang = "id", title, phase, original }) {
  const t = T[lang].wip;
  return (
    <section className="wip">
      <div className="eyebrow">{t.phase} {phase}</div>
      <h1 className="h2">{title}</h1>
      <p className="lead">{t.body} {phase}. {t.orig} <a href={original} target="_blank" rel="noopener">jakim.id</a>.</p>
      <p className="lead" style={{ marginTop: 16 }}><Link href={href(lang, "/daftar")}>{t.back}</Link></p>
    </section>
  );
}
