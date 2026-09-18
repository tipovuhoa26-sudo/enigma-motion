# Enigma — AI Powered Tech Solutions

High-performance editorial marketing website engineered with Next.js 16 (App Router), GSAP 3 Motion System, Lenis smooth scrolling, and full codebase intelligence indexed by **CodeGraph**.

---

## 🧠 CodeGraph Integration

This repository is fully indexed with **[CodeGraph](https://github.com/colbymchenry/codegraph)** to build an Abstract Syntax Tree (AST) knowledge graph connecting all components, symbols, hooks, and timelines.

### Quick Commands

```bash
# Check index status and graph statistics
codegraph status

# Explore any component, timeline, or symbol relationships in one shot
codegraph explore "CasesSection"
codegraph explore "AdvantageSection"
codegraph explore "createCasesGalleryTimeline"

# Query symbols or dependencies
codegraph query "createCounter"
codegraph callers "createCounter"
```

### GitHub Actions CI
Every commit and pull request to `main` triggers `.github/workflows/codegraph.yml`, running automated TypeScript verification, CodeGraph knowledge graph compilation, and Next.js production builds.

---

## 🚀 Technology Stack

- **Framework**: Next.js 16 (React 19, TypeScript)
- **Animation & Timelines**: GSAP 3 + ScrollTrigger + Custom Easing Tokens
- **Smooth Scrolling**: Lenis 1.3 synchronized with GSAP ticker
- **Styling**: Tailwind CSS + CSS Design System Tokens
- **Code Intelligence**: CodeGraph AST semantic indexing

---

## 📁 Project Structure

```
.
├── .codegraph/                  # CodeGraph configuration and tracking
├── .github/workflows/           # GitHub Actions CI for CodeGraph & Next.js
├── enigma-motion-spec/          # Engineering & animation specifications
├── public/assets/               # 8K 3D assets, product visuals, sculpture loop
└── src/
    ├── app/                     # Next.js App Router pages
    ├── components/              # Reusable UI components (Header, Dock, Button)
    ├── content/                 # Structured portfolio and case study data
    ├── motion/                  # GSAP motion timelines, tokens, easings, providers
    ├── sections/                # Full-bleed landing page sections
    └── styles/                  # Editorial shell & global styles
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build
```bash
npm run build
npm run start
```
