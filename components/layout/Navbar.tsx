'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/siteConfig';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'technologies', label: 'Skills', href: '/#technologies' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  window.addEventListener('resize', callback, { passive: true });
  return () => {
    window.removeEventListener('scroll', callback);
    window.removeEventListener('resize', callback);
  };
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '';
  if (window.location.pathname !== '/') return '';

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // 1. Hero check: if above the About section threshold, clear active state
  const aboutEl = document.getElementById('about');
  const aboutTop = aboutEl ? aboutEl.offsetTop : 400;
  if (scrollY < aboutTop - 180) {
    return '';
  }

  // 2. Bottom of the page check: reliably activate Contact when scrolled near bottom
  if (windowHeight + scrollY >= fullHeight - 80) {
    return 'contact';
  }

  // 3. Middle sections: check which section has reached the reading threshold
  const sectionIds = ['about', 'projects', 'technologies', 'contact'];
  const threshold = 160;
  let currentActive = '';

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= threshold) {
        currentActive = id;
      }
    }
  }

  return currentActive;
}

function getServerSnapshot(): string {
  return '';
}

export function Navbar() {
  const activeSection = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EADFD7] bg-[#FAF7F2]/90 backdrop-blur-md transition-colors duration-150 motion-reduce:transition-none dark:border-[#36322E] dark:bg-[#181716]/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3">
        {/* Branding */}
        <Link
          href="/"
          className="group inline-flex min-h-[44px] items-center gap-2 sm:gap-2.5 text-base font-bold text-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] rounded-md transition-colors dark:text-[#FAF7F2] dark:focus-visible:ring-offset-[#181716]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1E5DC] text-xs font-extrabold text-[#252525] transition-colors group-hover:bg-[#E87552] group-hover:text-white dark:bg-[#272422] dark:text-[#FAF7F2]">
            {siteConfig.developer.monogram}
          </span>
          <span className="hidden sm:inline tracking-tight text-sm sm:text-base">{siteConfig.developer.name}</span>
        </Link>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-4 md:gap-6">
          <nav aria-label="Main Navigation">
            <ul className="flex items-center gap-0.5 sm:gap-1.5 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none dark:focus-visible:ring-offset-[#181716] ${
                        isActive
                          ? 'bg-[#F1E5DC] text-[#CE5E3B] font-semibold shadow-xs dark:bg-[#272422] dark:text-[#F08767]'
                          : 'text-[#706B66] font-medium hover:text-[#252525] hover:bg-[#F1E5DC]/40 dark:text-[#A8A29D] dark:hover:text-[#FAF7F2] dark:hover:bg-[#272422]/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          {siteConfig.status.isOpenToOpportunities && (
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-[#EADFD7] bg-white px-3 py-1 text-xs font-semibold text-[#252525] dark:border-[#36322E] dark:bg-[#211F1D] dark:text-[#FAF7F2]">
              <span className="h-2 w-2 rounded-full bg-[#E87552]" aria-hidden="true" />
              <span>{siteConfig.status.statusLabel}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
