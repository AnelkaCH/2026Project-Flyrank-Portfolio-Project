import FilmStrip from "@/components/ui/FilmStrip";
import CaseStudyWindow from "@/components/case-study/CaseStudyWindow";
import { buildCaseStudyTabs } from "@/lib/caseStudies";

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

const caseStudyTabs = buildCaseStudyTabs();

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
