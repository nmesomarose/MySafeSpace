interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#EADFD7] bg-white px-2.5 py-1 text-xs font-medium text-[#252525] transition-colors hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/40 dark:border-[#36322E] dark:bg-[#181716] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422]">
      {label}
    </span>
  );
}
