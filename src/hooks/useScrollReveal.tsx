import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Attaches a fade-up reveal animation to the returned ref
 * using IntersectionObserver (no extra dependencies needed).
 */
export function useScrollReveal<T extends HTMLElement>(
  options: { threshold?: number; delay?: number } = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial hidden state
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}
