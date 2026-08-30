"use client";

import { useId, useState } from "react";

/**
 * The "+ read the full story" disclosure from the briefing.
 * Collapsed it is a single plus-prefixed line; open it grows the long form.
 */
export default function Expandable({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="expandable" data-open={open}>
      <button
        type="button"
        className="expandable-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="expandable-sign" aria-hidden="true" />
        <span className="expandable-label">
          {open ? "Close" : label}
        </span>
      </button>

      <div id={id} className="expandable-panel" hidden={!open}>
        <div className="expandable-inner">{children}</div>
      </div>
    </div>
  );
}
