import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { flyrankAiData } from "@/lib/case-studies/flyrank-ai";

export const metadata: Metadata = {
  title: "Anelka Cornelius Hariyanto | FlyRank AI Internship",
  description: flyrankAiData.subtitle,
};

export default function FlyrankAiCaseStudyPage() {
  return <CaseStudyArticle data={flyrankAiData} />;
}
