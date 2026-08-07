import type { Metadata } from "next";
import InteractiveTerminal from "@/components/home/InteractiveTerminal";
import HeroImageWindow from "@/components/home/HeroImageWindow";
import CtaWindow from "@/components/home/CtaWindow";
import CurrentStatus from "@/components/home/CurrentStatus";
import FeaturedWorkSlider from "@/components/home/FeaturedWorkSlider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anelka | Developer turning to security",
  description:
    "Portfolio of Anelka, a developer moving from building software to securing it. Incoming SUTD Computer Science & Design (Security) student.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero — full width grid: text+status left, photo right */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">

        <div className="grid min-w-0 items-stretch gap-8 lg:grid-cols-[2fr_1fr] w-full">

          {/* Left column */}
          <div className="min-w-0 flex flex-col justify-center gap-6">

            <div>
              <h1 className="mb-6 text-5xl font-bold">
                Hi, I&apos;m Anelka
              </h1>

              <p className="text-lg text-slate-600">
                A Security-Focused Full Stack Developer, passionate about building
                secure and reliable software.
              </p>
            </div>

            <CurrentStatus className="w-full" />

          </div>

          {/* Right column */}
          <HeroImageWindow className="w-full min-w-0" />

        </div>

      </section>

      {/* Interactive Terminal */}
      <section className="w-full border-y border-slate-100 py-16 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-2xl px-0 sm:px-6">
          <div className="px-6 sm:px-0 mb-8">
            <h2 className="text-3xl font-bold">
              The Interactive Console
            </h2>
            <p className="mt-2 text-sm">
              Get to know me quickly (my journey, my claims, and many more) by interacting with the console below. Click on a command to see its output.
            </p>
          </div>
          <InteractiveTerminal />
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-2xl px-0 sm:px-6 py-16">
        <div className="mb-10 text-center px-6 sm:px-0">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Work
          </h2>
        </div>

        <FeaturedWorkSlider />

        <div className="mt-8 text-center px-6 sm:px-0">
          <Link
            href="/case-studies"
            className="font-mono text-sm text-[#2563EB] hover:text-[#06B6D4] transition duration-150 inline-flex items-center gap-1.5"
          >
            <span>&rarr;</span> View all case studies
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-0 sm:px-6 pb-24">
        <CtaWindow />
      </section>
    </main>
  );
}