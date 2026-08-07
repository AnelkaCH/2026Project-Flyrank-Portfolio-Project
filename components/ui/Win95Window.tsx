import type { ReactNode } from "react";

interface Win95WindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Win95Window({
  title = "window",
  children,
  className = "",
}: Win95WindowProps) {
  return (
    <div
      className={`font-mono text-black select-none flex flex-col ${className}`}
      style={{
        backgroundColor: "#c0c0c0",
        borderStyle: "outset",
        borderWidth: "2px",
        borderColor: "#ffffff #808080 #808080 #ffffff",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between p-1.5 shrink-0"
        style={{
          backgroundColor: "#000080",
        }}
      >
        <span className="pl-1 text-xs font-bold text-white uppercase tracking-wide">
          {title}
        </span>

        <div className="flex items-center gap-1">
          {/* Minimize Button */}
          <button
            type="button"
            aria-label="Minimize"
            className="flex h-5 w-6 items-center justify-center font-bold text-black active:pt-0.5 active:pl-0.5"
            style={{
              backgroundColor: "#c0c0c0",
              borderStyle: "outset",
              borderWidth: "2px",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              fontSize: "10px",
              lineHeight: "1",
            }}
          >
            _
          </button>
          {/* Maximize Button */}
          <button
            type="button"
            aria-label="Maximize"
            className="flex h-5 w-6 items-center justify-center font-bold text-black active:pt-0.5 active:pl-0.5"
            style={{
              backgroundColor: "#c0c0c0",
              borderStyle: "outset",
              borderWidth: "2px",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              fontSize: "10px",
              lineHeight: "1",
            }}
          >
            □
          </button>
          {/* Close Button */}
          <button
            type="button"
            aria-label="Close"
            className="flex h-5 w-6 items-center justify-center font-bold text-black active:pt-0.5 active:pl-0.5"
            style={{
              backgroundColor: "#c0c0c0",
              borderStyle: "outset",
              borderWidth: "2px",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              fontSize: "10px",
              lineHeight: "1",
            }}
          >
            x
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3 bg-[#c0c0c0] flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}


