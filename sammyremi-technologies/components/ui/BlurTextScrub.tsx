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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          filter: "blur(10px)",
          opacity: 0.3,
          y: 30,
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.8,
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
