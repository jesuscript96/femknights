"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Target from "../../components/Target";
import { REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

export default function YourReward() {
  const { tierId, amount, set } = useDonate();
  const router = useRouter();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (!tierId) router.replace("/donate");
  }, [tierId, router]);

  useEffect(() => {
    if (amount) setValue(String(amount));
  }, [amount]);

  if (!reward) return null;

  const presets = [reward.min, reward.min * 2, reward.min * 5];
  const num = Number(value);
  const valid = Number.isFinite(num) && num >= reward.min;

  const cont = () => {
    if (!valid) return;
    set({ amount: num });
    router.push("/donate/payment");
  };

  return (
    <section className="step">
      <p className="step-kicker">Step 2 — Your selected reward</p>

      <div className="selected-reward">
        <Target
          rings={reward.rings}
          filledCenter={reward.filledCenter}
          size={90}
          strokeRatio={0.5}
        />
        <div>
          <span className="donate-tier-price">{reward.price}</span>
          <h1 className="step-title">{reward.name}</h1>
          <p className="step-lead">{reward.tagline}</p>
        </div>
        <Link href="/donate" className="selected-change">
          Change
        </Link>
      </div>

      <ul className="reward-card-perks">
        {reward.perks.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2 className="amount-title">Your gift</h2>
      <div className="amount-presets">
        {presets.map((p) => (
          <button
            key={p}
            className={"amount-chip" + (num === p ? " is-active" : "")}
            onClick={() => setValue(String(p))}
          >
            €{p}
          </button>
        ))}
      </div>

      <label className="amount-field">
        <span>€</span>
        <input
          type="number"
          min={reward.min}
          inputMode="numeric"
          value={value}
          placeholder={String(reward.min)}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      {!valid && value !== "" && (
        <p className="amount-hint">
          This reward starts at €{reward.min}.
        </p>
      )}

      <div className="step-actions">
        <button className="btn btn-primary btn-lg" disabled={!valid} onClick={cont}>
          Continue
        </button>
        <Link href="/donate" className="step-back">
          ← Back
        </Link>
      </div>
    </section>
  );
}
