"use client";

import Image from "next/image";
import { useState } from "react";
import { about, profile } from "@/constants/data";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[var(--gradient-1)]/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-content px-6 lg:px-8 relative">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--gradient-1)]/25 via-[var(--gradient-2)]/15 to-transparent blur-md" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-surface">
                {!imgError ? (
                  <Image
                    src={profile.photo}
                    alt={`${profile.name} working`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--gradient-1)]/15 via-[var(--gradient-2)]/15 to-[var(--gradient-3)]/15">
                    <span className="font-mono text-[11px] text-text-faint tracking-widest2 uppercase px-6 text-center">
                      Add a photo at /public/profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-[15px] sm:text-base">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-surface rounded-xl p-4 border-l-2 border-l-accent"
                >
                  <p className="eyebrow !text-text-faint mb-1">{h.label}</p>
                  <p className="text-text text-sm font-medium">{h.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
