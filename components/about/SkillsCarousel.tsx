import React from 'react';

interface SkillItem {
  name: string;
}

const SKILLS: SkillItem[] = [
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'PostgreSQL' },
  { name: 'Prisma' },
  { name: 'AWS S3' },
  { name: 'Tailwind CSS' },
  { name: 'Google Gemini API' },
  { name: 'REST APIs' },
  { name: 'Vitest' },
  { name: 'Jest' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Zod' },
  { name: 'HTML5' },
];

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case 'TypeScript':
      return (
        <svg className="h-5 w-5 shrink-0 rounded-xs" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M5.5 10.5h5v2h-1.6v6.5h-1.8v-6.5h-1.6v-2zm6.2 6.8c.4.4.9.7 1.4.9.6.2 1.2.3 1.8.3.7 0 1.3-.1 1.8-.4.5-.3.8-.7.8-1.2 0-.3-.1-.6-.3-.8-.2-.2-.5-.4-.9-.5-.4-.1-.9-.3-1.6-.4-.8-.2-1.4-.4-1.9-.6-.5-.2-.9-.6-1.1-1-.2-.4-.4-.9-.4-1.5 0-.7.2-1.3.6-1.8.4-.5.9-.9 1.6-1.1.7-.3 1.4-.4 2.2-.4.7 0 1.4.1 2 .3.6.2 1.1.5 1.5.9l-1 1.5c-.7-.5-1.5-.8-2.4-.8-.6 0-1.1.1-1.5.4-.4.3-.6.6-.6 1.1 0 .3.1.5.3.7.2.2.5.3.8.4.4.1.8.3 1.5.4.8.2 1.5.5 2 .7.5.3.9.6 1.2 1.1.3.4.4 1 .4 1.6 0 .7-.2 1.3-.6 1.8-.4.5-1 .9-1.7 1.2-.7.3-1.6.4-2.5.4-.8 0-1.6-.1-2.4-.4-.7-.3-1.3-.7-1.8-1.2l1.1-1.5z" fill="#FAF7F2" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className="h-5 w-5 shrink-0 rounded-xs" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M8.5 10.5h1.8v5.8c0 .8-.2 1.4-.5 1.7-.4.4-.9.5-1.7.5-.5 0-1-.1-1.4-.3l.3-1.5c.3.1.6.2.9.2.4 0 .6-.1.7-.3.1-.2.2-.5.2-.9v-5.2zm4.8 6.8c.4.4.9.7 1.4.9.6.2 1.2.3 1.8.3.7 0 1.3-.1 1.8-.4.5-.3.8-.7.8-1.2 0-.3-.1-.6-.3-.8-.2-.2-.5-.4-.9-.5-.4-.1-.9-.3-1.6-.4-.8-.2-1.4-.4-1.9-.6-.5-.2-.9-.6-1.1-1-.2-.4-.4-.9-.4-1.5 0-.7.2-1.3.6-1.8.4-.5.9-.9 1.6-1.1.7-.3 1.4-.4 2.2-.4.7 0 1.4.1 2 .3.6.2 1.1.5 1.5.9l-1 1.5c-.7-.5-1.5-.8-2.4-.8-.6 0-1.1.1-1.5.4-.4.3-.6.6-.6 1.1 0 .3.1.5.3.7.2.2.5.3.8.4.4.1.8.3 1.5.4.8.2 1.5.5 2 .7.5.3.9.6 1.2 1.1.3.4.4 1 .4 1.6 0 .7-.2 1.3-.6 1.8-.4.5-1 .9-1.7 1.2-.7.3-1.6.4-2.5.4-.8 0-1.6-.1-2.4-.4-.7-.3-1.3-.7-1.8-1.2l1.1-1.5z" fill="#18181B" />
        </svg>
      );
    case 'React':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.6" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="#00D8FF" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="currentColor" className="text-zinc-900 dark:text-zinc-100" />
          <path d="M7.8 17.5V6.5h2.1l7.3 9.4V6.5h1.8v11h-1.8L9.9 8.1v9.4H7.8z" fill="currentColor" className="text-white dark:text-zinc-900" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#539E43" />
          <path d="M12 4.1l7.2 4.2v8.4L12 20.9 4.8 16.7V8.3L12 4.1z" fill="#68A063" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" fillOpacity="0.85" />
        </svg>
      );
    case 'Express':
      return (
        <svg className="h-5 w-5 shrink-0 text-zinc-800 dark:text-zinc-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6h4M4 18h4" strokeLinecap="round" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#336791" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.5 0-5.5-2.2-5.5-4.5 0-1.8 1.2-3.2 2.8-3.7-.3-.6-.5-1.3-.5-2.1 0-2.3 2-4.2 4.5-4.2s4.5 1.9 4.5 4.2c0 .8-.2 1.5-.5 2.1 1.6.5 2.8 1.9 2.8 3.7 0 2.3-2 4.5-5.5 4.5h-.1z" />
        </svg>
      );
    case 'Prisma':
      return (
        <svg className="h-5 w-5 shrink-0 text-zinc-800 dark:text-zinc-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.4 2.4a1.2 1.2 0 00-1.8-.4L2.8 8.2a1.2 1.2 0 00-.5 1.4l5.3 12.3a1.2 1.2 0 001.6.6l12.4-5.8a1.2 1.2 0 00.6-1.5L13.4 2.4zm-1.1 2.9l6.5 10.3-9.5 4.4-4.1-9.6 7.1-5.1z" />
        </svg>
      );
    case 'AWS S3':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" fill="#E87552" fillOpacity="0.15" stroke="#E87552" strokeWidth="1.8" />
          <path d="M7 9h10M7 12h10M7 15h6" stroke="#E87552" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Google Gemini API':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#CE5E3B" aria-hidden="true">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      );
    case 'REST APIs':
      return (
        <svg className="h-5 w-5 shrink-0 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
          <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
          <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
        </svg>
      );
    case 'Vitest':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18.8 3.5l-6 10.3L9 8l-6 12.5h18L18.8 3.5z" fill="#FCC72B" />
          <path d="M12.8 13.8L18.8 3.5 15 21H3l9.8-7.2z" fill="#729B1B" />
        </svg>
      );
    case 'Jest':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#C21325" aria-hidden="true">
          <path d="M12 2a1.5 1.5 0 00-1.5 1.5v3.2a6 6 0 00-4.2 4.2L3.5 11A1.5 1.5 0 002 12.5v7A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5l-2.8-.1a6 6 0 00-4.2-4.2V3.5A1.5 1.5 0 0012 2zm-1.5 7.6a4 4 0 013 0v4.8h-3v-4.8z" />
        </svg>
      );
    case 'Git':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
          <path d="M21.6 10.9L13.1 2.4a1.8 1.8 0 00-2.5 0L8.8 4.2l3.2 3.2a2.1 2.1 0 012.7 2.7l3.1 3.1a2.1 2.1 0 11-1.3 1.3l-2.9-2.9v4.2a2.1 2.1 0 11-1.8 0V11a2.1 2.1 0 01-1.1-2.8L7.5 5 2.4 10.1a1.8 1.8 0 000 2.5l8.5 8.5a1.8 1.8 0 002.5 0l8.2-8.2a1.8 1.8 0 000-2.5z" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg className="h-5 w-5 shrink-0 text-zinc-800 dark:text-zinc-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'Zod':
      return (
        <svg className="h-5 w-5 shrink-0 rounded-xs" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3E67B1" />
          <path d="M7 7h10l-7.5 9h7.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="#E34F26" aria-hidden="true">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.7 6.3H9.2l.2 2.2h8l-.6 6.3-4.8 1.3-4.8-1.3-.3-3.7h2.2l.2 1.8 2.7.7 2.7-.7.3-3.2H6.7L6 4.1h12l-.3 4.2z" />
        </svg>
      );
    default:
      return null;
  }
}

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#EADFD7] bg-white px-4 py-2 sm:px-5 sm:py-2.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E87552]/50 hover:shadow-xs motion-reduce:hover:transform-none dark:border-[#36322E] dark:bg-[#211F1D] dark:hover:border-[#E87552]/50 select-none cursor-default">
      <TechIcon name={skill.name} />
      <span className="text-sm font-semibold tracking-tight text-[#252525] dark:text-[#FAF7F2] whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsCarousel() {
  return (
    <div
      className="skills-marquee-container relative w-full overflow-hidden py-3"
      aria-label="Verified technologies and tools carousel"
    >
      <div className="flex w-max animate-skills-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center will-change-transform">
        {/* Primary Track (Accessible to Screen Readers) */}
        <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:pr-0">
          {SKILLS.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Duplicate Track (Hidden from Accessibility Tree & in Reduced-Motion Mode) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 motion-reduce:hidden"
        >
          {SKILLS.map((skill, idx) => (
            <SkillPill key={`dup-${skill.name}-${idx}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
