"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Shield } from "lucide-react";
import { useState } from "react";
import { badges } from "@/constants/data";
import { StaggerGroup, StaggerItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
// import { TiltCard } from "../ui/tilt-card";

function BadgeCard({
  badge,
}: {
  badge: (typeof badges)[number];
}) {
  const [imgError, setImgError] = useState(false);

  return (
    // <TiltCard max={6}>
      <motion.a
        // href={badge.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="group card-surface rounded-2xl p-6 flex flex-col items-center text-center gap-4 h-full transition-all duration-300 hover:shadow-[0_0_0_1px_var(--accent),0_20px_40px_-20px_var(--glow)] hover:border-accent/40"
      >
        {/* Badge image */}
        <div
          className={`relative h-24 w-24 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center overflow-hidden border border-border-subtle group-hover:scale-105 transition-transform duration-300`}
        >
          {!imgError ? (
            <Image
              src={badge.image}
              alt={badge.name}
              fill
              sizes="96px"
              className="object-contain p-2"
              onError={() => setImgError(true)}
            />
          ) : (
            <Shield size={32} className="text-accent opacity-60" />
          )}

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-display font-semibold text-sm text-text mb-1 leading-snug">
            {badge.name}
          </h3>
          <p className="text-xs text-text-faint mb-1">{badge.issuer}</p>
          <p className="font-mono text-[11px] text-accent">{badge.date}</p>
        </div>

        {/* Verify link */}
        <span className="flex items-center gap-1 text-xs text-text-faint group-hover:text-accent transition-colors">
          <ExternalLink size={11} /> Verify badge
        </span>
      </motion.a>
    // </TiltCard>
  );
}

export function Badges() {
  return (
    <section id="badges" className="section-pad relative overflow-hidden">
      <div className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-[var(--gradient-2)]/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-content px-6 lg:px-8 relative">
        <SectionHeading
          index="08"
          title="Badges"
          description="Digital credentials and verified achievements from top platforms."
        />

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {badges.map((badge) => (
            <StaggerItem key={badge.name}>
              <BadgeCard badge={badge} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}