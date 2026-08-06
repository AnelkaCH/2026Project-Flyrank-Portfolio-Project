import Link from "next/link";
import FilmStrip from "@/components/ui/FilmStrip";

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
    description:
      "Automated internship tracker across 10+ platforms, built with rate limiting, robots.txt compliance, and tiered filtering.",
    tags: ["Python", "Automation", "APIs", "Logging"],
    imageref: "/images/case-studies/job-monitoring-system/main-photo.png",
    imagealt: "Job Monitoring System Screenshot",
    href: "/case-studies/job-monitoring-system",
  },
  {
    title: "Building a Password Strength Checker",
    description:
      "CLI tool for evaluating password strength, first step toward a full password manager.",
    tags: ["Python", "Security", "CLI"],
    imageref: "/images/case-studies/password-strength-checker/main-photo.png",
    imagealt: "Password Strength Checker Screenshot",
    href: "/case-studies/password-strength-checker",
  },
  {
    title: "Interning @ Accelist Lentera Indonesia",
    description:
      "Full stack internship working in projects like syncing an internal platform with Odoo through APIs and webhooks.",
    tags: ["React", "Next.js", ".NET", "Full Stack"],
    imageref: "/images/case-studies/accelist/main-photo.png",
    imagealt: "Accelist Lentera Indonesia logo",
    href: "/case-studies/accelist-lentera-indonesia",
  },
  {
    title: "Backend AI Engineer @ Flyrank AI",
    description:
      "Backend work building an API through documentation, persistence changes, and containerisation.",
    tags: ["Node.js", "Express", "SQLite", "PostgreSQL", "Docker", "Supabase", "MCP", "Claude"],
    imageref: "/images/case-studies/flyrank-ai/main-photo.png",
    imagealt: "Flyrank AI logo",
    href: "/case-studies/flyrank-ai",
  },
  {
    title: "Web Developer @ GenDigital Academy",
    description:
      "Not your typical web dev role. Maintained the organisation's website and CMS while supporting digital literacy programmes that make technology more accessible to underserved communities.",
    tags: ["Wix", "CMS", "Web Development", "Digital Literacy"],
    imageref: "/images/case-studies/gendigital-academy/main-photo.png",
    imagealt: "GenDigital Academy Website Screenshot",
    href: "/case-studies/gendigital-academy",
  },
];

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

      {/* Case Study Cards */}
      <section className="grid gap-8 md:grid-cols-2">

        {caseStudies.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-200 bg-white p-8 transition hover:border-[#2563EB]"
          >

            <h2 className="mb-3 text-2xl font-bold">
              {project.title}
            </h2>

            <img
              src={project.imageref}
              alt={project.imagealt}
              width={1200}
              height={800}
              className="mb-6 w-full rounded-lg object-cover"
            />

            <p className="mb-6 text-slate-600">
              {project.description}
            </p>


            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>


            <Link
              href={project.href}
              className="font-medium text-[#2563EB] hover:text-[#06B6D4]"
            >
              View Case Study →
            </Link>

          </article>
        ))}

      </section>

    </main>
  );
}