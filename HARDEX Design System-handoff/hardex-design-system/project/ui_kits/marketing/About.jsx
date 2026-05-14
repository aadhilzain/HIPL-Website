/* global React, Eyebrow, Icon, BubbleCluster */

function About() {
  const credentials = [
    { icon: "leaf", label: "Green Chemistry" },
    { icon: "factory", label: "In-house manufacturing" },
    { icon: "flask", label: "TDS + MSDS ready" },
    { icon: "hat", label: "Contractor-proven" },
    { icon: "shield", label: "ISO certified" },
    { icon: "gauge", label: "Custom formulation" },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--hardex-cement-900)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <BubbleCluster scale={2.4} opacity={0.18} style={{ top: -100, right: -180, width: 500, height: 500 }} />

      <div className="wrap" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>
              <span className="dot"></span>About Hardex
            </div>
            <h2 style={{ font: "800 56px/1.05 var(--font-display)", letterSpacing: "-0.03em", margin: "16px 0 0", textWrap: "balance" }}>
              Formulated for <br/><span style={{ color: "var(--hardex-green-400)" }}>real conditions.</span>
            </h2>
            <p style={{ font: "var(--w-regular) 17px/1.65 var(--font-body)", color: "rgba(255,255,255,.78)", marginTop: 22, maxWidth: 480, textWrap: "pretty" }}>
              Hardex India Private Limited is a construction chemical manufacturer built on field experience and green chemistry principles. We make products designed for India's diverse climate and construction demands — no resellers, no compromises.
            </p>
            <p style={{ font: "var(--w-regular) 17px/1.65 var(--font-body)", color: "rgba(255,255,255,.78)", marginTop: 16, maxWidth: 480 }}>
              Our in-house facility gives us full control over quality and consistency. Every product ships with complete documentation.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a href="#contact" className="btn btn-lime" style={{ padding: "14px 22px" }}>Tour the factory <Icon name="chevR" size={14}/></a>
              <a href="#" className="btn" style={{ background: "transparent", border: "1px solid rgba(255,255,255,.3)", color: "#fff", padding: "14px 22px" }}>Read our story</a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 20, background: "rgba(255,255,255,.04)", borderRadius: 18, border: "1px solid rgba(255,255,255,.08)" }}>
            {credentials.map((c) => (
              <div key={c.label} style={{ padding: 18, borderRadius: 12, background: "rgba(255,255,255,.04)", display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--hardex-green-500)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <Icon name={c.icon} size={20} />
                </div>
                <span style={{ font: "var(--w-semibold) 14px/1.2 var(--font-body)" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
