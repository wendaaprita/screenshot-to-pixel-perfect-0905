import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, Star } from "lucide-react";

import heroImg from "@/assets/home-hero.jpg";
import { Card, Chip, ProgressBar, SectionHeading } from "@/components/ui-bits";
import { ALL_LESSONS } from "@/data/lessons";
import { CREATURES } from "@/data/creatures";
import { DAILY_FACTS } from "@/data/quiz-bank";
import { hashString, todayKey } from "@/lib/games";
import { useProgress, markDailyFactSeen } from "@/lib/progress";
import { pageHead } from "@/lib/head";
import { MODULE_META } from "@/data/lessons";
import { ACHIEVEMENTS } from "@/data/achievements";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Prehistoric Edu Explorer",
      "Explore 4 billion years of prehistoric life — lessons, creature profiles, fossils and games, all offline.",
    ),
  component: Index,
});

const MODULE_CARDS = [
  { to: "/time", emoji: "⏳", title: "Time Explorer", blurb: "4 billion years, era by era" },
  { to: "/creatures", emoji: "🦖", title: "Creaturepedia", blurb: "Every prehistoric profile" },
  { to: "/discover", emoji: "🧭", title: "Discover", blurb: "Worlds, fossils, humans, extinctions" },
  { to: "/games", emoji: "🎮", title: "Games", blurb: "Quizzes, puzzles and daily trivia" },
  { to: "/journal", emoji: "📔", title: "My Journal", blurb: "Points, badges and notes" },
  { to: "/glossary", emoji: "📖", title: "Glossary", blurb: "100+ science words explained" },
] as const;

function Index() {
  const progress = useProgress();
  const [factIdx, setFactIdx] = useState<number | null>(null);
  const [cotdIdx, setCotdIdx] = useState<number | null>(null);

  // Pick the daily fact + creature of the day after mount so SSR and the
  // client agree on the first render.
  useEffect(() => {
    const seed = hashString(todayKey());
    setFactIdx(seed % DAILY_FACTS.length);
    setCotdIdx(seed % CREATURES.length);
    markDailyFactSeen(todayKey());
  }, []);

  const nextLesson = ALL_LESSONS.find((l) => !progress.completedLessons.includes(l.id));
  const lessonsDone = progress.completedLessons.length;
  const nextBadge = ACHIEVEMENTS.find((a) => !progress.badges.includes(a.id));

  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <img src={heroImg} alt="Prehistoric landscape" className="h-56 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <h1 className="font-display text-3xl font-black tracking-tight text-foreground drop-shadow-sm">
            Prehistoric Edu Explorer
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Travel 4 billion years back in time — no internet needed.
          </p>
        </div>
      </div>

      {/* Daily fact */}
      <div className="px-4 pt-4">
        <Card className="border-primary/30 bg-primary/5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                Fact of the day
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                {factIdx === null ? "…" : DAILY_FACTS[factIdx]}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Progress */}
      <div className="px-4 pt-3">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                {progress.points} points
              </p>
              <p className="text-xs text-muted-foreground">
                {progress.badges.length} badges · {progress.completedLessons.length} lessons done
              </p>
            </div>
            <Link
              to="/journal"
              className="flex items-center gap-0.5 text-sm font-medium text-primary hover:underline"
            >
              My journal <ChevronRight className="size-4" />
            </Link>
          </div>
          <ProgressBar value={lessonsDone} max={ALL_LESSONS.length} className="mt-3" />
          <p className="mt-1.5 text-xs text-muted-foreground">
            {lessonsDone} of {ALL_LESSONS.length} lessons completed
          </p>
          {nextBadge ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Next badge: <span className="font-medium text-foreground">{nextBadge.emoji} {nextBadge.name}</span> — {nextBadge.description}
            </p>
          ) : null}
        </Card>
      </div>

      {/* Continue learning */}
      {nextLesson ? (
        <>
          <SectionHeading emoji="📚" title="Continue learning" />
          <div className="px-4">
            <Link to="/lessons/$lessonId" params={{ lessonId: nextLesson.id }}>
              <Card className="transition-colors hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{nextLesson.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-foreground">{nextLesson.title}</p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {nextLesson.summary}
                    </p>
                  </div>
                  <Chip>{nextLesson.minutes} min</Chip>
                </div>
              </Card>
            </Link>
          </div>
        </>
      ) : null}

      {/* Creature of the day */}
      <SectionHeading emoji="🦴" title="Creature of the day" />
      <div className="px-4">
        {cotdIdx !== null ? (
          <Link to="/creatures/$creatureId" params={{ creatureId: CREATURES[cotdIdx].id }}>
            <Card className="transition-colors hover:border-primary/50">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{CREATURES[cotdIdx].emoji}</span>
                <div>
                  <p className="font-semibold text-foreground">{CREATURES[cotdIdx].name}</p>
                  <p className="text-xs italic text-muted-foreground">
                    {CREATURES[cotdIdx].scientificName}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ) : null}
      </div>

      {/* Modules */}
      <SectionHeading emoji="🧭" title="Explore" />
      <div className="grid grid-cols-2 gap-3 px-4">
        {MODULE_CARDS.map((m) => (
          <Link key={m.to} to={m.to}>
            <Card className="h-full transition-colors hover:border-primary/50">
              <div className="text-2xl">{m.emoji}</div>
              <p className="mt-1.5 font-display font-bold text-foreground">{m.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{m.blurb}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="px-4 pb-6 pt-8">
        <Link
          to={MODULE_META.time.href}
          className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <Star className="size-3" /> Everything works offline — your progress is saved on this device
        </Link>
      </div>
    </div>
  );
}
