"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CAMPAIGN } from "../content";

/**
 * The cross menu in the top right corner (briefing).
 * The diana is the donation button, so navigation lives here instead.
 */
export default function CrossMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.menu = "open";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      delete document.body.dataset.menu;
    };
  }, [open, close]);

  // The donate flow has its own close affordance in the header.
  if (pathname?.startsWith("/donate")) return null;

  return (
    <div className="crossmenu" data-open={open}>
      <button
        type="button"
        className="cross-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="cross-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div className="cross-panel" hidden={!open}>
        <nav className="cross-nav" aria-label="Main">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "is-active" : undefined}
              style={{ transitionDelay: `${0.06 + i * 0.04}s` }}
            >
              <span className="cross-nav-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="cross-foot">
          {CAMPAIGN.title} — opening {CAMPAIGN.opens} at {CAMPAIGN.venue}
        </p>
      </div>
    </div>
  );
}
