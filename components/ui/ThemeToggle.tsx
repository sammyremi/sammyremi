"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { setTheme, resolvedTheme } = useTheme();
  
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className={`w-9 h-9 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:border-[#D96B18] dark:hover:border-[#D96B18] focus:outline-none focus:ring-2 focus:ring-[#D96B18]/50 cursor-pointer ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-[#D96B18]" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-[#D96B18]" />
      </motion.div>
    </button>
  );
};
