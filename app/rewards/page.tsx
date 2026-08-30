import Link from "next/link";
import Reveal from "../components/Reveal";
import Target from "../components/Target";
import { REWARDS, REWARDS_INTRO } from "../content";

export const metadata = { title: "Rewards — The Female Knight" };

export default function RewardsPage() {
  return (
    <main className="container rewards-page">
      <Reveal as="p" className="article-kicker">
        {REWARDS_INTRO.kicker}
      </Reveal>
      <Reveal as="h1" className="article-title">
        {REWARDS_INTRO.title}
      </Reveal>
      <Reveal as="p" className="article-lead">
        {REWARDS_INTRO.lead}
      </Reveal>
      <Reveal as="p" className="article-p">
        {REWARDS_INTRO.body}
      </Reveal>

      <div className="rewards-grid">
        {REWARDS.map((r, i) => (
          <Reveal className="reward-card" key={r.id} delay={i * 70}>
            <div className="reward-card-top">
              <Target
                rings={r.rings}
                filledCenter={r.filledCenter}
                size={100}
                strokeRatio={0.5}
              />
              <span className="reward-card-price">{r.price}</span>
            </div>
            <h2>{r.name}</h2>
            <p className="reward-card-tagline">{r.tagline}</p>
            <p className="reward-card-body">{r.body}</p>
            <ul className="reward-card-perks">
              {r.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="reward-card-actions">
              <Link href={`/rewards/${r.slug}`} className="btn btn-primary">
                {r.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
