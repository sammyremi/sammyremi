"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { caseStudiesData } from "@/data/siteData";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section
      id="work"
      className="bg-white text-[#0B0D13] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="04" text="SELECTED WORK" lightMode />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0B0D13]">
              Built for real business problems.
            </h2>
          </ScrollReveal>
        </div>

        {/* Editorial Case Study Cards Matching Screenshots 4 & 5 */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {caseStudiesData.map((project, index) => {
            const isDark = project.accentBg === "dark";

            return (
              <ScrollReveal key={project.id} direction="up" delay={0.2 + index * 0.15}>
                <div
                  className={`group relative rounded-3xl p-8 sm:p-14 transition-all duration-300 overflow-hidden ${
                    isDark
                      ? "bg-[#0B0D13] text-white shadow-xl shadow-black/20"
                      : "bg-[#F4F6F9] text-[#0B0D13] border border-neutral-200/80 shadow-sm"
                  }`}
                >
                  {/* Subtle Ambient Accent Glow for Dark Card */}
                  {isDark && (
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#387BFF]/10 rounded-full blur-[100px] pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
                    {/* Project Header Tag */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#387BFF] uppercase">
                        {project.number} — {project.client}
                      </span>

                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          isDark
                            ? "border border-white/20 text-white group-hover:bg-[#387BFF] group-hover:border-[#387BFF]"
                            : "border border-neutral-300 text-[#0B0D13] group-hover:bg-[#387BFF] group-hover:text-white group-hover:border-[#387BFF]"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight ${
                        isDark ? "text-white" : "text-[#0B0D13]"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-base sm:text-xl font-normal leading-relaxed ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Project Feature Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-4 py-1.5 rounded-full ${
                            isDark
                              ? "bg-white/10 text-neutral-300 border border-white/10"
                              : "bg-white text-neutral-700 border border-neutral-200/90 shadow-xs"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
