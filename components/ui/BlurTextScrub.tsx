"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BlurTextScrubProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export const BlurTextScrub: React.FC<BlurTextScrubProps> = ({
  children,
  className = "",
  as: Component = "h2",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;

    const isMobile = typeof window !== "undefined" && (window.innerWidth < 768 || "ontouchstart" in window);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          filter: isMobile ? "none" : "blur(8px)",
          opacity: 0.3,
          y: 30,
        },
        {
          filter: isMobile ? "none" : "blur(0px)",
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 45%",
            scrub: isMobile ? false : 0.8,
            toggleActions: isMobile ? "play none none reverse" : undefined,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Component ref={containerRef as unknown as React.RefObject<HTMLHeadingElement>} className={`transition-none ${className}`}>
      {children}
    </Component>
  );
};
