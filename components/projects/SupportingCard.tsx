import type { SupportingProject } from '@/content/projects';
import { TechBadge } from '@/components/ui/TechBadge';

interface SupportingCardProps {
  project: SupportingProject;
}

export function SupportingCard({ project }: SupportingCardProps) {
  const isSecureRecord = project.id === 'secure-record-management';

  return (
    <article className="flex flex-col justify-between rounded-xl border border-[#252525]/10 bg-white p-6 transition-all duration-200 hover:border-[#E87552]/40 hover:shadow-sm md:p-7">
      <div className="space-y-4">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-[#F1E5DC] px-2.5 py-1 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-[#706B66]">
            Architectural Slice
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-[#252525]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#706B66]">
          {project.description}
        </p>

        {/* Architecture Invariant Callout */}
        <div className="rounded-lg border border-[#252525]/10 bg-[#FAF7F2] p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-[#252525] uppercase">
              Architectural Invariant
            </span>
            <span className="font-mono text-[10px] text-[#CE5E3B]">Verified Rule</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-[#706B66]">
            {project.architectureInvariant}
          </p>

          {/* Visual Code / Query Snippet Callout */}
          <div className="mt-3 rounded border border-[#252525]/10 bg-white p-2.5 font-mono text-[11px] text-[#252525]">
            {isSecureRecord ? (
              <div>
                <span className="text-[#CE5E3B]">-- Query-Level Tenant Isolation</span>
                <br />
                <span>SELECT * FROM records</span>
                <br />
                <span className="font-bold text-[#252525]">WHERE id = $recordId AND userId = $sessionUserId;</span>
              </div>
            ) : (
              <div>
                <span className="text-[#CE5E3B]">-- Auth &amp; Session Boundary</span>
                <br />
                <span>POST /auth/login &rarr; bcrypt.compare()</span>
                <br />
                <span className="font-bold text-[#252525]">&rarr; Set-Cookie: session_token (HttpOnly, SameSite=Lax)</span>
              </div>
            )}
          </div>
        </div>

        {/* Honest Scope Disclosure */}
        {project.disclosureNote && (
          <div
            role="note"
            className="rounded-md border-l-2 border-[#CE5E3B] bg-[#F1E5DC]/50 px-3 py-2 text-xs font-medium text-[#706B66]"
          >
            <span className="font-semibold text-[#252525]">Scope Boundary: </span>
            {project.disclosureNote}
          </div>
        )}
      </div>

      {/* Footer: Stack & External Repository Link */}
      <div className="mt-6 space-y-4 border-t border-[#252525]/10 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#252525] hover:text-[#CE5E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] rounded-md motion-reduce:transition-none"
          >
            View Repository on GitHub &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
