"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { gallery, socialLinks } from "@/content/site";
import { InstagramIcon } from "./icons";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (next: number) => setOpenIndex(((next % gallery.length) + gallery.length) % gallery.length),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <section className="gallery" id="galerie">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <h2 className="display">Réalisations</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <button
              type="button"
              className={`gallery-item${item.big ? " big" : ""}`}
              key={item.src}
              onClick={() => setOpenIndex(i)}
              aria-label={`Agrandir la photo : ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.big ? "(max-width: 820px) 100vw, 50vw" : "(max-width: 820px) 50vw, 25vw"}
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
        <div className="gallery-more">
          <a className="gallery-cta" href={socialLinks.instagram.url} target="_blank" rel="noopener">
            <InstagramIcon />
            Voir plus de réalisations
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo en plein écran"
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Fermer">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              show(openIndex - 1);
            }}
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[openIndex].src}
              alt={gallery[openIndex].alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
            <figcaption>{gallery[openIndex].alt}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              show(openIndex + 1);
            }}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
