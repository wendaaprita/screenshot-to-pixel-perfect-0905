import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";

import { PageHeader, Card, Chip, SectionHeading } from "@/components/ui-bits";
import { ERAS, PERIODS } from "@/data/timeline";
import { lessonsByModule } from "@/data/lessons";
import { myaRange, ERA_BG } from "@/lib/display";
import { useProgress } from "@/lib/progress";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/time")({
  head: () =>
    pageHead(
      "Time Explorer — Prehistoric Edu Explorer",
      "Journey through 4 billion years, era by era: Precambrian, Paleozoic, Mesozoic and Cenozoic.",
    ),
  component: TimeExplorer,
});

function TimeExplorer() {
  const progress = useProgress();
  const lessons = lessonsByModule("time");

  return (
    <div>
      <PageHeader
        title="Time Explorer"
        subtitle="Scroll through 4 billion years of Earth's history"
      />

      {/* Era legend */}
      <div className="flex flex-wrap gap-2 px-4 pt-4">
        {ERAS.map((era) => (
          <span
            key={era.id}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
          >
            <span className={`size-2.5 rounded-full ${ERA_BG[era.id]}`} />
            {era.emoji} {era.name}
          </span>
        ))}
      </div>

      {/* Timeline */}
      {ERAS.map((era) => {
        const periods = PERIODS.filter((p) => p.era === era.id);
        return (
          <section key={era.id}>
            <SectionHeading
              emoji={era.emoji}
              title={era.name}
              action={<span className="text-xs text-muted-foreground">{era.tagline}</span>}
            />
            <p className="px-4 text-sm leading-relaxed text-muted-foreground">{era.description}</p>
            <div className="mt-3 space-y-2 px-4">
              {periods.map((p) => (
                <Link key={p.id} to="/time/$periodId" params={{ periodId: p.id }}>
                  <Card className="flex items-center gap-3 border-l-4 transition-colors hover:border-primary/60"
                    style={{ borderLeftColor: `var(--era-${p.era.toLowerCase()})` }}
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display font-bold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{myaRange(p.startMya, p.endMya)}</p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Time lessons */}
      <SectionHeading
        emoji="📖"
        title="Time lessons"
        action={
          <span className="text-xs text-muted-foreground">
            {progress.completedLessons.filter((id) => id.startsWith("time-")).length}/{lessons.length}
          </span>
        }
      />
      <div className="space-y-2 px-4 pb-6">
        {lessons.map((lesson) => {
          const done = progress.completedLessons.includes(lesson.id);
          return (
            <Link key={lesson.id} to="/lessons/$lessonId" params={{ lessonId: lesson.id }}>
              <Card className="flex items-center gap-3 transition-colors hover:border-primary/50">
                <span className="text-2xl">{lesson.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 font-semibold text-foreground">
                    {lesson.title}
                    {done ? <CheckCircle2 className="size-4 shrink-0 text-primary" /> : null}
                  </p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{lesson.summary}</p>
                </div>
                <Chip>{lesson.minutes} min</Chip>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
