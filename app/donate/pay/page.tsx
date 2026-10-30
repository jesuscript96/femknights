"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { CAMPAIGN, DONORBOX, REWARDS } from "../../content";
import { useDonate } from "../DonateContext";

export default function PayStep() {
  const { hydrated, tierId, amount, blankCheque, frequency, name } =
    useDonate();
  const router = useRouter();
  const reward = REWARDS.find((r) => r.id === tierId) ?? null;
  const [starting, setStarting] = useState(false);

  // Landed here without picking a room — send them back to choose one.
  useEffect(() => {
    if (hydrated && !tierId) router.replace("/donate");
  }, [hydrated, tierId, router]);

  // Donorbox's form with the gift already filled in. Built once from the
  // choice made on the previous steps, so the iframe never reloads mid-payment.
  const src = useMemo(() => {
    if (!hydrated || !DONORBOX.campaign) return null;
    const params = new URLSearchParams();
    if (!blankCheque && amount) params.set("amount", String(amount));
    if (frequency === "monthly") params.set("default_interval", "m");
    const [first, ...rest] = name.trim().split(/\s+/);
    if (first) params.set("first_name", first);
    if (rest.length) params.set("last_name", rest.join(" "));
    if (DONORBOX.language) params.set("language", DONORBOX.language);
    // "€0 raised" is no invitation; keep the goal meter off the form.
    params.set("hide_donation_meter", "true");
    return `https://donorbox.org/embed/${DONORBOX.campaign}?${params}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  if (!reward) return null;

  const gift = blankCheque
    ? "Blank cheque"
    : `€${amount}${frequency === "monthly" ? ` / month · ${CAMPAIGN.monthlyMonths} months` : ""}`;

  // Not connected yet: simulate the hand-off.
  const simulate = () => {
    setStarting(true);
    window.setTimeout(() => router.push("/donate/complete"), 1600);
  };

  return (
    <section className="step">
      <p className="step-kicker">Payment</p>
      <h1 className="step-title">Seal it.</h1>
      <p className="step-lead">
        The payment runs through Donorbox, right here on the page. Your gift is
        already filled in.
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
      </div>

      {src ? (
        <>
          <Script src="https://donorbox.org/widget.js" strategy="afterInteractive" />
          <div className="donorbox-wrap">
            <iframe
              name="donorbox"
              title="Donation form"
              src={src}
              allow="payment"
              seamless
              frameBorder="0"
              scrolling="no"
              className="donorbox-frame"
            />
          </div>
          <p className="donorbox-after">
            Finished on the form?{" "}
            <Link href="/donate/complete">Continue to your thank-you →</Link>
          </p>
        </>
      ) : (
        hydrated && (
          <>
            <p className="demo-note">
              Prototype — the payment is simulated here. Add the Donorbox
              campaign slug in content.tsx and the real form appears in its
              place.
            </p>
            <div className="step-actions">
              <button
                className="btn btn-primary btn-lg"
                disabled={starting}
                onClick={simulate}
              >
                {starting ? (
                  <span className="pay-spinner" aria-live="polite">
                    <span className="spinner" /> Paying…
                  </span>
                ) : (
                  <>Pay now</>
                )}
              </button>
            </div>
          </>
        )
      )}

      {!starting && (
        <div className="step-actions">
          <Link href="/donate/thank-you" className="step-back">
            ← Back to your message
          </Link>
        </div>
      )}
    </section>
  );
}
