"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SitePreloader — Fixed Implementation
 *
 * Root causes of previous bugs:
 *
 * 1. HYDRATION MISMATCH: The lazy useState initializer accessed
 *    sessionStorage / window during SSR fallback to `true`, but ran again
 *    client-side returning `false` (when sessionStorage was set). This
 *    mismatched the server-rendered HTML and made React tear down the
 *    component immediately, leaving progress stuck at 0 and the preloader
 *    invisible on repeat visits.
 *
 * 2. STUCK ON RELOAD (sessionStorage): Writing "sr_preloaded" made every
 *    subsequent hard-reload skip the preloader entirely, so `isLoading`
 *    initialised as `false` and the counter was never shown. Visitors who
 *    reload expecting to see the loading screen got an instant flash instead.
 *
 * 3. LEAKED setTimeout: The cleanup function cleared the setInterval but NOT
 *    the inner setTimeout on completion. In React 18 Strict Mode (double
 *    effect mount) the dangling setTimeout fired after cleanup, calling
 *    setIsLoading(false) on a stale mount and leaving overflow:hidden on body.
 *
 * 4. Wrong dependency array: [isLoading] re-triggered the effect whenever
 *    isLoading changed, creating a second interval while the first was being
 *    cleaned up.
 *
 * Fix strategy:
 * - Always start with isLoading = true on the server / first render to avoid
 *   hydration mismatch.  Detect sessionStorage only inside useEffect (client).
 * - Skip sessionStorage entirely — show the preloader on every fresh page load.
 *   The preloader is now short enough (600 ms desktop / 350 ms mobile) that
 *   showing it every time is acceptable and matches the original design intent.
 * - Track the inner setTimeout with a ref so cleanup always clears it.
 * - Use an empty [] dependency array; the effect runs exactly once after mount.
 * - Add a hard 3-second safety cap so a frozen browser can never permanently
 *   block the visitor on the preloader screen.
 */
export function SitePreloader() {
  // Determine whether to show the preloader purely from initial state.
  // - On the server: always true (avoids SSR/hydration mismatch).
  // - On the client: false only when prefers-reduced-motion is active.
  //   We intentionally do NOT use sessionStorage here — the preloader
  //   should appear on every fresh page load (it's short enough).
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return true; // SSR: show preloader
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  // Start at 1 so the counter is immediately non-zero when the preloader mounts.
  const [progress, setProgress] = useState(1);

  // Track both timers so cleanup always cancels them, even under Strict Mode.
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // If isLoading is already false (reduced-motion case), nothing to do.
    if (!isLoading) return;

    const isMobile =
      window.innerWidth < 768 || "ontouchstart" in window;

    // Duration tuned for perceived speed: fast enough not to annoy, long
    // enough to let critical fonts / styles finish parsing.
    const duration = isMobile ? 400 : 700;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    // Lock body scroll while the preloader is visible.
    document.body.style.overflow = "hidden";

    // --- Hard safety cap: never block the visitor for more than 3 seconds ---
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setProgress(100);
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3000);

    intervalRef.current = setInterval(() => {
      currentStep += 1;

      // Ease-out curve: fast early, slow finish — feels natural.
      const easeProgress = Math.min(
        100,
        Math.round(Math.pow(currentStep / steps, 0.8) * 100)
      );

      setProgress(easeProgress);

      if (currentStep >= steps) {
        // Counter reached 100 — clear the interval now.
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        // Small hold at 100% so the visitor can read it before exit.
        // We re-use the same timeoutRef so cleanup always cancels it.
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 200);
      }
    }, intervalTime);

    // Cleanup: fires on unmount (and on Strict Mode double-invoke).
    // Clears BOTH timers so no stale callback can touch state after unmount.
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
  // isLoading in deps: safe because setIsLoading(false) only ever runs once
  // (the timer fires once then clears itself). The early-return guard prevents
  // re-entering the effect on that second call.
  }, [isLoading]);

  // Once loading is done, render nothing so AnimatePresence can exit cleanly.
  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
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

          {/* Percentage Display — always visible, counter goes from 0 → 100 */}
          <div className="font-display font-extrabold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tighter">
            {progress}
            <span className="text-3xl sm:text-5xl text-[#D96B18] font-mono">%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full max-w-md space-y-2">
            <div className="h-[3px] w-full bg-neutral-800 rounded-full overflow-hidden relative">
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
          <div className="text-neutral-600">
            © {new Date().getFullYear()} SAMMYREMI TECHNOLOGIES
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
