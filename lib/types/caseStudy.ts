export interface CaseStudyList {
  kind: "list";
  label?: string;
  items: string[];
}

export interface CaseStudyParagraph {
  kind: "paragraph";
  lead?: string;
  body: string;
}

export type CaseStudyBlock = CaseStudyParagraph | CaseStudyList;

export interface CaseStudySection {
  heading: string;
  blocks: CaseStudyBlock[];
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  sections: CaseStudySection[];
}
