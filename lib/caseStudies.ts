import type {
  CaseStudyWindowCard,
  CaseStudyWindowTab,
} from "@/components/case-study/CaseStudyWindow";

export interface CaseStudyEntry {
  title: string;
  tabtag: string;
  description: string;
  tags: string[];
  imageref: string;
  imagealt: string;
  href: string;
  featured?: boolean;
  featuredHighlight?: string;
}

export const caseStudies: CaseStudyEntry[] = [
  {
    title: "Developing a Job Monitoring System",
    tabtag: "personal project",
    description:
      "Automated internship tracker across 10+ platforms, built with rate limiting, robots.txt compliance, and tiered filtering.",
    tags: ["Python", "Automation", "APIs", "Logging"],
    imageref: "/images/case-studies/job-monitoring-system/main-photo.png",
    imagealt: "Job Monitoring System Screenshot",
    href: "/case-studies/job-monitoring-system",
    featured: true,
    featuredHighlight:
      "Highlights: A solution in job hunting that notifies me when a new job posting matches my criteria, without me manually checking. It includes adapter pattern across 10+ ATS platforms, robots.txt compliant, rate limited with backoff.",
  },

  {
    title: "Building a Password Strength Checker",
    tabtag: "personal project",
    description:
      "CLI tool for evaluating password strength, first step toward a full password manager.",
    tags: ["Python", "Security", "CLI"],
    imageref: "/images/case-studies/password-strength-checker/main-photo.png",
    imagealt: "Password Strength Checker Screenshot",
    href: "/case-studies/password-strength-checker",
  },
  {
    title: "Building an Auth API with Supabase",
    tabtag: "personal project",
    description:
      "Backend authentication API, built with Supabase and Swagger.",
    tags: ["Express", "Supabase", "JWT", "Swagger"],
    imageref: "/images/case-studies/auth-api/auth-api.png",
    imagealt: "Auth API Screenshot",
    href: "/case-studies/auth-api",
  },
  {
    title: "Interning @ Accelist Lentera Indonesia",
    tabtag: "professional experience",
    description:
      "Full stack internship working in projects like syncing an internal platform with Odoo through APIs and webhooks.",
    tags: ["React", "Next.js", ".NET", "Full Stack"],
    imageref: "/images/case-studies/accelist/main-photo.png",
    imagealt: "Accelist Lentera Indonesia logo",
    href: "/case-studies/accelist-lentera-indonesia",
    featured: true,
    featuredHighlight:
      "Highlights: Working with the whole stack, Next.js and React for frontend and .Net for backend. Projects include event-driven integration syncing two production systems (e.g. Odoo) via APIs and webhooks.",
  },
  {
    title: "Backend AI Engineer @ Flyrank AI",
    tabtag: "professional experience",
    description:
      "Backend work building an API through documentation, persistence changes, and containerisation.",
    tags: ["Node.js", "Express", "SQLite", "PostgreSQL", "Docker", "Supabase", "MCP", "Claude"],
    imageref: "/images/case-studies/flyrank-ai/main-photo.png",
    imagealt: "Flyrank AI logo",
    href: "/case-studies/flyrank-ai",
    featured: true,
    featuredHighlight:
      "Highlights: Working with modern AI tools to create backend solutions. Projects include Node/Express API taken through SQLite, Docker, and PostgreSQL and integration with Supabase.",
  },

  {
    title: "Web Developer @ GenDigital Academy",
    tabtag: "professional experience",
    description:
      "Not your typical web dev role. Maintained the organisation's website and CMS while supporting digital literacy programmes that make technology more accessible to underserved communities.",
    tags: ["Wix", "CMS", "Web Development", "Digital Literacy"],
    imageref: "/images/case-studies/gendigital-academy/main-photo.png",
    imagealt: "GenDigital Academy Website Screenshot",
    href: "/case-studies/gendigital-academy",
  },
];

const tabLabels: Record<string, string> = {
  "personal project": "Personal Projects",
  "professional experience": "Professional Experience",
};

export function buildCaseStudyTabs(): CaseStudyWindowTab[] {
  return Object.entries(
    caseStudies.reduce<Record<string, CaseStudyWindowCard[]>>((groups, project) => {
      const label = tabLabels[project.tabtag] ?? project.tabtag;
      groups[label] = [...(groups[label] ?? []), project];
      return groups;
    }, {})
  ).map(([label, cards]) => ({ label, cards }));
}

export function getFeaturedCaseStudies() {
  return caseStudies
    .filter((project) => project.featured)
    .map((project) => ({
      title: project.title.replace(/^(Developing a |Building an? |Interning @ |Backend AI Engineer @ )/, ""),
      description: project.featuredHighlight ?? project.description,
      image: project.imageref,
      link: project.href,
    }));
}

