import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  separator?: string;
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  separator = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            gsap.to({ value: start }, {
              value: end,
              duration,
              ease: "power2.out",
              onUpdate: function() {
                const currentValue = Math.round(this.targets()[0].value);
                setCount(currentValue);
              }
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [start, end, duration]);

  const formatNumber = (num: number) => {
    if (separator) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={countRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}