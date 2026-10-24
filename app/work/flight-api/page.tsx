import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flight Booking REST API Case Study | Agobi Nmesoma',
  description:
    'Case study of Flight Booking REST API: a relational backend built with Express 5, Prisma on PostgreSQL, consistent REST envelopes, and serverless runtime debugging.',
};

export default function FlightApiPage() {
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
            Flight Reservation API
          </span>
          <span className="text-xs font-medium text-[#706B66] dark:text-[#A8A29D]">
            Jest &amp; Supertest Verified
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-5xl dark:text-[#FAF7F2]">
          Flight Booking REST API
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
          A backend REST service built to manage commercial flight reservations across four related entities: airlines, flights, customers, and bookings.
        </p>

        {/* Project Snapshot Grid */}
        <div className="grid grid-cols-1 gap-3 rounded-xl border border-[#EADFD7] bg-white p-4 min-[360px]:grid-cols-2 sm:grid-cols-4 dark:border-[#36322E] dark:bg-[#211F1D]">
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Role</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Backend API Engineering</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Framework</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Express 5 &amp; TypeScript</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Database &amp; ORM</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Prisma + PostgreSQL</p>
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#706B66] uppercase dark:text-[#A8A29D]">Status</span>
            <p className="mt-0.5 text-xs font-bold text-[#252525] dark:text-[#FAF7F2]">Decommissioned (Code Audit)</p>
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
            Flight Booking REST API is a web service designed to manage flight reservation workflows over HTTP. It allows client applications to look up scheduled flights, check available seats, register customer profiles, and book tickets. Built with Express 5, TypeScript, and Prisma on PostgreSQL, the system is designed to provide clear, predictable endpoints and ensure reservation records always remain accurate.
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
            Reservation backends face several practical challenges when coordinating multiple interrelated resources:
          </p>
          <div className="grid gap-3.5 sm:grid-cols-3">
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Orphaned Records</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                If a booking is created without verifying that both the flight and customer exist, the database ends up with inconsistent, broken data that causes errors.
              </p>
            </div>
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Inconsistent JSON Responses</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                If some routes return raw arrays, others return nested objects, and errors return plain text, frontend clients must write messy, fragile defensive code.
              </p>
            </div>
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1.5 dark:border-[#36322E] dark:bg-[#211F1D]">
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Serverless Startup Clashes</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                When deploying Express apps to serverless clouds, multiple entry files or un-migrated databases can cause deployment crashes and connection timeouts.
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
            The application organizes all reservation activities around four core database entities connected through relational foreign keys:
          </p>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 1</span>
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Airlines</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Maintains airline carriers with standardized codes and active operational status. Each airline can operate multiple flights.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 2</span>
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Flights</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Scheduled routes with departure and arrival airports, departure dates, seat capacity limits, and pricing.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 3</span>
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Customers</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Passenger profiles with validated contact information and identification records.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-4 space-y-1 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">RESOURCE 4</span>
              <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">Bookings</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Connects a customer to a specific flight, verifying seat quotas and updating booking status atomically.
              </p>
            </div>
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

          <div className="space-y-3.5">
            <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">STANDARD 01</span>
              <h3 className="text-base font-bold text-[#252525] dark:text-[#FAF7F2]">Standardized JSON Response Envelopes</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Every endpoint returns a consistent JSON envelope format. Successful requests always return a <code className="font-mono text-xs text-[#252525] dark:text-[#FAF7F2]">data</code> field along with optional <code className="font-mono text-xs text-[#252525] dark:text-[#FAF7F2]">pagination</code> information (page number, limit, total count). Failed requests always return standardized <code className="font-mono text-xs text-[#252525] dark:text-[#FAF7F2]">error</code> objects with human-readable error descriptions.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">DEBUGGING 01</span>
              <h3 className="text-base font-bold text-[#252525] dark:text-[#FAF7F2]">Vercel Serverless Entrypoint Ambiguity</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                During serverless deployment to Vercel, the application initially failed to boot because two entrypoint files existed in the source directory: <code className="font-mono text-xs">src/app.ts</code> (an uncalled application factory) and <code className="font-mono text-xs">src/index.ts</code>. By renaming the factory to <code className="font-mono text-xs">src/app-factory.ts</code>, the build runner clearly identified the true serverless handler, resolving the invocation failure.
              </p>
            </div>

            <div className="rounded-xl border border-[#EADFD7] bg-white p-5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]">
              <span className="font-mono text-xs font-bold text-[#CE5E3B] dark:text-[#F08767]">DEBUGGING 02</span>
              <h3 className="text-base font-bold text-[#252525] dark:text-[#FAF7F2]">Prisma P2021 Schema Migration Synchronization</h3>
              <p className="text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Serverless instances failed on cold starts with Prisma error P2021 (table does not exist) because the server code started accepting queries before database migrations had run on the remote PostgreSQL instance. Adding an explicit <code className="font-mono text-xs">prisma migrate deploy</code> step to the deployment pipeline resolved the timing mismatch.
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
              In backend development, <em>Jest</em> is a JavaScript testing framework, and <em>Supertest</em> is a library for making simulated HTTP calls to test route responses. Together, they allow developers to test how an API responds to real requests (such as validating query parameters, HTTP status codes, and rate limits) without needing to manually click buttons in a browser.
            </p>
          </div>

          <p className="text-sm leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            The repository includes automated integration tests checking status codes (200, 400, 404, 429), pagination counts, and input boundary conditions across each resource endpoint.
          </p>

          {/* Honest Truth Boundary */}
          <div className="rounded-xl border-l-4 border-[#CE5E3B] border-y border-r border-[#EADFD7] bg-white p-5 dark:border-[#36322E] dark:border-l-[#F08767] dark:bg-[#211F1D]">
            <h3 className="text-sm font-bold text-[#252525] dark:text-[#FAF7F2]">
              Decommissioned Live Endpoint Disclosure
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
              There is currently <strong>no active public live deployment</strong> for this API. The historical Vercel endpoint was decommissioned (returns HTTP 404). This case study is evaluated strictly through the audited codebase, schema definitions, post-mortem incident documentation, and automated test coverage.
            </p>
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
            The full source code, route controllers, and post-mortem incident reports are available on GitHub:
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://github.com/nmesomarose/Flight-API"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E87552] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#CE5E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none dark:hover:bg-[#F08767] dark:focus-visible:ring-offset-[#181716]"
            >
              View Flight API on GitHub &rarr;
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
