import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
}

export default function SplitText({
  text,
  tag: Tag = "p",
  className = "",
  delay = 70,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
}: SplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const splitText = text.split(splitType === "words" ? " " : "");
    
    element.innerHTML = splitText
      .map((char, index) => 
        splitType === "words" 
          ? `<span style="display: inline-block;">${char}${index < splitText.length - 1 ? "&nbsp;" : ""}</span>`
          : `<span style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");

    const spans = element.querySelectorAll("span");
    
    gsap.set(spans, from);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(spans, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold]);

  if (Tag === "p") {
    return <p ref={textRef} className={className} />;
  }
  if (Tag === "h1") {
    return <h1 ref={textRef as any} className={className} />;
  }
  if (Tag === "h2") {
    return <h2 ref={textRef as any} className={className} />;
  }
  if (Tag === "h3") {
    return <h3 ref={textRef as any} className={className} />;
  }
  if (Tag === "span") {
    return <span ref={textRef as any} className={className} />;
  }
  return <div ref={textRef} className={className} />;
}