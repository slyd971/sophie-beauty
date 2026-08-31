import { stats } from "@/content/site";

export function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className={`num${stat.small ? " small" : ""}`}>{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
