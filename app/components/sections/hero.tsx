"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Code2, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { profile } from "@/constants/data";
import { Button } from "../ui/button";

const socialLinks = [
  { href: profile.social.github, icon: Github, label: "GitHub" },
  { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
  { href: profile.social.email, icon: Mail, label: "Email" },
];

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden bg-mesh"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <motion.div
        className="absolute right-[6%] top-[18%] h-72 w-72 rounded-full bg-[var(--gradient-2)]/20 blur-[90px]"
        animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[2%] bottom-[10%] h-64 w-64 rounded-full bg-[var(--gradient-3)]/20 blur-[90px]"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-content w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5 flex items-center gap-2"
            >
              {/* <Sparkles size={13} className="text-accent-cyan" /> */}
              {/* {`> whoami`} */}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] font-bold tracking-tight text-text"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{profile.name.split(" ")[0]}</span>
              <br />
              {profile.name.split(" ").slice(1).join(" ")}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 font-display text-xl sm:text-2xl text-text-muted font-semibold"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-text-muted leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
                View Projects
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" icon={<Download size={16} />} external>
                Download Resume
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-14 flex items-center gap-5"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="text-text-faint hover:text-accent transition-colors"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-[2rem] opacity-70 blur-[2px]"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--gradient-1), var(--gradient-2), var(--gradient-3), var(--gradient-1))",
              }}
            />
            <motion.div
              className="relative aspect-square rounded-[1.75rem] overflow-hidden card-surface"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {!imgError ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 60vw, 380px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--gradient-1)]/15 via-[var(--gradient-2)]/15 to-[var(--gradient-3)]/15">
                  <span className="font-display text-5xl font-bold text-gradient">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="font-mono text-[11px] text-text-faint tracking-widest2 uppercase">
                    Add /public/profile.jpg
                  </span>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-6 -bottom-5 card-surface gradient-border rounded-xl px-4 py-3 shadow-lg hidden sm:block"
            >
              <p className="font-mono text-[11px] text-text-faint">STATUS</p>
              <p className="text-sm font-medium text-text flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to internships
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
