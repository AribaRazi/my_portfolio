"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/constants/data";
import { useActiveSection } from "../../../hooks/use-active-section";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div className="h-[2px] bg-accent origin-left" style={{ scaleX }} />
      <div className="backdrop-blur-md bg-bg/80 border-b border-border-subtle">
        <nav className="mx-auto max-w-content flex items-center justify-between px-6 lg:px-8 h-16">
          <a href="#home" className="font-display font-bold text-text tracking-tight">
            <span className="text-gradient">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm transition-colors py-1",
                    isActive ? "text-text" : "text-text-muted hover:text-text"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-[1px] h-[1.5px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-text"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg-surface border-b border-border-subtle"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-text-muted hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
