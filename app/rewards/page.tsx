import Link from "next/link";
import Reveal from "../components/Reveal";
import Target from "../components/Target";
import { REWARDS } from "../content";

export const metadata = { title: "Select a reward" };

export default function RewardsPage() {
  return (
    <main className="container rewards-page">
      <Reveal as="p" className="article-kicker">
        Select reward
      </Reveal>
      <Reveal as="h1" className="article-title">
        You donate. You get a reward.
      </Reveal>
      <Reveal as="p" className="article-lead">
        The rewards are linked to a price range. Every gift builds the armour —
        the size doesn&rsquo;t change what it means. Pick your tier, then step
        into the room.
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
              <Link href={`/donate?tier=${r.id}`} className="btn btn-primary">
                Select this reward
              </Link>
              <Link href={r.href} className="tier-link">
                Details →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
