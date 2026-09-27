import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { genDigitalAcademyData } from "@/lib/case-studies/gendigital-academy";

export const metadata: Metadata = {
  title: "GenDigital Academy | Case Study",
  description: genDigitalAcademyData.subtitle,
};

export default function GenDigitalAcademyCaseStudyPage() {
  return <CaseStudyArticle data={genDigitalAcademyData} />;
}
