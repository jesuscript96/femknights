"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CAMPAIGN, LOGO } from "../content";

export default function SiteHeader() {
  const pathname = usePathname();
  const inDonate = pathname?.startsWith("/donate");

  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" href="/" aria-label={CAMPAIGN.studio}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt={CAMPAIGN.studio} />
        </Link>

        {inDonate && (
          <Link className="header-exit" href="/">
            Close ✕
          </Link>
        )}
      </div>
    </header>
  );
}
