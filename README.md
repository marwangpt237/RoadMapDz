# Dev Roadmaps — Visual Learning Path (Pilot)

Highly interactive, RTL-aware, bilingual, responsive roadmap visualizer (`roadmap.marwan-naili.me`) built for the `marwan-naili.me` portal ecosystem. It empowers developers to explore structural milestones, identify core learning nodes, and cross-reference structured educational materials seamlessly.

---

## 🚀 Tech Stack & Design Architecture

*   **Runtime & Framework:** React 19 + TypeScript + Vite.
*   **Vector Engine:** `@xyflow/react` (React Flow for graph vector modeling).
*   **Smart Layout:** `@dagrejs/dagre` (Dagre automatic topological layout logic ensuring balanced node distances and fluid flow lines).
*   **Styling Engine:** Tailwind CSS v4 featuring native CSS Variables variables configuration and high-performance dark mode themes.
*   **Icons Framework:** `lucide-react`.

---

## ✨ Features

*   **Bilingual, LTR/RTL Layout (`ar` / `en`):** Support for English and Arabic. Toggling Arabic triggers standard, seamless layout-level RTL shifts on headers and sidebar panels without impacting vertical graph calculations.
*   **Aesthetic Responsive Design:** Visually optimized for diverse screens ranging from single-canvas 360px mobile grids (as bottom action sheets) to desktop wide panels (sliding drawer models).
*   **Intertwined Branding Header:** Built to display brand-unified aesthetic links pointing securely to `marwan-naili.me` and `algdevs.marwan-naili.me`.
*   **Active Core vs. Optional Guides:** Interactive tracking tags showing distinct visual styles for solid-bordered core milestone edges and dashed non-mandatory recommended nodes.

---

## ⚡ Companion AlgDevs Setup Instructions

Inside your **AlgDevs repository** (completely separated from this project structure), integrate this isolated, additive hook inside your query search component mount handler (`useEffect`) to support immediate automatic deep-link parsing:

```typescript
// Add to search controller / results view component on initial mount:
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const searchPhrase = params.get('q');
  
  if (searchPhrase) {
    // Dynamically update the search bar input state:
    setSearchQuery(searchPhrase);
    
    // Smoothly fetch matching results immediately
    console.log('[AlgDevs Partner Network] Autofilled query from roadmap:', searchPhrase);
  }
}, []);
```

Inserting this low-risk snippet triggers immediate pre-filtered query results when clicking **"View resources on AlgDevs"** inside the roadmaps drawer.

---

## 🛠️ Project Development Commands

```bash
# 1. Install local dependencies
npm install

# 2. Launch developer preview server
npm run dev

# 3. Compile and check code style with linter
npm run lint

# 4. Compile optimized standalone production bundle
npm run build
```
