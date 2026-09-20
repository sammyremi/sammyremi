"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StickyCardStack } from "@/components/ui/StickyCardStack";
import { caseStudiesData } from "@/data/siteData";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section
      id="work"
      className="bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="04" text="SELECTED WORK" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-white">
              Built for real business problems.
            </h2>
          </ScrollReveal>
        </div>

        {/* Sticky Stacking Case Study Cards matching Valeriia Golma card transition */}
        <StickyCardStack>
          {caseStudiesData.map((project) => {
            const isDarkCard = project.accentBg === "dark";

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl p-8 sm:p-14 transition-all duration-300 overflow-hidden ${
                  isDarkCard
                    ? "bg-[#0B0D13] dark:bg-[#131622] text-white shadow-xl border border-white/10"
                    : "bg-[#F8FAFC] dark:bg-[#131622] text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-white/10 shadow-sm"
                }`}
              >
                {/* Ambient Accent Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D96B18]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
                  {/* Project Header Tag */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#D96B18] uppercase">
                      {project.number} — {project.client}
                    </span>

                    <span className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-white flex items-center justify-center group-hover:bg-[#D96B18] group-hover:text-white group-hover:border-[#D96B18] transition-all duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-xl font-normal leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>

                  {/* Project Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </StickyCardStack>
      </div>
    </section>
  );
};
