"use client";

import Win95Window from "@/components/ui/Win95Window";
import Win95Inset from "@/components/ui/Win95Inset";
import Win95Button from "@/components/ui/Win95Button";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";

export default function FeaturedWorkSlider() {
  const featuredWork = getFeaturedCaseStudies();
  const { currentIndex, goTo, pauseHandlers } = useAutoCarousel({
    itemCount: featuredWork.length,
    intervalMs: 5000,
  });

  const currentSlide = featuredWork[currentIndex] ?? featuredWork[0];

  return (
    <div className="w-full font-mono text-black">
      <div {...pauseHandlers}>
        <Win95Window title="C:\FEATURED_WORK.EXE">
          {/* Inset screen panel showing the current slide's project image */}
          <Win95Inset className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="object-cover w-full h-full"
            />
          </Win95Inset>

          {/* Description and Action Area */}
          <div className="mt-3 flex flex-col gap-2">
            <div className="font-bold text-sm sm:text-base text-blue-900">
              {currentSlide.title}
            </div>
            <p className="text-xs sm:text-sm text-gray-800 leading-normal min-h-[40px]">
              {currentSlide.description}
            </p>

            {/* View Case Study Button */}
            <div className="mt-2 flex justify-start">
              <Win95Button href={currentSlide.link} size="sm">
                View Case Study
              </Win95Button>
            </div>

            {/* Progress Dots */}
            <div className="mt-3 flex justify-center gap-2">
              {featuredWork.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-3.5 h-3.5 win95-inset-sm transition-colors focus:outline-none ${
                    index === currentIndex ? "bg-black" : "bg-[#808080]"
                  }`}
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
