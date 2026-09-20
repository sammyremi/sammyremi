import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary-orange" | "secondary-white" | "outline-dark" | "outline-light";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  iconType?: "arrow" | "up-right";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon = false,
  iconType = "arrow",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D96B18]/50 active:scale-[0.98] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#D96B18] hover:bg-[#B8550B] text-white shadow-lg shadow-[#D96B18]/25 hover:shadow-[#D96B18]/40",
    "secondary-orange":
      "bg-[#D96B18]/15 hover:bg-[#D96B18]/25 text-[#D96B18] dark:text-[#F59E0B] border border-[#D96B18]/40",
    "secondary-white":
      "bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-[#0B0D13] dark:text-white shadow-md border border-neutral-200 dark:border-neutral-700",
    "outline-dark":
      "border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-[#D96B18] dark:hover:border-[#D96B18] hover:bg-[#D96B18]/10",
    "outline-light":
      "border border-white/30 hover:border-white text-white hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    const IconComponent = iconType === "up-right" ? ArrowUpRight : ArrowRight;
    return (
      <span className="inline-flex items-center justify-center rounded-full p-0.5 transition-transform duration-300 group-hover:translate-x-0.5">
        <IconComponent className="w-4 h-4 stroke-[2.5]" />
      </span>
    );
  };

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
