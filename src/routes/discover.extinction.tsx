import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, Chip, PageHeader, SectionHeading } from "@/components/ui-bits";
import { EXTINCTION_EVENTS } from "@/data/extinctions";
import { lessonsByModule } from "@/data/lessons";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/discover/extinction")({
  head: () => pageHead("Mass Extinctions — Prehistoric Edu Explorer", "Examine the evidence, causes and consequences of major extinction crises."),
  component: Extinctions,
});

function Extinctions() {
  return (
    <div>
      <PageHeader title="Mass Extinctions" subtitle="Crises that reshaped life on Earth" backTo="/discover" backLabel="Discoveries" />
      <div className="space-y-3 px-4 pt-4">
        {EXTINCTION_EVENTS.map((event) => (
          <Card key={event.id}>
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg font-bold text-foreground">{event.emoji} {event.name}</h2>
              <Chip>{event.mya === 0 ? "Today" : `${event.mya} mya`}</Chip>
            </div>
            <p className="mt-2 text-sm font-medium text-primary">{event.speciesLost}</p>
            <h3 className="mt-3 text-xs font-bold uppercase text-muted-foreground">Possible drivers</h3>
            <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-foreground">{event.causes.map((cause) => <li key={cause}>{cause}</li>)}</ul>
            <h3 className="mt-3 text-xs font-bold uppercase text-muted-foreground">Evidence</h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{event.evidence}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{event.confidenceNotes}</p>
          </Card>
        ))}
      </div>
      <SectionHeading emoji="📖" title="Extinction lessons" />
      <div className="space-y-2 px-4 pb-8">
        {lessonsByModule("extinction").map((lesson) => <Link key={lesson.id} to="/lessons/$lessonId" params={{ lessonId: lesson.id }}><Card><h3 className="font-semibold text-foreground">{lesson.emoji} {lesson.title}</h3><p className="mt-1 text-xs text-muted-foreground">{lesson.summary}</p></Card></Link>)}
      </div>
    </div>
  );
}