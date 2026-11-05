import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHeader, Card, Chip, SectionHeading, EmptyState } from "@/components/ui-bits";
import { getPeriod, PERIODS } from "@/data/timeline";
import { CREATURES } from "@/data/creatures";
import { lessonsForPeriod } from "@/data/lessons";
import { myaRange, mya } from "@/lib/display";
import { useProgress } from "@/lib/progress";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/time/$periodId")({
  head: () => pageHead("Period — Time Explorer", "A geological period: climate, life, evolution and extinction."),
  component: PeriodDetail,
});

function InfoBlock({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <Card>
      <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">
        {emoji} {title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground">{body}</p>
    </Card>
  );
}

function PeriodDetail() {
  const { periodId } = Route.useParams();
  const progress = useProgress();
  const period = getPeriod(periodId);

  if (!period) {
    return (
      <div>
        <PageHeader title="Not found" backTo="/time" backLabel="Time Explorer" />
        <EmptyState
          emoji="🪨"
          title="Unknown period"
          body="That geological period isn't in our timeline."
        />
      </div>
    );
  }

  const creatures = CREATURES.filter((c) => c.period === period.id);
  const lessons = lessonsForPeriod(period.id);
  const idx = PERIODS.findIndex((p) => p.id === period.id);
  const prev = idx > 0 ? PERIODS[idx - 1] : undefined;
  const next = idx < PERIODS.length - 1 ? PERIODS[idx + 1] : undefined;

  return (
    <div>
      <PageHeader
        title={`${period.emoji} ${period.name}`}
        subtitle={myaRange(period.startMya, period.endMya)}
        backTo="/time"
        backLabel="Time Explorer"
      />

      <div className="space-y-3 px-4 pt-4">
        <Chip className="text-xs">{period.era} era · {periodSpan(period)} million years long</Chip>
        <InfoBlock emoji="🌡️" title="Climate" body={period.climate} />
        <InfoBlock emoji="🏞️" title="Environments" body={period.environments} />
        <InfoBlock emoji="🧬" title="Evolution" body={period.evolution} />
        {period.extinction ? (
          <InfoBlock emoji="☄️" title="Extinction" body={period.extinction} />
        ) : null}
      </div>

      {creatures.length > 0 ? (
        <>
          <SectionHeading emoji="🦖" title={`Creatures of the ${period.name}`} />
          <div className="grid grid-cols-2 gap-3 px-4">
            {creatures.map((c) => (
              <Link key={c.id} to="/creatures/$id" params={{ id: c.id }}>
                <Card className="h-full text-center transition-colors hover:border-primary/50">
                  <div className="text-3xl">{c.emoji}</div>
                  <p className="mt-1 font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{mya(period.endMya)}</p>
                </Card>
              </Link>
            ))}
          </div>
        </>
      ) : null}

      {lessons.length > 0 ? (
        <>
          <SectionHeading emoji="📖" title="Lessons from this period" />
          <div className="space-y-2 px-4">
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
        </>
      ) : null}

      {/* Prev / next period */}
      <div className="flex gap-3 px-4 pb-6 pt-6">
        {prev ? (
          <Link to="/time/$periodId" params={{ periodId: prev.id }} className="flex-1">
            <Card className="text-center transition-colors hover:border-primary/50">
              <p className="text-xs text-muted-foreground">← Older</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{prev.emoji} {prev.name}</p>
            </Card>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link to="/time/$periodId" params={{ periodId: next.id }} className="flex-1">
            <Card className="text-center transition-colors hover:border-primary/50">
              <p className="text-xs text-muted-foreground">Younger →</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{next.emoji} {next.name}</p>
            </Card>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}

function periodSpan(p: { startMya: number; endMya: number }): number {
  return p.startMya - p.endMya;
}
