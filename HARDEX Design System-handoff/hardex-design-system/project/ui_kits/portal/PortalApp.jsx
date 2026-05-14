/* global React */
const { useState: useStatePortal } = React;

const PORTAL_ICONS = {
  home: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>,
  orders: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10h8M8 14h5"/></svg>,
  samples: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4v6l5 9a2 2 0 0 1-1.7 3H6.7A2 2 0 0 1 5 18l5-9V3z"/><path d="M8.5 14h7"/></svg>,
  invoices: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>,
  team: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"/><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="8" r="2"/><path d="M21 20v-1a3 3 0 0 0-3-3"/></svg>,
  support: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>,
  bell: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 10H3c0-3 3-3 3-10z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>,
  plus: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  trend: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>,
  x: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
};
function PIcon({ name, size }) { const i = PORTAL_ICONS[name]; return i && (size ? React.cloneElement(i, { width: size, height: size }) : i); }

function PortalApp() {
  const [tab, setTab] = useStatePortal("Dashboard");
  const [sampleOpen, setSampleOpen] = useStatePortal(false);
  return (
    <div data-screen-label="Portal · Dashboard" style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <Sidebar tab={tab} setTab={setTab} />
      <div style={{ display: "flex", flexDirection: "column", background: "var(--bg-1)" }}>
        <TopBar onRequestSample={() => setSampleOpen(true)} />
        <main style={{ padding: "28px 32px", flex: 1 }}>
          <DashboardHeader />
          <DashboardCards />
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20, marginTop: 24 }}>
            <OrdersTable />
            <ActivityFeed />
          </div>
        </main>
      </div>
      {sampleOpen && <SampleRequestModal onClose={() => setSampleOpen(false)} />}
    </div>
  );
}

function Sidebar({ tab, setTab }) {
  const items = [
    { name: "Dashboard", icon: "home" },
    { name: "Orders", icon: "orders", count: 4 },
    { name: "Samples", icon: "samples", count: 2 },
    { name: "Invoices", icon: "invoices" },
    { name: "Team", icon: "team" },
    { name: "Tech Support", icon: "support" },
  ];
  return (
    <aside style={{ background: "var(--hardex-cement-900)", color: "rgba(255,255,255,.85)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ padding: "8px 12px 18px" }}>
        <Wordmark size={22} tone="white" />
      </div>
      <div style={{ padding: "0 8px 14px" }}>
        <div style={{ padding: 10, borderRadius: 10, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
          <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>Dealer</div>
          <div style={{ font: "var(--w-semibold) 13px/1.3 var(--font-body)", color: "#fff", marginTop: 6 }}>Reliable Constructions Pvt. Ltd.</div>
          <div style={{ font: "var(--w-medium) 10px/1 var(--font-mono)", color: "var(--hardex-green-400)", marginTop: 6, letterSpacing: ".04em" }}>● TIER 2 · PUNE</div>
        </div>
      </div>
      {items.map(it => {
        const active = tab === it.name;
        return (
          <button key={it.name} onClick={() => setTab(it.name)} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", textAlign: "left",
            background: active ? "var(--hardex-green-500)" : "transparent",
            color: active ? "#fff" : "rgba(255,255,255,.78)",
            font: (active ? "var(--w-semibold)" : "var(--w-medium)") + " 14px/1 var(--font-body)"
          }}>
            <PIcon name={it.icon} /> <span style={{ flex: 1 }}>{it.name}</span>
            {it.count && <span style={{ padding: "2px 7px", borderRadius: 999, background: active ? "rgba(255,255,255,.22)" : "var(--hardex-green-500)", color: "#fff", font: "var(--w-semibold) 10px/1 var(--font-mono)" }}>{it.count}</span>}
          </button>
        );
      })}
      <div style={{ marginTop: "auto", padding: "12px 12px 4px" }}>
        <div style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,.05)", display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: "var(--hardex-lime-500)", color: "var(--hardex-green-900)", display: "flex", alignItems: "center", justifyContent: "center", font: "var(--w-bold) 13px/1 var(--font-body)" }}>SK</div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div style={{ font: "var(--w-semibold) 12px/1 var(--font-body)", color: "#fff", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>Suresh Kulkarni</div>
            <div style={{ font: "var(--w-medium) 10px/1 var(--font-mono)", color: "rgba(255,255,255,.55)", marginTop: 3 }}>Site Engineer</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ onRequestSample }) {
  return (
    <header style={{ background: "var(--bg-0)", borderBottom: "1px solid var(--border-1)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center", font: "var(--w-medium) 13px/1 var(--font-body)", color: "var(--fg-3)" }}>
        <span>Portal</span><span>/</span><span style={{ color: "var(--fg-1)", fontWeight: 600 }}>Dashboard</span>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button style={{ width: 38, height: 38, borderRadius: 999, border: "1px solid var(--border-1)", background: "var(--bg-0)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-2)", position: "relative" }}>
          <PIcon name="bell" />
          <span style={{ position: "absolute", top: 8, right: 9, width: 8, height: 8, borderRadius: 999, background: "var(--hardex-coral)", border: "2px solid var(--bg-0)" }}></span>
        </button>
        <button onClick={onRequestSample} className="btn btn-primary btn-sm"><PIcon name="plus" /> Request sample</button>
      </div>
    </header>
  );
}

function DashboardHeader() {
  return (
    <div style={{ marginBottom: 28 }}>
      <Eyebrow>Welcome back, Suresh</Eyebrow>
      <h1 style={{ font: "700 36px/1.1 var(--font-display)", letterSpacing: "-0.02em", color: "var(--fg-1)", margin: "12px 0 6px" }}>Q3 FY26 overview</h1>
      <div style={{ font: "var(--w-medium) 14px/1.5 var(--font-body)", color: "var(--fg-2)" }}>Your account stays on net-30 terms. ₹4.2L head room remaining this cycle.</div>
    </div>
  );
}

function DashboardCards() {
  const cards = [
    { label: "Orders · MTD", value: "₹8.4L", trend: "+18%", note: "vs Aug 2026" },
    { label: "Active deliveries", value: "12", trend: "+3", note: "5 dispatched today" },
    { label: "TDS downloads", value: "47", trend: "+22%", note: "WP 42 most popular" },
    { label: "Sample requests", value: "2", trend: "pending", note: "respond within 48 hrs", warn: true },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
      {cards.map(c => (
        <div key={c.label} className="surface" style={{ padding: 22, position: "relative", overflow: "hidden" }}>
          <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)" }}>{c.label}</div>
          <div style={{ font: "800 36px/1 var(--font-display)", color: "var(--fg-1)", letterSpacing: "-0.025em", marginTop: 14 }}>{c.value}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 7px", borderRadius: 999,
              background: c.warn ? "var(--hardex-solar-soft)" : "var(--hardex-green-100)",
              color: c.warn ? "#7a5a00" : "var(--hardex-green-800)",
              font: "var(--w-semibold) 10px/1 var(--font-mono)", letterSpacing: ".04em"
            }}>
              {!c.warn && <PIcon name="trend" size={11} />} {c.trend}
            </span>
            <span style={{ font: "var(--w-medium) 11px/1 var(--font-body)", color: "var(--fg-3)" }}>{c.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OrdersTable() {
  const orders = [
    { id: "HX-2026-1432", date: "12 Oct", product: "HARDEX WP 42", qty: "8 × 20 kg", site: "Hinjewadi Phase 2", status: "Dispatched", color: "var(--hardex-green-500)" },
    { id: "HX-2026-1429", date: "11 Oct", product: "HARDEX EP 318", qty: "12 × 20 kg kit", site: "Chakan Warehouse", status: "In transit", color: "var(--hardex-sky)" },
    { id: "HX-2026-1421", date: "09 Oct", product: "HARDEX FH 110", qty: "40 × 40 kg", site: "Talegaon · MIDC", status: "Delivered", color: "var(--hardex-cement-500)" },
    { id: "HX-2026-1417", date: "08 Oct", product: "HARDEX PC 9", qty: "6 × 20 L kit", site: "JNPT · Marine yard", status: "QC hold", color: "var(--hardex-solar)" },
    { id: "HX-2026-1412", date: "06 Oct", product: "HARDEX AC 12", qty: "1 × 230 kg drum", site: "RMC plant 3", status: "Delivered", color: "var(--hardex-cement-500)" },
  ];
  return (
    <div className="surface" style={{ padding: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px 14px" }}>
        <div>
          <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)" }}>Recent orders</div>
          <div style={{ font: "700 18px/1.2 var(--font-display)", color: "var(--fg-1)", marginTop: 6 }}>Last 30 days</div>
        </div>
        <button className="btn btn-secondary btn-sm">View all</button>
      </div>
      <div style={{ borderTop: "1px solid var(--border-1)", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Order", "Date", "Product", "Qty", "Site", "Status"].map(h => (
                <th key={h} style={{ padding: "10px 22px", textAlign: "left", font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-3)", background: "var(--bg-1)", borderBottom: "1px solid var(--border-1)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td style={tdStyle()}><span style={{ font: "var(--w-semibold) 12px/1 var(--font-mono)", color: "var(--fg-1)" }}>{o.id}</span></td>
                <td style={tdStyle()}><span style={{ font: "var(--w-medium) 13px/1 var(--font-mono)", color: "var(--fg-2)" }}>{o.date}</span></td>
                <td style={tdStyle()}><span style={{ font: "var(--w-semibold) 12px/1 var(--font-mono)", color: "var(--fg-1)" }}>{o.product}</span></td>
                <td style={tdStyle()}><span style={{ font: "var(--w-medium) 13px/1 var(--font-body)", color: "var(--fg-1)" }}>{o.qty}</span></td>
                <td style={tdStyle()}><span style={{ font: "var(--w-medium) 13px/1 var(--font-body)", color: "var(--fg-2)" }}>{o.site}</span></td>
                <td style={tdStyle()}>
                  <span style={{ display: "inline-flex", gap: 6, alignItems: "center", padding: "4px 10px", borderRadius: 999, background: "var(--bg-1)", font: "var(--w-semibold) 11px/1 var(--font-body)", color: "var(--fg-1)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: o.color }}></span>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function tdStyle() { return { padding: "12px 22px", borderBottom: "1px solid var(--border-1)", verticalAlign: "middle" }; }

function ActivityFeed() {
  const items = [
    { time: "10 min ago", dot: "var(--hardex-green-500)", title: "TDS revision · HARDEX WP 42 v3.2", body: "Updated coverage spec and pot life note. Download the new PDF." },
    { time: "2 hrs ago", dot: "var(--hardex-sky)", title: "Sample dispatched · HX-S-0214", body: "EP 318 sample (2 kg) shipped via Bluedart. ETA tomorrow." },
    { time: "Yesterday", dot: "var(--hardex-solar)", title: "QC hold · order HX-2026-1417", body: "Marine batch flagged for adhesion retest. Cleared by EOD." },
    { time: "Yesterday", dot: "var(--hardex-cement-500)", title: "New custom formulation enquiry", body: "Floor topping with anti-static spec. R&D will respond within 48 hrs." },
    { time: "3 days ago", dot: "var(--hardex-lime-500)", title: "Q3 dealer rebate · ₹62,400 credited", body: "Applied to next invoice. View statement." },
  ];
  return (
    <div className="surface" style={{ padding: 22 }}>
      <div style={{ font: "var(--w-semibold) 10px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)" }}>Activity</div>
      <div style={{ font: "700 18px/1.2 var(--font-display)", color: "var(--fg-1)", marginTop: 6, marginBottom: 18 }}>Last week</div>
      <div style={{ display: "grid", gap: 16, position: "relative" }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 12 }}>
            <div style={{ paddingTop: 4, position: "relative" }}>
              <span style={{ display: "block", width: 10, height: 10, borderRadius: 999, background: it.dot, marginLeft: 2 }}></span>
              {i !== items.length - 1 && <span style={{ position: "absolute", top: 16, left: 6.5, bottom: -16, width: 1, background: "var(--border-1)" }}></span>}
            </div>
            <div>
              <div style={{ font: "var(--w-medium) 10px/1 var(--font-mono)", letterSpacing: ".06em", color: "var(--fg-3)", textTransform: "uppercase" }}>{it.time}</div>
              <div style={{ font: "var(--w-semibold) 14px/1.3 var(--font-body)", color: "var(--fg-1)", marginTop: 4 }}>{it.title}</div>
              <div style={{ font: "var(--w-regular) 13px/1.4 var(--font-body)", color: "var(--fg-2)", marginTop: 4 }}>{it.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SampleRequestModal({ onClose }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(20,19,15,.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: 540, maxWidth: "100%", background: "var(--bg-0)", borderRadius: 18, boxShadow: "var(--shadow-xl)", overflow: "hidden" }}>
        <div style={{ padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border-1)" }}>
          <div>
            <Eyebrow>Sample request</Eyebrow>
            <div style={{ font: "700 24px/1.1 var(--font-display)", color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 10 }}>Request a product sample</div>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--fg-2)", padding: 4 }}><PIcon name="x" /></button>
        </div>
        <div style={{ padding: "22px 26px", display: "grid", gap: 16 }}>
          <FormField label="Product code" value="HARDEX WP 42" mono />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <FormField label="Sample size" value="2 kg trial pack" />
            <FormField label="Ship to PIN" value="411057" mono />
          </div>
          <FormField label="Site address" value="Plot 14, Hinjewadi Phase 2, Pune 411057" textarea />
          <div>
            <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-2)", marginBottom: 8 }}>Application surface</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Concrete · cured", "Concrete · new", "Steel", "Old waterproofing", "Brick masonry"].map((opt, i) => (
                <span key={opt} style={{ padding: "8px 14px", borderRadius: 999, border: "1px solid " + (i === 0 ? "var(--hardex-green-500)" : "var(--border-2)"), background: i === 0 ? "var(--hardex-green-500)" : "var(--bg-0)", color: i === 0 ? "#fff" : "var(--fg-1)", font: "var(--w-semibold) 12px/1 var(--font-body)", cursor: "pointer" }}>{opt}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: 14, background: "var(--hardex-green-50)", borderRadius: 10, font: "var(--w-medium) 12px/1.5 var(--font-body)", color: "var(--hardex-green-800)", display: "flex", gap: 10 }}>
            <span style={{ fontSize: 18 }}>ℹ</span>
            <div>Samples ship in 48 hours. TDS + MSDS included. A field technician will follow up within a week.</div>
          </div>
        </div>
        <div style={{ padding: "18px 26px", borderTop: "1px solid var(--border-1)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-1)" }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">Cancel</button>
          <button className="btn btn-primary">Submit request <span>→</span></button>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, value, mono, textarea }) {
  const baseStyle = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--bg-0)", font: (mono ? "var(--w-medium) 14px/1.4 var(--font-mono)" : "var(--w-medium) 14px/1.4 var(--font-body)"), color: "var(--fg-1)", marginTop: 8 };
  return (
    <div>
      <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-2)" }}>{label}</div>
      {textarea ? <textarea defaultValue={value} style={{ ...baseStyle, fontFamily: baseStyle.font, resize: "vertical", minHeight: 70 }} /> : <input defaultValue={value} style={baseStyle} />}
    </div>
  );
}

Object.assign(window, { PortalApp });
