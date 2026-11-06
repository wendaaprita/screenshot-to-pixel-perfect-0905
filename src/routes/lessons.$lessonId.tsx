import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Bookmark, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, Chip, EmptyState, PageHeader, SectionHeading } from "@/components/ui-bits";
import { getLesson } from "@/data/lessons";
import { CONFIDENCE_LABEL } from "@/lib/display";
import { pageHead } from "@/lib/head";
import { completeLesson, toggleBookmark, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/lessons/$lessonId")({
  head: ({ params }) =>
    pageHead("Lesson — Prehistoric Edu Explorer", `Read a prehistoric science lesson: ${params.lessonId}.`),
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const lesson = getLesson(lessonId);
  const progress = useProgress();

  useEffect(() => {
    if (lesson) document.title = `${lesson.title} — Prehistoric Edu Explorer`;
  }, [lesson]);

  if (!lesson) {
    return (
      <div>
        <PageHeader title="Lesson not found" backTo="/" />
        <EmptyState emoji="📖" title="This lesson isn't here" body="Choose a lesson from Time Explorer or Discoveries." />
      </div>
    );
  }

  const complete = progress.completedLessons.includes(lesson.id);
  const bookmarked = progress.bookmarkedLessons.includes(lesson.id);

  return (
    <article>
      <PageHeader
        title={lesson.title}
        subtitle={`${lesson.minutes} min read · ${lesson.module.replace("-", " ")}`}
        backTo={lesson.module === "time" ? "/time" : "/discover"}
        backLabel={lesson.module === "time" ? "Time Explorer" : "Discoveries"}
        right={
          <Button
            variant="outline"
            size="icon"
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark lesson"}
            title={bookmarked ? "Remove bookmark" : "Bookmark lesson"}
            onClick={() => toggleBookmark(lesson.id)}
          >
            <Bookmark className={bookmarked ? "size-4 fill-current" : "size-4"} />
          </Button>
        }
      />
      <div className="px-4 pt-4">
        <Card className="border-primary/30 bg-primary/5">
          <p className="text-sm leading-relaxed text-foreground">{lesson.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {lesson.era ? <Chip>{lesson.era} era</Chip> : null}
            {lesson.periodId ? <Chip>{lesson.periodId}</Chip> : null}
            <Chip>{lesson.points} points</Chip>
          </div>
        </Card>
      </div>
      <div className="space-y-3 px-4 pt-4">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <Card>
              <h2 className="font-display text-lg font-bold text-foreground">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{section.body}</p>
              {section.confidence ? (
                <p className="mt-3 text-xs text-muted-foreground">Evidence: {CONFIDENCE_LABEL[section.confidence]}</p>
              ) : null}
            </Card>
          </section>
        ))}
      </div>
      <SectionHeading emoji="🧭" title="Key points" />
      <ul className="space-y-2 px-4">
        {lesson.keyPoints.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {point}
          </li>
        ))}
      </ul>
      <div className="px-4 pb-8 pt-5">
        <Button
          className="w-full"
          variant={complete ? "secondary" : "default"}
          disabled={complete}
          onClick={() => {
            completeLesson(lesson.id, lesson.points);
            toast.success("Lesson completed", { description: `You earned ${lesson.points} points.` });
          }}
        >
          {complete ? "Lesson completed" : `Mark complete · ${lesson.points} points`}
        </Button>
        {lesson.periodId ? (
          <Link to="/time/$periodId" params={{ periodId: lesson.periodId }} className="mt-3 block text-center text-sm text-primary">
            Explore this time period
          </Link>
        ) : null}
      </div>
    </article>
  );
}