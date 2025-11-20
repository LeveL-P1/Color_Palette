import React from "react";

/**
 * DashboardPreview.jsx
 * Analytics dashboard mock — scrollable inside preview frame
 * Shows KPI cards, chart placeholders, table, timeline.
 */

export default function DashboardPreview({ palette, selected }) {
  const primary = selected || palette[0];

  return (
    <div className="preview-wrapper scrollable-preview">
      {/* TOP INFO ROW */}
      <section className="preview section" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ margin: 0 }}>Analytics</h3>
          <div className="muted">Overview of the last 30 days</div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div className="muted">Search</div>
          <div className="avatar-sm" style={{ background: primary }} />
        </div>
      </section>

      {/* KPI CARDS */}
      <section className="preview section">
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { label: "Users", val: "12.3k" },
            { label: "Revenue", val: "$42.1k" },
            { label: "Conversions", val: "4.2%" },
            { label: "Avg. Session", val: "3m 20s" },
          ].map((k,i) => (
            <div key={i} className="kpi-card" style={{ borderColor: palette[i%palette.length] }}>
              <div style={{ fontWeight: 800 }}>{k.val}</div>
              <div className="muted">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHARTS (placeholders) */}
      <section className="preview section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}>
          <div className="chart-card">
            <div className="chart-title">Users over time</div>
            <div className="chart-mock" style={{ background: `linear-gradient(180deg, ${primary}, ${palette[2]})` }} />
          </div>
          <div className="chart-card">
            <div className="chart-title">Top countries</div>
            <div className="chart-list">
              {["US","UK","IN","DE"].map((c,i)=>(
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 0'}}>
                  <div>{c}</div>
                  <div className="muted"> {Math.round(20 - i*2)}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="preview section">
        <h4 style={{ marginTop: 0 }}>Recent transactions</h4>
        <div className="table">
          <div className="table-head">
            <div>User</div><div>Item</div><div>Amount</div><div>Status</div>
          </div>
          {[1,2,3,4].map(i => (
            <div className="table-row" key={i}>
              <div className="row-user">
                <div className="avatar-sm" style={{ background: palette[i%palette.length] }} />
                <div>Customer {i}</div>
              </div>
              <div>Pro Plan</div>
              <div>${(i*12).toFixed(2)}</div>
              <div><span className="status-badge" style={{ background: i%2===0 ? "#e6ffed" : "#fff7ed", color: i%2===0 ? "#047857" : "#92400e"}}>{i%2===0 ? "Paid" : "Pending"}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY TIMELINE */}
      <section className="preview section">
        <h4 style={{ marginTop: 0 }}>Activity</h4>
        <div className="timeline">
          {[1,2,3].map(i => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" style={{ background: palette[i%palette.length] }} />
              <div>
                <div style={{ fontWeight: 700 }}>Event {i}</div>
                <div className="muted">Action performed {i} hours ago</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER small */}
      <footer className="preview section" style={{ paddingBottom: 30 }}>
        <div className="muted">Dashboard preview • no live data</div>
      </footer>
    </div>
  );
}
