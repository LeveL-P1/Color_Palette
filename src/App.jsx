import React, { useEffect, useRef, useState } from "react";
import DropzoneUpload from "./components/DropzoneUpload";
import SidebarControls from "./components/SidebarControls";
import WebsitePreview from "./previews/WebsitePreview";
import MaterialPreview from "./previews/MaterialPreview";
import DashboardPreview from "./previews/DashboardPreview";
import MinimalPreview from "./previews/MinimalPreview";
import ColorThief from "colorthief";
import { rgbToHex } from "./utils/colorUtils";

// random palette generator
const generateRandomPalette = () =>
  Array.from({ length: 5 }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );

export default function App() {
  const ctRef = useRef(null);

  // Generate random palette on load
  const [palette, setPalette] = useState(generateRandomPalette());
  const [selected, setSelected] = useState(palette[0]);

  const [mode, setMode] = useState("website"); // website|material|dashboard|minimal

  useEffect(() => {
    ctRef.current = new ColorThief();
  }, []);

  const extractPalette = (url) => {
    if (!url || !ctRef.current) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = () => {
      try {
        const pal = ctRef.current.getPalette(img, 6);
        const hexes = pal.map((rgb) => rgbToHex(rgb)).slice(0, 5);

        while (hexes.length < 5) hexes.push("#e5e7eb");

        setPalette(hexes);
        setSelected(hexes[0]);
      } catch (e) {
        console.error("extract failed", e);
      }
    };

    img.onerror = (err) => {
      console.error("image load error", err);
    };
  };

  const handleUploadFile = (url) => {
    extractPalette(url);
  };

  const randomPalette = () => {
    const fresh = generateRandomPalette();
    setPalette(fresh);
    setSelected(fresh[0]);
  };

  const copyCss = () => {
    const vars = palette.map((p, i) => `  --p${i + 1}: ${p};`).join("\n");
    const css = `:root {\n${vars}\n}`;
    navigator.clipboard.writeText(css).then(() => alert("CSS variables copied"));
  };

  const copyTailwind = () => {
    const snippet = palette
      .map((p, i) => `    "p${i + 1}": "${p}",`)
      .join("\n");
    const tail = `module.exports = {\n  theme: { extend: { colors: {\n${snippet}\n  } } }\n}`;
    navigator.clipboard
      .writeText(tail)
      .then(() => alert("Tailwind snippet copied"));
  };

  const renderPreview = () => {
    const props = { palette, selected };

    switch (mode) {
      case "website":
        return <WebsitePreview {...props} />;
      case "material":
        return <MaterialPreview {...props} />;
      case "dashboard":
        return <DashboardPreview {...props} />;
      default:
        return <MinimalPreview {...props} />;
    }
  };

  return (
    <div className="app-container">
      {/* Minimal Navigation */}
      <nav className="minimal-nav">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-blob" style={{ background: selected }} />
            <span>ColorPalette</span>
          </div>
        </div>
      </nav>

      {/* Main App Interface */}
      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="brand hover-lift click-bounce">
            <div className="logo-blob" style={{ background: selected }} />
            <div>
              <div style={{ fontWeight: 800 }}>Color Storyboard</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>Frosted theme</div>
            </div>
          </div>

          <nav className="mode-tabs">
            {['website', 'material', 'dashboard', 'minimal'].map((tab) => (
              <button
                key={tab}
                className={`mode ${mode === tab ? 'active' : ''} click-ripple`}
                onClick={() => setMode(tab)}
                style={mode === tab ? { background: selected, color: 'white' } : {}}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className="controls-section">
            <DropzoneUpload onFile={handleUploadFile} extractOnDrop={extractPalette} />
            <SidebarControls
              palette={palette}
              selected={selected}
              setSelected={setSelected}
              setPalette={setPalette}
              randomPalette={randomPalette}
              copyCss={copyCss}
              copyTailwind={copyTailwind}
            />
          </div>

          <div className="palette-preview animate-fade-in">
            <h3>Color Palette</h3>
            <div className="palette-grid">
              {palette.map((color, index) => (
                <div
                  key={index}
                  className="palette-color hover-lift click-bounce"
                  style={{ background: color }}
                  onClick={() => {
                    navigator.clipboard.writeText(color);
                    alert(`Copied ${color} to clipboard`);
                  }}
                >
                  <div className="color-info">
                    <span>{color}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="preview-canvas hover-glow">
            <div className="canvas-inner">{renderPreview()}</div>
          </div>
        </main>
      </div>

      {/* Simple Footer */}
      <footer className="simple-footer">
        <p>© {new Date().getFullYear()} ColorPalette - Free to use</p>
      </footer>
    </div>
  );
}
