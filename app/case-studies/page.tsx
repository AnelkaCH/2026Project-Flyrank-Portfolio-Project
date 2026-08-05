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
    title: "Backend AI Engineer @ Flyrank AI",
    description:
      "AI engineering internship work focused on AI fluency, workflow automation, and building with modern AI tools.",
    tags: ["AI", "Claude", "Automation", "MCP"],
    imageref: "/images/case-studies/flyrank-ai/main-photo.png",
    imagealt: "Flyrank AI logo",
    href: "/case-studies/flyrank-ai",
  },
  {
    title: "Interning @ Accelist Lentera Indonesia",
    description:
      "Full stack development internship experience building web applications and improving software engineering practices.",
    tags: ["React", "Next.js", "Full Stack"],
    imageref: "/images/case-studies/accelist/main-photo.png",
    imagealt: "Accelist Lentera Indonesia logo",
    href: "/case-studies/accelist-lentera-indonesia",
  },
  {
    title: "Web Developer @ GenDigital Academy",
    description:
      "An organisation that teaches digital literacy across Indonesia.",
    tags: ["Wix", "CMS", "Web Development", "Digital Literacy"],
    imageref: "/images/case-studies/gendigital-academy/main-photo.png",
    imagealt: "GenDigital Academy Website Screenshot",
    href: "/case-studies/gendigital-academy",
  },
  {
    title: "Developing a Job Monitoring System",
    description:
      "An automated platform that monitors internship and graduate job opportunities using APIs, feeds, and structured data processing.",
    tags: ["Python", "Automation", "APIs", "AI"],
    imageref: "/images/case-studies/job-monitoring-system/main-photo.png",
    imagealt: "Job Monitoring System Screenshot",
    href: "/case-studies/job-monitoring-system",
  },
  {
    title: "Building a Password Strength Checker",
    description:
      "A security-focused project exploring password validation concepts and secure coding practices.",
    tags: ["Python", "Security", "CLI"],
    imageref: "/images/case-studies/password-strength-checker/main-photo.png",
    imagealt: "Password Strength Checker Screenshot",
    href: "/case-studies/password-strength-checker",
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