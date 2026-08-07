"use client";

import { useState, type ReactNode } from "react";
import Win95Window from "@/components/ui/Win95Window";

export interface BrowserTab {
  label: string;
  content: ReactNode;
}

interface BrowserTabsProps {
  title?: string;
  tabs: BrowserTab[];
}

export default function BrowserTabs({
  title = "browser",
  tabs,
}: BrowserTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[Math.min(activeIndex, tabs.length - 1)];

  return (
    <Win95Window title={`C:\\${title.toUpperCase()}.EXE`}>
      {/* Folder Tabs Wrapper */}
      <div className="flex flex-col gap-1 sm:flex-row sm:overflow-x-auto pb-1 bg-[#c0c0c0] px-1 pt-1 border-b-2 border-white">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`browser-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`browser-panel-${index}`}
              onClick={() => setActiveIndex(index)}
              className="shrink-0 px-4 py-2 text-left font-mono text-xs sm:text-sm font-bold uppercase transition focus:outline-none"
              style={{
                backgroundColor: isActive ? "#c0c0c0" : "#d4d4d4",
                borderStyle: "outset",
                borderWidth: "2px",
                borderColor: isActive
                  ? "#ffffff #808080 #c0c0c0 #ffffff"
                  : "#ffffff #808080 #808080 #ffffff",
                marginBottom: isActive ? "-2px" : "0px",
                zIndex: isActive ? 10 : 1,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div
        role="tabpanel"
        id={`browser-panel-${activeIndex}`}
        aria-labelledby={`browser-tab-${activeIndex}`}
        className="p-6 bg-white text-black mt-2 font-mono"
        style={{
          borderStyle: "inset",
          borderWidth: "2px",
          borderColor: "#808080 #ffffff #ffffff #808080",
        }}
      >
        {activeTab.content}
      </div>
    </Win95Window>
  );
}

