"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Win95Window from "@/components/ui/Win95Window";

const featuredWork = [
  {
    title: "job-monitoring-system.exe",
    description:
      "Adapter pattern across 10+ ATS platforms, robots.txt compliant, rate limited with backoff.",
    image: "/images/case-studies/job-monitoring-system/main-photo.png",
    link: "/case-studies/job-monitoring-system",
  },
  {
    title: "accelist-internship.exe",
    description:
      "Event-driven integration syncing two production systems via APIs and webhooks.",
    image: "/images/case-studies/accelist/main-photo.png",
    link: "/case-studies/accelist-lentera-indonesia",
  },
  {
    title: "flyrank-backend.exe",
    description:
      "Node/Express API taken through SQLite, Docker, and PostgreSQL.",
    image: "/images/case-studies/flyrank-ai/main-photo.png",
    link: "/case-studies/flyrank-ai",
  },
];

export default function FeaturedWorkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredWork.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = featuredWork[currentIndex];

  return (
    <div className="w-full font-mono text-black">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Win95Window title="C:\FEATURED_WORK.EXE">
          {/* Inset screen panel showing the current slide's project image */}
          <div
            className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center"
            style={{
              borderStyle: "inset",
              borderWidth: "2px",
              borderColor: "#808080 #ffffff #ffffff #808080",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Description and Action Area */}
          <div className="mt-3 flex flex-col gap-2">
            <div className="font-bold text-sm sm:text-base text-blue-900">
              {currentSlide.title}
            </div>
            <p className="text-xs sm:text-sm text-gray-800 leading-normal min-h-[40px]">
              {currentSlide.description}
            </p>

            {/* View Case Study Button styled as Win95 Raised Button */}
            <div className="mt-2 flex justify-start">
              <Link
                href={currentSlide.link}
                className="inline-block px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white active:pt-2 active:pb-1 active:pl-[18px] active:pr-[14px]"
                style={{
                  outline: "none",
                }}
              >
                View Case Study
              </Link>
            </div>

            {/* Progress Dots */}
            <div className="mt-3 flex justify-center gap-2">
              {featuredWork.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="w-3.5 h-3.5 transition-colors focus:outline-none"
                  style={{
                    backgroundColor: index === currentIndex ? "#000000" : "#808080",
                    borderStyle: "inset",
                    borderWidth: "1.5px",
                    borderColor: "#808080 #ffffff #ffffff #808080",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  );
}
