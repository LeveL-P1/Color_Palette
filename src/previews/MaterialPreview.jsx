import React, { useState } from "react";

export default function MaterialPreview({ palette, selected }) {
  const primary = selected || palette[0];
  const secondary = palette[1] || "#64748b";

  const [menuOpen, setMenuOpen] = useState(false);
  const [chipSelected, setChipSelected] = useState(false);
  const [filterChip, setFilterChip] = useState(false);

  return (
    <div className="preview-wrapper" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* ---------- PAGE HEADER ---------- */}
      <section
        className="preview"
        style={{
          background: "#f8fafc",
          padding: 18,
          borderRadius: 14,
        }}
      >
        <h2 style={{ margin: 0, color: "#0f1724" }}>Material Design Components</h2>
        <p style={{ margin: 0, color: "#64748b" }}>
          Buttons, chips, text fields, cards, menus & more — all styled with your primary color.
        </p>
      </section>

      {/* ---------- BUTTONS ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Buttons</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          
          {/* Primary */}
          <button
            className="md-btn"
            style={{
              background: primary,
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
            }}
          >
            Primary
          </button>

          {/* Secondary */}
          <button
            className="md-btn"
            style={{
              background: secondary,
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
            }}
          >
            Secondary
          </button>

          {/* Tonal */}
          <button
            className="md-btn"
            style={{
              background: primary + "22",
              color: primary,
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
            }}
          >
            Tonal
          </button>

          {/* Outline */}
          <button
            className="md-btn"
            style={{
              background: "transparent",
              border: `2px solid ${primary}`,
              color: primary,
              padding: "10px 16px",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            Outline
          </button>

          {/* Icon Button */}
          <button
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: primary,
              border: "none",
              color: "#fff",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ★
          </button>
        </div>
      </section>

            {/* ---------- CARDS ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Cards</h3>
        <div style={{ display: "flex", gap: 16 }}>

          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="md-card"
              style={{
                width: 240,
                padding: 14,
                borderRadius: 12,
                background: "#ffffffaa",
                border: `1px solid ${primary}`,
                backdropFilter: "blur(6px)",
              }}
            >
              <div style={{
                height: 110,
                background: palette[(i+1)%palette.length],
                borderRadius: 10,
              }} />
              <h4 style={{ marginTop: 12, color: "#0f1724" }}>Card {i + 1}</h4>
              <p className="muted">A short description inside the card.</p>
              <button className="md-btn" style={{ background: primary, color: "#fff" }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CHIPS ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Chips</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>

          {/* Assist Chip */}
          <div
            className="chip"
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              color: "#0f1724",
            }}
          >
            Assist Chip
          </div>

          {/* Filter Chip */}
          <div
            onClick={() => setFilterChip(!filterChip)}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              background: filterChip ? primary + "22" : "#f1f5f9",
              border: `1px solid ${filterChip ? primary : "#e2e8f0"}`,
              color: filterChip ? primary : "#0f1724",
              cursor: "pointer",
            }}
          >
            Filter Chip
          </div>

          {/* Input Chip */}
          <div
            className="chip"
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              background: "#e2e8f0",
              color: "#0f1724",
            }}
          >
            Avatar Chip ∘+
          </div>
        </div>
      </section>

      {/* ---------- TEXT FIELDS ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Text Fields</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 300 }}>

          {/* Standard */}
          <input
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #cbd5e1",
              outline: "none",
            }}
            placeholder="Standard text field"
          />

          {/* Filled */}
          <input
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              outline: "none",
            }}
            placeholder="Filled text field"
          />

          {/* With Leading Icon */}
          <div
            style={{
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#64748b",
              }}
            >
              🔍
            </span>
            <input
              style={{
                padding: "10px 12px 10px 34px",
                width: "100%",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                outline: "none",
              }}
              placeholder="Search"
            />
          </div>
        </div>
      </section>

      {/* ---------- SWITCHES / CHECKS / RADIO ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Switch / Checkbox / Radio</h3>

        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>

          {/* Switch */}
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" defaultChecked style={{ accentColor: primary }} />
            <span>Switch</span>
          </label>

          {/* Checkbox */}
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" defaultChecked style={{ accentColor: primary }} />
            <span>Checkbox</span>
          </label>

          {/* Radio */}
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="radio" name="demo" defaultChecked style={{ accentColor: primary }} />
            <span>Radio</span>
          </label>
        </div>
      </section>

      {/* ---------- TABS ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Tabs</h3>
        <div style={{ display: "flex", gap: 20 }}>
          {["Overview", "Reports", "Settings"].map((t, i) => (
            <div
              key={i}
              style={{
                paddingBottom: 6,
                borderBottom: `3px solid ${i === 0 ? primary : "transparent"}`,
                color: i === 0 ? primary : "#64748b",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </section>



      {/* ---------- SNACKBAR ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Snackbar</h3>

        <div
          style={{
            background: "#0f1724",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: 10,
            display: "inline-block",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          ✔ Saved successfully
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section className="preview" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#0f1724" }}>Menu</h3>

        <div style={{ position: "relative" }}>
          <button
            className="md-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "#e2e8f0",
              color: "#0f1724",
              padding: "8px 12px",
              borderRadius: 10,
              border: "none",
              fontWeight: 600,
            }}
          >
            ⋮
          </button>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: 46,
                left: 0,
                background: "#fff",
                borderRadius: 10,
                padding: 10,
                boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0",
                minWidth: 140,
              }}
            >
              <div className="menu-item">Edit</div>
              <div className="menu-item">Duplicate</div>
              <div className="menu-item">Delete</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
