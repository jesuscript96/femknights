import Link from "next/link";
import Reveal from "../components/Reveal";
import Target from "../components/Target";
import Article from "../components/Article";
import { ACADEMY_INTRO, REWARDS } from "../content";

export const metadata = { title: "Knight Academy" };

// The three program tiers (everything above Blanc).
const PROGRAMS = REWARDS.filter((r) => r.id !== "blanc");

export default function AcademyPage() {
  return (
    <main>
      <Article blocks={ACADEMY_INTRO} />

      <section className="container academy-programs">
        {PROGRAMS.map((p, i) => (
          <Reveal className="program-row" key={p.id} delay={i * 60}>
            <div className="program-visual">
              <Target
                rings={p.rings}
                filledCenter={p.filledCenter}
                size={220}
                strokeRatio={0.5}
              />
            </div>
            <div className="program-content">
              <div className="tier-price">{p.price}</div>
              <h2>{p.name}</h2>
              <p>{p.body}</p>
              <Link href={p.href} className="tier-link">
                Explore this teaching →
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="container article-cta">
        <Link href="/rewards" className="btn btn-dark btn-lg">
          Choose your reward
        </Link>
      </div>
    </main>
  );
}
