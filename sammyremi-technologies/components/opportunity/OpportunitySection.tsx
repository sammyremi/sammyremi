"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlurTextScrub } from "@/components/ui/BlurTextScrub";
import { opportunityTags } from "@/data/siteData";

export const OpportunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunity"
      className="bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Label */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="01" text="THE OPPORTUNITY" />
        </ScrollReveal>

        {/* Major Headline with Scrubbed Blur-to-Focus Line Transition */}
        <BlurTextScrub className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-white leading-[1.08] max-w-5xl">
          Technology should work around your business — not the other way around.
        </BlurTextScrub>

        {/* Problem Tag Pills - Continuous Scroll-driven Horizontal Drift */}
        <div ref={trackRef} className="flex flex-nowrap gap-3 sm:gap-4 my-2 will-change-transform">
          {opportunityTags.map((tag) => (
            <div
              key={tag}
              className="px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-medium whitespace-nowrap border border-neutral-200 dark:border-neutral-800 hover:border-[#D96B18] transition-colors"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Sub-statement in Brand Orange Accent */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="font-display font-bold text-2xl sm:text-4xl text-[#D96B18] max-w-4xl leading-tight text-balance">
            We turn business problems, ideas and opportunities into practical digital products.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
