import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, Chip, PageHeader, SectionHeading } from "@/components/ui-bits";
import { FOSSIL_TYPES } from "@/data/fossil-lab";
import { lessonsByModule } from "@/data/lessons";
import { pageHead } from "@/lib/head";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/discover/fossil-lab")({
  head: () => pageHead("Fossil Lab — Prehistoric Edu Explorer", "Learn how fossils form and how scientists use preserved evidence."),
  component: FossilLab,
});

function FossilLab() {
  const progress = useProgress();
  const lessons = lessonsByModule("fossil-lab");
  return (
    <div>
      <PageHeader title="Fossil Lab" subtitle="Evidence of ancient life, preserved in stone" backTo="/discover" backLabel="Discoveries" />
      <SectionHeading emoji="🦴" title="Types of fossils" />
      <div className="space-y-2 px-4">
        {FOSSIL_TYPES.map((fossil) => (
          <Card key={fossil.id}>
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display font-bold text-foreground">{fossil.emoji} {fossil.name}</h2>
              <Chip>Clue</Chip>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{fossil.formation}</p>
            <p className="mt-2 text-xs text-muted-foreground">Example: {fossil.example}</p>
            <p className="mt-2 text-sm font-medium text-primary">{fossil.clue}</p>
          </Card>
        ))}
      </div>
      <SectionHeading emoji="📚" title="Fossil lessons" action={<span className="text-xs text-muted-foreground">{progress.completedLessons.filter((id) => id.startsWith("fossil-")).length}/{lessons.length}</span>} />
      <div className="space-y-2 px-4 pb-8">
        {lessons.map((lesson) => (
          <Link key={lesson.id} to="/lessons/$lessonId" params={{ lessonId: lesson.id }}>
            <Card className="transition-colors hover:border-primary/50">
              <h3 className="font-semibold text-foreground">{lesson.emoji} {lesson.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{lesson.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}