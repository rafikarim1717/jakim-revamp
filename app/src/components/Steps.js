import { T } from "@/lib/i18n";

export default function Steps({ lang = "id", full = false }) {
  const t = T[lang].steps;
  if (full) {
    return (
      <div className="steps-list five">
        {t.full.map(([title, body], i) => (
          <div className="step" key={i}>
            <div className="no">{i + 1}</div>
            <div>
              <b>{title}</b><p>{body}</p>
              {i === 2 && <div className="warn"><i>7'</i><div><b>{t.fullWarnB}</b>{t.fullWarn}</div></div>}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="steps-list">
        {t.short.map(([title, body], i) => (
          <div className="step" key={i}><div className="no">{i + 1}</div><div><b>{title}</b><p>{body}</p></div></div>
        ))}
      </div>
      <div className="warn"><i>7'</i><div><b>{t.warnB}</b>{t.warn}</div></div>
    </>
  );
}
