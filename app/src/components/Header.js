"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMG } from "@/lib/race";
import { MENU } from "@/lib/menu";
import { T, langFromPath, href, swapPath } from "@/lib/i18n";

function Items({ items, lang, tba }) {
  return items.map((it) => it.href
    ? <Link key={it.label} className="mi" href={href(lang, it.href)}>{it.label}</Link>
    : <span key={it.label} className="mi off" aria-disabled="true">{it.label}<small>{tba}</small></span>);
}

function Panel({ g, lang, tba }) {
  if (g.groups) {
    return (
      <div className="mpanel wide">
        {g.groups.map((sg) => (
          <div key={sg.label}><b className="mhead">{sg.label}</b><Items items={sg.items} lang={lang} tba={tba} /></div>
        ))}
      </div>
    );
  }
  return <div className="mpanel"><Items items={g.items} lang={lang} tba={tba} /></div>;
}

function LangSwitch({ path, lang }) {
  const other = swapPath(path);
  const Item = ({ code }) =>
    lang === code
      ? <span className="lsw-opt on" aria-current="true">{code.toUpperCase()}</span>
      : <Link className="lsw-opt" href={other} hrefLang={code}>{code.toUpperCase()}</Link>;
  return (
    <div className="lsw" data-lang={lang} role="group" aria-label="Bahasa / Language">
      <div className="lsw-track">
        <span className="lsw-thumb" />
        <Item code="id" />
        <Item code="en" />
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(-1);
  const navRef = useRef(null);
  const hdrRef = useRef(null);
  const [hh, setHh] = useState(64);
  const [top, setTop] = useState(true);
  const raw = usePathname() || "/";
  const path = raw.length > 1 ? raw.replace(/\/$/, "") : raw;
  const lang = langFromPath(path);
  const t = T[lang].nav;
  const bare = lang === "en" ? path.replace(/^\/en/, "") || "/" : path;
  useEffect(() => { setOpen(false); setOpenIdx(-1); document.documentElement.lang = lang; }, [path, lang]);
  // navbar transparan di atas hero (Home), solid setelah scroll
  const isHome = bare === "/";
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY < 40);
    const onResize = () => { if (hdrRef.current) document.documentElement.style.setProperty("--hh", hdrRef.current.getBoundingClientRect().height + "px"); };
    onScroll(); onResize();
    window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, [path]);
  useEffect(() => {
    const close = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(-1); };
    const esc = (e) => { if (e.key === "Escape") setOpenIdx(-1); };
    document.addEventListener("click", close); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open && hdrRef.current) setHh(hdrRef.current.getBoundingClientRect().height);
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className={`hdr ${isHome && top && !open && openIdx < 0 ? "clear" : ""}`} ref={hdrRef}>
        <Link className="logo" href={href(lang, "/")} aria-label="JAKIM 2027">
          <img src={IMG + "Logo%20JAKIM%202027%20v2.png"} alt="Jakarta International Marathon 2027" />
        </Link>
        <nav className="dnav" aria-label="Menu" ref={navRef}>
          {MENU.map((g, i) => (
            <div className={`mg ${openIdx === i ? "open" : ""}`} key={g.label}>
              <button type="button" className="mbtn" aria-expanded={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                {g.label}<span aria-hidden="true">▾</span>
              </button>
              <Panel g={g} lang={lang} tba={t.tba} />
            </div>
          ))}
        </nav>
        <div className="hdr-r">
          <LangSwitch path={path} lang={lang} />
          <Link className="btn btn-gold btn-sm" href={href(lang, "/daftar")}>{t.cta}</Link>
          <button className={`burger ${open ? "x" : ""}`} aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} aria-controls="menu-drawer" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <nav id="menu-drawer" className={`drawer ${open ? "open" : ""}`} aria-hidden={!open} style={{ top: hh }}>
        <div className="mainnav acc">
          {MENU.map((g) => (
            <details key={g.label}>
              <summary>{g.label}</summary>
              <div className="accbody">
                {g.groups
                  ? g.groups.map((sg) => <div key={sg.label}><b className="mhead">{sg.label}</b><Items items={sg.items} lang={lang} tba={t.tba} /></div>)
                  : <Items items={g.items} lang={lang} tba={t.tba} />}
              </div>
            </details>
          ))}
        </div>
        <div className="lang"><LangSwitch path={path} lang={lang} /></div>
      </nav>
    </>
  );
}
