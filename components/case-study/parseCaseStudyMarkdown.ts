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

function fail(message: string, source?: string): never {
  throw new Error(source ? `${source}: ${message}` : message);
}

export function parseCaseStudyMarkdown(
  markdown: string,
  source?: string
): CaseStudyData {
  const lines = markdown.split(/\r?\n/).map((line) => line.trim());

  const nonEmpty: { text: string; line: number }[] = [];
  lines.forEach((text, index) => {
    if (text) nonEmpty.push({ text, line: index + 1 });
  });

  if (nonEmpty.length === 0) {
    fail("file is empty", source);
  }

  const titleLine = nonEmpty[0];
  if (!titleLine.text.startsWith("# ")) {
    fail(`expected a "# " title as the first line, got "${titleLine.text}"`, source);
  }
  const title = titleLine.text.slice(2).trim();
  if (!title) {
    fail("title is empty", source);
  }

  let subtitle: string | null = null;
  let currentSection: CaseStudySection | null = null;
  let pendingLabel: string | null = null;
  const sections: CaseStudySection[] = [];

  for (let i = 1; i < nonEmpty.length; i++) {
    const { text, line } = nonEmpty[i];

    if (text.startsWith("## ")) {
      currentSection = { heading: text.slice(3).trim(), blocks: [] };
      sections.push(currentSection);
      pendingLabel = null;
      continue;
    }

    if (text.startsWith("# ")) {
      fail(`duplicate "# " title on line ${line}`, source);
    }

    if (text.startsWith("#") && !text.startsWith("## ")) {
      fail(`unsupported heading level on line ${line}: "${text}"`, source);
    }

    if (!currentSection) {
      if (subtitle === null) {
        subtitle = text;
      } else {
        fail(`unexpected line before the first "## " section on line ${line}: "${text}"`, source);
      }
      continue;
    }

    const standaloneBold = text.match(/^\*\*(.+?)\*\*$/);
    if (standaloneBold) {
      pendingLabel = standaloneBold[1];
      continue;
    }

    if (text.startsWith("- ")) {
      const items: string[] = [text.slice(2).trim()];
      while (i + 1 < nonEmpty.length && nonEmpty[i + 1].text.startsWith("- ")) {
        items.push(nonEmpty[i + 1].text.slice(2).trim());
        i++;
      }
      currentSection.blocks.push({
        kind: "list",
        label: pendingLabel ?? undefined,
        items,
      });
      pendingLabel = null;
      continue;
    }

    const leadSplit = text.match(/^\*\*(.+?)\*\*\s*(.*)$/);
    currentSection.blocks.push({
      kind: "paragraph",
      lead: leadSplit ? leadSplit[1] : undefined,
      body: leadSplit ? leadSplit[2].trim() : text,
    });
    pendingLabel = null;
  }

  if (subtitle === null) {
    fail("missing subtitle line before the first '## ' section", source);
  }
  if (sections.length === 0) {
    fail("no '## ' sections found", source);
  }

  return { title, subtitle, sections };
}
