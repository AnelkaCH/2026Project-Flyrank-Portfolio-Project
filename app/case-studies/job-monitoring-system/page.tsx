import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { parseCaseStudyMarkdown } from "@/components/case-study/parseCaseStudyMarkdown";

const source =
  "app/case-studies/job-monitoring-system/Developing_a_Job_Monitoring_System.md";
const markdown = fs.readFileSync(path.join(process.cwd(), source), "utf8");
const data = parseCaseStudyMarkdown(markdown, source);

export const metadata: Metadata = {
  title: "Job Monitoring System | Case Study",
  description: data.subtitle,
};

export default function JobMonitoringCaseStudyPage() {
  return <CaseStudyArticle data={data} />;
}
