"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Target from "../../components/Target";
import { REWARDS, CAMPAIGN } from "../../content";
import { useDonate } from "../DonateContext";

export default function ThankYou() {
  const { tierId, amount, name, frequency, reset } = useDonate();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;

  // Snapshot the details, then clear state so a refresh/back is clean.
  const snap = useRef({
    name,
    amount,
    frequency,
    rewardName: reward?.name,
    rings: reward?.rings ?? 3,
    filled: reward?.filledCenter ?? true,
  });

  useEffect(() => {
    const t = window.setTimeout(reset, 400);
    return () => window.clearTimeout(t);
  }, [reset]);

  const s = snap.current;

  return (
    <section className="thankyou">
      <div className="thankyou-target">
        <Target rings={s.rings} filledCenter={s.filled} size={140} strokeRatio={0.5} />
      </div>

      <p className="step-kicker">Big thank you</p>
      <h1 className="thankyou-title">
        {s.name ? `Thank you, ${s.name}.` : "Thank you."}
      </h1>
      <p className="thankyou-lead">
        You just helped build the room. Your name now sits inside the work — not
        beside it. This is the moment a solo knight stops being solo.
      </p>

      {s.amount && (
        <div className="thankyou-receipt">
          <span>
            {s.rewardName} · €{s.amount}
            {s.frequency === "monthly" ? " / month" : ""}
          </span>
        </div>
      )}

      <p className="thankyou-next">
        A confirmation is on its way to your inbox. If your reward includes a
        seat or a session, you&rsquo;ll receive a short form to reserve your
        place. The exhibition opens {CAMPAIGN.opens} at {CAMPAIGN.venue}.
      </p>

      <p className="thankyou-signature">🖤 Niki — the dot says it all.</p>

      <div className="step-actions center">
        <Link href="/" className="btn btn-dark btn-lg">
          Back to the campaign
        </Link>
        <Link href="/story" className="btn btn-ghost btn-lg">
          Read the story
        </Link>
      </div>
    </section>
  );
}
