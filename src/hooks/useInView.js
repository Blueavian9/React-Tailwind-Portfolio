import { useEffect, useRef, useState } from "react";

/**
 * useInView — returns a [ref, isVisible] pair.
 * Attach ref to any element; isVisible flips true once
 * it enters the viewport and stays true (fire-once).
 *
 * @param {number} threshold — 0–1, how much of the element must be visible (default 0.15)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once, then stop watching
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
