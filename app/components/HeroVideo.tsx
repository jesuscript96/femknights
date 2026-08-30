"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient loop for the hero. It plays itself, silently.
 * Under prefers-reduced-motion it stays on the poster frame.
 */
export default function HeroVideo({
  src,
  poster,
  alt,
  portrait = false,
}: {
  src: string;
  poster: string;
  alt: string;
  portrait?: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setStill(mq.matches);
      if (mq.matches) ref.current?.pause();
      else ref.current?.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <figure className={"video-frame" + (portrait ? " is-portrait" : "")}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={!still}
        preload="metadata"
        aria-label={alt}
      />
    </figure>
  );
}
