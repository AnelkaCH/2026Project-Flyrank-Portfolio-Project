"use client";

import { useState } from "react";
import Win95Window from "@/components/ui/Win95Window";

export interface CaseStudyBrowserParagraph {
  lead?: string;
  body: string;
}

export interface CaseStudyBrowserTab {
  heading: string;
  paragraphs: CaseStudyBrowserParagraph[];
}

export default function CaseStudyBrowser({
  tabs,
}: {
  tabs: CaseStudyBrowserTab[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[Math.min(activeIndex, tabs.length - 1)];

  return (
    <Win95Window title="C:\CASE_STUDY_VIEWER.EXE">
      {/* Folder Tabs Wrapper */}
      <div className="flex flex-col gap-1 sm:flex-row sm:overflow-x-auto pb-1 bg-[#c0c0c0] px-1 pt-1 border-b-2 border-white">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.heading}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={isActive}
              aria-controls={`panel-${index}`}
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
              {tab.heading}
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div
        role="tabpanel"
        id={`panel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
        className="p-4 sm:p-6 bg-white text-black mt-2 font-mono"
        style={{
          borderStyle: "inset",
          borderWidth: "2px",
          borderColor: "#808080 #ffffff #ffffff #808080",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-lg sm:text-xl font-bold text-blue-900">
            {activeTab.heading}
          </h2>

          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-800">
            {activeTab.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.lead && (
                  <span className="font-bold text-black block sm:inline">
                    {paragraph.lead}{" "}
                  </span>
                )}
                {paragraph.body}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Win95Window>
  );
}
