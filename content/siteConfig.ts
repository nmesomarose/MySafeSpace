export interface SiteConfig {
  developer: {
    name: string;
    monogram: string;
    role: string;
    specialization: string;
    location?: string;
    headshotPath: string;
  };
  status: {
    isOpenToOpportunities: boolean;
    statusLabel: string;
  };
  contact: {
    githubUrl: string;
    email: string;
    emailComposeUrl: string;
    linkedinUrl: string;
    resumePath?: string;
  };
}

export const siteConfig: SiteConfig = {
  developer: {
    name: "Agobi Nmesoma",
    monogram: "AN",
    role: "Software Developer",
    specialization: "Backend APIs, Full-Stack Systems & Applied AI",
    location: "Open to roles in Nigeria and remote.",
    headshotPath: "/images/agobi-nmesoma.jpg",
  },
  status: {
    isOpenToOpportunities: false,
    statusLabel: "Open to Opportunities",
  },
  contact: {
    githubUrl: "https://github.com/nmesomarose",
    email: "agobinmesoma55@gmail.com",
    emailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=agobinmesoma55@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/agobi-nmesoma-959139278/",
    resumePath: undefined,
  },
};
