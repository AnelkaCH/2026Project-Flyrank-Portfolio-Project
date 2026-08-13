"use client";

import { useState } from "react";
import Link from "next/link";
import Win95Window from "@/components/ui/Win95Window";

export interface CaseStudyWindowCard {
  title: string;
  description: string;
  tags: string[];
  imageref: string;
  imagealt: string;
  href: string;
}

export interface CaseStudyWindowTab {
  label: string;
  cards: CaseStudyWindowCard[];
}

export default function CaseStudyWindow({
  tabs,
}: {
  tabs: CaseStudyWindowTab[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[Math.min(activeIndex, tabs.length - 1)];

  return (
    <Win95Window title="C:\CASE_STUDIES.EXE">
      {/* Folder Tabs Wrapper */}
      <div className="flex flex-col gap-1 sm:flex-row sm:overflow-x-auto pb-1 bg-[#c0c0c0] px-1 pt-1 border-b-2 border-white">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`window-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`window-panel-${index}`}
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
        id={`window-panel-${activeIndex}`}
        aria-labelledby={`window-tab-${activeIndex}`}
        className="p-4 sm:p-6 bg-white text-black mt-2"
        style={{
          borderStyle: "inset",
          borderWidth: "2px",
          borderColor: "#808080 #ffffff #ffffff #808080",
        }}
      >
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {activeTab.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col p-4 bg-[#c0c0c0] text-black"
              style={{
                borderStyle: "outset",
                borderWidth: "2px",
                borderColor: "#ffffff #808080 #808080 #ffffff",
              }}
            >
              {/* Photo Inset Box */}
              <div
                className="mb-4 w-full aspect-video bg-black overflow-hidden flex items-center justify-center"
                style={{
                  borderStyle: "inset",
                  borderWidth: "2px",
                  borderColor: "#808080 #ffffff #ffffff #808080",
                }}
              >
                <img
                  src={card.imageref}
                  alt={card.imagealt}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="mb-2 text-base font-bold text-blue-900 font-mono">
                {card.title}
              </h3>

              <p className="mb-4 text-xs text-gray-800 leading-normal font-mono flex-1">
                {card.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white text-gray-800"
                    style={{
                      borderStyle: "inset",
                      borderWidth: "1.5px",
                      borderColor: "#808080 #ffffff #ffffff #808080",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={card.href}
                  className="inline-block px-4 py-1.5 text-xs font-bold bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white active:pt-2 active:pb-1 active:pl-[18px] active:pr-[14px]"
                >
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Win95Window>
  );
}
