import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-3)]" />
        <p className="eyebrow">{`// ${index}`}</p>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
