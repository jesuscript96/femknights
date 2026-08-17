"use client";

import { useCallback, useEffect, useState } from "react";

/** Menú items de dentro (centro) hacia fuera, tal cual el vídeo. */
const ITEMS = [
  { label: "home", href: "#top" },
  { label: "contact", href: "#contact" },
  { label: "about", href: "#studio" },
  { label: "stories", href: "#services" },
  { label: "work", href: "#work" },
];

// Geometría en viewBox 0..100, centro (50,50).
const RW = 7; // grosor de cada banda / radio del disco central
const GROW = RW * 0.7; // cuánto engorda SOLO la banda con hover
const isBlack = (i: number) => i % 2 === 1; // contact + stories = anillos negros
const CLOSED_SCALE = 0.14;

/**
 * Geometría de la banda i según el anillo con hover (efecto acordeón):
 * la banda con hover engorda hacia fuera y las de fuera se desplazan
 * para hacerle sitio, manteniendo su grosor. Nunca se solapan.
 */
function bandGeom(i: number, hovered: number | null) {
  const h = hovered !== null && hovered >= 0 ? hovered : -1;
  let inner = (i + 1) * RW;
  let outer = (i + 2) * RW;
  if (h >= 0) {
    if (i === h) outer += GROW; // la banda activa crece hacia fuera
    else if (i > h) {
      inner += GROW; // las de fuera se desplazan (mismo grosor)
      outer += GROW;
    }
  }
  return { r: (inner + outer) / 2, w: outer - inner };
}

export default function DianaMenu() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setHovered(null);
  }, []);

  // Escape para cerrar + bloquear scroll del body mientras está abierto.
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (href === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onRingClick = (e: React.MouseEvent, i: number) => {
    if (open) go(e, ITEMS[i].href);
    else setOpen(true);
  };

  const onCenterClick = () => {
    if (open) close();
    else setOpen(true);
  };

  // La diana solo cambia de escala entre cerrado y abierto. El hover NO
  // escala el conjunto: solo engorda la banda activa (acordeón).
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
      {/* Capa para cerrar al hacer click fuera */}
      <button
        className="diana-scrim"
        aria-label="Cerrar menú"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      {/* La diana: misma pieza en cerrado y abierto, solo cambia de escala */}
      <svg
        className="diana-panel"
        viewBox="0 0 100 100"
        role="button"
        aria-label={open ? "Menú abierto" : "Abrir menú"}
        aria-expanded={open}
        tabIndex={0}
        style={{ transform: `translate(-50%, -50%) scale(${panelScale})` }}
      >
        {/* Anillos-enlace (trazos), fondos blanco y negro sólidos */}
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

        {/* Centro: punto de la diana (cerrado) / botón cerrar ✕ (abierto) */}
        <circle
          className="diana-close"
          cx={50}
          cy={50}
          r={RW}
          fill="#111111"
          onMouseEnter={() => setHovered(-2)}
          onMouseLeave={() => setHovered((h) => (h === -2 ? null : h))}
          onClick={onCenterClick}
        />
        <g
          className="diana-x"
          stroke="#ffffff"
          strokeWidth={0.9}
          strokeLinecap="round"
        >
          <line x1={47.4} y1={47.4} x2={52.6} y2={52.6} />
          <line x1={52.6} y1={47.4} x2={47.4} y2={52.6} />
        </g>

        {/* Etiquetas (solo visibles en abierto) */}
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
            >
              {it.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
