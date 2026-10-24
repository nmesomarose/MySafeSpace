export function VoucherSenseVisual() {
  return (
    <div className="flex flex-col space-y-3 rounded-xl border border-[#EADFD7] bg-[#F1E5DC]/30 p-4 sm:p-5 transition-colors dark:border-[#36322E] dark:bg-[#211F1D] min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EADFD7] pb-2.5 dark:border-[#36322E]">
        <span className="font-mono text-xs font-bold text-[#252525] tracking-wide dark:text-[#FAF7F2]">
          How Receipt Processing Works
        </span>
        <span className="rounded bg-[#F1E5DC] px-2 py-0.5 font-mono text-xs font-semibold text-[#CE5E3B] dark:bg-[#272422] dark:text-[#F08767] shrink-0">
          8 Vitest Suites
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="rounded-lg border border-[#EADFD7] bg-white p-3 dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">01 / UPLOAD</span>
          <p className="mt-1 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">File Check &amp; S3 Storage</p>
          <p className="mt-0.5 text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            Validates file types with Sharp and uploads receipts to secure storage.
          </p>
        </div>

        <div className="rounded-lg border border-[#EADFD7] bg-white p-3 dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">02 / EXTRACTION</span>
          <p className="mt-1 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Gemini Vision</p>
          <p className="mt-0.5 text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            Background worker reads receipt images into structured fields.
          </p>
        </div>

        <div className="rounded-lg border border-[#EADFD7] bg-white p-3 dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">03 / VALIDATION</span>
          <p className="mt-1 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Zod Schema &amp; Summary</p>
          <p className="mt-0.5 text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            Enforces JSON schema types before generating plain-text summaries.
          </p>
        </div>
      </div>

      <div className="hidden sm:block rounded-lg border border-[#EADFD7] bg-white p-3 dark:border-[#36322E] dark:bg-[#181716] min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[#EADFD7]/60 pb-1.5 dark:border-[#36322E]">
          <span className="font-mono text-xs font-semibold text-[#252525] dark:text-[#FAF7F2]">
            Data Format Validation (Zod)
          </span>
          <span className="font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">Runtime Schema Contract</span>
        </div>
        <pre className="mt-1.5 overflow-x-auto font-mono text-xs leading-relaxed text-[#252525] dark:text-[#FAF7F2] min-w-0">
          <code>{`const ExtractionSchema = z.object({
  merchant: z.string().min(1),
  total: z.number().nonnegative(),
  items: z.array(z.object({ name: z.string(), price: z.number() }))
});`}</code>
        </pre>
      </div>
    </div>
  );
}
