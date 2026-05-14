/* global React */
const { useState, useEffect, useRef } = React;

/* ===================================================================
   HARDEX — shared UI primitives (used across marketing UI kit)
   =================================================================== */

/* --- Brand wordmark -------------------------------------------------- */
function Wordmark({ size = 28, tone = "white" }) {
  // tone: "white" | "ink" | "green"
  const color = tone === "white" ? "#fff" : tone === "ink" ? "var(--hardex-cement-900)" : "var(--hardex-green-700)";
  const tagColor = tone === "white" ? "rgba(255,255,255,.85)" : tone === "ink" ? "var(--fg-2)" : "var(--hardex-green-700)";
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: Math.max(2, size * 0.06), alignItems: "stretch" }}>
      <span className="wordmark" style={{ fontSize: size, color }}>
        hardex
        <span className="x-wrap" style={{ marginLeft: -size * 0.04 }}>
          <span className="b" style={{ width: size * 0.22, height: size * 0.22, top: -size * 0.18, right: size * -0.05 }}></span>
          <span className="b" style={{ width: size * 0.13, height: size * 0.13, top: -size * 0.04, right: size * -0.28, opacity: 0.9 }}></span>
          <span className="b" style={{ width: size * 0.08, height: size * 0.08, top: size * 0.13, right: size * -0.42, opacity: 0.7 }}></span>
        </span>
      </span>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: Math.max(8, size * 0.18), letterSpacing: "0.36em", textTransform: "uppercase", color: tagColor, paddingTop: 4, borderTop: `1px solid ${tagColor}`, textAlign: "center" }}>
        Green Chemistry
      </span>
    </span>
  );
}

/* --- Eyebrow ----------------------------------------------------------- */
function Eyebrow({ children, hindi }) {
  return (
    <div className="eyebrow">
      <span className="dot"></span>
      <span>{children}</span>
      {hindi && (<><span className="sep">·</span><span style={{ fontFamily: "var(--font-deva)", letterSpacing: ".02em", textTransform: "none", fontWeight: 600 }}>{hindi}</span></>)}
    </div>
  );
}

/* --- Bubble cluster decoration ---------------------------------------- */
function BubbleCluster({ tone = "green", scale = 1, opacity = 0.95, style = {} }) {
  const bg = tone === "green" ? "var(--hardex-green-500)" : tone === "lime" ? "var(--hardex-lime-500)" : "rgba(255,255,255,.18)";
  const bg2 = tone === "green" ? "var(--hardex-green-400)" : tone === "lime" ? "var(--hardex-green-500)" : "rgba(255,255,255,.12)";
  const bg3 = tone === "green" ? "var(--hardex-green-300)" : tone === "lime" ? "var(--hardex-green-300)" : "rgba(255,255,255,.08)";
  const s = (n) => n * scale;
  return (
    <div style={{ position: "absolute", pointerEvents: "none", opacity, ...style }}>
      <div style={{ position: "absolute", width: s(120), height: s(120), borderRadius: 999, background: bg, top: 0, left: 0 }}></div>
      <div style={{ position: "absolute", width: s(50), height: s(50), borderRadius: 999, background: bg2, top: s(78), left: s(-40) }}></div>
      <div style={{ position: "absolute", width: s(22), height: s(22), borderRadius: 999, background: bg3, top: s(8), left: s(-46) }}></div>
    </div>
  );
}

/* --- Icons (lucide-style monoline) ----------------------------------- */
const ICONS = {
  droplet: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M12 2.7s5.5 6 5.5 10.5a5.5 5.5 0 1 1-11 0C6.5 8.7 12 2.7 12 2.7Z"/></svg>,
  factory: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M3 21V11l5 3V11l5 3V11l5 3V8h2v13z"/><path d="M7 17h2M11 17h2M15 17h2"/></svg>,
  shield: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M12 3l8 3v6c0 5-3.6 8.4-8 9-4.4-.6-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  flask: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M10 3h4v6l5 9a2 2 0 0 1-1.7 3H6.7A2 2 0 0 1 5 18l5-9V3z"/><path d="M8.5 14h7"/></svg>,
  truck: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
  leaf: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M21 3c-3 12-9 18-18 18 0-9 6-15 18-18z"/><path d="M3 21c4-4 7-7 11-11"/></svg>,
  hat: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M3 18h18v3H3z"/><path d="M5 18v-3a7 7 0 0 1 14 0v3"/><path d="M12 4v4"/></svg>,
  chevR: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="m9 6 6 6-6 6"/></svg>,
  arrowUR: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>,
  phone: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M22 16.9V20a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3.1a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z"/></svg>,
  mail: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  pin: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  menu: <svg className="i" viewBox="0 0 24 24" width="22" height="22"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  gauge: <svg className="i" viewBox="0 0 24 24" width="20" height="20"><path d="M12 14l4-4"/><path d="M3 14a9 9 0 1 1 18 0"/><circle cx="12" cy="14" r="1"/></svg>,
  check: <svg className="i" viewBox="0 0 24 24" width="14" height="14"><path d="m4 12 5 5L20 6"/></svg>,
};
function Icon({ name, size = 20, color }) {
  const svg = ICONS[name];
  if (!svg) return null;
  return React.cloneElement(svg, { width: size, height: size, style: { color } });
}

/* --- Marquee --------------------------------------------------------- */
function Marquee({ items, tone = "dark" }) {
  const bg = tone === "dark" ? "var(--hardex-cement-900)" : "var(--hardex-green-500)";
  const fg = tone === "dark" ? "rgba(255,255,255,.85)" : "#fff";
  const accent = tone === "dark" ? "var(--hardex-green-400)" : "var(--hardex-lime-500)";
  return (
    <div style={{ background: bg, overflow: "hidden", borderTop: "1px solid rgba(255,255,255,.08)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", gap: 40, padding: "14px 0", animation: "marquee 28s linear infinite" }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{ font: "var(--w-semibold) 12px/1 var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: fg, display: "inline-flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: accent }}></span>
            {it}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

Object.assign(window, { Wordmark, Eyebrow, BubbleCluster, Icon, Marquee });
