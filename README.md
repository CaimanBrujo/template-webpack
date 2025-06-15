# ⚙️ Webpack Starter Template

A clean and minimal Webpack 5 setup for modern JavaScript projects.  
Includes CSS support, image handling, and dynamic HTML generation.

> Clone, install, and start building right away — no setup hassle.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:CaimanBrujo/template-webpack.git my-project
cd my-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Opens the project at `http://localhost:8080/` with live reload enabled.

---

## 📦 Build for production

```bash
npm run build
```

Creates a `dist/` folder with everything ready to deploy:
- `index.html` generated from the template
- Bundled `main.js` and extracted `main.css`
- Optimized images inside `dist/assets/`

---

## 📁 Project Structure

```
template-webpack/
├── dist/                  ← Build output (auto-generated)
├── src/
│   ├── assets/images/     ← Image assets
│   ├── index.js           ← JavaScript entry point
│   ├── style.css          ← Global styles (with CSS variables)
│   └── template.html      ← HTML template for html-webpack-plugin
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🔧 Features

- ✅ Webpack 5
- 🎨 CSS + variables + reset
- 🖼 Image support with `asset/resource`
- 🧩 Auto-generated `index.html` via `html-webpack-plugin`
- 📦 Clean `dist/` builds with `mini-css-extract-plugin`
- 🔄 Live reload with `webpack-dev-server`

---

## 👤 Author

Made with 💻 by [Caimán Brujo](https://github.com/CaimanBrujo)

