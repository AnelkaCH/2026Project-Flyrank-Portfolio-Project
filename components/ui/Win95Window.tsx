import type { ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";

const windowButtonClasses =
  "flex h-5 w-6 items-center justify-center bg-[#c0c0c0] text-black shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] transition hover:bg-[#d4d4d4] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]";

interface Win95WindowProps {
  title?: string;
  children: ReactNode;
}

export default function Win95Window({
  title = "window",
  children,
}: Win95WindowProps) {
  return (
    <div className="overflow-hidden border border-slate-700 bg-white">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1.5">
        <span className="pl-1 font-mono text-xs font-bold text-white">
          {title}
        </span>

        <div className="flex items-center gap-0.5">
          <button
            type="button"
            aria-label="Minimise"
            className={windowButtonClasses}
          >
            <Minus className="size-3" strokeWidth={3} />
          </button>
          <button
            type="button"
            aria-label="Maximise"
            className={windowButtonClasses}
          >
            <Square className="size-2.5" strokeWidth={3} />
          </button>
          <button
            type="button"
            aria-label="Close"
            className={`${windowButtonClasses} bg-[#c00000] text-white shadow-[inset_1px_1px_0_#ff8080,inset_-1px_-1px_0_#800000] hover:bg-[#d40000] active:shadow-[inset_-1px_-1px_0_#ff8080,inset_1px_1px_0_#800000]`}
          >
            <X className="size-3" strokeWidth={3} />
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
