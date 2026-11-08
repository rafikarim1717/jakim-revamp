import { T } from "@/lib/i18n";

export default function Faq({ lang = "id" }) {
  return T[lang].faq.items.map(([q, a]) => (
    <details key={q}><summary>{q}</summary><p>{a}</p></details>
  ));
}
