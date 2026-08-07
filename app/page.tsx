import type { Metadata } from "next";
import InteractiveTerminal from "@/components/home/InteractiveTerminal";
import HeroImageWindow from "@/components/home/HeroImageWindow";
import CtaWindow from "@/components/home/CtaWindow";

export const metadata: Metadata = {
  title: "Anelka | Developer turning to security",
  description:
    "Portfolio of Anelka, a developer moving from building software to securing it. Incoming SUTD Computer Science & Design (Security) student.",
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h1 className="mb-6 text-5xl font-bold">
            Hi, I&apos;m Anelka
          </h1>

          <p className="mb-4 text-lg text-slate-600">
            A Security-Focused Full Stack Developer, passionate about building
            secure and reliable software.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[7fr_5fr]">
          <HeroImageWindow />
          <InteractiveTerminal />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl">
          <CtaWindow />
        </div>
      </section>
    </main>
  );
}
