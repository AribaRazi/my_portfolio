"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/constants/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-content px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-text-faint font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={profile.social.email} aria-label="Email" className="text-text-muted hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
