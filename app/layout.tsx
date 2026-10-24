import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { siteConfig } from '@/content/siteConfig';

export const metadata: Metadata = {
  title: `${siteConfig.developer.name} | ${siteConfig.developer.role}`,
  description: `${siteConfig.developer.specialization}. Personal portfolio of Agobi Nmesoma, showcasing practical backend APIs, full-stack systems, and applied AI.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#252525] antialiased transition-colors duration-150 motion-reduce:transition-none dark:bg-[#181716] dark:text-[#FAF7F2]">
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  document.documentElement.classList.add('js');
                } catch (e) {}
              })();
            `,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[#252525] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-[#E87552] dark:focus:bg-[#FAF7F2] dark:focus:text-[#181716]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-[#EADFD7] bg-[#FAF7F2] py-6 text-xs text-[#706B66] dark:border-[#36322E] dark:bg-[#181716] dark:text-[#A8A29D]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 sm:px-6 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.developer.name}. Built with Next.js &amp; Tailwind CSS.
            </p>
            <a
              href="#main"
              className="inline-flex min-h-[44px] items-center text-xs font-semibold text-[#706B66] transition-colors hover:text-[#CE5E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 dark:text-[#A8A29D] dark:hover:text-[#F08767]"
            >
              Back to top &uarr;
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
