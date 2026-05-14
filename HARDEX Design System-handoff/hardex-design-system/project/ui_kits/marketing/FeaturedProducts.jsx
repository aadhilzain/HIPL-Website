/* global React, Eyebrow, Icon */

function FeaturedProducts() {
  const products = [
    { code: "HARDEX WP 42", family: "Waterproofing", title: "Elastomeric roof membrane", specs: [["Coverage", "1.2 kg/m²"], ["Elongation", "350%"], ["Cure", "24 hrs"]], gradient: "linear-gradient(140deg, var(--hardex-sky), #1a7ab8)", badge: "BEST SELLER" },
    { code: "HARDEX FH 110", family: "Floor hardener", title: "Non-metallic concrete hardener", specs: [["Coverage", "5 kg/m²"], ["Mohs", "7.0"], ["Set time", "4 hrs"]], gradient: "linear-gradient(140deg, var(--hardex-cement-500), var(--hardex-cement-800))", badge: "" },
    { code: "HARDEX EP 318", family: "Epoxy coating", title: "Self-levelling floor topping", specs: [["Thickness", "2–3 mm"], ["Shore D", "85+"], ["Pot life", "45 min"]], gradient: "linear-gradient(140deg, var(--hardex-lime-500), var(--hardex-green-600))", badge: "NEW · 2026" },
    { code: "HARDEX PC 9", family: "Protective coating", title: "Anti-corrosive marine paint", specs: [["DFT", "120 µm"], ["Salt spray", ">1000 hrs"], ["Touch dry", "2 hrs"]], gradient: "linear-gradient(140deg, var(--hardex-coral), #b03a2a)", badge: "" },
  ];
  return (
    <section id="products" style={{ padding: "96px 0", background: "var(--bg-1)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Eyebrow>Featured products</Eyebrow>
            <h2 style={{ font: "800 48px/1.05 var(--font-display)", letterSpacing: "-0.03em", margin: "16px 0 0", color: "var(--fg-1)" }}>
              Built for the site, <br/>not the showroom.
            </h2>
          </div>
          <a href="#" className="btn btn-secondary btn-sm">Browse all 150+ products <Icon name="chevR" size={14} /></a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {products.map((p) => (
            <div key={p.code} className="surface" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 8, background: p.gradient, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: 999, background: "rgba(255,255,255,.18)" }}></div>
                <div style={{ position: "absolute", top: 28, right: 32, width: 22, height: 22, borderRadius: 999, background: "rgba(255,255,255,.55)" }}></div>
                <div style={{ position: "absolute", top: 16, right: 60, width: 10, height: 10, borderRadius: 999, background: "rgba(255,255,255,.7)" }}></div>
                {p.badge && (
                  <span style={{ position: "absolute", top: 12, left: 12, padding: "5px 9px", borderRadius: 4, background: p.badge.startsWith("NEW") ? "var(--hardex-lime-500)" : "rgba(255,255,255,.95)", color: p.badge.startsWith("NEW") ? "var(--hardex-green-900)" : "var(--hardex-cement-900)", font: "var(--w-semibold) 10px/1 var(--font-mono)", letterSpacing: ".08em" }}>{p.badge}</span>
                )}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ padding: "3px 6px", borderRadius: 4, background: "var(--hardex-cement-100)", font: "var(--w-semibold) 10px/1 var(--font-mono)", color: "var(--fg-1)" }}>{p.code}</span>
                  <span style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)" }}>{p.family}</span>
                </div>
                <div style={{ font: "700 17px/1.25 var(--font-display)", letterSpacing: "-0.015em", color: "var(--fg-1)" }}>{p.title}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 4, padding: "10px 0", borderTop: "1px solid var(--border-1)", borderBottom: "1px solid var(--border-1)" }}>
                {p.specs.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", font: "var(--w-medium) 12px/1 var(--font-mono)" }}>
                    <span style={{ color: "var(--fg-3)" }}>{k}</span>
                    <span style={{ color: "var(--fg-1)", fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ padding: "4px 8px", borderRadius: 999, background: "var(--hardex-green-100)", color: "var(--hardex-green-800)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".06em" }}>LOW VOC ✓</span>
                <a href="#" style={{ textDecoration: "none", font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--hardex-green-700)", display: "inline-flex", gap: 4, alignItems: "center" }}>TDS <Icon name="arrowUR" size={12} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeaturedProducts });
