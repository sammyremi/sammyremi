"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showText = true,
}) => {
  return (
    <Link
      href="#hero"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
    >
      {/* Official Emblem Container */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/90 p-1 flex items-center justify-center shadow-sm border border-neutral-200 dark:border-white/20 transition-transform duration-300 group-hover:scale-105 shrink-0 overflow-hidden">
        <Image
          src="/logo.png"
          alt="SammyRemi Technologies Logo"
          width={40}
          height={40}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-[#D96B18] transition-colors">
          SammyRemi <span className="text-[#D96B18]">Technologies</span>
        </span>
      )}
    </Link>
  );
};
