export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureHighlight: string;
  techStack: string[];
  testCount: string;
  caseStudyUrl: string;
  githubUrl: string;
}

export interface SupportingProject {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureInvariant: string;
  techStack: string[];
  githubUrl: string;
  disclosureNote?: string;
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  summary: string;
  implementationDetail: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ToolCategory {
  category: string;
  description?: string;
  tools: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'vouchersense-ai',
    title: 'VoucherSense AI',
    category: 'Receipt & Expense Processing',
    description:
      'An application that takes uploaded receipt photos or PDF vouchers and extracts clean expense details, with an option to generate a plain-language summary of spending.',
    architectureHighlight:
      'Uploads are checked with Sharp for allowed image types and dimensions, stored in AWS S3, and processed asynchronously by a background worker. A two-step Gemini process separates OCR field extraction from summary generation, validated with strict Zod schemas.',
    techStack: ['Next.js 16', 'TypeScript', 'Google Gemini API', 'AWS S3', 'Prisma', 'Sharp', 'Zod', 'Vitest'],
    testCount: '8 Vitest suites verified',
    caseStudyUrl: '/work/vouchersense-ai',
    githubUrl: 'https://github.com/nmesomarose/VoucherSense-Ai',
  },
  {
    id: 'flight-api',
    title: 'Flight Booking REST API',
    category: 'Flight Reservation API',
    description:
      'A backend REST service built to manage commercial flight reservations across four related resources: airlines, flights, customers, and bookings.',
    architectureHighlight:
      'Supports route discovery with filtering and pagination, request validation, consistent JSON success and error formats, and database foreign keys to keep reservation records accurate. Includes a documented debugging post-mortem resolving Vercel deployment and database migration issues.',
    techStack: ['Express', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Jest', 'Supertest'],
    testCount: 'Jest & Supertest suites',
    caseStudyUrl: '/work/flight-api',
    githubUrl: 'https://github.com/nmesomarose/Flight-API',
  },
];

export const verifiedSkills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML5'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'Next.js', 'REST APIs'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'Prisma', 'AWS S3 SDK'],
  },
  {
    category: 'Testing & Validation',
    skills: ['Vitest', 'Jest', 'Supertest', 'Zod'],
  },
  {
    category: 'Frontend & Applied AI',
    skills: ['React', 'Tailwind CSS', 'Google Gemini API'],
  },
];

export const developmentTools: ToolCategory[] = [
  {
    category: 'Developer Tools',
    description: 'Version control, deployment & code management',
    tools: ['Git', 'GitHub', 'Vercel (Historical Debugging)'],
  },
  {
    category: 'AI Assistants',
    description: 'Pair programming, workflow support & code review',
    tools: ['Google Antigravity', 'Claude', 'ChatGPT', 'Google Gemini'],
  },
];

export const aiAssistantDisclosure =
  'AI assistants are used for development workflow support, code reviews, and pair programming; models are developed and provided by their respective platforms.';
