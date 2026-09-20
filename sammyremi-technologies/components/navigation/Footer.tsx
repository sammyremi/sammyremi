import React from "react";
import { Mail, Phone } from "lucide-react";
import { navLinks } from "@/data/siteData";
import { BrandLogo } from "@/components/navigation/BrandLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0D13] dark:bg-[#0B0D13] text-white py-16 px-6 sm:px-8 lg:px-12 border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand Identity & Contact Info */}
        <div className="flex flex-col gap-3">
          <BrandLogo />
          <p className="text-xs text-neutral-400 font-normal">
            Software Development & Digital Solutions for Business.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 pt-1">
            <a
              href="mailto:officialsammyremi@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#D96B18] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D96B18]" />
              officialsammyremi@gmail.com
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="tel:+2348147468979"
              className="inline-flex items-center gap-1.5 hover:text-[#D96B18] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D96B18]" />
              +2348147468979
            </a>
          </div>
          <p className="text-xs text-neutral-500 pt-2">
            &copy; {new Date().getFullYear()} SammyRemi Technologies. All rights reserved.
          </p>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-[#D96B18] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
