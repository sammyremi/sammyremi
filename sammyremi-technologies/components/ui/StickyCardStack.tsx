"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StickyCardStackProps {
  children: React.ReactNode[];
  className?: string;
}

export const StickyCardStack: React.FC<StickyCardStackProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".sticky-card-item");

    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      // Set will-change for GPU compositing
      gsap.set(card, { willChange: "transform, opacity" });

      const st = ScrollTrigger.create({
        trigger: nextCard,
        start: "top 90%",
        end: "top 30%",
        scrub: 1.2, // numeric scrub = smooth lag, not instant
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(card, {
            scale: gsap.utils.interpolate(1, 0.94, progress),
            opacity: gsap.utils.interpolate(1, 0.55, progress),
          });
        },
      });

      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col gap-12 ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className="sticky-card-item sticky top-28"
          style={{ willChange: "transform, opacity" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
