"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  { href: "/donate", label: "Choose your room" },
  { href: "/donate/thank-you", label: "Your message" },
  { href: "/donate/complete", label: "Payment" },
];

export default function StepBar() {
  const pathname = usePathname();
  const found = STEPS.findIndex((s) => s.href === pathname);
  const current = found < 0 ? 0 : found;

  return (
    <ol className="stepbar container" aria-label="Donation progress">
      {STEPS.map((s, i) => (
        <li
          key={s.href}
          className={
            "stepbar-item" +
            (i < current ? " is-done" : "") +
            (i === current ? " is-current" : "")
          }
        >
          <span className="stepbar-dot">{i < current ? "✓" : i + 1}</span>
          <span className="stepbar-label">{s.label}</span>
        </li>
      ))}
    </ol>
  );
}
