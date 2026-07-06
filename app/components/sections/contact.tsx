// "use client";

// import { motion } from "framer-motion";
// import { Code2, Github, Linkedin, Mail, Send } from "lucide-react";
// import { useState } from "react";
// import { profile } from "@/constants/data";
// import { Reveal } from "../ui/reveal";
// import { SectionHeading } from "../ui/section-heading";
// import { Button } from "../ui/button";

// const links = [
//   { href: profile.social.github, icon: Github, label: "GitHub" },
//   { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
//   { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
//   { href: profile.social.email, icon: Mail, label: "Email" },
// ];

// export function Contact() {
//   const [sent, setSent] = useState(false);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     // Hook this up to an email service (e.g. Resend, Formspree) of your choice.
//     setSent(true);
//   }

//   return (
//     <section id="contact" className="section-pad">
//       <div className="mx-auto max-w-content px-6 lg:px-8">
//         <SectionHeading
//           index="09"
//           title="Contact"
//           description="Have a role, a project, or just want to talk shop? My inbox is open."
//         />

//         <div className="grid md:grid-cols-5 gap-10">
//           <Reveal className="md:col-span-3">
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="name" className="block text-xs font-mono text-text-faint mb-2">
//                     NAME
//                   </label>
//                   <input
//                     id="name"
//                     required
//                     type="text"
//                     className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all"
//                     placeholder="Jane Doe"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-xs font-mono text-text-faint mb-2">
//                     EMAIL
//                   </label>
//                   <input
//                     id="email"
//                     required
//                     type="email"
//                     className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all"
//                     placeholder="jane@company.com"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-xs font-mono text-text-faint mb-2">
//                   MESSAGE
//                 </label>
//                 <textarea
//                   id="message"
//                   required
//                   rows={5}
//                   className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all resize-none"
//                   placeholder="Tell me a bit about the opportunity..."
//                 />
//               </div>
//               <Button type="submit" variant="primary" icon={<Send size={15} />}>
//                 {sent ? "Message Sent" : "Send Message"}
//               </Button>
//             </form>
//           </Reveal>

//           <Reveal delay={0.1} className="md:col-span-2">
//             <div className="card-surface rounded-2xl p-7 h-full flex flex-col justify-between">
//               <div>
//                 <h3 className="font-display font-semibold text-text mb-2">Let&apos;s connect</h3>
//                 <p className="text-sm text-text-muted leading-relaxed">
//                   I&apos;m currently looking for Summer 2027 internship opportunities in software
//                   engineering and machine learning. Based in {profile.location}, open to remote
//                   and on-site roles.
//                 </p>
//               </div>
//               <div className="flex items-center gap-5 mt-8">
//                 {links.map(({ href, icon: Icon, label }) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -2 }}
//                     aria-label={label}
//                     className="text-text-muted hover:text-accent transition-colors"
//                   >
//                     <Icon size={19} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { profile } from "@/constants/data";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { Button } from "../ui/button";

const links = [
  { href: profile.social.github, icon: Github, label: "GitHub" },
  { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
  { href: profile.social.email, icon: Mail, label: "Email" },
];

const FORMSPREE_URL = "https://formspree.io/f/mgojnnrl";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          index="09"
          title="Contact"
          description="Have a role, a project, or just want to talk shop? My inbox is open."
        />

        <div className="grid md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-text-faint mb-2">
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all disabled:opacity-50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-text-faint mb-2">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all disabled:opacity-50"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-text-faint mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={status === "loading"}
                  className="w-full rounded-lg bg-bg-surface border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me a bit about the opportunity..."
                />
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "loading"}
                  icon={<Send size={15} />}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-emerald-500"
                  >
                    <CheckCircle size={16} /> Message sent! I&apos;ll reply soon.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="card-surface rounded-2xl p-7 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold text-text mb-2">Let&apos;s connect</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  I&apos;m currently looking for Summer 2027 internship opportunities in software
                  engineering and machine learning. Based in {profile.location}, open to remote
                  and on-site roles.
                </p>
              </div>
              <div className="flex items-center gap-5 mt-8">
                {links.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    aria-label={label}
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <Icon size={19} />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}