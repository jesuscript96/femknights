import Link from "next/link";
import Reveal from "./components/Reveal";
import Target from "./components/Target";
import Article from "./components/Article";
import HeroVideo from "./components/HeroVideo";
import {
  CAMPAIGN,
  MARQUEE_LINE,
  REWARDS,
  VIDEO,
  HOME_INTRO_1,
  HOME_INTRO_2,
  HOME_STORY,
  HOME_EXHIBITION,
  HOME_TRUST,
  HOME_SEAT,
  HOME_OBJECTIONS,
  HOME_PULLQUOTE,
  HOME_KOIK,
  HOME_CLOSE,
} from "./content";

function euros(n: number) {
  return "€" + n.toLocaleString("nl-NL");
}

export default function Home() {
  const pct = Math.min(
    100,
    Math.round((CAMPAIGN.raisedEuros / CAMPAIGN.goalEuros) * 100)
  );

  return (
    <main>
      {/* ---------- 1 · Hero ---------- */}
      <section className="cover">
        <div className="cover-inner container">
          <Reveal as="p" className="cover-kicker">
            {CAMPAIGN.studio}
          </Reveal>
          <Reveal as="h1" className="cover-title">
            {CAMPAIGN.title}
          </Reveal>

          {/* Video */}
          <Reveal className="cover-video" delay={60}>
            <HeroVideo
              src={VIDEO.hero.src}
              poster={VIDEO.hero.poster}
              alt="The dressing room of a female knight"
            />
          </Reveal>

          {/* Intro text 1 */}
          <Reveal className="cover-intro" delay={80}>
            <p className="cover-shout">{MARQUEE_LINE}</p>
            {HOME_INTRO_1.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="cover-actions" delay={140}>
            <Link href="/donate" className="btn btn-primary btn-lg">
              {CAMPAIGN.callToAction}
            </Link>
            <Link href="/story" className="btn btn-ghost btn-lg">
              Read my story
            </Link>
          </Reveal>

          {/* Donation percentage scale */}
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
      </section>

      {/* ---------- 2 · Intro text 2 ---------- */}
      <section className="section container intro-two">
        <Reveal as="p" className="article-statement">
          {HOME_INTRO_2}
        </Reveal>
      </section>

      {/* ---------- 3 · My story ---------- */}
      <section id="story" className="section container home-story">
        <div className="article">
          <Article blocks={HOME_STORY} bare />
        </div>
        <Reveal className="home-more">
          <Link href="/story" className="tier-link">
            Go to my story →
          </Link>
        </Reveal>
      </section>

      <div className="target-divider" aria-hidden="true">
        <div className="target-badge">
          <Target rings={3} size={44} filledCenter strokeRatio={0.55} />
        </div>
      </div>

      {/* ---------- 4 · The exhibition ---------- */}
      <section id="exhibition" className="section container home-story">
        <div className="article">
          <Article blocks={HOME_EXHIBITION} bare />
        </div>
        <Reveal className="home-more">
          <Link href="/exhibition" className="tier-link">
            Go to the exhibition →
          </Link>
        </Reveal>
      </section>

      {/* ---------- 5 · Why trust the hands building this ---------- */}
      <section className="section container">
        <Reveal className="image-quote">
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HOME_TRUST.src} alt={HOME_TRUST.alt} loading="lazy" />
          </figure>
          <div className="image-quote-text">
            <p className="image-quote-quote">{HOME_TRUST.quote}</p>
            <p className="image-quote-body">{HOME_TRUST.body}</p>
          </div>
        </Reveal>
      </section>

      {/* ---------- 6 · The four rooms ---------- */}
      <section id="rewards" className="section container reward-teaser">
        <Reveal as="p" className="eyebrow">
          You donate. You will be rewarded big times.
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
              <Link href={`/rewards/${r.slug}`} className="tier-link">
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

      {/* ---------- 7 · The moving line ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-item" key={i}>
              {MARQUEE_LINE}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ---------- 8 · A seat inside the process ---------- */}
      <section className="section container seat">
        <Reveal as="h2" className="section-title">
          {HOME_SEAT.title}
        </Reveal>
        <div className="seat-grid">
          {HOME_SEAT.items.map((it, i) => (
            <Reveal className="seat-item" key={it} delay={i * 70}>
              <Target rings={i + 1} size={54} filledCenter strokeRatio={0.5} />
              <p>{it}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="article-statement" delay={120}>
          {HOME_SEAT.close}
        </Reveal>
      </section>

      {/* ---------- 9 · What you might be thinking ---------- */}
      <section className="section container objections">
        <Reveal as="h2" className="section-title">
          What you might be thinking
        </Reveal>
        <Reveal as="dl" className="faq">
          {HOME_OBJECTIONS.map((o) => (
            <div className="faq-item" key={o.q}>
              <dt>{o.q}</dt>
              <dd>{o.a}</dd>
            </div>
          ))}
        </Reveal>
        <Reveal as="blockquote" className="article-quote" delay={100}>
          <span>{HOME_PULLQUOTE}</span>
        </Reveal>
      </section>

      {/* ---------- 10 · KOIK Contemporary ---------- */}
      <section className="section container">
        <Reveal className="image-quote is-flipped">
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HOME_KOIK.src} alt={HOME_KOIK.alt} loading="lazy" />
          </figure>
          <div className="image-quote-text">
            <p className="image-quote-quote">{HOME_KOIK.quote}</p>
            <p className="image-quote-body">{HOME_KOIK.body}</p>
            <p className="image-quote-body">{HOME_KOIK.extra}</p>
          </div>
        </Reveal>
      </section>

      {/* ---------- 11 · Close ---------- */}
      <section className="section container home-close">
        <Reveal className="home-close-inner">
          {HOME_CLOSE.lines.map((l) => (
            <p className="home-close-line" key={l}>
              {l}
            </p>
          ))}
          <p className="home-close-statement">{HOME_CLOSE.statement}</p>
          <p className="article-signature">{HOME_CLOSE.signature}</p>
          <div className="step-actions center">
            <Link href="/donate" className="btn btn-primary btn-lg">
              {CAMPAIGN.callToAction}
            </Link>
            <Link href="/where-the-money-goes" className="btn btn-ghost btn-lg">
              Where the money goes
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
