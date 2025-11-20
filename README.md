# 🎨 Color Storyboard  
A color-driven UI preview generator that instantly shows how palettes look inside real UI components.  
Extract colors from images, generate random palettes, and preview four UI themes — all live and client-side.

---

## 🌈 Overview

Color Storyboard is built for designers, developers, and product teams who want to **see colors in real UI**, not just flat swatches.

### ✨ Features
- Extract color palettes from images (100% browser-only, no uploads)
- Auto-generate random palettes on every load
- Select primary color & view complementary/triadic variants
- WCAG contrast measurement
- Live previews for:
  - **Website**
  - **Material UI**
  - **Dashboard**
  - **Minimal**

### 🧩 Why This Exists
Most color tools only show swatches.  
Color Storyboard shows your palette **in action**, inside real components — buttons, navbars, hero sections, charts, cards, and more.

### 🔒 Privacy
Your images never leave your machine.  
Palette extraction happens locally using ColorThief.

### 🛠 Tech Stack
- React + Vite  
- ColorThief.js  
- Pure CSS (Frosted Glass UI)  
- Client-side utilities for luminance, contrast & variants  

---

## 📦 Installation

```bash
npm install
npm run dev

Runs on:

http://localhost:5173
```

## 🤝 Contributing

Contributions are welcome!
To contribute:

Fork the repository

Create a new branch

git checkout -b feature/my-feature


Commit your changes

Open a Pull Request

Contribution Guidelines

Use functional React components

Keep components modular

Follow existing UI style

Avoid unnecessary dependencies

Keep preview components simple and isolated


📝 License

MIT — free for personal and commercial use.

Made with LOVE to make UI color exploration easier, faster, and more fun.