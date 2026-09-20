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

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Last card doesn't shrink

      const nextCard = cards[index + 1];

      gsap.to(card, {
        scale: 0.93,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: nextCard,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col gap-12 ${className}`}>
      {children.map((child, index) => (
        <div key={index} className="sticky-card-item sticky top-28">
          {child}
        </div>
      ))}
    </div>
  );
};
