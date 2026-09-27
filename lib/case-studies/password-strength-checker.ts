import type { CaseStudyData } from "@/lib/types/caseStudy";

export const passwordStrengthCheckerData: CaseStudyData = {
  title: "Building a Password Strength Checker",
  subtitle: "Personal project, first stage of a larger security tooling roadmap",
  sections: [
    {
      heading: "Overview",
      blocks: [
        {
          kind: "paragraph",
          body: "A Python CLI tool that evaluates password strength against common security criteria and explains exactly which requirements a password fails. It's deliberately the smallest possible starting point for a longer plan: checker first, then a generator, then a password manager with proper encryption and storage.",
        },
      ],
    },
    {
      heading: "The Problem",
      blocks: [
        {
          kind: "paragraph",
          body: 'Weak passwords are still one of the most common ways accounts get compromised, but "make a strong password checker" hides a harder question underneath: what actually makes a password strong, and how do you evaluate that programmatically in a way that helps someone improve rather than just fail them.',
        },
      ],
    },
    {
      heading: "What I Built",
      blocks: [
        {
          kind: "paragraph",
          body: "A command line tool that takes a password and checks it against a set of criteria: minimum length, uppercase and lowercase letters, numbers, special characters, and membership in a common password list. Instead of a binary result, it reports which specific requirements were and weren't met.",
        },
      ],
    },
    {
      heading: "Why I Started Here",
      blocks: [
        {
          kind: "paragraph",
          body: 'It would have been faster to jump straight into a password manager. I didn\'t, on purpose. Encryption, storage, and secure session handling all depend on understanding what "strong" actually means first, and getting that wrong at the foundation would carry through everything built on top of it. The CLI format let me focus entirely on the validation logic without getting distracted by interface work I didn\'t need yet.',
        },
      ],
    },
    {
      heading: "Challenges",
      blocks: [
        {
          kind: "paragraph",
          body: 'Defining "strong" turned out to be more nuanced than a checklist. Checking for uppercase letters and numbers is trivial. Understanding why those specific checks matter, and where they fall short against real attack patterns, took reading into password entropy and current guidance from sources like NIST rather than relying on conventional rules of thumb.',
        },
      ],
    },
    {
      heading: "What's Next",
      blocks: [
        {
          kind: "paragraph",
          body: "Entropy estimation, more detailed strength scoring, and better user feedback are the immediate next steps, followed by the password generator and eventually the manager this project was always building toward. I'd rather ship each stage properly than rush toward a finished product I only half understand.",
        },
        {
          kind: "list",
          label: "Highlights",
          items: [
            "Checks length, character variety, and common password lists",
            "Returns specific, actionable feedback instead of a pass or fail",
            "Scoped intentionally to validation logic only, no storage or encryption yet",
            "First stage of a planned roadmap toward a full password manager (Argon2id, AES-256-GCM planned for later stages)",
          ],
        },
      ],
    },
  ],
};
