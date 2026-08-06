import Image from "next/image";
import { Minus, Square, X } from "lucide-react";
import TerminalWindow from "@/components/ui/TerminalWindow";
import BrowserTabs from "@/components/ui/BrowserTabs";

const windowButtonClasses =
  "flex h-5 w-6 items-center justify-center bg-[#c0c0c0] text-black shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] transition hover:bg-[#d4d4d4] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]";

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
    phase: "Then",
    title: "Where it started",
    description:
      "As a kid, I have always had a huge interest in tech. It started with building games on Roblox during elementary, then it led to coding bootcamps and competitions like UNTAR Meta Spark and Codeavour 6.0 and 7.0, where I built many more projects, ranging from AR programs to IoT systems.",
    src: "/images/case-studies/default/darwin-iot-codeavour-7.jpeg",
    alt: "Anelka presenting the Darwin IoT robot at Codeavour 7",
  },
  {
    phase: "Now",
    title: "Working across multiple stacks at once",
    description:
      "I have experienced working with a full stack like GenDigital Academy's organisational website. Currently a Full Stack Developer Intern at Accelist Lentera Indonesia (.NET, React) and Backend AI Engineering Intern at FlyRank AI, working in parallel across two different environments.",
    src: "/images/about/background/gend.jpeg",
    alt: "Picture with the GenDigital Academy team, taken during a team building event in 2025",
  },
  {
    phase: "Next",
    title: "SUTD, September 2026",
    description:
      "Soon a new chapter will begin in my life. I will be studying Computer Science and Design with a security focus, on the ASEAN Undergraduate Scholarship.",
    src: "/images/about/background/sutd.jpg",
    alt: "SUTD campus",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold">
              About Me
            </h1>

            <p className="max-w-xl text-lg text-slate-600 mb-4">
              Incoming Computer Science &amp; Design (Security) student at SUTD.
              Moving from building software to securing it.
            </p>

            <p className="max-w-xl text-lg text-slate-600">
              Based in Jakarta, Indonesia. 
              Graduated from Bukit Sion Further Education in 2026 as valedictorian.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-lg border border-slate-700 bg-white shadow-xl">
              <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1.5">
                <span className="pl-1 font-mono text-xs font-bold text-white">
                  portrait.jpg
                </span>

                <div className="flex items-center gap-0.5">
                  <button type="button" aria-label="Minimise" className={windowButtonClasses}>
                    <Minus className="size-3" strokeWidth={3} />
                  </button>
                  <button type="button" aria-label="Maximise" className={windowButtonClasses}>
                    <Square className="size-2.5" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    aria-label="Close"
                    className={`${windowButtonClasses} bg-[#c00000] text-white shadow-[inset_1px_1px_0_#ff8080,inset_-1px_-1px_0_#800000] hover:bg-[#d40000] active:shadow-[inset_-1px_-1px_0_#ff8080,inset_1px_1px_0_#800000]`}
                  >
                    <X className="size-3" strokeWidth={3} />
                  </button>
                </div>
              </div>

              <div className="relative" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src="/images/about/anelka-photo.jpeg"
                  alt="Portrait of Anelka, smiling and wearing a black t-shirt, with a blurred background of trees and sunlight"
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Timeline */}
      <section className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB] lg:sticky lg:top-8 lg:self-start">
              Past, Present, &amp; Future
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

      {/* Software → Security */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB]">
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-[#2563EB]">
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
                      Security, Compliance &amp; Identity Fundamentals
                    </p>

                    <span className="mb-5 inline-block rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-3 py-1 text-sm font-medium text-[#06B6D4]">
                      In Progress
                    </span>

                    <p className="mb-3 text-slate-600">
                      Exam voucher secured.
                    </p>

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
                    <h2 className="mb-4 text-2xl font-bold">What&apos;s Next</h2>

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
