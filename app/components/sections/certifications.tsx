"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/constants/data";
import { StaggerGroup, StaggerItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="07" title="Certifications" />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.a
                href={cert.url}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-surface rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_32px_-18px_var(--glow)]"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] flex items-center justify-center text-white">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-sm text-text mb-1">{cert.name}</h3>
                  <p className="text-xs text-text-faint">{cert.issuer}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-accent">
                  View certificate <ExternalLink size={12} />
                </span>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
