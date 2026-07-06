"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/constants/data";
import { StaggerGroup, StaggerItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg-surface/40">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="02" title="Skills" description="Tools and technologies I reach for most." />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-surface rounded-2xl p-6 h-full transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--accent),0_16px_32px_-18px_var(--glow)]"
              >
                <h3 className="font-display font-semibold text-text mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent-soft text-accent border border-accent/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
