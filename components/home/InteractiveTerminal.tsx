"use client";

import { useState } from "react";
import TerminalWindow from "@/components/ui/TerminalWindow";
import { terminalCommands, terminalChips } from "@/lib/terminalCommands";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function InteractiveTerminal() {
  const [current, setCurrent] = useState<string>("help");

  const command = terminalCommands[current];
  const { displayedText, isTyping, isDone } = useTypewriter({
    text: command?.text ?? "",
  });

  function run(cmd: string) {
    setCurrent(cmd);
  }

  return (
    <TerminalWindow title="anelka@portfolio">
      <p className="mb-4 font-mono text-xs text-slate-500">
        entering interactive mode. please click a command below
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
              {displayedText}
              <span aria-hidden="true" className="animate-pulse">
                ▌
              </span>
            </p>
          )}

          {isDone && (command?.rendered ?? <p className="whitespace-pre-wrap">{command?.text}</p>)}

          {isDone && (
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
        {terminalChips.map((chip) => (
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
