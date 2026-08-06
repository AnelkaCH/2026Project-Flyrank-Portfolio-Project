import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { parseCaseStudyMarkdown } from "@/components/case-study/parseCaseStudyMarkdown";

const source =
  "app/case-studies/accelist-lentera-indonesia/Interning_at_Accelist_Lentera_Indonesia.md";
const markdown = fs.readFileSync(path.join(process.cwd(), source), "utf8");
const data = parseCaseStudyMarkdown(markdown, source);

export const metadata: Metadata = {
  title: "Accelist Lentera Indonesia | Case Study",
  description: data.subtitle,
};

export default function AccelistCaseStudyPage() {
  return <CaseStudyArticle data={data} />;
}
