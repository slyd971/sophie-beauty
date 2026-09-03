"use client";

import { useEffect, useRef, useState } from "react";
import { brand, hero } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React ne reflète pas toujours l'attribut `muted` dans le DOM au premier
    // rendu ; iOS/Safari bloque alors l'autoplay. On le force impérativement.
    video.muted = true;
    video.setAttribute("muted", "");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return; // on garde l'image fixe

    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      video.play().catch(() => {});
    };

    // Plusieurs tentatives : au montage, dès que la vidéo est prête, et au
    // premier geste de l'utilisateur (certains iPhone bloquent l'autoplay
    // tant qu'il n'y a pas eu d'interaction — mode éco, réglages data…).
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const onInteract = () => tryPlay();
    const opts = { once: true, passive: true } as const;
    window.addEventListener("touchstart", onInteract, opts);
    window.addEventListener("pointerdown", onInteract, opts);
    window.addEventListener("scroll", onInteract, opts);

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
    };
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
      {/* Image fixe toujours affichée : si l'autoplay est bloqué, le visiteur
          voit cette photo (pas le bouton play natif d'iOS sur une vidéo figée). */}
      <img className="hero-poster" src={hero.poster} alt="" aria-hidden="true" />
      <video
        ref={videoRef}
        className="hero-video"
        data-playing={playing ? "true" : "false"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
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
