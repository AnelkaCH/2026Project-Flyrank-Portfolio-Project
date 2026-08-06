import FilmStrip from "@/components/ui/FilmStrip";
import CaseStudyWindow, {
  type CaseStudyWindowCard,
  type CaseStudyWindowTab,
} from "@/components/case-study/CaseStudyWindow";

const filmStripImages = [
  {
    src: "/images/case-studies/default/darwin-iot-codeavour-7.jpeg",
    alt: "Anelka presenting the Darwin IoT robot at Codeavour 7",
    width: 1599,
    height: 899,
  },
  {
    src: "/images/case-studies/default/sidomuncul-gendigital-academy.jpeg",
    alt: "GenDigital Academy session at Sidomuncul",
    width: 591,
    height: 445,
  },
  {
    src: "/images/case-studies/default/stelar-untar.jpeg",
    alt: "Talk at STELAR UNTAR",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/case-studies/default/teaching-session-gendigital-academy.jpeg",
    alt: "Teaching session with GenDigital Academy",
    width: 1094,
    height: 520,
  },
  {
    src: "/images/case-studies/default/zoom-meeting-gendigital-academy.jpeg",
    alt: "GenDigital Academy Zoom meeting",
    width: 1600,
    height: 709,
  },
];

const caseStudies = [
  {
    title: "Developing a Job Monitoring System",
    tabtag: "personal project",
    description:
      "Automated internship tracker across 10+ platforms, built with rate limiting, robots.txt compliance, and tiered filtering.",
    tags: ["Python", "Automation", "APIs", "Logging"],
    imageref: "/images/case-studies/job-monitoring-system/main-photo.png",
    imagealt: "Job Monitoring System Screenshot",
    href: "/case-studies/job-monitoring-system",
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
    title: "Interning @ Accelist Lentera Indonesia",
    tabtag: "professional experience",
    description:
      "Full stack internship working in projects like syncing an internal platform with Odoo through APIs and webhooks.",
    tags: ["React", "Next.js", ".NET", "Full Stack"],
    imageref: "/images/case-studies/accelist/main-photo.png",
    imagealt: "Accelist Lentera Indonesia logo",
    href: "/case-studies/accelist-lentera-indonesia",
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

const caseStudyTabs: CaseStudyWindowTab[] = Object.entries(
  caseStudies.reduce<Record<string, CaseStudyWindowCard[]>>((groups, project) => {
    const label = tabLabels[project.tabtag] ?? project.tabtag;
    groups[label] = [...(groups[label] ?? []), project];
    return groups;
  }, {})
).map(([label, cards]) => ({ label, cards }));

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <h1 className="mb-6 text-5xl font-bold">
          My Case Studies
        </h1>

        <p className="max-w-2xl text-lg text-slate-600">
          Over the years, I have done lots of things, from internships to personal projects. Here are some of the most notable ones that I have worked on, showcasing my skills and interests in various domains.
        </p>
      </section>

      {/* Film Strip */}
      <section className="mb-16">
        <FilmStrip images={filmStripImages} fullBleed />
      </section>

      {/* Case Study Browser Window */}
      <section className="mb-16">
        <CaseStudyWindow tabs={caseStudyTabs} />
      </section>

    </main>
  );
}
