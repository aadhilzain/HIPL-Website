/* global React, Wordmark, Icon, Eyebrow */
const { useState: useStateContact } = React;

function Contact() {
  const [inq, setInq] = useStateContact("Request sample");
  const types = ["Product information", "Technical support", "Request sample", "Custom formulation", "Dealer inquiry"];
  return (
    <section id="contact" style={{ padding: "96px 0", background: "var(--bg-0)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80 }}>
          <div>
            <Eyebrow>Contact us</Eyebrow>
            <h2 style={{ font: "800 56px/1.05 var(--font-display)", letterSpacing: "-0.03em", margin: "16px 0 0", color: "var(--fg-1)", textWrap: "balance" }}>
              Let's build something <span style={{ color: "var(--hardex-green-500)" }}>together.</span>
            </h2>
            <p style={{ font: "var(--w-regular) 17px/1.6 var(--font-body)", color: "var(--fg-2)", marginTop: 22, maxWidth: 420 }}>
              Need technical support, product samples, or a custom formulation? Our team is here to help.
            </p>
            <div style={{ marginTop: 36, display: "grid", gap: 20 }}>
              {[
                { icon: "mail", label: "Email", val: "info@hardex.me" },
                { icon: "phone", label: "Phone", val: "+91 96568 66699" },
                { icon: "pin", label: "Location", val: "Pune, Maharashtra, India" },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--hardex-green-100)", color: "var(--hardex-green-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={r.icon} size={20} />
                  </div>
                  <div>
                    <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-3)" }}>{r.label}</div>
                    <div style={{ font: "var(--w-semibold) 16px/1.3 var(--font-body)", color: "var(--fg-1)", marginTop: 4 }}>{r.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface" style={{ padding: 32 }}>
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Field label="Name" placeholder="Suresh Kulkarni" />
                <Field label="Company" placeholder="Reliable Constructions Pvt. Ltd." />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Field label="Email" placeholder="suresh@reliable.in" type="email" />
                <Field label="Phone" placeholder="+91 ••••• •••••" type="tel" />
              </div>
              <div>
                <Label>Inquiry type</Label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                  {types.map((t) => (
                    <button key={t} onClick={() => setInq(t)} style={{
                      padding: "8px 14px", borderRadius: 999, border: "1px solid " + (inq === t ? "var(--hardex-green-500)" : "var(--border-2)"),
                      background: inq === t ? "var(--hardex-green-500)" : "var(--bg-0)",
                      color: inq === t ? "#fff" : "var(--fg-1)",
                      font: "var(--w-semibold) 12px/1 var(--font-body)", cursor: "pointer", transition: "all 140ms"
                    }}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Message</Label>
                <textarea placeholder="Tell us about your project — site location, area, conditions..." rows="4" style={{ width: "100%", padding: 14, borderRadius: 12, border: "1px solid var(--border-2)", background: "var(--bg-0)", font: "var(--w-regular) 14px/1.5 var(--font-body)", color: "var(--fg-1)", resize: "vertical", marginTop: 8, fontFamily: "var(--font-body)" }} />
              </div>
              <button className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15, justifyContent: "center" }}>Send message <Icon name="chevR" size={14} /></button>
              <div style={{ font: "var(--w-regular) 12px/1.4 var(--font-body)", color: "var(--fg-3)", textAlign: "center" }}>
                We respond within 24 hours · Hindi support available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-2)" }}>{children}</div>;
}
function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} placeholder={placeholder} style={{ width: "100%", padding: "12px 14px", marginTop: 8, borderRadius: 12, border: "1px solid var(--border-2)", background: "var(--bg-0)", font: "var(--w-medium) 14px/1.2 var(--font-body)", color: "var(--fg-1)" }} />
    </div>
  );
}

function Footer() {
  const cols = [
    { title: "Company", links: ["About Us", "Solutions", "Products", "Find a Dealer", "Contact"] },
    { title: "Products", links: ["Waterproofing", "Industrial Flooring", "Repair Systems", "Protective Coatings", "TDS / MSDS"] },
    { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Quality Policy"] },
  ];
  return (
    <footer style={{ padding: "64px 0 32px", background: "var(--hardex-cement-900)", color: "rgba(255,255,255,.78)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 60, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div>
            <Wordmark size={36} tone="white" />
            <p style={{ font: "var(--w-regular) 14px/1.6 var(--font-body)", marginTop: 24, maxWidth: 280 }}>
              Manufacturing excellence in construction chemicals since 1980. Pune, Maharashtra, India.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div style={{ font: "var(--w-semibold) 11px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "#fff" }}>{c.title}</div>
              <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                {c.links.map((l) => <a key={l} href="#" style={{ font: "var(--w-medium) 14px/1 var(--font-body)", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28 }}>
          <div style={{ font: "var(--w-medium) 12px/1 var(--font-mono)", letterSpacing: ".05em", color: "rgba(255,255,255,.5)" }}>© 2026 Hardex India Private Limited. All rights reserved.</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ font: "var(--w-semibold) 10px/1 var(--font-mono)", letterSpacing: ".15em", color: "rgba(255,255,255,.5)" }}>EST. 1980</span>
            <span style={{ color: "var(--hardex-green-400)" }}>·</span>
            <span style={{ font: "var(--w-semibold) 10px/1 var(--font-mono)", letterSpacing: ".15em", color: "rgba(255,255,255,.5)" }}>ISO ✓</span>
            <span style={{ color: "var(--hardex-green-400)" }}>·</span>
            <span style={{ font: "var(--w-semibold) 10px/1 var(--font-mono)", letterSpacing: ".15em", color: "rgba(255,255,255,.5)" }}>LOW VOC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
