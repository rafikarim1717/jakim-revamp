"use client";
import { useEffect, useState } from "react";
import { T } from "@/lib/i18n";

const TARGET = new Date("2027-06-13T04:00:00+07:00").getTime();
const calc = () => {
  const s = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
};

export default function Countdown({ lang = "id" }) {
  const [v, setV] = useState(null);
  const t = T[lang].cd;
  useEffect(() => { setV(calc()); const id = setInterval(() => setV(calc()), 1000); return () => clearInterval(id); }, []);
  return (
    <div className="cd" aria-label={t.aria}>
      {t.labels.map((l, i) => (
        <div key={l}><b>{v ? String(v[i]).padStart(2, "0") : "--"}</b><span>{l}</span></div>
      ))}
    </div>
  );
}
