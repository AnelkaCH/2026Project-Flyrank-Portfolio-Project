import Image from "next/image";
import TerminalWindow from "@/components/ui/TerminalWindow";
import BrowserTabs from "@/components/ui/BrowserTabs";
import Win95Window from "@/components/ui/Win95Window";
import { Metadata } from "next";

const values = [
  {
    number: "01",
    title: "I Know What It Feels Like to Get Hacked",
    description:
      "I was a kid when it happened, and I still remember how much I hated that feeling of losing control over something that was mine. That experience stayed with me long before I had the vocabulary to call it security.",
  },
  {
    number: "02",
    title: "I Care More About Preventing Harm Than Building Features",
    description:
      "Development is satisfying, but I found myself more drawn to the decisions upstream of a product: what data gets collected, who has access, what happens if something goes wrong. That's a different kind of work than writing the code itself.",
  },
  {
    number: "03",
    title: "I Wanted My Work to Matter Beyond Shipping",
    description:
      "I still like making things. What I wanted was for the value of my work to come from judgment and accountability, not just from output.",
  },
];

const milestones = [
  {
    phase: "1)",
    title: "How it started",
    description:
      "I have always had a huge interest in tech. It started with building games on Roblox during elementary, then it led to coding bootcamps and competitions like UNTAR Meta Spark and Codeavour 6.0 and 7.0, where I built many more projects, ranging from AR programs to IoT systems.",
    src: "/images/case-studies/default/darwin-iot-codeavour-7.jpeg",
    alt: "Anelka presenting the Darwin IoT robot at Codeavour 7",
  },
  {
    phase: "2)",
    title: "How it progressed",
    description:
      "I have experienced working with the industry, such as being a Website Developer @ GenDigital Academy, Junior Software Engineer Intern @ Accelist Lentera Indonesia, and Backend AI Engineering Intern @ FlyRank AI.",
    src: "/images/about/background/gend.jpeg",
    alt: "Picture with the GenDigital Academy team, taken during a team building event in 2025",
  },
  {
    phase: "3)",
    title: "How it is now and will be",
    description:
      "Now, I study @ SUTD, on the ASEAN Undergraduate Scholarship. In this new chapterI plan to expand my knowledge in cybersecurity, through university lectures and personal learning. I also plan to push myself further by creating my own projects and getting certified in security, such as the Security+ and cloud security certifications.",
    src: "/images/about/background/sutd.jpg",
    alt: "SUTD campus",
  },
];

export const metadata: Metadata = {
  title: "Anelka Cornelius Hariyanto | About Me",
  description: "Learn more about Anelka Hariyanto and his journey in the world of technology and cybersecurity.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* About Me */}
      <section className="mx-auto max-w-6xl px-0 sm:px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="px-6 sm:px-0">
            <h1 className="mb-6 text-5xl font-bold">
              About Me
            </h1>

            <p className="max-w-xl text-lg text-slate-600 mb-4">
              Incoming Computer Science & Design (Security) student at SUTD.
              Moving from building software to securing it.
            </p>

            <p className="max-w-xl text-lg text-slate-600">
              Based in Jakarta, Indonesia. 
              Graduated from Bukit Sion Further Education in 2026 as valedictorian.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <Win95Window title="grad-photo.jpeg">
              <div
                className="relative w-full aspect-[4/5] overflow-hidden"
                style={{
                  borderStyle: "inset",
                  borderWidth: "2px",
                  borderColor: "#808080 #ffffff #ffffff #808080",
                }}
              >
                <Image
                  src="/images/about/grad-photo.jpeg"
                  alt="Portrait of Anelka, smiling and wearing a black t-shirt, with a blurred background of trees and sunlight"
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </Win95Window>
          </div>
        </div>
      </section>


      {/* Background Timeline */}
      <section className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB] lg:sticky lg:top-8 lg:self-start">
              Past, Present, & Future
            </p>

            <ol className="relative space-y-12 border-l-2 border-slate-700 pl-8">
              {milestones.map((milestone) => (
                <li key={milestone.phase} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-slate-900 bg-[#2563EB]"
                  />

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div
                      className="relative w-full shrink-0 overflow-hidden rounded-lg sm:w-52"
                      style={{ aspectRatio: "16 / 10" }}
                    >
                      <Image
                        src={milestone.src}
                        alt={milestone.alt}
                        fill
                        sizes="(min-width: 640px) 320px, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB]">
                        {milestone.phase}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-50">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Software to Security */}
      <section className="mx-auto max-w-6xl px-0 sm:px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB] px-6 sm:px-0">
            From software development to security
          </p>

          <TerminalWindow title="security">
            <ul className="space-y-2.5 font-mono text-sm leading-relaxed text-slate-100">
              <li className="flex gap-3">
                <span aria-hidden="true" className="shrink-0 text-[#2563EB]">$</span>
                <span>cat journey</span>
              </li>
              <li className="pl-5 text-slate-300">
                The more I built, the more I noticed how things break, and that
                shifted my focus toward security and governance. My path went
                from simple web development to full stack development, and
                now toward cybersecurity. I believe my current projects reflect that
                shift, like my job monitoring system built around compliance and rate
                limiting, and my password security tool built around proper
                cryptographic practice.
              </li>
              <li className="flex gap-3 pt-2">
                <span aria-hidden="true" className="shrink-0 text-[#2563EB]">$</span>
                <span>why security</span>
              </li>
              {values.map((value) => (
                <li key={value.number} className="flex gap-3">
                  <span aria-hidden="true" className="shrink-0 text-[#06B6D4]">
                    {value.number}
                  </span>
                  <span className="text-slate-300">
                    <span className="text-slate-100">{value.title}</span>.{" "}
                    {value.description}
                  </span>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <span aria-hidden="true" className="shrink-0 text-[#2563EB]">$</span>
                <span aria-hidden="true" className="animate-pulse">▌</span>
              </li>
            </ul>
          </TerminalWindow>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-0 sm:px-6 py-20">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB] px-6 sm:px-0">
            Certifications
          </p>

          <BrowserTabs
            title="certifications"
            tabs={[
              {
                label: "SC-900",
                content: (
                  <div className="mx-auto max-w-3xl">
                    <div
                      className="relative mx-auto mb-6 w-full max-w-[12rem] overflow-hidden rounded-lg"
                      style={{ aspectRatio: "1 / 1" }}
                    >
                      <Image
                        src="/images/about/certifications/sc-900.jpg"
                        alt="Password security tool, stand-in for the SC-900 certificate"
                        fill
                        sizes="(min-width: 680px) 24rem, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <h2 className="text-2xl font-bold">SC-900</h2>

                    <p className="mb-4 text-slate-500">
                      Security, Compliance & Identity Fundamentals
                    </p>

                    <span className="mb-5 inline-block rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-3 py-1 text-sm font-medium text-[#06B6D4]">
                      Earned
                    </span>

                    <p className="text-slate-600">
                      Covers security, compliance, and identity concepts for
                      Microsoft cloud and hybrid environments. This forms the
                      foundation for the cloud security and analyst
                      certifications to come.
                    </p>
                  </div>
                ),
              },
              {
                label: "Next Goal",
                content: (
                  <div className="mx-auto max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold">What's Next</h2>

                    <ul className="mb-6 space-y-3">
                      {["Security+", "Cloud security (AWS / Azure)"].map(
                        (item) => (
                          <li key={item} className="text-slate-600">
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
