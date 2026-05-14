/* global React, Wordmark, Icon */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  const linkStyle = { font: "var(--w-semibold) 14px/1 var(--font-body)", color: "var(--fg-1)", textDecoration: "none", padding: "10px 12px", borderRadius: 999, transition: "background 140ms" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(251,250,246,.78)", backdropFilter: "blur(16px) saturate(140%)", WebkitBackdropFilter: "blur(16px) saturate(140%)", borderBottom: "1px solid var(--border-1)" }}>
      <div className="wrap flex-b" style={{ height: 72 }}>
        <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          <Wordmark size={26} tone="ink" />
        </a>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <a href="#solutions" style={linkStyle}>Solutions</a>
          <a href="#products" style={linkStyle}>Products</a>
          <a href="#" style={linkStyle}>Dealers</a>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Downloads</a>
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ display: "inline-flex", padding: "4px", background: "var(--bg-2)", borderRadius: 999, font: "var(--w-semibold) 11px/1 var(--font-mono)", letterSpacing: ".05em" }}>
            <span style={{ padding: "6px 10px", borderRadius: 999, background: "var(--hardex-cement-900)", color: "#fff" }}>EN</span>
            <span style={{ padding: "6px 10px", borderRadius: 999, color: "var(--fg-2)" }}>हिं</span>
          </span>
          <a href="#contact" className="btn btn-primary btn-sm">Request a sample <span>→</span></a>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
