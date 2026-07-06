"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Sparkle } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/constants/data";
import { TiltCard } from "./tilt-card";

const PATTERNS = [
  "from-[var(--gradient-1)]/30 via-[var(--gradient-2)]/20 to-transparent",
  "from-[var(--gradient-2)]/30 via-[var(--gradient-3)]/20 to-transparent",
  "from-[var(--gradient-3)]/30 via-[var(--gradient-1)]/20 to-transparent",
];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <TiltCard max={5} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group card-surface rounded-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--accent),0_20px_40px_-20px_var(--glow)]"
      >
        <div className="relative h-44 overflow-hidden border-b border-border-subtle">
          {showImage ? (
            <Image
              src={project.image as string}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${PATTERNS[index % PATTERNS.length]} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
            >
              <Sparkle className="text-text-faint/40" size={28} strokeWidth={1.5} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-lg text-text mb-2 transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-1 rounded bg-bg-elevated text-text-faint border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <Github size={15} /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}
