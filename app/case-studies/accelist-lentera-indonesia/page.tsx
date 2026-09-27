import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { accelistData } from "@/lib/case-studies/accelist-lentera-indonesia";

export const metadata: Metadata = {
  title: "Accelist Lentera Indonesia | Case Study",
  description: accelistData.subtitle,
};

export default function AccelistCaseStudyPage() {
  return <CaseStudyArticle data={accelistData} />;
}
