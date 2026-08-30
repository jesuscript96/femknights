"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { DIANA_RINGS } from "../content";

/**
 * The diana IS the donation button.
 * Rings run inner → outer: blanc · 750 · 250 · 50 · rewards.
 * The centre is an X: it opens the target when closed, closes it when open.
 */
const ITEMS = DIANA_RINGS;

// Geometry in viewBox 0..100, centre (50,50).
const RW = 7.2; // band thickness / central disc radius
const GROW = RW * 0.7; // how much ONLY the hovered band fattens
const isBlack = (i: number) => i % 2 === 1; // alternate white/black rings

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

  const go = (href: string) => {
    close();
    router.push(href);
  };

  const onRingActivate = (i: number) => {
    if (open) go(ITEMS[i].href);
    else setOpen(true);
  };

  // Centre: opens when closed, closes when open.
  const onCentreActivate = () => {
    if (open) close();
    else setOpen(true);
  };

  // Don't overlay the donate button on the donate flow itself.
  if (pathname?.startsWith("/donate")) return null;

  return (
    <div className="diana" data-open={open}>
      {/* Scrim: click outside to close */}
      <button
        className="diana-scrim"
        aria-label="Close the donation menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      {/* The word DONATE, underneath the button, in strong pink */}
      <span className="diana-hint" aria-hidden="true">
        donate
      </span>

      <svg
        className="diana-panel"
        viewBox="0 0 100 100"
        aria-label="Donation menu"
      >
        {/* Amount rings */}
        {ITEMS.map((it, i) => {
          const black = isBlack(i);
          const g = bandGeom(i, hovered);
          const hot = hovered === i;
          return (
            <g
              key={it.label}
              className="diana-ring"
              role="link"
              tabIndex={open ? 0 : -1}
              aria-label={
                it.label === "rewards"
                  ? "All rewards"
                  : it.label === "blanc"
                    ? "Blanc — name your own amount"
                    : `Donate €${it.label} or more`
              }
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered((h) => (h === i ? null : h))}
              onClick={() => onRingActivate(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onRingActivate(i);
                }
              }}
            >
              <circle
                className="diana-band"
                cx={50}
                cy={50}
                r={g.r}
                fill="none"
                stroke={black ? "#111111" : "#ffffff"}
                strokeWidth={g.w}
              />
              <text
                className={`diana-label${hot ? " is-hot" : ""}`}
                x={50}
                y={50 - g.r}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={black ? "#ffffff" : "#111111"}
                style={{ transitionDelay: open ? `${0.1 + i * 0.05}s` : "0s" }}
              >
                {it.label}
              </text>
            </g>
          );
        })}

        {/* Centre: the sun-orange disc with an X */}
        <g
          className="diana-centre"
          role="button"
          tabIndex={0}
          aria-label={open ? "Close the donation menu" : "Open the donation menu"}
          aria-expanded={open}
          onClick={onCentreActivate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onCentreActivate();
            }
          }}
        >
          <circle className="diana-donate" cx={50} cy={50} r={RW} />
          <g className="diana-x" stroke="#ffffff" strokeWidth={0.9} strokeLinecap="round">
            <line x1={47.4} y1={47.4} x2={52.6} y2={52.6} />
            <line x1={52.6} y1={47.4} x2={47.4} y2={52.6} />
          </g>
        </g>
      </svg>
    </div>
  );
}
