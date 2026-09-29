import React from "react";
import { Mail, Phone } from "lucide-react";
import { navLinks } from "@/data/siteData";
import { siteConfig } from "@/lib/site";
import { BrandLogo } from "@/components/navigation/BrandLogo";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TiktokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.07-1.3 1.8-.24.84-.06 1.78.47 2.47.53.71 1.4 1.15 2.27 1.16 1.05.04 2.1-.42 2.7-1.28.52-.71.74-1.6.72-2.48.01-4.73-.01-9.46.01-14.19z" />
  </svg>
);

export const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "TikTok",
    href: siteConfig.social.tiktok,
    icon: TiktokIcon,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-white py-16 px-6 sm:px-8 lg:px-12 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand Identity & Contact Info */}
        <div className="flex flex-col gap-3">
          <BrandLogo />
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-normal">
            Software Development & Digital Solutions for Business.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D96B18] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D96B18]" />
              {siteConfig.email}
            </a>
            <span className="text-neutral-400 dark:text-neutral-600">•</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D96B18] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D96B18]" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${siteConfig.name} on ${social.name}`}
                  className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-[#D96B18] dark:hover:text-[#D96B18] hover:border-[#D96B18]/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-neutral-500 pt-2">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-[#D96B18] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
