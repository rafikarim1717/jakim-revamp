import Link from "next/link";
import race, { categoriesSorted } from "@/lib/race";
import { T, href, num, km, money } from "@/lib/i18n";

export default function DaftarView({ lang = "id" }) {
  const L = T[lang];
  const t = L.daftar;
  const r = race.registration;
  const cats = race.categories;
  const minGeneral = (ids) => Math.min(...cats.filter((c) => ids.includes(c.id)).map((c) => c.price.generalNational));
  const isOpen = (ids) => cats.some((c) => ids.includes(c.id) && c.status === "open");
  const days = [
    { id: "day1", name: "5K & 10K", label: L.days.day1Long, kind: lang === "en" ? "National" : "National (WNI)", ids: ["5k", "10k"], check: r.checkUrl.day1 },
    { id: "day2", name: "Half Marathon & Marathon", label: L.days.day2Long, kind: "National & Open", ids: ["hm", "fm"], check: r.checkUrl.day2 },
  ];
  return (
    <>
      <section className="pagehead">
        <div className="crumb"><Link href={href(lang, "/")}>Home</Link> / {t.crumb}</div>
        <h1>{t.title}</h1>
        <p className="hero-status">
          <span className="next"><span className="pulse"></span><b>{L.status.l}</b>{L.status.v}</span>
          <span className="sold">{L.status.sold}</span>
        </p>
      </section>

      <section className="prices" id="hari">
        <div className="day-grid">
          {days.map((d, i) => {
            const open = isOpen(d.ids);
            return (
              <div className={`daycard2 ${open ? "" : "is-sold"}`} key={d.id}>
                <div className="eyebrow">Day {i + 1} · {d.label}</div>
                <h3>{d.name}</h3>
                <p className="dc-meta">{d.kind} · {t.from} <b>{money(lang, minGeneral(d.ids))}</b></p>
                {open
                  ? <a className="btn btn-gold btn-full" href={r.registerUrl} target="_blank" rel="noopener">{t.openBtn} ↗</a>
                  : <span className="btn btn-off btn-full" aria-disabled="true">{t.soldBtn}</span>}
                <a className="checklink" href={d.check} target="_blank" rel="noopener">{t.check} →</a>
              </div>
            );
          })}
        </div>
        <p className="note via">{t.via}</p>
      </section>

      <section id="cara-daftar" className="howto">
        <div className="eyebrow">{t.howEyebrow}</div>
        <h2 className="h2">{t.howTitle}</h2>
        <p className="lead">{t.howLead}</p>
        <p className="timer-note"><span className="tchip">⏱ 7:00</span>{t.warn}</p>
        <ol className="shots">
          {t.steps.map(([title, body], i) => (
            <li key={i} className="shot">
              <div className="phone">
                <img src={`/steps/step${i + 1}.jpg`} alt={`${i + 1}. ${title}`} loading="lazy" />
                {i === 2 && <span className="tchip on-phone">⏱ 7:00</span>}
              </div>
              <div className="shot-txt">
                <span className="shot-no">{i + 1}</span>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="harga-tiket" style={{ background: "var(--paper-2)" }}>
        <div className="eyebrow">{t.priceEyebrow}</div>
        <h2 className="h2">{t.priceTitle}</h2>
        <div className="tablewrap">
          <table className="ptable">
            <thead><tr>{t.th.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {categoriesSorted.map((c) => (
                <tr key={c.id}>
                  <td>{L.cats[c.id]}<small>{km(lang, c.distanceKm)}</small></td>
                  <td className={c.status !== "open" ? "gone" : ""}>{num(lang, c.price.early)}</td>
                  <td>{num(lang, c.price.generalNational)}</td>
                  <td>{c.price.generalOpen ? num(lang, c.price.generalOpen) : "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note">{t.rupiah}</p>
      </section>
    </>
  );
}
