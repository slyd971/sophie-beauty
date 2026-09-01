import { method } from "@/content/site";

export function Method() {
  return (
    <section className="method" id="methode">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{method.eyebrow}</span>
          <h2 className="display">{method.title}</h2>
        </div>
        <p className="method-sub">{method.intro}</p>
        <div className="steps">
          {method.steps.map((step, index) => (
            <div className="step" key={step.title}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
