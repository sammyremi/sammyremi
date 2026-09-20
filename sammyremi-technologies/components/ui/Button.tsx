import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary-blue" | "secondary-white" | "outline-dark" | "outline-light";
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
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#387BFF]/50 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#387BFF] hover:bg-[#2B6BEA] text-white shadow-lg shadow-[#387BFF]/25 hover:shadow-[#387BFF]/40",
    "secondary-blue":
      "bg-[#387BFF]/20 hover:bg-[#387BFF]/30 text-[#60A5FA] border border-[#387BFF]/40",
    "secondary-white":
      "bg-white hover:bg-neutral-100 text-[#0B0D13] shadow-md",
    "outline-dark":
      "border border-[#0B0D13]/20 hover:border-[#0B0D13] text-[#0B0D13] hover:bg-[#0B0D13]/5",
    "outline-light":
      "border border-white/20 hover:border-white text-white hover:bg-white/10",
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
