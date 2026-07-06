import { education } from "@/constants/data";
import { SectionHeading } from "../ui/section-heading";
import { Timeline, TimelineItem } from "../ui/timeline";

export function Education() {
  return (
    <section id="education" className="section-pad bg-bg-surface/40">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="06" title="Education" />

        <Timeline>
          {education.map((e, i) => (
            <TimelineItem key={e.degree} index={i} title={e.degree} subtitle={e.institution} period={e.period}>
              <p className="text-sm text-text mb-2">
                <span className="text-text-faint">CGPA / Score:</span> {e.cgpa}
              </p>
              {e.coursework.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {e.coursework.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[11px] px-2 py-1 rounded bg-bg-elevated text-text-faint border border-border-subtle"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
