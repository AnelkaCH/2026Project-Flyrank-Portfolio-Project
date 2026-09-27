import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { authApiData } from "@/lib/case-studies/auth-api";

export const metadata: Metadata = {
  title: "Auth API with Supabase | Case Study",
  description: authApiData.subtitle,
};

export default function AuthApiCaseStudyPage() {
  return <CaseStudyArticle data={authApiData} />;
}
