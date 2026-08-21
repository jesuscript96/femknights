"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

export default function PayStep() {
  const { tierId, amount, frequency, name, email } = useDonate();
  const router = useRouter();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!tierId || !amount) router.replace("/donate");
  }, [tierId, amount, router]);

  if (!reward || !amount) return null;

  const pay = () => {
    setProcessing(true);
    // Prototype: simulate the gateway round-trip, then land on thank-you.
    window.setTimeout(() => router.push("/donate/thank-you"), 1600);
  };

  return (
    <section className="step step-pay">
      <p className="step-kicker">Step 4 — Pay</p>
      <h1 className="step-title">Review &amp; confirm</h1>

      <div className="receipt">
        <div className="receipt-row">
          <span>Reward</span>
          <strong>{reward.name}</strong>
        </div>
        <div className="receipt-row">
          <span>Frequency</span>
          <strong>
            {frequency === "once" ? "One time" : "Monthly · 12 months"}
          </strong>
        </div>
        <div className="receipt-row">
          <span>From</span>
          <strong>
            {name} · {email}
          </strong>
        </div>
        <div className="receipt-total">
          <span>Total{frequency === "monthly" ? " / month" : ""}</span>
          <strong>€{amount}</strong>
        </div>
      </div>

      <p className="demo-note">
        Prototype — this is a visual demo of the payment step. No real payment is
        taken.
      </p>

      <div className="step-actions">
        <button
          className="btn btn-primary btn-lg"
          onClick={pay}
          disabled={processing}
        >
          {processing ? (
            <span className="pay-spinner" aria-live="polite">
              <span className="spinner" /> Processing…
            </span>
          ) : (
            <>Pay €{amount}</>
          )}
        </button>
        {!processing && (
          <Link href="/donate/payment" className="step-back">
            ← Back
          </Link>
        )}
      </div>
    </section>
  );
}
