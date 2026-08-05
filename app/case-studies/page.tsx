import Link from "next/link";

const caseStudies = [
  {
    title: "Job Monitoring System",
    description:
      "An automated platform that monitors internship and graduate job opportunities using APIs, feeds, and structured data processing.",
    tags: ["Python", "Automation", "APIs", "AI"],
    href: "/case-studies/job-monitoring-system",
  },
  {
    title: "FlyRank AI Internship",
    description:
      "AI engineering internship work focused on AI fluency, workflow automation, and building with modern AI tools.",
    tags: ["AI", "Claude", "Automation", "MCP"],
    href: "/case-studies/flyrank-ai",
  },
  {
    title: "Accelist Internship",
    description:
      "Full stack development internship experience building web applications and improving software engineering practices.",
    tags: ["React", "Next.js", "Full Stack"],
    href: "/case-studies/accelist-lentera-indonesia",
  },
  {
    title: "Password Strength Checker",
    description:
      "A security-focused project exploring password validation concepts and secure coding practices.",
    tags: ["Python", "Security", "CLI"],
    href: "/case-studies/password-strength-checker",
  },
  {
    title: "GenDigital Academy",
    description:
      "An organisation that teaches digital literacy across Indonesia.",
    tags: ["Wix", "CMS", "Web Development", "Digital Literacy"],
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