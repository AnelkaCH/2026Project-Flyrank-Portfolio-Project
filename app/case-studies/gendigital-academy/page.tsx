import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { parseCaseStudyMarkdown } from "@/components/case-study/parseCaseStudyMarkdown";

const source =
  "app/case-studies/gendigital-academy/Web_Developer_at_GenDigital_Academy.md";
const markdown = fs.readFileSync(path.join(process.cwd(), source), "utf8");
const data = parseCaseStudyMarkdown(markdown, source);

export const metadata: Metadata = {
  title: "GenDigital Academy | Case Study",
  description: data.subtitle,
};

export default function GenDigitalCaseStudyPage() {
  return <CaseStudyArticle data={data} />;
}
