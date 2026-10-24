# Design Tokens & Visual Consistency Rules

These rules govern all styling, layout, and component markup in this portfolio. Follow these constraints without deviation.

---

## 1. Approved Color Palette & Semantic Mapping

| Token Name | Hex Value | Allowed Usage | Contrast Notes |
| :--- | :--- | :--- | :--- |
| **Warm Cream** | `#FAF7F2` | Page background (`bg-[#FAF7F2]`), root canvas | Base canvas |
| **Charcoal** | `#252525` | Primary headings, body copy, active icons (`text-[#252525]`) | **13.6:1** on cream (Exceeds AAA) |
| **Warm Grey** | `#706B66` | Secondary copy, metadata, subtitles (`text-[#706B66]`) | **4.8:1** on cream (Passes AA) |
| **Coral-Orange** | `#E87552` | Large accents, button fills with white text, borders, focus rings | **3.2:1** on cream (Non-text / Large only) |
| **Deepened Coral**| `#CE5E3B` | **Mandatory** for small coral text (< 24px) on cream/white | **4.6:1** on cream (Passes AA) |
| **Soft Peach** | `#F1E5DC` | Subtle surface fills, pill backgrounds, tag containers (`bg-[#F1E5DC]`) | Low-contrast subtle fill |
| **Card White** | `#FFFFFF` | Card surfaces (`bg-white`), primary containers | High contrast against cream |

### Strict Color Prohibitions
* **Do NOT use `#E87552` for small inline text, tags, or links on `#FAF7F2`.** Always use `#CE5E3B` to maintain WCAG 2.1 AA compliance.
* **Do NOT introduce arbitrary Tailwind color scales** (e.g., `text-zinc-600`, `bg-gray-100`, `text-slate-900`, `blue-500`, `amber-100`). All elements must map strictly to the 6 approved token values above.

---

## 2. Interactive States & Accessibility Minimums

### Focus Visibility
* Every interactive element (`<a>`, `<button>`, `<input>`) must have an unobstructed keyboard focus indicator:
  ```css
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]
  ```

### Touch Targets
* All interactive elements must maintain a minimum bounding box of **$44 \times 44\text{px}$** for touch viewports:
  ```css
  min-h-[44px] min-w-[44px] inline-flex items-center justify-center
  ```

### Motion Sensitivity
* Disable all dynamic transitions when reduced motion is requested:
  ```css
  motion-reduce:transition-none motion-reduce:transform-none
  ```

---

## 3. Typography & Spacing Scales

* **Font Family:** `Manrope`, with robust fallbacks: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`.
* **Headings:**
  * Display / Hero: `text-4xl md:text-5xl font-extrabold tracking-tight text-[#252525]`
  * Section Title: `text-2xl md:text-3xl font-bold tracking-tight text-[#252525]`
  * Card / Subtitle: `text-lg md:text-xl font-semibold text-[#252525]`
* **Body:** `text-base leading-relaxed text-[#252525]`
* **Metadata / Monospace Pills:** `text-xs font-semibold tracking-wide uppercase font-mono`
* **Card Radii:**
  * Featured project containers: `rounded-2xl` (16–24px)
  * Secondary cards / buttons: `rounded-lg` or `rounded-xl` (10–12px)
  * Tags / Pills: `rounded-md` or `rounded-full` (6px–9999px)
