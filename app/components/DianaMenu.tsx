"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { NAV } from "../content";

/** Menu rings, inner (center) → outer. The center is the DONATE button. */
const ITEMS = NAV;

// Geometry in viewBox 0..100, center (50,50).
const RW = 7; // band thickness / central disc radius
const GROW = RW * 0.7; // how much ONLY the hovered band fattens
const isBlack = (i: number) => i % 2 === 1; // alternate black/white rings
const CLOSED_SCALE = 0.14;

/**
 * Band geometry with an accordion effect: the hovered band grows outward
 * and the outer bands shift to make room, keeping their thickness.
 */
function bandGeom(i: number, hovered: number | null) {
  const h = hovered !== null && hovered >= 0 ? hovered : -1;
  let inner = (i + 1) * RW;
  let outer = (i + 2) * RW;
  if (h >= 0) {
    if (i === h) outer += GROW;
    else if (i > h) {
      inner += GROW;
      outer += GROW;
    }
  }
  return { r: (inner + outer) / 2, w: outer - inner };
}

export default function DianaMenu() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const close = useCallback(() => {
    setOpen(false);
    setHovered(null);
  }, []);

  // Close on route change.
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Escape closes + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    close();
    router.push(href);
  };

  const onRingClick = (e: React.MouseEvent, i: number) => {
    if (open) go(e, ITEMS[i].href);
    else setOpen(true);
  };

  // Center = DONATE when open; opens the menu when closed.
  const onCenterClick = (e: React.MouseEvent) => {
    if (open) go(e, "/donate");
    else setOpen(true);
  };

  // Don't overlay the donate button on the donate flow itself.
  if (pathname?.startsWith("/donate")) return null;

  const panelScale = open ? 1 : CLOSED_SCALE;

  return (
    <div
      className="diana"
      data-open={open}
      onKeyDown={(e) => {
        if (!open && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setOpen(true);
        }
      }}
    >
      {/* Scrim: click outside to close */}
      <button
        className="diana-scrim"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      {/* Hint shown while collapsed */}
      {!open && <span className="diana-hint" aria-hidden="true">donate</span>}

      <svg
        className="diana-panel"
        viewBox="0 0 100 100"
        role="button"
        aria-label={open ? "Menu open — center is donate" : "Open donate menu"}
        aria-expanded={open}
        tabIndex={0}
        style={{ transform: `translate(-50%, -50%) scale(${panelScale})` }}
      >
        {/* Link rings */}
        {ITEMS.map((it, i) => {
          const black = isBlack(i);
          const g = bandGeom(i, hovered);
          return (
            <circle
              key={it.label}
              className="diana-band"
              cx={50}
              cy={50}
              r={g.r}
              fill="none"
              stroke={black ? "#111111" : "#ffffff"}
              strokeWidth={g.w}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onClick={(e) => onRingClick(e, i)}
            />
          );
        })}

        {/* Center: the DONATE button (accent disc) */}
        <circle
          className="diana-donate"
          cx={50}
          cy={50}
          r={RW}
          onMouseEnter={() => setHovered(-2)}
          onMouseLeave={() => setHovered((h) => (h === -2 ? null : h))}
          onClick={onCenterClick}
        />
        <text
          className="diana-donate-label"
          x={50}
          y={50}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
        >
          donate
        </text>

        {/* Ring labels (visible when open) */}
        {ITEMS.map((it, i) => {
          const black = isBlack(i);
          const hot = hovered === i;
          const g = bandGeom(i, hovered);
          return (
            <text
              key={it.label}
              className={`diana-label${hot ? " is-hot" : ""}`}
              x={50}
              y={50 - g.r}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={black ? "#ffffff" : "#111111"}
              style={{ transitionDelay: open ? `${0.1 + i * 0.05}s` : "0s" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onClick={(e) => open && go(e, it.href)}
            >
              {it.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
