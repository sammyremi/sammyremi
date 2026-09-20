"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { makeTheShiftTags } from "@/data/siteData";

export const MakeTheShiftSection: React.FC = () => {
  return (
    <section
      id="shift"
      className="bg-[#0B0D13] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#387BFF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 z-10 relative">
        {/* Section Label */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="03" text="MAKE THE SHIFT" />
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] max-w-5xl">
            Your business shouldn&apos;t have to work around its software.
          </h2>
        </ScrollReveal>

        {/* List of pain points */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-neutral-400 font-medium text-lg sm:text-2xl">
            {makeTheShiftTags.map((item, idx) => (
              <span key={item} className="inline-flex items-center gap-3">
                {idx > 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#387BFF]" />}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Highlight Solution Banner Matching Screenshot 4 */}
        <ScrollReveal direction="up" delay={0.4}>
          <a
            href="#contact"
            className="group block bg-[#387BFF] hover:bg-[#2B6BEA] text-white p-8 sm:p-12 rounded-3xl transition-all duration-300 shadow-2xl shadow-[#387BFF]/25 hover:shadow-[#387BFF]/40 active:scale-[0.99]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
                We build the software that solves them.
              </h3>
              
              <span className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#387BFF] transition-all duration-300 shrink-0">
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
