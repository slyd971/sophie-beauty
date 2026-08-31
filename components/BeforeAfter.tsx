import Image from "next/image";
import { beforeAfter } from "@/content/site";

export function BeforeAfter() {
  return (
    <section className="ba">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">Résultats</span>
          <h2 className="display">Avant / Après</h2>
        </div>
        <div className="ba-frame">
          <div>
            <Image src={beforeAfter.before.src} alt={beforeAfter.before.alt} fill sizes="(max-width: 820px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            <span className="ba-tag">Avant</span>
          </div>
          <div>
            <Image src={beforeAfter.after.src} alt={beforeAfter.after.alt} fill sizes="(max-width: 820px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            <span className="ba-tag">Après</span>
          </div>
          <div className="ba-divider" />
        </div>
        <p className="ba-caption">{beforeAfter.caption}</p>
      </div>
    </section>
  );
}
