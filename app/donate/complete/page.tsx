"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Target from "../../components/Target";
import { CAMPAIGN, REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

type Snapshot = {
  name: string;
  amount: number | null;
  blankCheque: boolean;
  frequency: string;
  message: string;
  rewardName?: string;
  rings: number;
  filled: boolean;
};

export default function CompleteStep() {
  const donate = useDonate();
  const [snap, setSnap] = useState<Snapshot | null>(null);

  useEffect(() => {
    // Donorbox's "redirect after donation" can open this page inside its own
    // embedded iframe; lift it out to the full window.
    if (window.top && window.top !== window.self) {
      window.top.location.href = window.location.href;
    }
  }, []);

  // Once the choice is read back from sessionStorage, snapshot the details,
  // then clear state so a refresh/back is clean. Donorbox's redirect may also
  // pass first_name / amount, used when the session is gone.
  useEffect(() => {
    if (!donate.hydrated || snap) return;
    const q = new URLSearchParams(window.location.search);
    const reward = REWARDS.find((r) => r.id === donate.tierId) ?? null;
    const qAmount = Number(q.get("amount"));
    setSnap({
      name: donate.name || q.get("first_name") || "",
      amount: donate.amount ?? (qAmount > 0 ? qAmount : null),
      blankCheque: donate.blankCheque,
      frequency: donate.frequency,
      message: donate.message,
      rewardName: reward?.name,
      rings: reward?.rings ?? 3,
      filled: reward?.filledCenter ?? true,
    });
  }, [donate, snap]);

  const { reset } = donate;
  useEffect(() => {
    if (!snap) return;
    const t = window.setTimeout(reset, 400);
    return () => window.clearTimeout(t);
  }, [snap, reset]);

  if (!snap) return null;
  const s = snap;

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
