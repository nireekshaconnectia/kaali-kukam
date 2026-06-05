import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const elementRef = useRef<T>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    // Set initial hidden state
    element.style.opacity = "0";
    element.style.transform = "translateY(24px)";
    element.style.transition = `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)`;
    if (options.delay) {
      element.style.transitionDelay = `${options.delay}ms`;
    }

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.delay, options.rootMargin, hasRevealed]);

  return elementRef;
}