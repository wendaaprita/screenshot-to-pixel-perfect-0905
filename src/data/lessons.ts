import type { Lesson, LessonModule } from "./types";
import { TIME_LESSONS } from "./lessons-time";
import { TIME_LESSONS_MORE } from "./lessons-time-more";
import { WORLD_LESSONS } from "./lessons-world";
import { FOSSIL_LAB_LESSONS } from "./lessons-fossil-lab";
import { HUMAN_LESSONS } from "./lessons-human";
import { EXTINCTION_LESSONS } from "./lessons-extinction";

export const ALL_LESSONS: Lesson[] = [
  ...TIME_LESSONS,
  ...TIME_LESSONS_MORE,
  ...WORLD_LESSONS,
  ...FOSSIL_LAB_LESSONS,
  ...HUMAN_LESSONS,
  ...EXTINCTION_LESSONS,
];

export const MODULE_META: Record<
  LessonModule,
  { label: string; emoji: string; description: string; href: string }
> = {
  time: {
    label: "Time Explorer",
    emoji: "⏳",
    description: "Travel through 4 billion years, era by era",
    href: "/time",
  },
  world: {
    label: "World Explorer",
    emoji: "🌍",
    description: "Visit six ancient environments and their wildlife",
    href: "/discover/world",
  },
  "fossil-lab": {
    label: "Fossil Lab",
    emoji: "🔬",
    description: "How fossils form, and how scientists read them",
    href: "/discover/fossil-lab",
  },
  human: {
    label: "Human Origins",
    emoji: "🧠",
    description: "From upright apes to cave painters",
    href: "/discover/human",
  },
  extinction: {
    label: "Mass Extinctions",
    emoji: "☄️",
    description: "The five biggest catastrophes in Earth's history",
    href: "/discover/extinction",
  },
};

export function getLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function lessonsByModule(module: LessonModule): Lesson[] {
  return ALL_LESSONS.filter((l) => l.module === module);
}

export function lessonsForPeriod(periodId: string): Lesson[] {
  return ALL_LESSONS.filter((l) => l.periodId === periodId);
}
