import Image from "next/image";
import { gallery, socialLinks } from "@/content/site";
import { InstagramIcon } from "./icons";

export function Gallery() {
  return (
    <section className="gallery" id="galerie">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <h2 className="display">Réalisations</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className={`gallery-item${item.big ? " big" : ""}`} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.big ? "(max-width: 820px) 100vw, 50vw" : "(max-width: 820px) 50vw, 25vw"}
                style={{ objectFit: "cover" }}
              />
            </div>
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
    </section>
  );
}
