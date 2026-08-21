import Reveal from "./Reveal";
import Target from "./Target";
import type { Block } from "../content";

/**
 * Renders a long-form page from a list of content blocks.
 * Used by story / about / exhibition / academy / money pages.
 */
export default function Article({ blocks }: { blocks: Block[] }) {
  return (
    <article className="article container">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "kicker":
            return (
              <Reveal as="p" className="article-kicker" key={i}>
                {b.text}
              </Reveal>
            );
          case "title":
            return (
              <Reveal as="h1" className="article-title" key={i}>
                {b.text}
              </Reveal>
            );
          case "lead":
            return (
              <Reveal as="p" className="article-lead" key={i}>
                {b.node}
              </Reveal>
            );
          case "p":
            return (
              <Reveal as="p" className="article-p" key={i}>
                {b.node}
              </Reveal>
            );
          case "h2":
            return (
              <Reveal as="h2" className="article-h2" key={i}>
                {b.text}
              </Reveal>
            );
          case "list":
            return (
              <Reveal as="ul" className="article-list" key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </Reveal>
            );
          case "quote":
            return (
              <Reveal as="blockquote" className="article-quote" key={i}>
                <span>{b.text}</span>
                {b.cite && <cite>{b.cite}</cite>}
              </Reveal>
            );
          case "target":
            return (
              <div className="target-divider" key={i} aria-hidden="true">
                <div className="target-badge">
                  <Target rings={3} size={44} filledCenter strokeRatio={0.55} />
                </div>
              </div>
            );
          case "image":
            return (
              <Reveal className="article-figure" key={i}>
                <figure className="media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </figure>
              </Reveal>
            );
          case "images":
            return (
              <Reveal className="image-grid" key={i}>
                {b.items.map((im, j) => (
                  <figure className="media" key={j}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={im.src} alt={im.alt} loading="lazy" />
                  </figure>
                ))}
              </Reveal>
            );
          case "signature":
            return (
              <Reveal as="p" className="article-signature" key={i}>
                {b.text}
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
