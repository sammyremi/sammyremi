"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] dark:bg-[#0B0D13] text-neutral-900 dark:text-white py-24 sm:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionLabel number="08" text="START A PROJECT" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-white leading-tight">
              Ready to build software that moves your business forward?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg sm:text-2xl font-normal leading-relaxed text-balance">
              Have a project in mind, an operational bottleneck to solve, or custom software needed? Tell us about your goals.
            </p>
          </ScrollReveal>

          {/* Direct Contact Badges */}
          <ScrollReveal direction="up" delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm sm:text-base">
              <a
                href="mailto:officialsammyremi@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-[#D96B18] dark:hover:border-[#D96B18] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#D96B18]" />
                <span>officialsammyremi@gmail.com</span>
              </a>

              <a
                href="tel:08147468979"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-[#D96B18] dark:hover:border-[#D96B18] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#D96B18]" />
                <span>08147468979</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Form Component */}
        <ScrollReveal direction="up" delay={0.4} className="max-w-4xl mx-auto w-full">
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
};
