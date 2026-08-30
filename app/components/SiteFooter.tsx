"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CAMPAIGN, NAV_LINKS, LOGO } from "../content";

export default function SiteFooter() {
  const pathname = usePathname();
  // The donate flow is a focused checkout — no marketing footer there.
  if (pathname?.startsWith("/donate")) return null;

  return (
    <footer id="contact" className="contact">
      <div className="container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="footer-logo" src={LOGO} alt={CAMPAIGN.studio} />
        <p className="eyebrow">
          Opening {CAMPAIGN.opens} · {CAMPAIGN.venue}
        </p>
        <h2>{CAMPAIGN.title}</h2>
        <Link className="contact-mail" href="/donate">
          {CAMPAIGN.callToAction}
          <span className="contact-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {CAMPAIGN.studio} — {CAMPAIGN.title},{" "}
            {CAMPAIGN.venue}
          </span>
          <div className="footer-links">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
