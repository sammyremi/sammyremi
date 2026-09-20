"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#0B0D13] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="07" text="ABOUT US" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                We bridge complex engineering and real business growth.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-neutral-300 text-lg sm:text-xl font-normal leading-relaxed">
                SammyRemi Technologies is a software development and digital solutions firm.
                We specialize in building custom web applications, mobile products, internal business software,
                and practical AI automations that reduce operational friction and drive long-term value.
              </p>
            </ScrollReveal>
          </div>

          {/* Quick Metrics / Focus Box */}
          <div className="lg:col-span-4 bg-[#131622] p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-white">
              Engineering Expertise
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-neutral-300 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#387BFF]" />
                Next.js & React Architectures
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#387BFF]" />
                TypeScript & Scalable Backends
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#387BFF]" />
                Cloud Deployment (Fly.io, AWS)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#387BFF]" />
                AI Agent & Workflow Automations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
