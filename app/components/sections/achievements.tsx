import { achievements } from "@/constants/data";
import { SectionHeading } from "../ui/section-heading";
import { Timeline, TimelineItem } from "../ui/timeline";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-bg-surface/40">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading index="04" title="Achievements" />

        <Timeline>
          {achievements.map((a, i) => (
            <TimelineItem key={a.title} index={i} title={a.title} period={a.date}>
              <p className="text-sm text-text-muted leading-relaxed max-w-xl">{a.description}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
