import type { ReactNode } from "react";

export const GITHUB_URL = "https://github.com/AnelkaCH";
export const LINKEDIN_URL = "https://www.linkedin.com/in/anelka-hariyanto/";
export const EMAIL = "anelka_hariyanto@mymail.sutd.edu.sg";

const linkClasses = "text-[#06B6D4] transition hover:underline";

export interface TerminalCommand {
  text: string;
  rendered?: ReactNode;
}

export const terminalCommands: Record<string, TerminalCommand> = {
  who: {
    text: `Subject: Anelka Cornelius Hariyanto
About: A security-minded developer based in Jakarta, Indonesia. Formerly full-stack web development, now shifting toward security and governance.
Got into security after being hacked as a kid: 'I know what losing control of your own stuff feels like, and I've cared more about preventing harm than shipping features ever since.'`,
  },
  claim: {
    text: "'I think about whether something *should* exist before building it. For example, before coding my Job Monitoring System, I researched employment lawsand I refused to bypass CAPTCHA on a scraper even when it would've been easier. I'd rather ship something I can stand behind.'",
  },
  stack: {
    text: `languages: Python, Javascript/TypeScript, C# (.NET), C++
frontend: React, Next.js
backend: Node.js, Express, PostgreSQL, SQLite, MySQL, Docker, Supabase
security: detect-secrets pre-commit hooks, rate limiting with backoff, robots.txt compliance, audit logging`,
  },
  contact: {
    text: `email: anelka_hariyanto@mymail.sutd.edu.sg
github: github.com/AnelkaCH
linkedin: linkedin.com/in/anelka-hariyanto
location: Jakarta, Indonesia`,
    rendered: (
      <div className="space-y-2.5">
        <p>
          email:{" "}
          <a className={linkClasses} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <p>
          github:{" "}
          <a
            className={linkClasses}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/AnelkaCH
          </a>
        </p>
        <p>
          linkedin:{" "}
          <a
            className={linkClasses}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/anelka-hariyanto
          </a>
        </p>
        <p>location: Jakarta, Indonesia</p>
      </div>
    ),
  },
  help: {
    text: `available commands:
  who        -> who I am
  claim      -> the one line I'd want you to remember
  stack      -> tools I work with
  contact    -> how to reach me
  help       -> this list`,
  },
};

export const terminalChips = [
  { command: "who" },
  { command: "claim" },
  { command: "stack" },
  { command: "contact" },
  { command: "help" },
];
