import { Download, FileText } from "lucide-react";
import { profile } from "@/constants/data";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { Button } from "../ui/button";

export function Resume() {
  return (
    <section id="resume" className="section-pad bg-bg-surface/40">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="08" title="Resume" />

        <Reveal>
          <div className="card-surface gradient-border rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 max-w-3xl">
            <div className="h-24 w-20 rounded-lg bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] flex items-center justify-center text-white shrink-0">
              <FileText size={28} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display font-semibold text-text mb-1">
                {profile.name} — Resume
              </h3>
              <p className="text-sm text-text-muted mb-5">
                A one-page summary of my experience, projects, and skills — updated regularly.
              </p>
              <Button href={profile.resumeUrl} variant="primary" icon={<Download size={16} />} external>
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
