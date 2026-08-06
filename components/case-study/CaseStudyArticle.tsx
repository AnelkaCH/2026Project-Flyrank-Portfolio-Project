import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyBrowser from "./CaseStudyBrowser";
import TerminalWindow from "@/components/ui/TerminalWindow";
import type { CaseStudyData, CaseStudyList } from "./parseCaseStudyMarkdown";

function TerminalList({ block }: { block: CaseStudyList }) {
  return (
    <ul className="space-y-2.5">
      {block.items.map((item, itemIndex) => (
        <li
          key={itemIndex}
          className="flex gap-3 font-mono text-sm leading-relaxed text-slate-100"
        >
          <span aria-hidden="true" className="shrink-0 text-[#2563EB]">
            $
          </span>
          <span>{item}</span>
        </li>
      ))}

      <li className="flex gap-3 font-mono text-sm leading-relaxed">
        <span aria-hidden="true" className="shrink-0 text-[#2563EB]">
          $
        </span>
        <span aria-hidden="true" className="animate-pulse text-slate-100">
          ▌
        </span>
      </li>
    </ul>
  );
}

export default function CaseStudyArticle({ data }: { data: CaseStudyData }) {
  const lists = data.sections.flatMap((section) =>
    section.blocks.filter((block) => block.kind === "list")
  );

  const tabs = data.sections
    .map((section) => ({
      heading: section.heading,
      paragraphs: section.blocks.filter((block) => block.kind === "paragraph"),
    }))
    .filter((tab) => tab.paragraphs.length > 0);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href="/case-studies"
        className="mb-12 inline-flex items-center gap-2 font-medium text-[#2563EB] transition hover:text-[#06B6D4]"
      >
        <ArrowLeft className="size-4" />
        Back to Case Studies
      </Link>

      <header className="mb-16">
        <p className="mb-4 font-mono text-[#2563EB]">Case Study</p>
        <h1 className="mb-4 text-5xl font-bold">{data.title}</h1>
        <p className="max-w-2xl text-lg text-slate-600">{data.subtitle}</p>
      </header>

      <CaseStudyBrowser tabs={tabs} />

      {lists.length > 0 && (
        <div className="mt-12 space-y-6">
          {lists.map((block, index) => (
            <TerminalWindow key={index} title={block.label ?? "bash"}>
              <TerminalList block={block} />
            </TerminalWindow>
          ))}
        </div>
      )}
    </main>
  );
}
