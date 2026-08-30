"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Target from "../../components/Target";
import { CAMPAIGN, REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

export default function CompleteStep() {
  const { tierId, amount, blankCheque, name, frequency, message, reset } =
    useDonate();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;

  // Snapshot the details, then clear state so a refresh/back is clean.
  const snap = useRef({
    name,
    amount,
    blankCheque,
    frequency,
    message,
    rewardName: reward?.name,
    rings: reward?.rings ?? 3,
    filled: reward?.filledCenter ?? true,
  });

  useEffect(() => {
    const t = window.setTimeout(reset, 400);
    return () => window.clearTimeout(t);
  }, [reset]);

  const s = snap.current;

  const gift = s.blankCheque
    ? "Blank cheque"
    : `€${s.amount}${s.frequency === "monthly" ? ` / month · ${CAMPAIGN.monthlyMonths} months` : ""}`;

  return (
    <section className="thankyou">
      <div className="thankyou-target">
        <Target
          rings={s.rings}
          filledCenter={s.filled}
          size={140}
          strokeRatio={0.5}
        />
      </div>

      <p className="step-kicker">You are in the room</p>
      <h1 className="thankyou-title">
        {s.name ? `Thank you, ${s.name}.` : "Thank you."}
      </h1>
      <p className="thankyou-lead">
        You just helped build the room. Your name now sits inside the work — not
        beside it. This is the moment a solo knight stops being solo.
      </p>

      {s.rewardName && (
        <div className="thankyou-receipt">
          <span>
            {s.rewardName} · {gift}
          </span>
        </div>
      )}

      {s.message && (
        <blockquote className="thankyou-message">
          <span>{s.message}</span>
          {s.name && <cite>{s.name}</cite>}
        </blockquote>
      )}

      <p className="thankyou-next">
        A confirmation is on its way. If your reward includes a seat or a
        session, you&rsquo;ll receive a short form to reserve your place. The
        exhibition opens {CAMPAIGN.opens} at {CAMPAIGN.venue}.
      </p>

      <p className="thankyou-signature">🖤 Niki — the dot says it all.</p>

      <div className="step-actions center">
        <Link href="/" className="btn btn-dark btn-lg">
          Back to the campaign
        </Link>
        <Link href="/academy" className="btn btn-ghost btn-lg">
          Enter the Knight Academy
        </Link>
      </div>
    </section>
  );
}
