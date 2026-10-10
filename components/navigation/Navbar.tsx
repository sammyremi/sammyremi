"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/siteData";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/navigation/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0B0D13]/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 dark:border-white/10 py-3"
          : "bg-white dark:bg-[#0B0D13] py-4 border-b border-neutral-100 dark:border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Official Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#D96B18] dark:hover:text-[#D96B18] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button href="#contact" variant="primary" size="sm">
            Start a Project
          </Button>
        </div>

        {/* Mobile View Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-900 dark:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-[#0B0D13] border-b border-neutral-200 dark:border-neutral-800 px-6 pt-4 pb-8"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-semibold text-neutral-900 dark:text-white hover:text-[#D96B18] dark:hover:text-[#D96B18] transition-colors py-1 border-b border-neutral-100 dark:border-neutral-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
