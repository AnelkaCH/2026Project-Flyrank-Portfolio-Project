"use client";

import { useState, type ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";

export interface BrowserTab {
  label: string;
  content: ReactNode;
}

interface BrowserTabsProps {
  title?: string;
  tabs: BrowserTab[];
}

const windowButtonClasses =
  "flex h-5 w-6 items-center justify-center bg-[#c0c0c0] text-black shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] transition hover:bg-[#d4d4d4] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]";

export default function BrowserTabs({
  title = "browser",
  tabs,
}: BrowserTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[Math.min(activeIndex, tabs.length - 1)];

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

      <div className="flex flex-col gap-1 bg-slate-200 p-2 sm:flex-row sm:overflow-x-auto sm:pb-0">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`browser-tab-${index}`}
            aria-selected={index === activeIndex}
            aria-controls={`browser-panel-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm font-medium transition sm:w-auto sm:shrink-0 sm:whitespace-nowrap sm:rounded-t-lg sm:rounded-b-none sm:border-b-2 sm:border-b-slate-400 sm:px-4 sm:py-2 sm:text-center ${
              index === activeIndex
                ? "bg-white text-slate-900 sm:border-b-white"
                : "bg-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`browser-panel-${activeIndex}`}
        aria-labelledby={`browser-tab-${activeIndex}`}
        className="bg-white px-6 py-10 sm:px-10"
      >
        {activeTab.content}
      </div>
    </div>
  );
}
