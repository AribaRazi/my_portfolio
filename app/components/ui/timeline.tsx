"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative pl-8">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] opacity-50"
      />
      <div className="space-y-10">{children}</div>
    </div>
  );
}

export function TimelineItem({
  index,
  title,
  subtitle,
  period,
  children,
}: {
  index: number;
  title: string;
  subtitle?: string;
  period: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] shadow-[0_0_12px_var(--glow)]" />
      <p className="font-mono text-xs text-accent mb-1">{period}</p>
      <h3 className="font-display font-semibold text-text">{title}</h3>
      {subtitle && <p className="text-sm text-text-muted mb-2">{subtitle}</p>}
      {children}
    </motion.div>
  );
}
