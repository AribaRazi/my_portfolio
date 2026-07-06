"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  icon?: ReactNode;
  external?: boolean;
};

export function Button({
  variant = "primary",
  href,
  icon,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2";

  const styles = {
    primary:
      "btn-gradient text-white shadow-[0_8px_24px_-8px_var(--glow)] hover:shadow-[0_10px_32px_-6px_var(--glow)]",
    secondary:
      "border border-border text-text hover:border-accent/60 hover:text-accent bg-bg-surface",
    ghost: "text-text-muted hover:text-text",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(base, styles[variant], className)}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...props} className="contents">
      {content}
    </button>
  );
}
