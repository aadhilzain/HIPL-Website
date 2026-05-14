/* global React, Eyebrow, Icon */

function SolutionsGrid() {
  const items = [
    { icon: "droplet", code: "WP", title: "Waterproofing Systems", desc: "Complete waterproofing for roofs, terraces, basements, and facades.", color: "var(--hardex-sky)", soft: "var(--hardex-sky-soft)", count: 38 },
    { icon: "gauge", code: "FL", title: "Industrial Flooring", desc: "Heavy-duty epoxy and PU flooring for warehouses & manufacturing.", color: "var(--hardex-green-600)", soft: "var(--hardex-green-100)", count: 42 },
    { icon: "flask", code: "RC", title: "Repair & Rehabilitation", desc: "Structural repair compounds, grouts, and rehabilitation systems.", color: "var(--hardex-solar)", soft: "var(--hardex-solar-soft)", count: 31 },
    { icon: "shield", code: "PC", title: "Protective Coatings", desc: "Anti-corrosive and protective coatings for industrial & marine.", color: "var(--hardex-coral)", soft: "var(--hardex-coral-soft)", count: 29 },
  ];
  return (
    <section id="solutions" style={{ padding: "96px 0", background: "var(--bg-0)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 56 }}>
          <div>
            <Eyebrow>Solutions</Eyebrow>
            <h2 style={{ font: "800 60px/1.05 var(--font-display)", letterSpacing: "-0.03em", margin: "16px 0 0", color: "var(--fg-1)", textWrap: "balance" }}>
              Complete construction <br/>chemical systems.
            </h2>
          </div>
          <p style={{ font: "var(--w-regular) 18px/1.55 var(--font-body)", color: "var(--fg-2)", maxWidth: 480, paddingBottom: 8, textWrap: "pretty" }}>
            From foundation to finish — solutions engineered for India's diverse climate, dealer-supported across 28 states, with TDS and MSDS shipped on every product.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {items.map((it) => (
            <div key={it.code} className="surface" style={{ padding: 32, display: "flex", gap: 24, alignItems: "flex-start", transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: it.soft, color: it.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={it.icon} size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ font: "var(--w-semibold) 11px/1 var(--font-mono)", letterSpacing: ".1em", color: "var(--fg-3)" }}>HARDEX {it.code}</span>
                  <span style={{ font: "var(--w-medium) 11px/1 var(--font-body)", color: "var(--fg-3)" }}>·</span>
                  <span style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", color: "var(--hardex-green-700)", letterSpacing: ".06em" }}>{it.count} FORMULATIONS</span>
                </div>
                <div style={{ font: "700 26px/1.15 var(--font-display)", letterSpacing: "-0.02em", color: "var(--fg-1)" }}>{it.title}</div>
                <div style={{ font: "var(--w-regular) 15px/1.5 var(--font-body)", color: "var(--fg-2)", marginTop: 8 }}>{it.desc}</div>
                <div style={{ marginTop: 14, font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--hardex-green-700)", display: "inline-flex", gap: 6, alignItems: "center" }}>
                  View family <Icon name="chevR" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SolutionsGrid });
