import type { MetadataRoute } from "next";

const baseUrl = "https://anelka-hariyanto.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/accelist-lentera-indonesia`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/auth-api`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/flyrank-ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/gendigital-academy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/job-monitoring-system`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/password-strength-checker`,
      lastModified: new Date(),
    },
  ];
}