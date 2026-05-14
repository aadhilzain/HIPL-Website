/* global React, Eyebrow, Icon, BubbleCluster */

function Hero() {
  return (
    <section style={{ position: "relative", padding: "84px 0 120px", overflow: "hidden", background: "var(--bg-1)" }}>
      <BubbleCluster scale={1.6} opacity={0.12} style={{ top: 60, right: -120, width: 360, height: 240 }} />
      <BubbleCluster tone="lime" scale={0.7} opacity={0.55} style={{ bottom: 80, left: -40, width: 200, height: 200 }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <Eyebrow hindi="हरित रसायन · 1980 से">Construction chemicals · Est. 1980</Eyebrow>

        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(56px, 9vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "var(--fg-1)", margin: "20px 0 0", textWrap: "balance", maxWidth: 1100 }}>
          Build Harder. <span style={{ color: "var(--hardex-green-500)" }}>Last Longer.</span>
        </h1>

        <p style={{ font: "var(--w-regular) 22px/1.5 var(--font-body)", color: "var(--fg-2)", maxWidth: 640, marginTop: 28, textWrap: "pretty" }}>
          150+ construction chemical formulations engineered for India's toughest conditions. Waterproofing to industrial coatings — manufactured in-house, documented to spec.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
          <a href="#products" className="btn btn-primary" style={{ padding: "16px 26px", fontSize: 15 }}>
            Explore products <Icon name="chevR" size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary" style={{ padding: "16px 26px", fontSize: 15 }}>
            Request a sample
          </a>
        </div>

        {/* Floating stat panel */}
        <div style={{ position: "absolute", right: 28, top: 60, width: 280 }}>
          <div className="surface" style={{ padding: 22, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: 999, background: "var(--hardex-green-100)" }}></div>
            <Eyebrow>In-house since 1980</Eyebrow>
            <div style={{ font: "800 64px/1 var(--font-display)", letterSpacing: "-0.04em", color: "var(--fg-1)", marginTop: 14, position: "relative" }}>
              150<span style={{ color: "var(--hardex-green-500)" }}>+</span>
            </div>
            <div style={{ font: "var(--w-medium) 13px/1.4 var(--font-body)", color: "var(--fg-2)", marginTop: 6 }}>formulations across waterproofing, flooring, repair & protective coatings</div>
            <hr className="divider" style={{ margin: "16px 0" }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "5px 9px", borderRadius: 999, background: "var(--hardex-green-100)", color: "var(--hardex-green-800)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".06em" }}>LOW VOC ✓</span>
              <span style={{ padding: "5px 9px", borderRadius: 999, background: "var(--hardex-cement-100)", color: "var(--fg-1)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".06em" }}>TDS · MSDS</span>
              <span style={{ padding: "5px 9px", borderRadius: 999, background: "var(--hardex-cement-100)", color: "var(--fg-1)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".06em" }}>ISO ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
