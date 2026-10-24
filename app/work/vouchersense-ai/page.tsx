import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VoucherSense AI Case Study | Agobi Nmesoma',
  description:
    'Case study of VoucherSense AI: an asynchronous expense extraction pipeline using Google Gemini, Sharp image pre-validation, S3 offload, and 8 Vitest test suites.',
};

export default function VoucherSensePage() {
  const verifiedSuites = [
    { file: 'validateFile.test.ts', scope: 'Sharp validation checks image dimensions, file size limits, and rejects invalid file types.' },
    { file: 'extractionSchema.test.ts', scope: 'Validates that extracted expense items, totals, and merchants match required object structures.' },
    { file: 'geminiSchema.test.ts', scope: 'Checks Gemini model response format compliance against expected JSON payload definitions.' },
    { file: 'summarySchema.test.ts', scope: 'Verifies the structure of plain-language expense summaries before presenting them.' },
    { file: 'aiConcurrency.test.ts', scope: 'Tests worker concurrency boundaries to ensure batches process in orderly isolation.' },
    { file: 'rateLimit.test.ts', scope: 'Checks upload endpoint rate limits to prevent server resource exhaustion.' },
    { file: 'sessionExpiry.test.ts', scope: 'Verifies session expiration rules and ensures users can only access their own files.' },
    { file: 'passwords.test.ts', scope: 'Validates password strength rules and secure hashing functions.' },
  ];

  return (
    <article className="mx-auto max-w-4xl px-6 py-8 md:py-14">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/#projects"
          className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#706B66] transition-colors hover:text-[#CE5E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] rounded-md motion-reduce:transition-none dark:text-[#A8A29D] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
        >
          &larr; Back to Selected Projects
        </Link>
      </nav>

      {/* Header & Masthead */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-[#F1E5DC] px-3 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
            Receipt &amp; Expense Processing
          </span>
          <span className="text-xs font-medium text-[#706B66] dark:text-[#A8A29D]">
            8 Vitest Suites Verified
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-5xl dark:text-[#FAF7F2]">
          VoucherSense AI
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
          An application that helps users organize receipts and vouchers by turning document photos and PDFs into structured expense records, with an optional plain-language spending overview.
        </p>

        {/* Project Snapshot Grid */}
        <div className="grid grid-cols-1 gap-3 rounded-xl border border-[#EADFD7] bg-white p-4 min-[360px]:grid-cols-2 sm:grid-cols-4 dark:border-[#36322E] dark:bg-[#211F1D]">
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Role</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Full-Stack &amp; AI Integration</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">AI Model</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Google Gemini API</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Storage &amp; DB</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">AWS S3 + PostgreSQL (Prisma)</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Status</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Local Code &amp; Test Suite</p>
          </div>
        </div>
      </header>

      {/* 6-Part Case Study Structure */}
      <div className="mt-8 md:mt-10 space-y-8 md:space-y-10 border-t border-[#EADFD7] pt-8 md:pt-10 dark:border-[#36322E]">
        {/* 1. What the Project Does */}
        <section aria-labelledby="section-1" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">01</span>
            <h2 id="section-1" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              What the Project Does
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            VoucherSense AI helps people manage business receipts and purchase vouchers. Instead of manually typing in merchant names, dates, line items, and totals from paper receipts or email invoices, users can upload multiple files at once. The application reads the documents, parses the expense information into clear tabular records, and can generate a helpful plain-language summary of what was purchased.
          </p>
        </section>

        {/* 2. The Problem It Addresses */}
        <section aria-labelledby="section-2" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">02</span>
            <h2 id="section-2" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              The Problem It Addresses
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            Building an automated document processing tool with AI involves three practical technical challenges:
          </p>
          <div className="grid gap-3.5 sm:grid-cols-3">
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Slow Response Times</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Asking a web server to analyze high-resolution images in the middle of a regular browser request causes loading spinners, browser timeouts, and server crashes.
              </p>
            </div>
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">AI Formatting Errors</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Language models can return slightly different response shapes or missing fields. Saving unverified data straight to a database will break downstream screens.
              </p>
            </div>
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Visual Confusion</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                When an AI model is asked to both transcribe receipt lines and write an analysis at the same time, it can misinterpret folds, shadows, or smudges as real numbers.
              </p>
            </div>
          </div>
        </section>

        {/* 3. How It Works */}
        <section aria-labelledby="section-3" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">03</span>
            <h2 id="section-3" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              How It Works
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            To keep the web interface fast and reliable, the application splits the workload into clear, manageable steps:
          </p>

          <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-3 dark:border-[#36322E] dark:bg-[#211F1D]">
            <ol className="space-y-3 text-sm text-[#706B66] dark:text-[#A8A29D]">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">1.</span>
                <div>
                  <strong className="text-[#252525] dark:text-[#FAF7F2]">File Check:</strong> When a user uploads receipt images (up to 50 files in a batch), the system validates file types and sizes with the Sharp image library, rejecting corrupted or oversized files immediately.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">2.</span>
                <div>
                  <strong className="text-[#252525] dark:text-[#FAF7F2]">Cloud Storage:</strong> Accepted files are uploaded to AWS S3 storage, and job entries are recorded in PostgreSQL with a pending status. The user gets an instant confirmation without waiting for AI processing.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">3.</span>
                <div>
                  <strong className="text-[#252525] dark:text-[#FAF7F2]">Background Worker:</strong> An independent worker script (<code className="font-mono text-xs text-[#252525] dark:text-[#FAF7F2]">worker/index.ts</code>) polls for pending jobs, downloads the image, and handles the Gemini calls quietly in the background.
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* 4. My Implementation & Technical Decisions */}
        <section aria-labelledby="section-4" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">04</span>
            <h2 id="section-4" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              My Implementation &amp; Technical Decisions
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">DECISION 01</span>
              <h3 className="text-base font-bold text-[#252525] dark:text-[#FAF7F2]">Two-Step Gemini Pipeline</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Rather than asking one prompt to do everything, I separated vision extraction from summary generation. Step 1 uses Gemini Vision to read text and numbers into a structured JSON object. Step 2 passes only that structured JSON to the summary prompt. Because the summary step never sees raw image pixels, it cannot invent extra details from background noise.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">DECISION 02</span>
              <h3 className="text-base font-bold text-[#252525] dark:text-[#FAF7F2]">Strict Runtime Schema Checking with Zod</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                AI responses can be unpredictable. Before writing any extracted expense data into the database, the output is verified against a strict Zod schema. If a price is formatted incorrectly or a required field is missing, the schema catches it at runtime so bad data never reaches the database.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Testing & Limitations */}
        <section aria-labelledby="section-5" className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">05</span>
            <h2 id="section-5" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              Testing &amp; Limitations
            </h2>
          </div>

          <div className="rounded-xl border border-[#EADFD7] bg-[#FAF7F2] p-4 text-xs leading-relaxed text-[#706B66] dark:border-[#36322E] dark:bg-[#181716] dark:text-[#A8A29D]">
            <p>
              <strong className="text-[#252525] dark:text-[#FAF7F2]">Understanding Automated Tests: </strong>
              In software development, a <em>test suite</em> is a group of related automated tests that verify whether specific functions or modules behave as expected. Having eight Vitest test suites proves that the tested code paths meet their design specifications, but it does not mean the application is completely bug-free or has 100% test coverage.
            </p>
          </div>

          <p className="text-sm leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            The repository contains 8 automated test suites built with Vitest to verify core logic:
          </p>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {verifiedSuites.map((suite) => (
              <div
                key={suite.file}
                className="rounded-lg border border-[#EADFD7] bg-white p-3.5 dark:border-[#36322E] dark:bg-[#211F1D]"
              >
                <div className="flex items-center justify-between">
                  <code className="font-mono text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">
                    {suite.file}
                  </code>
                  <span className="font-mono text-xs font-semibold text-[#CE5E3B] dark:text-[#F08767]">
                    PASS
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#706B66] dark:text-[#A8A29D]">{suite.scope}</p>
              </div>
            ))}
          </div>

          {/* Honest Truth Boundary */}
          <div className="rounded-xl border-l-4 border-[#CE5E3B] border-y border-r border-[#EADFD7] bg-white p-5 dark:border-[#36322E] dark:border-l-[#F08767] dark:bg-[#211F1D]">
            <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">
              Important Operational &amp; Accuracy Disclosures
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
              <li>
                &bull; <strong className="text-[#252525] dark:text-[#FAF7F2]">Schema validation vs. real-world accuracy:</strong> Zod checks that the returned JSON has the correct structure (e.g., that a price is a positive number and merchant is text). It does <em>not</em> guarantee that the AI read a blurry or crumpled receipt correctly in physical reality. If an OCR step misreads $10.00 as $70.00, schema validation cannot detect that mismatch without human confirmation.
              </li>
              <li>
                &bull; <strong className="text-[#252525] dark:text-[#FAF7F2]">No active live public deployment:</strong> This application is an evaluated capstone prototype and is verified strictly through local code execution and test suites.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Repository Link */}
        <section aria-labelledby="section-6" className="space-y-3 border-t border-[#EADFD7] pt-6 dark:border-[#36322E]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">06</span>
            <h2 id="section-6" className="text-xl font-bold tracking-tight text-[#252525] sm:text-2xl dark:text-[#FAF7F2]">
              Repository Link
            </h2>
          </div>

          <p className="text-sm text-[#706B66] dark:text-[#A8A29D]">
            The full source code, Vitest test suites, and schema configurations are public on GitHub:
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://github.com/nmesomarose/VoucherSense-Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E87552] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#CE5E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none dark:hover:bg-[#F08767] dark:focus-visible:ring-offset-[#181716]"
            >
              View VoucherSense AI on GitHub &rarr;
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
