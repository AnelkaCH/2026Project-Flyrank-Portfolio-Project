import { useState, useEffect, useRef, useCallback } from "react";

interface UseAutoCarouselOptions {
  itemCount: number;
  intervalMs?: number;
}

export function useAutoCarousel({
  itemCount,
  intervalMs = 5000,
}: UseAutoCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused && itemCount > 0) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % itemCount);
      }, intervalMs);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, itemCount, intervalMs]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: () => setIsPaused(false),
  };

  return {
    currentIndex,
    isPaused,
    goTo,
    pauseHandlers,
  };
}
