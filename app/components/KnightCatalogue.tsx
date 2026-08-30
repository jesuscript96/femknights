import Reveal from "./Reveal";
import { KNIGHTS } from "../content";

/**
 * "Every teaching, you choose your knight. I have an amazing knight
 * catalogue." — the briefing. This is the catalogue.
 */
export default function KnightCatalogue({
  limit,
  title = "Choose your knight",
  lead,
}: {
  limit?: number;
  title?: string;
  lead?: string;
}) {
  const knights = limit ? KNIGHTS.slice(0, limit) : KNIGHTS;

  return (
    <section className="catalogue">
      <Reveal as="h2" className="section-title">
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" className="article-lead">
          {lead}
        </Reveal>
      )}

      <ul className="catalogue-grid">
        {knights.map((k, i) => (
          <Reveal as="li" className="knight" key={k.name} delay={(i % 6) * 45}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={k.src} alt={k.name} loading="lazy" />
              <figcaption>{k.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
