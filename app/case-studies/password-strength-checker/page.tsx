import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { parseCaseStudyMarkdown } from "@/components/case-study/parseCaseStudyMarkdown";

const source =
  "app/case-studies/password-strength-checker/Building_a_Password_Strength_Checker.md";
const markdown = fs.readFileSync(path.join(process.cwd(), source), "utf8");
const data = parseCaseStudyMarkdown(markdown, source);

export const metadata: Metadata = {
  title: "Password Strength Checker | Case Study",
  description: data.subtitle,
};

export default function PasswordStrengthCaseStudyPage() {
  return <CaseStudyArticle data={data} />;
}
