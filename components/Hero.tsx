"use client";

import { useEffect, useRef } from "react";
import { brand, hero } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motionQuery.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    syncPlayback();
    motionQuery.addEventListener("change", syncPlayback);
    return () => motionQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-head">
        <h1 className="display">{brand.name}</h1>
        <p className="hero-tagline">{brand.tagline}</p>
        <p className="hero-sub">{hero.description}</p>
        <div className="hero-ctas">
          {hero.ctas.map((cta) => (
            <a key={cta.href} className={`hero-cta ${cta.variant}`} href={cta.href}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={hero.poster}
        aria-hidden="true"
      >
        <source src={hero.video} type="video/mp4" />
      </video>
      <div className="hero-scrim" />
      <div className="scroll-cue">
        <span>Découvrir</span>
        <span className="line" />
      </div>
    </section>
  );
}
