"use client";

import React from "react";
import { Target, Layers, Cpu, Users, LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whySammyRemiData } from "@/data/siteData";

export const WhySammyRemiSection: React.FC = () => {
  const iconMap: Record<string, LucideIcon> = {
    Target,
    Layers,
    Cpu,
    Users,
  };

  return (
    <section
      id="why"
      className="bg-white text-[#0B0D13] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="06" text="WHY SAMMYREMI" lightMode />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0B0D13] max-w-4xl">
              Engineering built for business impact.
            </h2>
          </ScrollReveal>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whySammyRemiData.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Target;

            return (
              <ScrollReveal key={item.title} direction="up" delay={0.15 + index * 0.1}>
                <div className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-neutral-200/80 flex flex-col gap-5 hover:border-[#387BFF]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#387BFF]/10 flex items-center justify-center group-hover:bg-[#387BFF] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#387BFF] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-[#0B0D13]">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
