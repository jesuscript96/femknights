"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

const METHODS = ["iDEAL", "Credit card", "PayPal", "SEPA transfer"];

export default function PaymentStep() {
  const { tierId, amount, frequency, name, email, set } = useDonate();
  const router = useRouter();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;
  const [method, setMethod] = useState<string>("iDEAL");

  useEffect(() => {
    if (!tierId || !amount) router.replace("/donate");
  }, [tierId, amount, router]);

  if (!reward || !amount) return null;

  const emailOk = /.+@.+\..+/.test(email);
  const ready = name.trim().length > 1 && emailOk;

  return (
    <section className="step">
      <p className="step-kicker">Step 3 — Choose one time or in months</p>
      <h1 className="step-title">How would you like to give?</h1>

      {/* Frequency */}
      <div className="freq-toggle">
        <button
          className={"freq-option" + (frequency === "once" ? " is-active" : "")}
          onClick={() => set({ frequency: "once" })}
        >
          <span className="freq-big">€{amount}</span>
          <span className="freq-sub">One time</span>
        </button>
        <button
          className={
            "freq-option" + (frequency === "monthly" ? " is-active" : "")
          }
          onClick={() => set({ frequency: "monthly" })}
        >
          <span className="freq-big">€{amount}/mo</span>
          <span className="freq-sub">Monthly — for 12 months</span>
        </button>
      </div>

      {/* Method */}
      <h2 className="amount-title">Payment method</h2>
      <div className="method-list">
        {METHODS.map((m) => (
          <button
            key={m}
            className={"method-item" + (method === m ? " is-active" : "")}
            onClick={() => setMethod(m)}
          >
            <span className="method-radio" aria-hidden="true" />
            {m}
          </button>
        ))}
      </div>

      {/* Details */}
      <h2 className="amount-title">Your details</h2>
      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input
            value={name}
            placeholder="Your name"
            onChange={(e) => set({ name: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            placeholder="you@email.com"
            onChange={(e) => set({ email: e.target.value })}
          />
        </label>
      </div>

      <div className="step-actions">
        <button
          className="btn btn-primary btn-lg"
          disabled={!ready}
          onClick={() => router.push("/donate/pay")}
        >
          Review &amp; pay
        </button>
        <Link href="/donate/reward" className="step-back">
          ← Back
        </Link>
      </div>
    </section>
  );
}
