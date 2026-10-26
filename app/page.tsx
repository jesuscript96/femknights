import Link from "next/link";
import Reveal from "./components/Reveal";
import Target from "./components/Target";
import Article from "./components/Article";
import HeroVideo from "./components/HeroVideo";
import {
  CAMPAIGN,
  REWARDS,
  VIDEO,
  HOME_TOPLINE,
  HOME_SHOUT,
  HOME_INTRO_1,
  HOME_ACTIONS,
  HOME_SCALE_LINE,
  HOME_INTRO_2,
  HOME_STORY,
  HOME_EXHIBITION,
  HOME_TRUST,
  HOME_DONATE,
  MARQUEE_ITEMS,
  HOME_SEAT,
  HOME_LANDSCAPE,
  HOME_OBJECTIONS_TITLE,
  HOME_OBJECTIONS,
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
        <div className="cover-inner container editorial">
          <Reveal as="p" className="cover-kicker">
            {HOME_TOPLINE}
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
            <p className="cover-shout">{HOME_SHOUT}</p>
            {HOME_INTRO_1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="cover-actions" delay={140}>
            <Link href={HOME_ACTIONS.primary.href} className="btn btn-primary btn-lg">
              {HOME_ACTIONS.primary.label}
            </Link>
            <Link href={HOME_ACTIONS.secondary.href} className="btn btn-ghost btn-lg">
              {HOME_ACTIONS.secondary.label}
            </Link>
          </Reveal>

          {/* Donation scale — on the same column as the intro text */}
          <Reveal className="cover-progress" delay={200}>
            <p className="progress-line">{HOME_SCALE_LINE}</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-stats">
              <span>
                <strong>{euros(CAMPAIGN.raisedEuros)}</strong> raised of{" "}
                {euros(CAMPAIGN.goalEuros)}
              </span>
              <span>
                <strong>{CAMPAIGN.backers}</strong> fellow knights
              </span>
              <span>
                <strong>{pct}%</strong> funded
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2 · Intro text 2 (centred, bold) ---------- */}
      <section className="section container intro-two tight-bottom">
        <Reveal className="callout">
          <h2 className="callout-title">{HOME_INTRO_2.title}</h2>
          <div className="callout-copy">
            {HOME_INTRO_2.paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- 3 · My story ---------- */}
      <section
        id="story"
        className="section container home-story editorial tight-top tight-bottom"
      >
        <div className="article">
          <Article blocks={HOME_STORY} bare />
        </div>
      </section>

      {/* ---------- 4 · The exhibition ---------- */}
      <section
        id="exhibition"
        className="section container home-story editorial tight-top tight-bottom"
      >
        <div className="article">
          <Article blocks={HOME_EXHIBITION} bare />
        </div>
      </section>

      {/* ---------- 5 · Why trust the hands building this ---------- */}
      <section className="section container tight-top tight-bottom">
        <Reveal className="image-quote">
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HOME_TRUST.src} alt={HOME_TRUST.alt} loading="lazy" />
          </figure>
          <div className="image-quote-text">
            <p className="image-quote-quote">{HOME_TRUST.quote}</p>
            {HOME_TRUST.body.map((p) => (
              <p className="image-quote-body" key={p}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- 6 · Donation: title, rooms, button ---------- */}
      <section id="rewards" className="section container reward-teaser tight-top">
        <Reveal className="callout">
          <h2 className="callout-title">{HOME_DONATE.title}</h2>
          <div className="callout-copy">
            <p>{HOME_DONATE.sub}</p>
          </div>
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

        <Reveal as="p" className="reward-teaser-note">
          {HOME_DONATE.afterTiers}
        </Reveal>

        <Reveal className="reward-teaser-cta">
          <Link href={HOME_DONATE.button.href} className="btn btn-dark btn-lg">
            {HOME_DONATE.button.label}
          </Link>
        </Reveal>
      </section>

      {/* ---------- 7 · The moving bar ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 6 }).flatMap((_, n) =>
            MARQUEE_ITEMS.map((item, i) => (
              <span className="marquee-item" key={`${n}-${i}`}>
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ---------- 8 · A seat inside the process ---------- */}
      <section className="section container seat">
        <div className="seat-layout">
          <div className="seat-text">
            <Reveal as="h2" className="section-title">
              {HOME_SEAT.title}
            </Reveal>
            <ul className="seat-list">
              {HOME_SEAT.items.map((it, i) => (
                <Reveal as="li" className="seat-item" key={it.lead} delay={i * 70}>
                  <Target rings={i + 1} size={44} filledCenter strokeRatio={0.5} />
                  <p>
                    <strong>{it.lead}</strong> {it.body}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Reveal as="p" className="seat-close" delay={120}>
              {HOME_SEAT.close}
            </Reveal>
          </div>
          <Reveal className="seat-media" delay={120}>
            <figure className="media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HOME_SEAT.src} alt={HOME_SEAT.alt} loading="lazy" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- 9 · Landscape picture (once Niki sends it) ---------- */}
      {HOME_LANDSCAPE.src && (
        <section className="container home-landscape">
          <Reveal>
            <figure className="media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HOME_LANDSCAPE.src} alt={HOME_LANDSCAPE.alt} loading="lazy" />
            </figure>
          </Reveal>
        </section>
      )}

      {/* ---------- 10 · You might be wondering ---------- */}
      <section className="section container objections">
        <Reveal as="h2" className="section-title">
          {HOME_OBJECTIONS_TITLE}
        </Reveal>
        <Reveal as="dl" className="faq faq-2col">
          {HOME_OBJECTIONS.map((o) => (
            <div className="faq-item" key={o.q}>
              <dt>{o.q}</dt>
              <dd>{o.a}</dd>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ---------- 11 · KOIK Contemporary ---------- */}
      <section className="section container">
        <Reveal className="image-quote is-flipped">
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HOME_KOIK.src} alt={HOME_KOIK.alt} loading="lazy" />
          </figure>
          <div className="image-quote-text">
            <p className="image-quote-quote">{HOME_KOIK.quote}</p>
            {HOME_KOIK.body.map((p) => (
              <p className="image-quote-body" key={p}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- 12 · Close ---------- */}
      <section className="section container home-close">
        <Reveal className="home-close-inner">
          <h2 className="home-close-title">{HOME_CLOSE.title}</h2>
          {HOME_CLOSE.lines.map((l) => (
            <p className="home-close-line" key={l}>
              {l}
            </p>
          ))}
          <p className="home-close-statement">{HOME_CLOSE.statement}</p>
          <p className="article-signature">{HOME_CLOSE.signature}</p>
          <div className="step-actions center">
            <Link href={HOME_CLOSE.primary.href} className="btn btn-primary btn-lg">
              {HOME_CLOSE.primary.label}
            </Link>
            <Link href={HOME_CLOSE.secondary.href} className="btn btn-ghost btn-lg">
              {HOME_CLOSE.secondary.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
