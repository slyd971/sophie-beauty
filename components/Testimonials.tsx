import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="testi">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">Témoignages</span>
          <h2 className="display">Ce qu&apos;en disent les clientes</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((testimonial) => (
            <div className="testi-card" key={testimonial.author + testimonial.quote.slice(0, 10)}>
              <span className="quote-mark">&ldquo;</span>
              <p className="body">{testimonial.quote}</p>
              <div className="testi-foot">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
