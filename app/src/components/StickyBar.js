"use client";
import { useEffect, useState } from "react";
import race from "@/lib/race";
import { T } from "@/lib/i18n";

export default function StickyBar({ lang = "id", watchId = "hero" }) {
  const [show, setShow] = useState(false);
  const t = T[lang].sticky;
  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);
  return (
    <div className={`sticky ${show ? "show" : ""}`}>
      <div><b>{t.title}</b>{t.sub}</div>
      <a className="btn btn-gold btn-sm" href={race.registration.now.followUrl} target="_blank" rel="noopener">{t.cta}</a>
    </div>
  );
}
