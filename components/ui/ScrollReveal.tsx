"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  distance = 28,
  className = "",
  staggerChildren,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  const initial = {
    opacity: 0,
    ...getOffset(),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = {
    duration,
    delay,
    // Spring-like cubic-bezier for a natural, premium feel
    ease: [0.22, 1, 0.36, 1] as const,
    ...(staggerChildren ? { staggerChildren } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      // Larger margin so elements start animating earlier — no jarring pop-in
      viewport={{ once, margin: "-40px 0px" }}
      transition={transition}
      className={className}
      // Promote to GPU layer to eliminate paint jank
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};
