import Link from "next/link";
import race, { IMG, CHECKED } from "@/lib/race";
import { T, href } from "@/lib/i18n";
import PriceCards from "@/components/PriceCards";
import Countdown from "@/components/Countdown";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import StickyBar from "@/components/StickyBar";

export default function HomeView({ lang = "id" }) {
  const L = T[lang];
  const follow = race.registration.now.followUrl;
  const checked = lang === "en" ? "8 Nov 2026" : CHECKED;
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-img" role="img" aria-label={L.hero.alt} style={{ backgroundImage: `url("${IMG}bg_city_new.jpg.jpeg")` }} />
        <div className="hero-body">
          <div className="eyebrow l">{L.hero.eyebrow}</div>
          <h1>Jakarta International <em>Marathon</em> 2027</h1>
          <p className="when">{L.hero.when} <span>·</span> Monas → GBK</p>
          <p className="hero-status">
            <span className="next"><span className="pulse"></span><b>{L.status.l}</b>{L.status.v}</span>
            <span className="sold">{L.status.sold}</span>
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href={follow} target="_blank" rel="noopener">{L.hero.follow}</a>
          </div>
        </div>
        <div className="hband">
          <div className="d"><b>{L.hero.when}</b><span>Monas → GBK, Jakarta</span></div>
          <Countdown lang={lang} />
        </div>
        <div className="balang" style={{ backgroundImage: `url("${IMG}gigi-balang.png")` }} />
      </section>

      <section className="prices" id="harga">
        <div className="eyebrow">{L.price.eyebrow} {checked}</div>
        <h2 className="h2">{L.price.title}</h2>
        <div className="statusbar"><span className="pulse"></span><p><b>{L.price.status[0]}</b>{L.price.status[1]}</p></div>
        <PriceCards lang={lang} />
      </section>

      <section className="steps">
        <div className="eyebrow l">{L.steps.eyebrow}</div>
        <h2 className="h2">{L.steps.title}</h2>
        <Steps lang={lang} />
        <Link className="textlink" href={href(lang, "/daftar") + "#cara-daftar"}>{L.steps.more}</Link>
      </section>

      <section>
        <div className="eyebrow">{L.mem.eyebrow}</div>
        <h2 className="h2">{L.mem.title}</h2>
        <div className="mem">
          {[["2026", 45000, "jakim-event-2026-night.jpg"], ["2025", 30000, "GALERI%202025.jpg"], ["2024", 15000, "jakim-event-2024.jpg"]].map(([y, n, f]) => (
            <a key={y} href={`https://jakim.id/galeri/${y}`} target="_blank" rel="noopener" style={{ backgroundImage: `url("${IMG}${f}")` }}>
              <span><small>{n.toLocaleString(lang === "en" ? "en-US" : "id-ID")} {L.mem.runners}</small><strong>JAKIM {y}</strong></span>
            </a>
          ))}
        </div>
        <Link className="textlink" style={{ color: "var(--text)" }} href={href(lang, "/galeri")}>{L.mem.more}</Link>
      </section>

      <section style={{ background: "var(--paper-2)" }}>
        <div className="split">
          <div>
            <div className="eyebrow">{L.faq.eyebrow}</div>
            <h2 className="h2">{L.faq.title}</h2>
            <p className="lead">{L.faq.lead}</p>
          </div>
          <div>
            <Faq lang={lang} />
            <Link className="btn btn-dark" href={href(lang, "/faq")}>{L.faq.more}</Link>
          </div>
        </div>
      </section>

      <section className="closing">
        <div>
          <div className="eyebrow l">{L.hero.when} · Monas → GBK</div>
          <h2 className="h2">{L.closing.title}</h2>
          <a className="btn btn-gold btn-full" href={follow} target="_blank" rel="noopener">{L.hero.follow}</a>
        </div>
        <div className="ondel">
          <img src={IMG + "ondel-pria-geometris-wajah-2.png"} alt="" loading="lazy" />
          <img src={IMG + "ondel-wanita-geometris-wajah-2.png"} alt="" loading="lazy" />
        </div>
      </section>

      <StickyBar lang={lang} />
    </>
  );
}
