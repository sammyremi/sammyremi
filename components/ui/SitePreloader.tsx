"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SitePreloader — Production-Grade Preloader Component
 *
 * Architecture & Fix Highlights:
 * 1. Hydration & Prerender Safety: Always starts with `isLoading = true` during initial render
 *    so server-rendered HTML and client initial hydration match 100%.
 * 2. AnimatePresence Exit: `{isLoading && (<motion.div ... />)}` is placed inside `<AnimatePresence>`
 *    so Framer Motion smoothly executes the slide-up exit animation (`y: "-100%"`).
 * 3. High-Contrast Counter Display: Large counter uses `text-white` for 100% visibility against `#0B0D13`.
 * 4. Asynchronous Timer Scheduling: Manages timer callbacks without synchronous effect state mutations,
 *    satisfying strict React 19 / ESLint compiler rules.
 * 5. Scroll Lock Safety: Locks `document.body.style.overflow = "hidden"` while visible and guarantees
 *    cleanup upon unmount or exit complete.
 */
export function SitePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(1);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion asynchronously to avoid synchronous effect state mutation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const duration = isMobile ? 1000 : 1200;
    const intervalTime = 25;
    const steps = Math.ceil(duration / intervalTime);
    let currentStep = 0;

    // Lock body scroll while preloader is visible
    document.body.style.overflow = "hidden";

    // Hard safety cap: max 3.5 seconds before auto-dismiss
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setProgress(100);
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3500);

    intervalRef.current = setInterval(() => {
      currentStep += 1;

      // Natural ease-out curve from 1 to 100
      const easeProgress = Math.min(
        100,
        Math.round(Math.pow(currentStep / steps, 0.85) * 100)
      );

      setProgress(easeProgress);

      if (currentStep >= steps) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Brief hold at 100% READY before exit
        timeoutRef.current = setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 250);
      }
    }, intervalTime);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#0B0D13] text-white p-8 sm:p-14 select-none pointer-events-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D96B18] animate-pulse" />
              <span className="font-semibold text-white">SAMMYREMI</span>
              <span className="hidden sm:inline text-neutral-500">| TECHNOLOGIES</span>
            </div>
            <div>
              <span>LOAD_STATE: {progress < 100 ? "LOADING" : "READY"}</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="my-auto flex flex-col items-center justify-center max-w-xl mx-auto w-full text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              <h2 className="text-sm sm:text-base font-mono tracking-[0.25em] text-neutral-400 uppercase">
                Engineering Digital Excellence
              </h2>
            </motion.div>

            {/* Percentage Display — highly visible counter */}
            <div className="font-display font-extrabold text-7xl sm:text-9xl text-white tracking-tighter select-none">
              {progress}
              <span className="text-3xl sm:text-5xl text-[#D96B18] font-mono ml-1">%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full max-w-md space-y-2">
              <div className="h-[3px] w-full bg-neutral-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D96B18] via-[#F38C38] to-[#D96B18] rounded-full shadow-[0_0_15px_rgba(217,107,24,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.05 }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                <span>00%</span>
                <span>SYSTEM INIT</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-2">
            <div>SOFTWARE ARCHITECTURE • DIGITAL PRODUCTS • AI SOLUTIONS</div>
            <div className="text-neutral-600">
              © {new Date().getFullYear()} SAMMYREMI TECHNOLOGIES
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
