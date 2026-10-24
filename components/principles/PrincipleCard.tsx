import type { EngineeringPrinciple } from '@/content/projects';

interface PrincipleCardProps {
  principle: EngineeringPrinciple;
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  const getDomainTag = (num: string) => {
    switch (num) {
      case '01':
        return 'DATA ISOLATION';
      case '02':
        return 'AI INGESTION';
      case '03':
        return 'API INTEGRITY';
      default:
        return 'SYSTEM DESIGN';
    }
  };

  return (
    <article className="flex flex-col justify-between rounded-xl border border-[#252525]/10 bg-white p-6 transition-all duration-200 hover:border-[#E87552]/40 hover:shadow-sm md:p-7">
      <div className="space-y-4">
        {/* Header: Number and domain indicator */}
        <div className="flex items-center justify-between border-b border-[#252525]/10 pb-3">
          <span className="font-mono text-base font-extrabold text-[#CE5E3B]">
            {principle.number}
          </span>
          <span className="rounded bg-[#F1E5DC] px-2 py-0.5 font-mono text-[10px] font-bold text-[#252525]">
            {getDomainTag(principle.number)}
          </span>
        </div>

        {/* Principle Title */}
        <h3 className="text-lg font-bold tracking-tight text-[#252525]">
          {principle.title}
        </h3>

        {/* Core Summary */}
        <p className="text-sm leading-relaxed text-[#706B66]">
          {principle.summary}
        </p>

        {/* Codebase Implementation Detail */}
        <div className="rounded-lg border border-[#252525]/10 bg-[#FAF7F2] p-3.5 text-xs leading-relaxed text-[#706B66]">
          <span className="font-bold text-[#252525]">Repo Proof: </span>
          {principle.implementationDetail}
        </div>
      </div>
    </article>
  );
}
