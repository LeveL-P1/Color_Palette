import React from "react";

export default function WebsitePreview({ palette, selected }) {
  const primary = selected || palette[0];
  const accent = palette[1] || "#e5e7eb";

  return (
    <div className="preview-wrapper">

      {/* NAVBAR (moved to top) */}
      <div className="preview navbar" style={{ marginBottom: 14, background: "transparent" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: primary }} />
            <div style={{ fontWeight: 700, color: "#0f1724", fontSize: 18 }}>
              Brand
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div className="muted" style={{ cursor: "pointer" }}>Docs</div>
            <div className="muted" style={{ cursor: "pointer" }}>Pricing</div>
            <div className="muted" style={{ cursor: "pointer" }}>Sign In</div>

            <button
              className="pill primary"
              style={{
                background: primary,
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 8,
                fontWeight: 600
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div
        className="preview frosted-hero"
        style={{
          background: `linear-gradient(135deg, ${primary} 0%, ${accent} 100%)`,
          marginBottom: 14
        }}
      >
        <div className="hero-inner">
          <h1 style={{ color: "#0f1724" }}>Awesome Product</h1>
          <p style={{ color: "rgba(15,23,36,0.85)" }}>
            A short description that shows the palette's readability and vibes.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <button className="pill primary" style={{ background: primary, color: "#fff" }}>
              Primary
            </button>

            <button className="pill ghost" style={{ borderColor: primary, color: primary }}>
              Ghost
            </button>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="preview cards" style={{ display: "flex", gap: 16 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="card light"
            style={{
              borderColor: primary,
              padding: "16px",
              borderRadius: 10
            }}
          >
            <div
              className="card-thumb"
              style={{
                background: palette[(i + 1) % palette.length],
                height: 80,
                borderRadius: 10,
                marginBottom: 12
              }}
            />
            <h3 style={{ color: "#0f1724" }}>Card title</h3>
            <p className="muted">Short info about the card</p>

            <button
              className="pill"
              style={{
                background: primary,
                color: "#fff",
                marginTop: 10,
                padding: "8px 16px",
                borderRadius: 8
              }}
            >
              Action
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
