import Reveal from "./Reveal";
import Target from "./Target";
import Expandable from "./Expandable";
import type { Block } from "../content";

function renderBlock(b: Block, key: string | number) {
  switch (b.type) {
    case "kicker":
      return (
        <Reveal as="p" className="article-kicker" key={key}>
          {b.text}
        </Reveal>
      );
    case "title":
      return (
        <Reveal as="h1" className="article-title" key={key}>
          {b.text}
        </Reveal>
      );
    case "lead":
      return (
        <Reveal as="p" className="article-lead" key={key}>
          {b.node}
        </Reveal>
      );
    case "p":
      return (
        <Reveal as="p" className="article-p" key={key}>
          {b.node}
        </Reveal>
      );
    case "h2":
      return (
        <Reveal as="h2" className="article-h2" key={key}>
          {b.text}
        </Reveal>
      );
    case "statement":
      return (
        <Reveal as="p" className="article-statement" key={key}>
          {b.text}
        </Reveal>
      );
    case "list":
      return (
        <Reveal as="ul" className="article-list" key={key}>
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </Reveal>
      );
    case "quote":
      return (
        <Reveal as="blockquote" className="article-quote" key={key}>
          <span>{b.text}</span>
          {b.cite && <cite>{b.cite}</cite>}
        </Reveal>
      );
    case "target":
      return (
        <div className="target-divider" key={key} aria-hidden="true">
          <div className="target-badge">
            <Target rings={3} size={44} filledCenter strokeRatio={0.55} />
          </div>
        </div>
      );
    case "image":
      return (
        <Reveal className="article-figure" key={key}>
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt={b.alt} loading="lazy" />
          </figure>
        </Reveal>
      );
    case "images":
      return (
        <Reveal className="image-grid" key={key}>
          {b.items.map((im, j) => (
            <figure className="media" key={j}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={im.src} alt={im.alt} loading="lazy" />
            </figure>
          ))}
        </Reveal>
      );
    case "video":
      return (
        <Reveal className="article-figure" key={key}>
          <figure className="video-frame">
            {b.src ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={b.src} poster={b.poster} controls playsInline />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.poster} alt={b.alt} loading="lazy" />
                <span className="video-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                  </svg>
                </span>
                <span className="video-placeholder-note">Video coming</span>
              </>
            )}
            {b.caption && <figcaption>{b.caption}</figcaption>}
          </figure>
        </Reveal>
      );
    case "imageQuote":
      return (
        <Reveal
          className={"image-quote" + (b.flip ? " is-flipped" : "")}
          key={key}
        >
          <figure className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt={b.alt} loading="lazy" />
          </figure>
          <div className="image-quote-text">
            <p className="image-quote-quote">{b.quote}</p>
            {b.body && <p className="image-quote-body">{b.body}</p>}
          </div>
        </Reveal>
      );
    case "faq":
      return (
        <Reveal as="dl" className="faq" key={key}>
          {b.items.map((it, j) => (
            <div className="faq-item" key={j}>
              <dt>{it.q}</dt>
              <dd>{it.a}</dd>
            </div>
          ))}
        </Reveal>
      );
    case "expandable":
      return (
        <Expandable label={b.label} key={key}>
          {b.blocks.map((inner, j) => renderBlock(inner, `${key}-${j}`))}
        </Expandable>
      );
    case "signature":
      return (
        <Reveal as="p" className="article-signature" key={key}>
          {b.text}
        </Reveal>
      );
    default:
      return null;
  }
}

/**
 * Renders a long-form page from a list of content blocks.
 * `bare` drops the page wrapper so a home section can host the blocks itself.
 */
export default function Article({
  blocks,
  bare = false,
}: {
  blocks: Block[];
  bare?: boolean;
}) {
  const body = blocks.map((b, i) => renderBlock(b, i));
  if (bare) return <>{body}</>;
  return <article className="article container">{body}</article>;
}
