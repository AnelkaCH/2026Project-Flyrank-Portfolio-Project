"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import TerminalWindow from "@/components/ui/TerminalWindow";

const ETHOS =
  "I am able to sense where the legal or ethical line sits in a system before I do anything, and I stop to confirm before crossing it rather than building first and face the consequences later, which is proven by how I researched the legal basis for my Job Monitoring System before writing code, and drew a hard boundary refusing to bypass CAPTCHA or bot-detection rather than pushing through it.";

const GITHUB_URL = "https://github.com/AnelkaCH";
const LINKEDIN_URL = "https://www.linkedin.com/in/anelka-hariyanto/";
const EMAIL = "anelka.c.hariyanto@gmail.com";

const linkClasses = "text-[#06B6D4] transition hover:underline";

interface Command {
  text: string;
  rendered?: ReactNode;
}

const commands: Record<string, Command> = {
  whois: {
    text: `Anelka — security-minded developer based in Jakarta, Indonesia.
Formerly full-stack web development, now shifting toward security and governance.
Got into security after being hacked as a kid — I know what losing control of your own stuff feels like, and I've cared more about preventing harm than shipping features ever since.`,
  },
  ethos: {
    text: ETHOS,
  },
  stack: {
    text: `languages: Python, TypeScript, C# (.NET)
frontend: React, Next.js, Wix CMS
backend: Node.js, Express, PostgreSQL, SQLite, Docker, Supabase
security practice: detect-secrets, rate limiting w/ backoff, robots.txt compliance, audit logs`,
  },
  contact: {
    text: `email: anelka.c.hariyanto@gmail.com
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
  whois      — who I am
  ethos      — the one line I'd want you to remember
  stack      — tools I work with
  contact    — how to reach me
  help       — this list`,
  },
};

const chips = [
  { command: "whois" },
  { command: "ethos" },
  { command: "stack" },
  { command: "contact" },
  { command: "help" },
];

export default function InteractiveTerminal() {
  const [current, setCurrent] = useState<string>("help");
  const [typed, setTyped] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    const command = commands[current];
    if (!command) return;
    const total = command.text.length;

    if (reducedMotion.current) {
      setTyped(total);
      return;
    }

    if (typed >= total) return;

    const speed = Math.max(7, Math.min(16, Math.round(3000 / total)));
    const timer = setTimeout(() => {
      setTyped((n) => n + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [current, typed]);

  function run(command: string) {
    setCurrent(command);
    setTyped(0);
  }

  const command = commands[current];
  const total = command?.text.length ?? 0;
  const isTyping = typed < total;
  const done = !isTyping && current !== null;

  return (
    <TerminalWindow title="anelka@portfolio">
      <p className="mb-4 font-mono text-xs text-slate-500">
        # interactive mode — click a command below
      </p>

      <div className="font-mono text-sm leading-relaxed">
        <p className="flex gap-3">
          <span aria-hidden="true" className="shrink-0 text-[#2563EB]">
            $
          </span>
          <span className="text-slate-100">{current}</span>
        </p>

        <div className="space-y-2.5 pl-4 pt-2.5 text-slate-300">
          {isTyping && (
            <p className="whitespace-pre-wrap">
              {command.text.slice(0, typed)}
              <span aria-hidden="true" className="animate-pulse">
                ▌
              </span>
            </p>
          )}

          {done && (command.rendered ?? <p className="whitespace-pre-wrap">{command.text}</p>)}

          {done && (
            <p className="flex gap-3 pt-1">
              <span aria-hidden="true" className="shrink-0 text-[#2563EB]">
                $
              </span>
              <span aria-hidden="true" className="animate-pulse text-slate-100">
                ▌
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
        {chips.map((chip) => (
          <button
            key={chip.command}
            type="button"
            onClick={() => run(chip.command)}
            className="rounded-md border border-slate-700 bg-[#161b22] px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-[#06B6D4] hover:text-[#06B6D4]"
          >
            {chip.command}
          </button>
        ))}
      </div>
    </TerminalWindow>
  );
}
