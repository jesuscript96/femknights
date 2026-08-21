"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CAMPAIGN, HEADER_LINKS } from "../content";

export default function SiteFooter() {
  const pathname = usePathname();
  // The donate flow is a focused checkout — no marketing footer there.
  if (pathname?.startsWith("/donate")) return null;

  return (
    <footer id="contact" className="contact">
      <div className="container">
        <p className="eyebrow">{CAMPAIGN.callToAction}</p>
        <h2>Help me build the room. Then step into your own.</h2>
        <Link className="contact-mail" href="/donate">
          Back this campaign
          <span className="contact-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {CAMPAIGN.title} — {CAMPAIGN.venue}
          </span>
          <div className="footer-links">
            {HEADER_LINKS.map((l) => (
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
