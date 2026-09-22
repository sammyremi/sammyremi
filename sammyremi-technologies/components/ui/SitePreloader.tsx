"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    const duration = 1800; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      // Easing progress curve for natural loading feel
      const easeProgress = Math.min(
        100,
        Math.round(Math.pow(currentStep / steps, 0.85) * 100)
      );
      
      setProgress(easeProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
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
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-sm sm:text-base font-mono tracking-[0.25em] text-neutral-400 uppercase">
                Engineering Digital Excellence
              </h2>
            </motion.div>

            {/* Percentage Display */}
            <div className="font-display font-extrabold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tighter">
              {progress}<span className="text-3xl sm:text-5xl text-[#D96B18] font-mono">%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full max-w-md space-y-2">
              <div className="h-[3px] w-full bg-neutral-800 rounded-full overflow-hidden relative p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D96B18] via-[#F38C38] to-[#D96B18] rounded-full shadow-[0_0_15px_rgba(217,107,24,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
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
            <div className="text-neutral-600">© {new Date().getFullYear()} SAMMYREMI TECHNOLOGIES</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
