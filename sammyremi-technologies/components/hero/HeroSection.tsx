"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  const headlineLines = [
    "We build digital products",
    "that move businesses",
    "forward.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1.0] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.215, 0.61, 0.355, 1.0] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0B0D13] text-white pt-32 pb-16 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Radial ambient glow in background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#387BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full my-auto py-12 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col gap-8"
        >
          {/* Section Subhead Label */}
          <motion.div variants={fadeUpVariants}>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-mono font-bold text-[#60A5FA]">
              SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS
            </span>
          </motion.div>

          {/* Headline - Editorial Line Reveal */}
          <div className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.div variants={lineVariants}>
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed text-balance"
          >
            SammyRemi Technologies designs and builds websites, mobile applications,
            custom business software and AI-powered solutions for businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button href="#contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href="#work" variant="secondary-blue" size="lg">
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator & Divider Line */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-8 border-t border-white/10 flex items-center justify-between">
        <motion.a
          href="#opportunity"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="inline-flex items-center gap-3 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 group-hover:border-[#387BFF] group-hover:bg-[#387BFF]/20 transition-all">
            <ArrowDown className="w-4 h-4 text-[#60A5FA] group-hover:translate-y-0.5 transition-transform" />
          </span>
          <span>Scroll to see what your business could become</span>
        </motion.a>
      </div>
    </section>
  );
};
