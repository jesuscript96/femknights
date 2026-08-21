"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Target from "../components/Target";
import { REWARDS } from "../content";
import { useDonate } from "./DonateContext";

function SelectReward() {
  const { tierId, set } = useDonate();
  const router = useRouter();
  const params = useSearchParams();

  // Preselect from ?tier= (deep links from reward/academy pages).
  useEffect(() => {
    const q = params.get("tier");
    if (q && REWARDS.some((r) => r.id === q)) {
      const r = REWARDS.find((x) => x.id === q)!;
      set({ tierId: q, amount: r.min });
    }
  }, [params, set]);

  const choose = (id: string, min: number) => {
    set({ tierId: id, amount: min });
    router.push("/donate/reward");
  };

  return (
    <section className="step">
      <p className="step-kicker">Step 1 — Select reward</p>
      <h1 className="step-title">Choose your tier</h1>
      <p className="step-lead">
        You donate, you get a reward. Pick the one that fits — you set the exact
        amount next.
      </p>

      <div className="donate-tiers">
        {REWARDS.map((r) => (
          <button
            key={r.id}
            className={
              "donate-tier" + (tierId === r.id ? " is-selected" : "")
            }
            onClick={() => choose(r.id, r.min)}
          >
            <Target
              rings={r.rings}
              filledCenter={r.filledCenter}
              size={72}
              strokeRatio={0.5}
            />
            <div className="donate-tier-text">
              <span className="donate-tier-price">{r.price}</span>
              <span className="donate-tier-name">{r.name}</span>
              <span className="donate-tier-tag">{r.tagline}</span>
            </div>
            <span className="donate-tier-go" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>

      <Link href="/rewards" className="step-back">
        ← Compare rewards in detail
      </Link>
    </section>
  );
}

export default function DonateSelect() {
  return (
    <Suspense fallback={<div className="step">Loading…</div>}>
      <SelectReward />
    </Suspense>
  );
}
