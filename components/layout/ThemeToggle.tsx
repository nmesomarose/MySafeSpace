'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', callback);
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return () => {
    window.removeEventListener('storage', callback);
    media.removeEventListener('change', callback);
    observer.disconnect();
  };
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot(): boolean {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const willBeDark = !document.documentElement.classList.contains('dark');
    if (willBeDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {
        // storage is unavailable
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {
        // storage is unavailable
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#EADFD7] bg-white text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/50 hover:text-[#CE5E3B] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#201E1D] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#262321] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
    >
      {/* Sun icon: displayed when in dark mode to switch to light */}
      <svg
        className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${
          isDark ? 'inline-block' : 'hidden'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>

      {/* Moon icon: displayed when in light mode to switch to dark */}
      <svg
        className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${
          !isDark ? 'inline-block' : 'hidden'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </button>
  );
}
