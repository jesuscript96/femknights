"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CAMPAIGN, rewardBySlug } from "../../content";
import { useDonate } from "../../donate/DonateContext";

/**
 * The intake block that sits at the top of every reward detail page:
 * amount · one time or monthly (5 months) · continue.
 */
export default function RewardIntake({
  slug,
  cta,
}: {
  slug: string;
  cta: string;
}) {
  const reward = rewardBySlug(slug);
  const { frequency, set } = useDonate();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (reward && !reward.allowBlank) setValue(String(reward.min));
  }, [reward]);

  if (!reward) return null;

  const blank = value.trim() === "";
  const num = Number(value);
  const numOk = Number.isFinite(num) && num >= reward.min;
  const valid = reward.allowBlank ? blank || numOk : numOk;

  const presets = reward.allowBlank
    ? [50, 250, 750]
    : [reward.min, reward.min * 2, reward.min * 5];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    set({
      tierId: reward.id,
      amount: blank ? null : num,
      blankCheque: reward.allowBlank && blank,
    });
    router.push("/donate/thank-you");
  };

  return (
    <form className="intake" onSubmit={submit}>
      <div className="intake-row">
        <div className="intake-amount">
          <span className="intake-label" id={`amount-${reward.id}`}>
            Your gift
          </span>
          <div className="amount-presets">
            {presets.map((p) => (
              <button
                type="button"
                key={p}
                className={"amount-chip" + (num === p ? " is-active" : "")}
                onClick={() => setValue(String(p))}
              >
                €{p}
              </button>
            ))}
            {reward.allowBlank && (
              <button
                type="button"
                className={"amount-chip" + (blank ? " is-active" : "")}
                onClick={() => setValue("")}
              >
                Blank cheque
              </button>
            )}
          </div>

          <label className="amount-field">
            <span>€</span>
            <input
              type="number"
              min={reward.min}
              inputMode="numeric"
              value={value}
              aria-labelledby={`amount-${reward.id}`}
              placeholder={
                reward.allowBlank ? "leave empty to dare me" : String(reward.min)
              }
              onChange={(e) => setValue(e.target.value)}
            />
          </label>

          {touched && !valid && (
            <p className="amount-hint">This reward starts at €{reward.min}.</p>
          )}
          {reward.allowBlank && blank && (
            <p className="amount-hint is-quiet">
              Empty it is. I&rsquo;ll treat this as the blank cheque and get in
              touch to shape what comes back.
            </p>
          )}
        </div>

        <div className="intake-freq">
          <span className="intake-label">How often</span>
          <div className="freq-toggle">
            <button
              type="button"
              className={
                "freq-option" + (frequency === "once" ? " is-active" : "")
              }
              onClick={() => set({ frequency: "once" })}
            >
              <span className="freq-big">One time</span>
              <span className="freq-sub">A single gift</span>
            </button>
            <button
              type="button"
              className={
                "freq-option" + (frequency === "monthly" ? " is-active" : "")
              }
              onClick={() => set({ frequency: "monthly" })}
            >
              <span className="freq-big">Monthly</span>
              <span className="freq-sub">
                For {CAMPAIGN.monthlyMonths} months
              </span>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg intake-continue">
        {cta}
      </button>
    </form>
  );
}
