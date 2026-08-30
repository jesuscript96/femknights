import Link from "next/link";
import Target from "../components/Target";
import { REWARDS, REWARDS_INTRO } from "../content";

export const metadata = { title: "Donate — The Female Knight" };

export default function DonatePage() {
  return (
    <section className="step">
      <p className="step-kicker">Donate</p>
      <h1 className="step-title">{REWARDS_INTRO.title}</h1>
      <p className="step-lead">
        {REWARDS_INTRO.body} You set the amount on the room&rsquo;s own page.
      </p>

      <div className="donate-tiers">
        {REWARDS.map((r) => (
          <Link key={r.id} className="donate-tier" href={`/rewards/${r.slug}`}>
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
          </Link>
        ))}
      </div>

      <Link href="/rewards" className="step-back">
        ← Compare the rooms in detail
      </Link>
    </section>
  );
}
