import React from "react";
import Link from "next/link";
import { navLinks } from "@/data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0D13] text-white py-16 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand Identity & Copyright */}
        <div className="flex flex-col gap-2">
          <Link
            href="#hero"
            className="font-display font-extrabold text-xl tracking-tight text-white hover:text-[#60A5FA] transition-colors"
          >
            SammyRemi Technologies
          </Link>
          <p className="text-xs text-neutral-500 font-normal">
            Software Development & Digital Solutions for Business.
          </p>
          <p className="text-xs text-neutral-600 pt-2">
            &copy; {new Date().getFullYear()} SammyRemi Technologies. All rights reserved.
          </p>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
