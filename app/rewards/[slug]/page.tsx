import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import Target from "../../components/Target";
import RewardIntake from "./RewardIntake";
import HeroVideo from "../../components/HeroVideo";
import KnightCatalogue from "../../components/KnightCatalogue";
import { REWARDS, rewardBySlug } from "../../content";

export function generateStaticParams() {
  return REWARDS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reward = rewardBySlug(slug);
  if (!reward) return { title: "Reward" };
  return { title: `${reward.name} — ${reward.price}` };
}

export default async function RewardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reward = rewardBySlug(slug);
  if (!reward) notFound();

  const d = reward.detail;
  const others = REWARDS.filter((r) => r.id !== reward.id);

  return (
    <main className="reward-detail">
      {/* ---------- Hero: your selected reward + intake ---------- */}
      <section className="container reward-hero">
        <Reveal as="p" className="article-kicker">
          Your selected reward
        </Reveal>

        <div className="reward-hero-head">
          <Reveal className="reward-hero-target">
            <Target
              rings={reward.rings}
              filledCenter={reward.filledCenter}
              size={140}
              strokeRatio={0.5}
            />
          </Reveal>
          <div>
            <Reveal as="h1" className="reward-hero-title">
              {reward.name}
            </Reveal>
            <Reveal as="p" className="reward-hero-price" delay={60}>
              {reward.price}
            </Reveal>
            <Reveal as="p" className="reward-hero-thanks" delay={90}>
              {d.thanks}
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <RewardIntake slug={reward.slug} cta={reward.cta} />
        </Reveal>
      </section>

      <article className="article container">
        {/* ---------- Statement ---------- */}
        <Reveal as="h2" className="reward-statement">
          {d.statement}
        </Reveal>
        <Reveal as="p" className="article-lead">
          {d.lead}
        </Reveal>

        <Reveal className="article-figure">
          {d.video ? (
            <HeroVideo
              src={d.video.src}
              poster={d.video.poster}
              portrait={d.video.portrait}
              alt={`${reward.name} — the room`}
            />
          ) : (
            <figure className="media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.image}
                alt={`${reward.name} — the room`}
                loading="lazy"
              />
            </figure>
          )}
        </Reveal>

        {/* ---------- The reframe ---------- */}
        <Reveal as="h2" className="article-h2">
          {d.reframe.title}
        </Reveal>
        {d.reframe.paras.map((p) => (
          <Reveal as="p" className="article-p" key={p}>
            {p}
          </Reveal>
        ))}

        <div className="target-divider" aria-hidden="true">
          <div className="target-badge">
            <Target rings={3} size={44} filledCenter strokeRatio={0.55} />
          </div>
        </div>

        {/* ---------- This is for you if… ---------- */}
        <Reveal as="h2" className="article-h2">
          {d.forYouIf.title}
        </Reveal>
        <Reveal as="ul" className="article-list">
          {d.forYouIf.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </Reveal>

        {/* ---------- The story ---------- */}
        <Reveal as="h2" className="article-h2">
          {d.story.title}
        </Reveal>
        {d.story.quote && (
          <Reveal as="blockquote" className="article-quote">
            <span>{d.story.quote}</span>
          </Reveal>
        )}
        {d.story.paras.map((p) => (
          <Reveal as="p" className="article-p" key={p}>
            {p}
          </Reveal>
        ))}

        {/* ---------- The seven doorways (Class Room only) ---------- */}
        {d.doorways && (
          <>
            <Reveal as="h2" className="article-h2">
              The seven doorways of female knighthood
            </Reveal>
            <ol className="doorways">
              {d.doorways.map((dw, i) => (
                <Reveal as="li" className="doorway" key={dw.name} delay={i * 50}>
                  <span className="doorway-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{dw.name}</h3>
                  <p>{dw.body}</p>
                </Reveal>
              ))}
            </ol>
          </>
        )}

        {/* ---------- The knight catalogue ---------- */}
        {d.doorways && (
          <KnightCatalogue
            limit={8}
            title="The knight catalogue"
            lead="Every teaching, you choose your knight. These are a few of them."
          />
        )}

        {/* ---------- What you walk away with ---------- */}
        {d.walkAway && (
          <>
            <Reveal as="h2" className="article-h2">
              {d.walkAway.title}
            </Reveal>
            {d.walkAway.paras.map((p) => (
              <Reveal as="p" className="article-p" key={p}>
                {p}
              </Reveal>
            ))}
          </>
        )}

        {/* ---------- What's included ---------- */}
        <Reveal as="h2" className="article-h2">
          {d.included.title}
        </Reveal>
        {d.included.intro && (
          <Reveal as="p" className="article-p">
            {d.included.intro}
          </Reveal>
        )}
        <div className="included">
          {d.included.groups.map((g, i) => (
            <Reveal className="included-group" key={g.group} delay={i * 60}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* ---------- How it works ---------- */}
        <Reveal as="h2" className="article-h2">
          How it works
        </Reveal>
        <Reveal as="ol" className="howitworks">
          {d.howItWorks.map((s, i) => (
            <li key={s}>
              <span className="howitworks-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </li>
          ))}
        </Reveal>

        {/* ---------- The investment ---------- */}
        <Reveal className="investment">
          <h2>{d.investment.title}</h2>
          <p className="investment-line">{d.investment.line}</p>
          {d.investment.note && (
            <p className="investment-note">{d.investment.note}</p>
          )}
          <Link
            href={`/rewards/${reward.slug}#top`}
            className="btn btn-primary btn-lg"
          >
            {reward.cta}
          </Link>
        </Reveal>

        {/* ---------- Proof ---------- */}
        <Reveal as="h2" className="article-h2">
          Proof
        </Reveal>
        <Reveal className="proof-pending">
          <p>{d.proof.pending}</p>
        </Reveal>

        {/* ---------- Close ---------- */}
        {d.close.lines.map((l) => (
          <Reveal as="p" className="article-statement" key={l}>
            {l}
          </Reveal>
        ))}
        <Reveal as="p" className="article-signature">
          🖤 Niki
        </Reveal>
      </article>

      {/* ---------- The other rooms ---------- */}
      <section className="container other-rooms">
        <Reveal as="h2" className="section-title">
          The other rooms
        </Reveal>
        <div className="tier-grid">
          {others.map((r, i) => (
            <Reveal key={r.id} className="tier-card" delay={i * 60}>
              <div className="tier-visual">
                <Target
                  rings={r.rings}
                  filledCenter={r.filledCenter}
                  size={96}
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
      </section>
    </main>
  );
}
