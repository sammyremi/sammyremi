"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { opportunityTags } from "@/data/siteData";

export const OpportunitySection: React.FC = () => {
  return (
    <section
      id="opportunity"
      className="bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Label */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="01" text="THE OPPORTUNITY" />
        </ScrollReveal>

        {/* Major Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-white leading-[1.08] max-w-5xl">
            Technology should work around your business — not the other way around.
          </h2>
        </ScrollReveal>

        {/* Problem Tag Pills - Staggered Horizontal Drift */}
        <div className="flex flex-wrap gap-3 sm:gap-4 my-2">
          {opportunityTags.map((tag, idx) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.3 + idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.04 }}
              className="px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-medium transition-colors cursor-default border border-neutral-200 dark:border-neutral-800 hover:border-[#D96B18]"
            >
              {tag}
            </motion.div>
          ))}
        </div>

        {/* Sub-statement in Brand Orange Accent */}
        <ScrollReveal direction="up" delay={0.5}>
          <p className="font-display font-bold text-2xl sm:text-4xl text-[#D96B18] max-w-4xl leading-tight text-balance">
            We turn business problems, ideas and opportunities into practical digital products.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
