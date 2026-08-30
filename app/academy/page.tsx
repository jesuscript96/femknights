import Link from "next/link";
import Reveal from "../components/Reveal";
import Target from "../components/Target";
import Article from "../components/Article";
import KnightCatalogue from "../components/KnightCatalogue";
import { ACADEMY_INTRO, REWARDS, SEVEN_DOORWAYS } from "../content";

export const metadata = { title: "Knight Academy" };

export default function AcademyPage() {
  return (
    <main>
      <Article blocks={ACADEMY_INTRO} />

      {/* One circle per room — all four, including the Open Field. */}
      <section className="container academy-rooms">
        {REWARDS.map((r, i) => (
          <Reveal className="academy-room" key={r.id} delay={i * 60}>
            <Link href={`/rewards/${r.slug}`}>
              <div className="academy-room-visual">
                <Target
                  rings={r.rings}
                  filledCenter={r.filledCenter}
                  size={180}
                  strokeRatio={0.5}
                />
              </div>
              <span className="tier-price">{r.price}</span>
              <h2>{r.name}</h2>
              <p>{r.tagline}</p>
              <span className="tier-link">Enter this room →</span>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="container academy-doorways">
        <Reveal as="h2" className="section-title">
          The seven doorways of female knighthood
        </Reveal>
        <Reveal as="p" className="article-lead">
          Seven doorways, borrowed from lives that were anything but small, that
          turn out to fit almost anyone&rsquo;s. This is the model the classroom
          is built on.
        </Reveal>
        <ol className="doorways">
          {SEVEN_DOORWAYS.map((d, i) => (
            <Reveal as="li" className="doorway" key={d.name} delay={i * 50}>
              <span className="doorway-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{d.name}</h3>
              <p>{d.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <div className="container">
        <KnightCatalogue lead="I study epic women — real and fictional, past and present — and ask what's underneath the myth. Every teaching, you choose one." />
      </div>

      <div className="container article-cta">
        <Link href="/rewards" className="btn btn-dark btn-lg">
          Choose your room
        </Link>
      </div>
    </main>
  );
}
