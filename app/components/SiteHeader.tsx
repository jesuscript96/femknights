"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "../content";

export default function SiteHeader() {
  const pathname = usePathname();
  const inDonate = pathname?.startsWith("/donate");

  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" href="/">
          the female knight <span className="dim">campaign</span>
        </Link>

        {inDonate ? (
          <Link className="header-exit" href="/">
            Close ✕
          </Link>
        ) : (
          <nav className="nav">
            {HEADER_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "is-active" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/donate" className="nav-donate">
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
