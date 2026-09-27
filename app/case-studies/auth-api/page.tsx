import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { parseCaseStudyMarkdown } from "@/lib/parseCaseStudyMarkdown";

const source =
  "app/case-studies/auth-api/Auth_API_with_Supabase.md";
const markdown = fs.readFileSync(path.join(process.cwd(), source), "utf8");
const data = parseCaseStudyMarkdown(markdown, source);

export const metadata: Metadata = {
  title: "Auth API | Case Study",
  description: data.subtitle,
};

export default function AuthAPICaseStudyPage() {
  return <CaseStudyArticle data={data} />;
}
