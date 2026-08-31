import { brand, hero } from "@/content/site";

export function Hero() {
  return (
    <header className="hero">
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
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src={hero.video} type="video/mp4" />
      </video>
      <div className="hero-scrim" />
      <div className="scroll-cue">
        <span>Découvrir</span>
        <span className="line" />
      </div>
    </header>
  );
}
