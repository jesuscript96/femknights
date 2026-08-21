import Link from "next/link";
import Reveal from "./components/Reveal";
import Target from "./components/Target";
import { CAMPAIGN, SLOGANS, REWARDS } from "./content";

function euros(n: number) {
  return "€" + n.toLocaleString("nl-NL");
}

export default function Hero() {
  const pct = Math.min(
    100,
    Math.round((CAMPAIGN.raisedEuros / CAMPAIGN.goalEuros) * 100)
  );

  return (
    <main>
      {/* ---------- Cover ---------- */}
      <section className="cover">
        <div className="cover-inner container">
          <Reveal as="p" className="cover-kicker">
            {CAMPAIGN.callToAction} — back this
          </Reveal>
          <Reveal as="h1" className="cover-title">
            The Dressing Room of a Female Knight
          </Reveal>
          <Reveal as="p" className="cover-sub" delay={80}>
            This year, I become a knight. Not a costume — a calling. Help me
            build the first solo exhibition of my life at {CAMPAIGN.venue},
            opening {CAMPAIGN.opens}.
          </Reveal>

          <Reveal className="cover-actions" delay={140}>
            <Link href="/donate" className="btn btn-primary btn-lg">
              Bring me your juice
            </Link>
            <Link href="/story" className="btn btn-ghost btn-lg">
              Read my story
            </Link>
          </Reveal>

          {/* Progress */}
          <Reveal className="cover-progress" delay={200}>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-stats">
              <span>
                <strong>{euros(CAMPAIGN.raisedEuros)}</strong> raised of{" "}
                {euros(CAMPAIGN.goalEuros)}
              </span>
              <span>
                <strong>{CAMPAIGN.backers}</strong> knights backing
              </span>
              <span>
                <strong>{pct}%</strong> funded
              </span>
            </div>
          </Reveal>
        </div>

        {/* Scrolling slogan marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...SLOGANS, ...SLOGANS].map((s, i) => (
              <span className="marquee-item" key={i}>
                {s}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reward teaser ---------- */}
      <section className="section container reward-teaser">
        <Reveal as="p" className="eyebrow">
          You donate. You get a reward.
        </Reveal>
        <Reveal as="h2" className="reward-teaser-title">
          Every gift builds the armour.
        </Reveal>

        <div className="tier-grid">
          {REWARDS.map((r, i) => (
            <Reveal key={r.id} className="tier-card" delay={i * 70}>
              <div className="tier-visual">
                <Target
                  rings={r.rings}
                  filledCenter={r.filledCenter}
                  size={120}
                  strokeRatio={0.5}
                />
              </div>
              <div className="tier-price">{r.price}</div>
              <h3>{r.name}</h3>
              <p>{r.tagline}</p>
              <Link href={r.href} className="tier-link">
                Learn more →
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="reward-teaser-cta">
          <Link href="/rewards" className="btn btn-dark btn-lg">
            Select a reward
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
