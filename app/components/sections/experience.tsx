import { experience } from "@/constants/data";
import { SectionHeading } from "../ui/section-heading";
import { Timeline, TimelineItem } from "../ui/timeline";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="05" title="Experience" />

        <Timeline>
          {experience.map((e, i) => (
            <TimelineItem key={e.role} index={i} title={e.role} subtitle={e.org} period={e.period}>
              <ul className="space-y-1.5 max-w-xl">
                {e.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-text-muted leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
