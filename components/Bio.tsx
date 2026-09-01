import Image from "next/image";
import { bio } from "@/content/site";

export function Bio() {
  return (
    <section className="bio">
      <div className="wrap bio-grid">
        <div className="arch-frame">
          <Image src={bio.photo.src} alt={bio.photo.alt} fill sizes="(max-width: 820px) 90vw, 40vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="bio-text">
          <h2 className="eyebrow" style={{ margin: "0 0 0.8rem" }}>
            {bio.eyebrow}
          </h2>
          {bio.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="bio-signature">{bio.signature}</p>
        </div>
      </div>
    </section>
  );
}
