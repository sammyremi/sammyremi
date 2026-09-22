"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StickyCardStack } from "@/components/ui/StickyCardStack";
import { servicesData } from "@/data/siteData";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] dark:bg-[#131622] text-neutral-900 dark:text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="02" text="CAPABILITIES" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-white">
              What we build
            </h2>
          </ScrollReveal>
        </div>

        {/* Sticky Stacking Cards (Same Animation System as Section 04) */}
        <StickyCardStack>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-[#0B0D13] p-8 sm:p-12 md:p-14 rounded-3xl border border-neutral-200/80 dark:border-white/10 shadow-lg flex flex-col gap-6 overflow-hidden transition-all duration-300"
            >
              {/* Subtle Ambient Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D96B18]/10 rounded-full blur-[90px] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-6">
                  {/* Left Side: Index Number & Details */}
                  <div className="flex items-start gap-4 sm:gap-8 flex-1">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#D96B18] pt-1 select-none shrink-0">
                      {service.number}
                    </span>

                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight group-hover:text-[#D96B18] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-xl max-w-3xl leading-relaxed">
                        {service.description}
                      </p>

                      {service.details && (
                        <div className="flex flex-wrap gap-2 pt-3">
                          {service.details.map((detail) => (
                            <span
                              key={detail}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-[#D96B18]" />
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Arrow Indicator */}
                  <div className="pt-1 shrink-0">
                    <span className="w-12 h-12 rounded-full border border-[#D96B18]/40 text-[#D96B18] flex items-center justify-center group-hover:bg-[#D96B18] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StickyCardStack>
      </div>
    </section>
  );
};
