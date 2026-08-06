import type { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
}

export default function TerminalWindow({
  title = "bash",
  children,
}: TerminalWindowProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117] shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-[#161b22] px-4 py-3">
        <span aria-hidden="true" className="size-3 rounded-full bg-[#ff5f56]" />
        <span aria-hidden="true" className="size-3 rounded-full bg-[#ffbd2e]" />
        <span aria-hidden="true" className="size-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-sm text-slate-400">{title}</span>
      </div>

      <div className="px-6 py-5">{children}</div>
    </div>
  );
}
