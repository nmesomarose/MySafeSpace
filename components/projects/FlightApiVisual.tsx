export function FlightApiVisual() {
  return (
    <div className="flex flex-col space-y-3 rounded-xl border border-[#EADFD7] bg-[#F1E5DC]/30 p-4 sm:p-5 transition-colors dark:border-[#36322E] dark:bg-[#211F1D] min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EADFD7] pb-2.5 dark:border-[#36322E]">
        <span className="font-mono text-xs font-bold text-[#252525] tracking-wide dark:text-[#FAF7F2]">
          Relational Resources &amp; API Responses
        </span>
        <span className="rounded bg-[#F1E5DC] px-2 py-0.5 font-mono text-xs font-semibold text-[#CE5E3B] dark:bg-[#272422] dark:text-[#F08767] shrink-0">
          Jest &amp; Supertest
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="rounded-lg border border-[#EADFD7] bg-white p-2.5 text-center dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 1</span>
          <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Airlines</p>
          <p className="mt-0.5 font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">1 : N Flights</p>
        </div>
        <div className="rounded-lg border border-[#EADFD7] bg-white p-2.5 text-center dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 2</span>
          <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Flights</p>
          <p className="mt-0.5 font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">1 : N Bookings</p>
        </div>
        <div className="rounded-lg border border-[#EADFD7] bg-white p-2.5 text-center dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 3</span>
          <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Customers</p>
          <p className="mt-0.5 font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">1 : N Bookings</p>
        </div>
        <div className="rounded-lg border border-[#EADFD7] bg-white p-2.5 text-center dark:border-[#36322E] dark:bg-[#181716]">
          <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 4</span>
          <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Bookings</p>
          <p className="mt-0.5 font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">Relational Join</p>
        </div>
      </div>

      <div className="hidden sm:block rounded-lg border border-[#EADFD7] bg-white p-3 dark:border-[#36322E] dark:bg-[#181716] min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[#EADFD7]/60 pb-1.5 dark:border-[#36322E]">
          <span className="font-mono text-xs font-semibold text-[#252525] dark:text-[#FAF7F2]">
            Standardized JSON Response Envelope
          </span>
          <span className="font-mono text-xs text-[#706B66] dark:text-[#A8A29D]">GET /api/v1/flights</span>
        </div>
        <pre className="mt-1.5 overflow-x-auto font-mono text-xs leading-relaxed text-[#252525] dark:text-[#FAF7F2] min-w-0">
          <code>{`{
  "status": "success",
  "data": [
    { "id": "fl_849", "flightNo": "SK-201", "seatsAvailable": 12, "price": 240 }
  ],
  "pagination": { "page": 1, "limit": 10, "total": 18, "totalPages": 2 }
}`}</code>
        </pre>
      </div>
    </div>
  );
}
