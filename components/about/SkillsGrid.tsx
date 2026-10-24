import type { SkillCategory, ToolCategory } from '@/content/projects';
import { TechBadge } from '@/components/ui/TechBadge';
import { SkillsCarousel } from '@/components/about/SkillsCarousel';

interface SkillsGridProps {
  categories?: SkillCategory[];
  tools?: ToolCategory[];
  disclosure?: string;
}

export function SkillsGrid({ tools, disclosure }: SkillsGridProps) {
  return (
    <div className="space-y-6">
      {/* 1. Continuous Horizontal Skills & Technology Marquee */}
      <SkillsCarousel />

      {/* 2. Compact Development Tools & AI Assistants */}
      {tools && tools.length > 0 && (
        <div className="rounded-xl border border-[#EADFD7] bg-[#FAF7F2] p-5 space-y-4 dark:border-[#36322E] dark:bg-[#181716]">
          <div className="space-y-1">
            <h3 className="text-sm font-bold tracking-tight text-[#252525] dark:text-[#FAF7F2]">
              Development Tools &amp; AI Workflow Support
            </h3>
            <p className="text-xs text-[#706B66] dark:text-[#A8A29D]">
              Tools and AI assistants used during development, debugging, and productivity workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-[#EADFD7] bg-white p-3.5 space-y-2 dark:border-[#36322E] dark:bg-[#211F1D]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#CE5E3B] uppercase dark:text-[#F08767]">
                    {group.category}
                  </span>
                </div>
                {group.description && (
                  <p className="text-xs text-[#706B66] dark:text-[#A8A29D]">
                    {group.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.tools.map((tool) => (
                    <TechBadge key={tool} label={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {disclosure && (
            <p className="text-xs leading-relaxed text-[#706B66] italic dark:text-[#A8A29D]">
              Note: {disclosure}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
