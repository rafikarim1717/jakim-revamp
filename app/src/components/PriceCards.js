"use client";
import { useState } from "react";
import race, { categoriesSorted } from "@/lib/race";
import { T, money, km } from "@/lib/i18n";

export default function PriceCards({ lang = "id" }) {
  const t = T[lang].price;
  const D = T[lang].days;
  const [who, setWho] = useState(lang === "en" ? "wna" : "wni");
  const reg = race.registration.registerUrl;
  return (
    <>
      <div className="toggle" role="tablist">
        <button className={who === "wni" ? "on" : ""} onClick={() => setWho("wni")} role="tab" aria-selected={who === "wni"}>{t.wni}</button>
        <button className={who === "wna" ? "on" : ""} onClick={() => setWho("wna")} role="tab" aria-selected={who === "wna"}>{t.wna}</button>
      </div>
      <div className="rc-grid">
        {categoriesSorted.map((c) => {
          const wna = who === "wna";
          const main = wna ? c.price.generalOpen : c.price.generalNational;
          return (
            <article key={c.id} className="rc">
              <div className="rc-head">
                <h3 className="rc-name">{T[lang].cats[c.id]}</h3>
              </div>
              <p className="rc-day">{km(lang, c.distanceKm)} · {D[c.day]}</p>
              <div className="rc-main">
                <small>{t.general}{wna ? ` · ${t.wna}` : ""}</small>
                {main ? <b>{money(lang, main)}</b> : <b className="na">{t.onlyWni}</b>}
              </div>
              {!(wna && !c.price.generalOpen) && (
                <p className="rc-early">
                  {wna ? t.earlyWni : <>{t.early} <s>{money(lang, c.price.early)}</s> · {t.gone}</>}
                </p>
              )}
              <ul className="rc-facts">
                <li><span>{t.cot}</span><b>{T[lang].cot[c.cot] || c.cot}</b></li>
                <li><span>{t.age}</span><b>{c.minAge}{t.yr ? ` ${t.yr}` : "+"}</b></li>
              </ul>
              {c.status === "open" && (
                <a className="btn btn-gold btn-full" href={reg} target="_blank" rel="noopener">{t.register} {T[lang].cats[c.id]}</a>
              )}
            </article>
          );
        })}
      </div>
      <p className="note">{who === "wni" ? t.noteWni : t.noteWna}</p>
    </>
  );
}
