import Image from "next/image";
import { beforeAfter } from "@/content/site";

export function BeforeAfter() {
  return (
    <section className="ba">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">{beforeAfter.eyebrow}</span>
          <h2 className="display">{beforeAfter.title}</h2>
        </div>
        <div className="ba-frame">
          {beforeAfter.steps.map((step, i) => (
            <div className="ba-step" key={step.src}>
              <Image
                src={step.src}
                alt={step.alt}
                fill
                sizes="(max-width: 820px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <span className="ba-num">{i + 1}</span>
              <span className="ba-tag">{step.tag}</span>
            </div>
          ))}
        </div>
        <p className="ba-caption">{beforeAfter.caption}</p>
      </div>
    </section>
  );
}
