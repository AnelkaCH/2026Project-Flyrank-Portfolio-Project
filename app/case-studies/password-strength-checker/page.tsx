import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { passwordStrengthCheckerData } from "@/lib/case-studies/password-strength-checker";

export const metadata: Metadata = {
  title: "Password Strength Checker | Case Study",
  description: passwordStrengthCheckerData.subtitle,
};

export default function PasswordStrengthCaseStudyPage() {
  return <CaseStudyArticle data={passwordStrengthCheckerData} />;
}
