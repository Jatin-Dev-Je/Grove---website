"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    function animateCount() {
      const startTime = performance.now();
      const startVal = 0;

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        /* Ease out quart */
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = startVal + (end - startVal) * eased;

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
