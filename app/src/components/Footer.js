"use client";
import { usePathname } from "next/navigation";
import race from "@/lib/race";
import { T, langFromPath } from "@/lib/i18n";

export default function Footer() {
  const lang = langFromPath(usePathname() || "/");
  const t = T[lang].foot;
  const c = race.contact;
  return (
    <footer>
      <div className="fcols">
        <div>
          <h4>{t.cs}</h4>
          WhatsApp <a href={`https://wa.me/${c.customerService.whatsapp.replace(/\D/g, "")}`}>{c.customerService.whatsapp}</a>
          <br />{t.hours}
        </div>
        <div>
          <h4>{t.other}</h4>
          <a href={`mailto:${c.email}`}>{c.email}</a> · IG{" "}
          <a href="https://instagram.com/jakartainternationalmarathon">{c.instagram[0]}</a>
        </div>
        <div>
          <h4>{t.org}</h4>
          Presented by Pemprov DKI Jakarta · 5 Abad Jakarta · Organized by {race.event.organizer}
        </div>
      </div>
      <p className="disclaim">{t.disclaim}</p>
    </footer>
  );
}
