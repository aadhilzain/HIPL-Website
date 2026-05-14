/* global React */
const { useState: useStateCatalog } = React;

const CATALOG_ICONS = {
  search: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  filter: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  download: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12m0 0-4-4m4 4 4-4"/><path d="M4 19h16"/></svg>,
  x: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  chev: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>,
  check: <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m4 12 5 5L20 6"/></svg>,
  arrowUR: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>,
};

function CIcon({ name, size }) {
  const i = CATALOG_ICONS[name];
  if (!i) return null;
  if (size) return React.cloneElement(i, { width: size, height: size });
  return i;
}

/* Product catalog data — representative, not exhaustive */
const PRODUCTS = [
  { code: "HARDEX WP 42", family: "Waterproofing", form: "Liquid · 2K", title: "Elastomeric roof membrane", desc: "Acrylic-modified bituminous waterproofing for roofs and terraces.", realTalk: "Paint it on your roof. When the concrete cracks underneath, it stretches — water can't get through.", specs: { Coverage: "1.2 kg/m²", Elongation: "350%", Cure: "24 hrs", VOC: "<50 g/L", Standard: "IS 2645", Pack: "20 kg drum" }, tags: ["Low VOC", "UV stable"], color: "var(--hardex-sky)", soft: "var(--hardex-sky-soft)", best: true },
  { code: "HARDEX WP 18", family: "Waterproofing", form: "Powder · 2K", title: "Crystalline waterproofing slurry", desc: "Cementitious crystalline waterproofing for basements and water tanks.", realTalk: "Mix with water, brush onto basement walls. The cement keeps growing crystals that block water — even years later.", specs: { Coverage: "1.5 kg/m²", "Crack bridge": "0.4mm", Cure: "7 days", VOC: "0 g/L", Standard: "IS 2645", Pack: "25 kg bag" }, tags: ["Potable", "Negative side"], color: "var(--hardex-sky)", soft: "var(--hardex-sky-soft)" },
  { code: "HARDEX FH 110", family: "Floor hardener", form: "Powder", title: "Non-metallic concrete hardener", desc: "Quartz-based dry-shake floor hardener for industrial floors.", realTalk: "Sprinkle on fresh concrete before it sets. The floor cures up to 3× harder — forklifts won't scratch it.", specs: { Coverage: "5 kg/m²", Mohs: "7.0", "Set time": "4 hrs", VOC: "0 g/L", Standard: "ASTM C779", Pack: "40 kg bag" }, tags: ["Wear resistant"], color: "var(--hardex-cement-700)", soft: "var(--hardex-cement-100)" },
  { code: "HARDEX EP 318", family: "Epoxy", form: "Liquid · 2K", title: "Self-levelling floor topping", desc: "100% solids self-levelling epoxy floor for warehouses.", realTalk: "Pour it on the floor — it spreads itself flat. Cures glossy and tough. Chemical spills wipe right off.", specs: { Thickness: "2–3 mm", "Shore D": "85+", "Pot life": "45 min", VOC: "<50 g/L", Standard: "ASTM D543", Pack: "20 kg kit" }, tags: ["Chemical resistant", "Seamless"], color: "var(--hardex-green-600)", soft: "var(--hardex-green-100)", isNew: true },
  { code: "HARDEX EP 204", family: "Epoxy", form: "Liquid · 2K", title: "Epoxy primer for concrete", desc: "Solvent-free penetrating primer for concrete substrates.", realTalk: "Brush on bare concrete before any epoxy floor. It grips the dust so the topcoat actually sticks.", specs: { Coverage: "200 g/m²", "Pot life": "60 min", Cure: "16 hrs", VOC: "<30 g/L", Standard: "IS 9197", Pack: "5 kg kit" }, tags: ["Solvent-free"], color: "var(--hardex-green-600)", soft: "var(--hardex-green-100)" },
  { code: "HARDEX RC 7", family: "Repair", form: "Powder · 1K", title: "Polymer-modified repair mortar", desc: "Single-component shrinkage-compensated repair mortar.", realTalk: "Fixes broken concrete. Just add water, trowel it on. The patch ends up stronger than the original concrete.", specs: { Compressive: "50 N/mm²", Bond: "≥1.5 N/mm²", Cure: "28 days", VOC: "0 g/L", Standard: "EN 1504-3", Pack: "30 kg bag" }, tags: ["Structural", "R4 class"], color: "var(--hardex-solar)", soft: "var(--hardex-solar-soft)" },
  { code: "HARDEX PC 9", family: "Protective coating", form: "Liquid · 2K", title: "Anti-corrosive marine paint", desc: "PU-based anti-corrosive coating for marine and industrial steel.", realTalk: "Paint over steel. Salt water, monsoon rain, sun — it shrugs them off for years and stays glossy.", specs: { DFT: "120 µm", "Salt spray": ">1000 hrs", "Touch dry": "2 hrs", VOC: "<150 g/L", Standard: "ASTM B117", Pack: "20 L kit" }, tags: ["Marine", "Anti-corrosive"], color: "var(--hardex-coral)", soft: "var(--hardex-coral-soft)" },
  { code: "HARDEX AC 12", family: "Admixture", form: "Liquid", title: "Superplasticizer (PCE)", desc: "Polycarboxylate ether superplasticizer for high-strength concrete.", realTalk: "Add a small dose to your concrete mix. You'll need much less water — and the final concrete comes out way stronger.", specs: { Dosage: "0.8–1.5%", "Water red.": "30%", Density: "1.08 g/cc", VOC: "0 g/L", Standard: "IS 9103", Pack: "230 kg drum" }, tags: ["Chloride-free"], color: "var(--hardex-cement-700)", soft: "var(--hardex-cement-100)" },
];

const FAMILIES = ["All", "Waterproofing", "Floor hardener", "Epoxy", "Repair", "Protective coating", "Admixture"];

function CatalogApp() {
  const [family, setFamily] = useStateCatalog("All");
  const [query, setQuery] = useStateCatalog("");
  const [open, setOpen] = useStateCatalog(PRODUCTS[3]);
  const filtered = PRODUCTS.filter(p => (family === "All" || p.family === family) && (query === "" || (p.title + p.code + p.desc).toLowerCase().includes(query.toLowerCase())));
  return (
    <div data-screen-label="Catalog · Browse">
      <CatalogHeader query={query} setQuery={setQuery} />
      <div className="wrap-wide" style={{ display: "grid", gridTemplateColumns: "240px 1fr 380px", gap: 28, padding: "28px 32px 60px" }}>
        <FilterRail family={family} setFamily={setFamily} />
        <ProductGrid products={filtered} onOpen={setOpen} openCode={open?.code} />
        <DatasheetPanel product={open} onClose={() => setOpen(null)} />
      </div>
    </div>
  );
}

function CatalogHeader({ query, setQuery }) {
  return (
    <header style={{ background: "var(--bg-0)", borderBottom: "1px solid var(--border-1)", position: "sticky", top: 0, zIndex: 10 }}>
      <div className="wrap-wide flex-b" style={{ height: 72, padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#" style={{ textDecoration: "none" }}><Wordmark size={22} tone="ink" /></a>
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ padding: "8px 14px", borderRadius: 999, background: "var(--bg-2)", font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--fg-1)" }}>Products</span>
            <a style={{ padding: "8px 14px", borderRadius: 999, font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--fg-2)", textDecoration: "none" }}>Solutions</a>
            <a style={{ padding: "8px 14px", borderRadius: 999, font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--fg-2)", textDecoration: "none" }}>Downloads</a>
            <a style={{ padding: "8px 14px", borderRadius: 999, font: "var(--w-semibold) 13px/1 var(--font-body)", color: "var(--fg-2)", textDecoration: "none" }}>Dealers</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, maxWidth: 480, marginLeft: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "var(--bg-1)", border: "1px solid var(--border-1)", borderRadius: 999, flex: 1 }}>
            <CIcon name="search" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name, code, or use case…" style={{ flex: 1, border: "none", background: "transparent", outline: "none", font: "var(--w-medium) 14px/1 var(--font-body)", color: "var(--fg-1)" }} />
            <span style={{ font: "var(--w-medium) 11px/1 var(--font-mono)", padding: "4px 6px", background: "var(--bg-2)", borderRadius: 4, color: "var(--fg-3)" }}>⌘K</span>
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Request a sample</button>
      </div>
    </header>
  );
}

function FilterRail({ family, setFamily }) {
  return (
    <aside>
      <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 14 }}>Filter · Family</div>
      <div style={{ display: "grid", gap: 4 }}>
        {FAMILIES.map(f => (
          <button key={f} onClick={() => setFamily(f)} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10,
            border: "none", textAlign: "left", cursor: "pointer", transition: "background 140ms",
            background: family === f ? "var(--hardex-green-500)" : "transparent",
            color: family === f ? "#fff" : "var(--fg-1)",
            font: (family === f ? "var(--w-semibold)" : "var(--w-medium)") + " 14px/1 var(--font-body)"
          }}>
            <span>{f}</span>
            <span style={{ font: "var(--w-medium) 11px/1 var(--font-mono)", opacity: 0.7 }}>{f === "All" ? PRODUCTS.length : PRODUCTS.filter(p => p.family === f).length}</span>
          </button>
        ))}
      </div>
      <hr className="divider" style={{ margin: "24px 0" }} />
      <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 14 }}>Filter · Tags</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {["Low VOC", "Solvent-free", "Potable", "Marine", "UV stable", "Chemical resistant", "Structural"].map(t => (
          <span key={t} style={{ padding: "6px 10px", borderRadius: 999, background: "var(--bg-2)", font: "var(--w-medium) 12px/1 var(--font-body)", color: "var(--fg-2)", cursor: "pointer" }}>{t}</span>
        ))}
      </div>
      <hr className="divider" style={{ margin: "24px 0" }} />
      <div style={{ padding: 16, background: "var(--hardex-green-50)", borderRadius: 12, border: "1px solid var(--hardex-green-200)" }}>
        <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--hardex-green-800)" }}>Custom formulation</div>
        <div style={{ font: "var(--w-semibold) 14px/1.3 var(--font-display)", color: "var(--hardex-green-900)", marginTop: 8 }}>Don't see what you need?</div>
        <div style={{ font: "var(--w-regular) 12px/1.5 var(--font-body)", color: "var(--hardex-green-800)", marginTop: 6 }}>Our R&D team can formulate to spec. Min. order applies.</div>
        <button style={{ marginTop: 10, padding: "8px 12px", borderRadius: 999, background: "var(--hardex-green-700)", color: "#fff", border: "none", font: "var(--w-semibold) 12px/1 var(--font-body)", cursor: "pointer" }}>Talk to R&D <CIcon name="chev" /></button>
      </div>
    </aside>
  );
}

function ProductGrid({ products, onOpen, openCode }) {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <h2 style={{ font: "700 24px/1.1 var(--font-display)", letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0 }}>
          {products.length} {products.length === 1 ? "product" : "products"}
        </h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center", font: "var(--w-medium) 12px/1 var(--font-body)", color: "var(--fg-2)" }}>
          Sort by <select style={{ padding: "6px 8px", borderRadius: 8, border: "1px solid var(--border-1)", background: "var(--bg-0)", font: "var(--w-semibold) 12px/1 var(--font-body)", color: "var(--fg-1)" }}><option>Most popular</option><option>Recently added</option><option>Code · A–Z</option></select>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {products.map(p => (
          <div key={p.code} onClick={() => onOpen(p)} style={{
            padding: 18, background: "var(--bg-0)", borderRadius: 12, border: "1px solid " + (p.code === openCode ? "var(--hardex-green-500)" : "var(--border-1)"),
            cursor: "pointer", transition: "all 140ms", boxShadow: p.code === openCode ? "var(--shadow-md)" : "none"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: p.soft, color: p.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 4, background: "currentColor" }}></div>
                </div>
                <div>
                  <div style={{ font: "var(--w-semibold) 11px/1 var(--font-mono)", color: "var(--fg-1)" }}>{p.code}</div>
                  <div style={{ font: "var(--w-medium) 10px/1.2 var(--font-body)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-3)", marginTop: 4 }}>{p.family} · {p.form}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {p.best && <span style={{ padding: "3px 6px", borderRadius: 4, background: "var(--hardex-cement-900)", color: "#fff", font: "var(--w-semibold) 9px/1 var(--font-mono)", letterSpacing: ".06em" }}>BEST</span>}
                {p.isNew && <span style={{ padding: "3px 6px", borderRadius: 4, background: "var(--hardex-lime-500)", color: "var(--hardex-green-900)", font: "var(--w-semibold) 9px/1 var(--font-mono)", letterSpacing: ".06em" }}>NEW</span>}
              </div>
            </div>
            <div style={{ font: "700 16px/1.25 var(--font-display)", letterSpacing: "-0.015em", color: "var(--fg-1)", marginTop: 14 }}>{p.title}</div>
            <div style={{ font: "var(--w-regular) 13px/1.5 var(--font-body)", color: "var(--fg-2)", marginTop: 6 }}>{p.desc}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {p.tags.map(t => <span key={t} style={{ padding: "4px 8px", borderRadius: 999, background: "var(--hardex-green-100)", color: "var(--hardex-green-800)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".04em" }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function DatasheetPanel({ product, onClose }) {
  if (!product) return (
    <aside style={{ position: "sticky", top: 90, alignSelf: "start", padding: 20, background: "var(--bg-0)", borderRadius: 12, border: "1px solid var(--border-1)" }}>
      <div style={{ font: "var(--w-medium) 13px/1.5 var(--font-body)", color: "var(--fg-3)", textAlign: "center", padding: "60px 12px" }}>Click any product to see its datasheet.</div>
    </aside>
  );
  return (
    <aside style={{ position: "sticky", top: 90, alignSelf: "start", background: "var(--bg-0)", borderRadius: 12, border: "1px solid var(--border-1)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ padding: "18px 20px", background: product.soft, borderBottom: "1px solid var(--border-1)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".12em", textTransform: "uppercase", color: product.color }}>Technical Data Sheet</div>
          <div style={{ font: "var(--w-semibold) 13px/1 var(--font-mono)", color: "var(--fg-1)", marginTop: 8 }}>{product.code}</div>
        </div>
        <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", padding: 6, color: "var(--fg-2)" }}><CIcon name="x" /></button>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <div style={{ font: "700 20px/1.2 var(--font-display)", color: "var(--fg-1)", letterSpacing: "-0.015em" }}>{product.title}</div>
        <div style={{ font: "var(--w-regular) 13px/1.5 var(--font-body)", color: "var(--fg-2)", marginTop: 8 }}>{product.desc}</div>

        {product.realTalk && (
          <div style={{ marginTop: 16, padding: "16px 16px 16px 16px", background: "var(--hardex-green-900)", borderRadius: 10, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -18, right: -18, width: 60, height: 60, borderRadius: 999, background: "var(--hardex-green-500)", opacity: 0.5 }}></div>
            <div style={{ position: "absolute", top: 14, right: 38, width: 14, height: 14, borderRadius: 999, background: "var(--hardex-lime-500)", opacity: 0.9 }}></div>
            <div style={{ position: "absolute", top: 4, right: 56, width: 6, height: 6, borderRadius: 999, background: "var(--hardex-green-300)", opacity: 0.8 }}></div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "3px 9px 3px 7px", borderRadius: 999, background: "var(--hardex-lime-500)", marginBottom: 12 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 14, height: 14, borderRadius: 999, background: "var(--hardex-green-900)", color: "var(--hardex-lime-500)", font: "var(--w-bold) 9px/1 var(--font-mono)" }}>!</span>
                <span style={{ font: "var(--w-bold) 9px/1 var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--hardex-green-900)" }}>Real talk</span>
              </div>
              <div style={{ font: "var(--w-medium) 14px/1.5 var(--font-body)", color: "#fff", textWrap: "pretty", maxWidth: "92%" }}>{product.realTalk}</div>
            </div>
          </div>
        )}

        <div style={{ marginTop: 18, padding: "12px 0", borderTop: "1px solid var(--border-1)", borderBottom: "1px solid var(--border-1)" }}>
          {Object.entries(product.specs).map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", font: "var(--w-medium) 13px/1.2 var(--font-mono)" }}>
              <span style={{ color: "var(--fg-3)" }}>{k}</span>
              <span style={{ color: "var(--fg-1)", fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
          {product.tags.map(t => <span key={t} style={{ padding: "5px 10px", borderRadius: 999, background: "var(--hardex-green-100)", color: "var(--hardex-green-800)", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".06em" }}>{t}</span>)}
        </div>

        <div style={{ display: "grid", gap: 8, marginTop: 18 }}>
          <button className="btn btn-primary" style={{ justifyContent: "center", padding: "12px 16px" }}>Request sample <CIcon name="chev" size={14}/></button>
          <button className="btn btn-secondary" style={{ justifyContent: "center", padding: "12px 16px" }}><CIcon name="download" /> Download TDS · PDF</button>
          <button className="btn btn-secondary" style={{ justifyContent: "center", padding: "12px 16px" }}><CIcon name="download" /> Download MSDS · PDF</button>
        </div>

        <div style={{ marginTop: 18, padding: 12, background: "var(--bg-1)", borderRadius: 8, font: "var(--w-medium) 11px/1.4 var(--font-mono)", color: "var(--fg-3)", letterSpacing: ".02em" }}>
          ⚑ Values are typical, not guaranteed. Site conditions apply.<br/>Last revised: 14 Oct 2026 · v3.2
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { CatalogApp });
