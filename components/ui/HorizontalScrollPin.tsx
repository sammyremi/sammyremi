"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HorizontalScrollPinProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScrollPin: React.FC<HorizontalScrollPinProps> = ({
  children,
  className = "",
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current || !trackRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = triggerRef.current;
    const trackEl = trackRef.current;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(trackEl.scrollWidth - window.innerWidth + 120);

      gsap.to(trackEl, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: () => `+=${trackEl.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerEl);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative overflow-hidden w-full">
      <div className="h-screen flex items-center">
        <div ref={trackRef} className={`flex items-center gap-8 px-6 sm:px-12 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
