import React from "react";

interface SectionLabelProps {
  number?: string;
  text: string;
  lightMode?: boolean;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  text,
  className = "",
}) => {
  const content = number ? `${number} / ${text}` : text;
  
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-[#D96B18] ${className}`}
    >
      <span>{content}</span>
    </div>
  );
};
