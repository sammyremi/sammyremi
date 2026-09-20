"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-white text-[#0B0D13] py-24 sm:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-12">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionLabel number="08" text="START A PROJECT" lightMode />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0B0D13] max-w-4xl leading-tight">
            Ready to build software that moves your business forward?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-neutral-600 text-lg sm:text-2xl max-w-2xl font-normal leading-relaxed">
            Have a project in mind, an operational bottleneck to fix, or a new digital product to launch? Let&apos;s discuss your roadmap.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              href="mailto:contact@sammyremi.com"
              variant="primary"
              size="lg"
              icon
            >
              Start a Project
            </Button>
            <Button
              href="mailto:contact@sammyremi.com"
              variant="outline-dark"
              size="lg"
            >
              contact@sammyremi.com
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
