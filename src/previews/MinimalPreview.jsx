import React from "react";

export default function MinimalPreview({ palette, selected }) {
  const primary = selected || palette[0];

  return (
    <div className="preview-wrapper minimal-kit">
      <div className="preview light" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div>
          <h3 style={{color:'#0f1724'}}>Minimal UI Kit</h3>
          <p className="muted">Buttons, badges and small components</p>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button className="pill primary" style={{background:primary,color:'#fff'}}>Primary</button>
            <button className="pill" style={{border:`2px solid ${palette[1]}`,color:palette[1]}}>Outline</button>
            <button className="pill" style={{background:palette[2],color:'#fff'}}>Accent</button>
          </div>
        </div>

        <div style={{display:'flex',gap:8}}>
          <div style={{background:primary,padding:'6px 8px',borderRadius:6,color:'#fff'}}>Badge</div>
          <div style={{background:palette[4],padding:'6px 8px',borderRadius:6,color:'#fff'}}>Badge</div>
        </div>
      </div>
    </div>
  );
}
