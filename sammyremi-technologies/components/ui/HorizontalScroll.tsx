"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  if (shouldReduceMotion) {
    return <div className={`flex flex-col gap-6 ${className}`}>{children}</div>;
  }

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full">
      <div className="sticky top-24 h-[80vh] flex items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex items-center gap-8 ${className}`}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};
