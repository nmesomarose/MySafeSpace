# Content Integrity & Project Ground-Truth Rules

These rules enforce strict content accuracy for all project descriptions, case studies, and capability claims across this portfolio. Never invent metrics, technologies, or deployment statuses.

---

## 1. Project Ground-Truth Matrix

| Project | Verified Scope & Implementation | Verified Stack & Tests | Deployment & Evidence Boundaries |
| :--- | :--- | :--- | :--- |
| **VoucherSense AI** | **AI Integration Slice:** Multi-file receipt upload (up to 50 files), Sharp file validation, S3 offload, background worker (`worker/index.ts` polling jobs table), session ownership checks. | Next.js 16, TypeScript, `@google/genai` (Gemini SDK), `@aws-sdk/client-s3`, Prisma, Sharp, Zod, Vitest.<br>**8 Vitest Suites:** `aiConcurrency`, `extractionSchema`, `geminiSchema`, `passwords`, `rateLimit`, `sessionExpiry`, `summarySchema`, `validateFile`. | **No active live deployment.** Evaluated via verified local test suites.<br>*Zod enforces structural JSON typing only; do not claim it prevents hallucinations or arithmetic errors.* |
| **Flight Booking REST API** | **Relational Backend REST API:** Models 4 resources (Airlines, Flights, Customers, Bookings) with relational integrity, JSON envelopes (`data`, `error`, `pagination`), and rate limiting. | Node.js, Express 5, TypeScript, Prisma (PostgreSQL), `express-rate-limit`, Jest, Supertest. | **Live Vercel endpoint is decommissioned (HTTP 404).** Presented strictly as a code, test, and historical debugging case study.<br>*Incident details:* Vercel entrypoint ambiguity resolved by renaming `src/app.ts` → `src/app-factory.ts`; Prisma P2021 migration error resolved. |
| **Secure Record Management** *(Repo: Flow-AI)* | **Security & Isolation Slice:** Authenticated Create/List/View/Delete CRUD. Query-level isolation (`WHERE userId = <session user>`), public UUID obfuscation in URLs, and atomic deletion transaction audit logs. | Next.js 16, TypeScript, Prisma (`@prisma/adapter-pg`), PostgreSQL, Zod.<br>Verified scripts: `ACCESS_CONTROL_AUDIT.md`, `QUERY_COUNT.md`. | **Local only.** Contains **ZERO AI components** (package name: `srm-app`).<br>*Never market or describe this project as an AI tool.* |
| **Tegvoc Logistics** | **Authentication Slice Only:** User registration, bcrypt password hashing, tokenized password recovery, session cookies, and protected dashboard redirection. | Next.js 16, TypeScript, Tailwind v4, Prisma, PostgreSQL, bcrypt, Zod, Lucide. | **Local only (`localhost:3000`).** Zero automated test suites.<br>*Must be explicitly disclosed as an authentication slice; never claim logistics, fleet, or dispatch features.* |

---

## 2. Hard Writing Rules for Case Studies & Cards

1. **VoucherSense AI Language:**
   * Explain in plain English first: converts receipt photos or PDFs into verified expense records, generating a plain-language summary on request.
   * State that the two-role model pipeline separates the Vision Extractor from the Text Analyst to prevent the analyst model from re-inspecting raw image pixels.
   * **Prohibited:** Never claim that schema validation "eliminates hallucinations" or "guarantees mathematical accuracy." State that Zod enforces structural schema contracts and rejects malformed outputs at runtime.
2. **Flight Booking REST API Language:**
   * Clearly state that the API models four relational entities over HTTP.
   * Present the Vercel deployment strictly as an educational debugging incident (`PROD_INCIDENT_REPORT.md`).
   * **Prohibited:** Never provide a "Live Demo" button or imply the endpoint is currently operational.
3. **Secure Record Management Language:**
   * Highlight query-level tenant isolation (folding the user ID directly into the database `WHERE` clause) and atomic audit logging.
   * **Prohibited:** Never mention LLMs, machine learning, or AI capabilities, despite the GitHub repo directory name (`Flow-AI`).
4. **Tegvoc Logistics Language:**
   * Clearly state this is an authentication and session management slice.
   * **Prohibited:** Never describe this as a "Logistics SaaS" or full logistics management platform.
5. **No Invented Metrics or Experience:**
   * Never state unverified metrics (e.g., "handled 10,000 requests/sec", "reduced processing time by 40%", "99.9% uptime").
   * Never cite production users or revenues for demonstration and capstone slices.
