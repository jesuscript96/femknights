"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  { href: "/donate", label: "Reward" },
  { href: "/donate/reward", label: "Your gift" },
  { href: "/donate/payment", label: "Frequency" },
  { href: "/donate/pay", label: "Pay" },
  { href: "/donate/thank-you", label: "Done" },
];

export default function StepBar() {
  const pathname = usePathname();
  const current = Math.max(
    0,
    STEPS.findIndex((s) => s.href === pathname)
  );

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
