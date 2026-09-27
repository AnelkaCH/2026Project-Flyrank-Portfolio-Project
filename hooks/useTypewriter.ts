import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  minSpeed?: number;
  maxSpeed?: number;
  targetDurationMs?: number;
}

export function useTypewriter({
  text,
  minSpeed = 7,
  maxSpeed = 16,
  targetDurationMs = 3000,
}: UseTypewriterOptions) {
  const [typedCount, setTypedCount] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  // Reset or run typing when text changes
  useEffect(() => {
    setTypedCount(0);
  }, [text]);

  useEffect(() => {
    const total = text.length;

    if (reducedMotion.current) {
      setTypedCount(total);
      return;
    }

    if (typedCount >= total) return;

    const speed = Math.max(
      minSpeed,
      Math.min(maxSpeed, Math.round(targetDurationMs / total))
    );

    const timer = setTimeout(() => {
      setTypedCount((n) => n + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [text, typedCount, minSpeed, maxSpeed, targetDurationMs]);

  const total = text.length;
  const isTyping = typedCount < total;
  const isDone = !isTyping;
  const displayedText = text.slice(0, typedCount);

  return {
    typedCount,
    displayedText,
    isTyping,
    isDone,
  };
}
