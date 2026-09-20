"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { servicesData } from "@/data/siteData";

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>("web-dev");

  return (
    <section
      id="services"
      className="bg-[#F4F6F9] text-[#0B0D13] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header section with SectionLabel and pinned Title */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="02" text="CAPABILITIES" lightMode />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl tracking-tight text-[#0B0D13]">
              What we build
            </h2>
          </ScrollReveal>
        </div>

        {/* Structured Row Blocks matching Screenshot 3 */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden divide-y divide-neutral-200/80">
          {servicesData.map((service, index) => {
            const isSelected = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActiveService(isSelected ? null : service.id)}
                className={`group p-6 sm:p-10 cursor-pointer transition-colors duration-300 ${
                  isSelected ? "bg-[#F8FAFC]" : "hover:bg-[#F8FAFC]/70"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Left Column: Number + Title & Description */}
                  <div className="flex items-start gap-4 sm:gap-8 flex-1">
                    {/* Index Number */}
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#387BFF] pt-2 select-none">
                      {service.number}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      {/* Service Title */}
                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B0D13] group-hover:text-[#387BFF] transition-colors tracking-tight">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-neutral-500 text-sm sm:text-lg max-w-3xl leading-relaxed">
                        {service.description}
                      </p>

                      {/* Expanded Sub-details */}
                      {service.details && (
                        <div className="flex flex-wrap gap-2 pt-3">
                          {service.details.map((detail) => (
                            <span
                              key={detail}
                              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
                            >
                              <ChevronRight className="w-3 h-3 text-[#387BFF]" />
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Arrow Circle Icon matching Framer screenshot */}
                  <div className="pt-1">
                    <span className="w-10 h-10 rounded-full border border-[#387BFF]/30 text-[#387BFF] flex items-center justify-center group-hover:border-[#387BFF] group-hover:bg-[#387BFF] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
