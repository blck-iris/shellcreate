"use client";

import { cn } from "@/app/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-12", alignClasses[align], className)}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-shell-700 bg-shell-50 rounded-full mb-4 border border-shell-200">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
