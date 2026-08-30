"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Target from "../../components/Target";
import { CAMPAIGN, REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

export default function ThankYouStep() {
  const { tierId, amount, blankCheque, frequency, name, message, set } =
    useDonate();
  const router = useRouter();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;
  const [starting, setStarting] = useState(false);

  // Landed here without picking a room — send them back to choose one.
  useEffect(() => {
    if (!tierId) router.replace("/donate");
  }, [tierId, router]);

  if (!reward) return null;

  const ready = name.trim().length > 1;

  const gift = blankCheque
    ? "Blank cheque"
    : `€${amount}${frequency === "monthly" ? ` / month · ${CAMPAIGN.monthlyMonths} months` : ""}`;

  const startPayment = () => {
    setStarting(true);
    // Prototype: stands in for the hand-off to the external payment platform.
    window.setTimeout(() => router.push("/donate/complete"), 1600);
  };

  return (
    <section className="step">
      <div className="thankyou-target">
        <Target
          rings={reward.rings}
          filledCenter={reward.filledCenter}
          size={110}
          strokeRatio={0.5}
        />
      </div>

      <p className="step-kicker">Big thank you</p>
      <h1 className="step-title">Thank you for stepping into the room.</h1>
      <p className="step-lead">
        You just helped build the armour. Before you pay, leave something behind
        — a line, a name, a reason. It goes into the work, not beside it.
      </p>

      <div className="receipt">
        <div className="receipt-row">
          <span>Your reward</span>
          <strong>{reward.name}</strong>
        </div>
        <div className="receipt-row">
          <span>Your gift</span>
          <strong>{gift}</strong>
        </div>
        <div className="receipt-row">
          <span />
          <Link href={`/rewards/${reward.slug}`} className="selected-change">
            Change
          </Link>
        </div>
      </div>

      <div className="field-grid single">
        <label className="field">
          <span>Your message</span>
          <textarea
            rows={4}
            value={message}
            placeholder="Say something to Niki — or to the knight you are becoming."
            onChange={(e) => set({ message: e.target.value })}
          />
        </label>

        <label className="field">
          <span>Your name</span>
          <input
            value={name}
            placeholder="The name that goes inside the work"
            onChange={(e) => set({ name: e.target.value })}
          />
        </label>
      </div>

      <p className="demo-note">
        Prototype — starting the payment is simulated here. This is where the
        hand-off to the payment platform will go.
      </p>

      <div className="step-actions">
        <button
          className="btn btn-primary btn-lg"
          disabled={!ready || starting}
          onClick={startPayment}
        >
          {starting ? (
            <span className="pay-spinner" aria-live="polite">
              <span className="spinner" /> Starting…
            </span>
          ) : (
            <>Start payment</>
          )}
        </button>
        {!starting && (
          <Link href={`/rewards/${reward.slug}`} className="step-back">
            ← Back to {reward.name}
          </Link>
        )}
      </div>
    </section>
  );
}
