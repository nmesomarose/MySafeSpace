# AGENTS.md — Portfolio Engineering Guidelines

## 1. Project Purpose & Approved Stack
* **Purpose:** High-performance, accessible personal portfolio for a Junior Software Developer focused on Product Engineering, Backend APIs, Full-Stack Systems, and Applied AI.
* **Approved Stack:** Next.js (App Router), TypeScript (Strict), Tailwind CSS.
* **Architecture:** Static Site Generation / Static Export (`output: 'export'`).
* **Visual Identity:**
  * Background: Warm Cream (`#FAF7F2`)
  * Primary Text / Headings: Charcoal (`#252525`)
  * Secondary Text / Metadata: Warm Grey (`#706B66`)
  * Accent: Coral-Orange (`#E87552`, with `#CE5E3B` for small text AA contrast)
  * Subtle Surface / Fills: Soft Peach (`#F1E5DC`)
  * Card Surfaces: Pure White (`#FFFFFF`)
  * Typography: Manrope (with system sans-serif fallback)

---

## 2. Source-of-Truth Hierarchy
When resolving conflicts, follow this order of precedence:
1. **Direct User Instructions:** Explicit requirements given in the prompt.
2. **`AGENTS.md` (This File):** Operational constraints, code quality, and working rules.
3. **Approved Portfolio PRD & Design Tokens:** Product scope, sections, and visual rules.
4. **Verified Project Repositories:** Ground-truth implementations of audited projects. Never invent features, metrics, or deployment URLs.

---

## 3. Architecture & Code Organisation

```
app/
├── layout.tsx                     # Root layout (Manrope font, metadata, skip-link)
├── page.tsx                       # Single responsive landing page assembling 7 sections
└── work/
    ├── vouchersense-ai/page.tsx   # Dedicated Case Study 1
    └── flight-api/page.tsx        # Dedicated Case Study 2
components/
├── layout/                        # Navbar, Footer, CaseStudyLayout
├── hero/                          # HeroSection, CapabilityBadges
├── projects/                      # FeaturedProjectCard, SupportingProjectCard, TechBadge
├── principles/                    # EngineeringPrinciples, PrincipleCard
└── about/                         # AboutSection, ToolbeltGrid
content/
├── siteConfig.ts                  # Central configuration (developer, contact, flags)
└── projects.ts                    # Strongly typed case-study & supporting project data
```

* **Static Export Requirement:** Ensure `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }`.
* **Component Boundaries:** Keep components modular, self-contained, and typed. Separate static content data from presentation.

---

## 4. TypeScript, React, Accessibility & Styling Conventions

### TypeScript & React
* **Strict TypeScript:** No `any`. Explicitly type all component props, config schemas, and project models.
* **Server Components First:** Render as React Server Components by default. Use `'use client'` only when client state or browser APIs are required (e.g., `CopyEmailButton`).
* **Browser API Guards:** Guard client-only APIs with `typeof window !== 'undefined' && 'clipboard' in navigator`.

### Accessibility (WCAG 2.1 AA)
* **Color Contrast:** Minimum 4.5:1 for body copy. Use `#CE5E3B` for small coral text on cream backgrounds.
* **Keyboard Navigation:** Universal visible focus ring: `focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:outline-none`.
* **Touch Targets:** Minimum $44 \times 44\text{px}$ bounding box for all interactive triggers.
* **Semantic HTML:** Exactly one `<h1>` per page. Use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>`.
* **Motion:** Enforce `@media (prefers-reduced-motion: reduce)` by disabling transitions for motion-sensitive users.

### Styling
* Use semantic Tailwind CSS classes referencing the approved token values. Do not introduce arbitrary unapproved hex codes or third-party UI component libraries.

---

## 5. Content Accuracy & Link Safety Rules
* **No Invented Content:** All descriptions must match verified code:
  * *VoucherSense AI:* Explain in plain English first. Two-role Gemini pipeline; 8 Vitest suites. State that Zod enforces JSON structural contracts, not that it guarantees physical receipt truth.
  * *Flight Booking REST API:* Relational backend over HTTP; present Vercel deployment issue as historical debugging (`src/app-factory.ts` fix and Prisma P2021 migration); disclose that the live endpoint is decommissioned.
  * *Secure Record Management:* Query-level isolation (`WHERE userId = <session user>`), public UUIDs, atomic deletion audit logs. Zero AI claims.
  * *Tegvoc Logistics:* Explicitly frame as an Authentication & Session Slice only.
* **Safe External Links & Fallbacks:**
  * When `email`, `linkedinUrl`, or `resumePath` are undefined or empty in `siteConfig.ts`, gracefully omit or disable the action. Never render broken anchors (`href="#"`).
* **Status Pill:** Controlled by `isOpenToOpportunities` in `siteConfig.ts` (default: `false` until confirmed). No pulsing animations.

---

## 6. Dependency & Scope Restrictions
* **Zero Database / Auth / CMS:** No Prisma, PostgreSQL, Supabase, NextAuth, or headless CMS inside this portfolio.
* **Zero Bloated Libraries:** No Framer Motion, Three.js, Lucide icon bundles, or heavy UI frameworks. Use lightweight inline SVG icons.
* **Zero Unnecessary Packages:** Do not install dependencies without explicit user request.

---

## 7. Required Verification Before Declaring Work Complete
Never mark a task complete without executing and reporting these checks:
1. **Type Checking:** `npx tsc --noEmit` must pass with 0 errors.
2. **Linting:** `npm run lint` must pass with 0 warnings/errors.
3. **Production Build:** `npm run build` must complete successfully, producing the static HTML export.
4. **Manual Checks:**
   * Tab through all interactive elements to verify focus visibility and logical order.
   * Verify mobile layout without horizontal overflow at $375\text{px}$, $768\text{px}$, and $1280\text{px}$.

---

## 8. Expected Reporting Format After Each Task
At the conclusion of each engineering task, output:
1. **Files Created or Modified:** Full file paths and high-level purpose.
2. **Commands Executed:** Exact CLI commands run during the task.
3. **Verification Results:** Explicit output from type-checking, linting, or build commands.
4. **Remaining Decisions or Blockers:** Any missing inputs requiring user confirmation.
