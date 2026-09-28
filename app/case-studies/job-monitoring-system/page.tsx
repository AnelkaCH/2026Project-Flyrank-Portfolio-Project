import type { Metadata } from "next";
import CaseStudyArticle from "@/components/case-study/CaseStudyArticle";
import { jobMonitoringSystemData } from "@/lib/case-studies/job-monitoring-system";

export const metadata: Metadata = {
  title: "Anelka Cornelius Hariyanto | Job Monitoring System",
  description: jobMonitoringSystemData.subtitle,
};

export default function JobMonitoringCaseStudyPage() {
  return <CaseStudyArticle data={jobMonitoringSystemData} />;
}
