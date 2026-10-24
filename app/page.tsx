import Image from 'next/image';
import { siteConfig } from '@/content/siteConfig';
import {
  featuredProjects,
  verifiedSkills,
  developmentTools,
  aiAssistantDisclosure,
} from '@/content/projects';
import { FeaturedCard } from '@/components/projects/FeaturedCard';
import { SkillsGrid } from '@/components/about/SkillsGrid';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/ui/Icons';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 md:py-14 space-y-10 md:space-y-14">
      {/* 1. Hero Section */}
      <section aria-labelledby="hero-title" className="pt-1 md:pt-3">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
          {/* Left Column: Identity, Intro & Actions */}
          <div className="space-y-4 md:col-span-7 animate-hero-intro motion-reduce:animate-none">
            <div className="inline-flex items-center gap-2">
              <span className="rounded-full bg-[#F1E5DC] px-3 py-1 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
                {siteConfig.developer.role}
              </span>
            </div>

            <div className="space-y-2.5">
              <h1
                id="hero-title"
                className="text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-5xl leading-[1.18] dark:text-[#FAF7F2]"
              >
                Backend &amp; Full-Stack Developer
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
                Hi, I&apos;m {siteConfig.developer.name}. Focused on TypeScript, Node.js, and PostgreSQL to build practical web applications, resilient backend APIs, and useful AI integrations.
              </p>

              <p className="text-sm font-semibold text-[#CE5E3B] dark:text-[#F08767]">
                Open to roles in Nigeria and remote.
              </p>
            </div>

            {/* Clear Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E87552] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 ease-out hover:bg-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:hover:bg-[#F08767] dark:focus-visible:ring-offset-[#181716]"
              >
                Explore My Work &darr;
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#EADFD7] bg-white px-5 py-2.5 text-sm font-semibold text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/50 hover:text-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#211F1D] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
              >
                Get in Touch
              </a>

              {/* CV action shown only when actual PDF is configured */}
              {siteConfig.contact.resumePath && (
                <a
                  href={siteConfig.contact.resumePath}
                  download
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#EADFD7] bg-white px-4 py-2 text-xs font-semibold text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/50 hover:text-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#211F1D] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Headshot with subtle warm backdrop */}
          <div className="flex justify-center sm:justify-start md:justify-end md:col-span-5 animate-hero-portrait motion-reduce:animate-none">
            <div className="relative">
              {/* Subtle ambient peach glow backdrop */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-[#F1E5DC] via-[#EADFD7] to-[#F1E5DC] opacity-80 blur-xs dark:from-[#272422] dark:via-[#36322E] dark:to-[#272422]"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] w-48 sm:w-56 md:w-60 overflow-hidden rounded-2xl border border-[#EADFD7] bg-white shadow-xs dark:border-[#36322E] dark:bg-[#211F1D]">
                <Image
                  src={siteConfig.developer.headshotPath}
                  alt={`Portrait of ${siteConfig.developer.name}, ${siteConfig.developer.role}`}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 240px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-20 border-t border-[#EADFD7] pt-8 md:pt-12 space-y-4 dark:border-[#36322E]"
      >
        <ScrollReveal className="space-y-4">
          <div className="space-y-1">
            <span className="rounded-full bg-[#F1E5DC] px-3 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
              About
            </span>
            <h2
              id="about-title"
              className="text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#FAF7F2]"
            >
              From soil science to software
            </h2>
          </div>

          <div className="max-w-3xl space-y-3.5 text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
            <p>
              I came to software through a different door. I studied Soil Science and Environment, a field built on evidence, systems and real-world constraints, and I carry that approach into my engineering.
            </p>
            <p>
              What pulled me in is how a product comes together: the requirement, the data model, the API, the interface, and the tests that keep it honest. I work across that whole chain in TypeScript, and I like owning a feature from the first spec to working, tested software.
            </p>
            <p>
              My projects show how I work. VoucherSense AI turns receipt photos into validated expense data through an asynchronous pipeline. My Flight Booking API focuses on relational integrity, consistent responses and test coverage.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Selected Projects Section */}
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="scroll-mt-20 border-t border-[#EADFD7] pt-8 md:pt-12 space-y-6 dark:border-[#36322E]"
      >
        <ScrollReveal className="space-y-1.5">
          <span className="rounded-full bg-[#F1E5DC] px-3 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
            Selected Work
          </span>
          <h2
            id="projects-title"
            className="text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#FAF7F2]"
          >
            Featured Projects
          </h2>
          <p className="max-w-2xl text-base text-[#706B66] dark:text-[#A8A29D]">
            Two verified projects demonstrating asynchronous AI worker workflows and relational REST API backend engineering.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal delay={0}>
            <FeaturedCard project={featuredProjects[0]} />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <FeaturedCard project={featuredProjects[1]} />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Technologies & Development Tools Section */}
      <section
        id="technologies"
        aria-labelledby="technologies-title"
        className="scroll-mt-20 border-t border-[#EADFD7] pt-8 md:pt-12 space-y-6 dark:border-[#36322E]"
      >
        <ScrollReveal className="space-y-1.5">
          <span className="rounded-full bg-[#F1E5DC] px-3 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
            Toolbelt
          </span>
          <h2
            id="technologies-title"
            className="text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#FAF7F2]"
          >
            Verified Technologies &amp; Tools
          </h2>
          <p className="max-w-2xl text-base text-[#706B66] dark:text-[#A8A29D]">
            A transparent summary of languages, frameworks, and developer tools verified across my projects and test suites.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger>
          <SkillsGrid
            categories={verifiedSkills}
            tools={developmentTools}
            disclosure={aiAssistantDisclosure}
          />
        </ScrollReveal>
      </section>

      {/* 5. Contact Section */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-20"
      >
        <ScrollReveal className="rounded-2xl border border-[#EADFD7] bg-white p-5 sm:p-9 transition-colors dark:border-[#36322E] dark:bg-[#211F1D]">
          <div className="space-y-4">
            <span className="rounded-full bg-[#F1E5DC] px-3 py-0.5 text-xs font-semibold tracking-wide text-[#CE5E3B] uppercase dark:bg-[#272422] dark:text-[#F08767]">
              Contact
            </span>
            <h2
              id="contact-title"
              className="text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#FAF7F2]"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#706B66] dark:text-[#A8A29D]">
              I&apos;m open to software developer roles in Nigeria and remote. If you&apos;re hiring, collaborating, or want to talk through one of my projects, my inbox is open.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {siteConfig.contact.email && (
                <a
                  href={siteConfig.contact.emailComposeUrl || `mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 rounded-lg bg-[#E87552] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-150 ease-out hover:bg-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:hover:bg-[#F08767] dark:focus-visible:ring-offset-[#181716]"
                >
                  <EmailIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{siteConfig.contact.email}</span>
                </a>
              )}

              {siteConfig.contact.githubUrl && (
                <a
                  href={siteConfig.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#EADFD7] bg-white px-5 py-2.5 text-sm font-semibold text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/50 hover:text-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#181716] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
              )}

              {siteConfig.contact.linkedinUrl && (
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#EADFD7] bg-white px-5 py-2.5 text-sm font-semibold text-[#252525] transition-all duration-150 ease-out hover:border-[#E87552]/40 hover:bg-[#F1E5DC]/50 hover:text-[#CE5E3B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87552] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:active:transform-none dark:border-[#36322E] dark:bg-[#181716] dark:text-[#FAF7F2] dark:hover:border-[#E87552]/40 dark:hover:bg-[#272422] dark:hover:text-[#F08767] dark:focus-visible:ring-offset-[#181716]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
