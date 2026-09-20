"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { processStepsData } from "@/data/siteData";

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="bg-[#F4F6F9] text-[#0B0D13] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="05" text="PROCESS" lightMode />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0B0D13]">
              How we work
            </h2>
          </ScrollReveal>
        </div>

        {/* Process Step Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStepsData.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between gap-6 group hover:border-[#387BFF]/40 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xl font-bold text-[#387BFF]">
                  {step.number}
                </span>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0D13] group-hover:text-[#387BFF] transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden mt-4">
                <div className="w-1/3 h-full bg-[#387BFF] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
