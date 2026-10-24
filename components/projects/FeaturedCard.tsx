import Link from 'next/link';
import type { FeaturedProject } from '@/content/projects';
import { TechBadge } from '@/components/ui/TechBadge';

interface FeaturedCardProps {
  project: FeaturedProject;
}

export function FeaturedCard({ project }: FeaturedCardProps) {
  return (
    <article className="group/card rounded-2xl border border-[#EADFD7] bg-white p-5 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-[#E87552]/40 motion-reduce:hover:transform-none motion-reduce:transition-none dark:border-[#36322E] dark:bg-[#211F1D] dark:hover:border-[#E87552]/40">
      <div className="space-y-4">
        {/* Category & Verification Metadata */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-md bg-[#F1E5DC] px-2.5 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
            {project.category}
          </span>
          <span className="text-xs font-medium text-[#706B66] dark:text-[#A8A29D]">
            {project.testCount}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#FAF7F2] transition-colors group-hover/card:text-[#CE5E3B] dark:group-hover/card:text-[#F08767]">
          <Link
            href={project.caseStudyUrl}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] rounded-md dark:focus-visible:ring-offset-[#181716]"
          >
            {project.title}
          </Link>
        </h3>

        {/* Concise Description */}
        <p className="max-w-3xl text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
          {project.description}
        </p>

        {/* Core Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Link
            href={project.caseStudyUrl}
            className="group/btn inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#E87552] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 ease-out hover:bg-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:hover:bg-[#F08767] dark:focus-visible:ring-offset-[#181716]"
          >
            <span>View Case Study</span>
            <span className="inline-block transition-transform duration-150 ease-out group-hover/btn:translate-x-1 motion-reduce:transition-none">
              &rarr;
            </span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#EADFD7] bg-white px-5 py-2.5 text-sm font-semibold text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/40 hover:text-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#181716] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </article>
  );
}
