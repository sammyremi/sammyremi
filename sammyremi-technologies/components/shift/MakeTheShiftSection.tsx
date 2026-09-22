"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StickyCardStack } from "@/components/ui/StickyCardStack";
import { makeTheShiftTags } from "@/data/siteData";

export const MakeTheShiftSection: React.FC = () => {
  return (
    <section
      id="shift"
      className="bg-[#0B0D13] dark:bg-[#0B0D13] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-colors"
    >
      {/* Background glow effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D96B18]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 z-10 relative">
        {/* Section Label */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="03" text="MAKE THE SHIFT" />
        </ScrollReveal>

        {/* Sticky Stacking Cards (Same Animation System as Section 04) */}
        <StickyCardStack>
          {/* Card 01: Problem Statement Card */}
          <div className="bg-[#131622] text-white p-8 sm:p-12 md:p-14 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-8 relative overflow-hidden">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] max-w-5xl">
              Your business shouldn&apos;t have to work around its software.
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-neutral-300 font-medium text-lg sm:text-2xl pt-2">
              {makeTheShiftTags.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {idx > 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#D96B18]" />}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 02: Solution Banner Card */}
          <a
            href="#contact"
            className="group block bg-[#D96B18] hover:bg-[#B8550B] text-white p-8 sm:p-12 md:p-14 rounded-3xl transition-all duration-300 shadow-2xl shadow-[#D96B18]/30 hover:shadow-[#D96B18]/45 active:scale-[0.99] border border-white/20"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
                We build the software that solves them.
              </h3>
              
              <span className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#D96B18] transition-all duration-300 shrink-0">
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </StickyCardStack>
      </div>
    </section>
  );
};
