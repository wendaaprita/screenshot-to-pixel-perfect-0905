import { CREATURES } from "@/data/creatures";
import { FOSSIL_TYPES } from "@/data/fossil-lab";
import { PERIODS } from "@/data/timeline";
import { QUIZ_QUESTIONS, TRUE_FALSE_QUESTIONS } from "@/data/quiz-bank";
import type {
  AnyQuestion,
  Creature,
  Difficulty,
  QuizCategory,
} from "@/data/types";

/** Seeded PRNG so Daily Trivia is the same for everyone on a given date. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffle<T>(items: T[], rand: () => number = Math.random): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function pick<T>(items: T[], n: number, rand: () => number = Math.random): T[] {
  return shuffle(items, rand).slice(0, n);
}

/* ---------------- Who Am I? ---------------- */

export interface WhoAmIRound {
  creature: Creature;
  clues: string[];
  options: Creature[];
}

function buildClues(c: Creature): string[] {
  return [
    `I lived during the ${c.era} era. My fossils tell me that much for certain.`,
    `I was a ${c.diet}. ${c.size.charAt(0).toUpperCase() + c.size.slice(1)}.`,
    c.behavior,
    `My kind called this home: ${c.habitat}.`,
  ];
}

export function getWhoAmIRounds(count = 5): WhoAmIRound[] {
  const eligible = CREATURES.filter((c) => c.category !== "other");
  return pick(eligible, count).map((creature) => {
    const similar = CREATURES.filter(
      (c) => c.id !== creature.id && (c.period === creature.period || c.era === creature.era),
    );
    const options = pick(similar, 3).concat(creature);
    return { creature, clues: buildClues(creature), options: shuffle(options) };
  });
}

/* ---------------- Fossil identification ---------------- */

export interface FossilIdRound {
  typeId: string;
  name: string;
  emoji: string;
  clue: string;
  options: { id: string; name: string; emoji: string }[];
}

export function getFossilIdRounds(count = 5): FossilIdRound[] {
  return pick(FOSSIL_TYPES, count).map((t) => {
    const distractors = pick(
      FOSSIL_TYPES.filter((o) => o.id !== t.id),
      3,
    );
    return {
      typeId: t.id,
      name: t.name,
      emoji: t.emoji,
      clue: t.clue,
      options: shuffle([...distractors, t]).map((o) => ({
        id: o.id,
        name: o.name,
        emoji: o.emoji,
      })),
    };
  });
}

/* ---------------- Timeline ordering challenge ---------------- */

export interface TimelineRound {
  /** Items to drag/tap into order from oldest to newest */
  items: { id: string; label: string; startMya: number }[];
}

export function getTimelineRound(kind: "periods" | "extinctions", size = 5): TimelineRound {
  if (kind === "extinctions") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const events = require("@/data/extinctions").EXTINCTION_EVENTS as {
      id: string;
      name: string;
      mya: number;
    }[];
    return { items: shuffle(events).slice(0, size).map((e) => ({ id: e.id, label: e.name, startMya: e.mya })) };
  }
  const items = pick(PERIODS, size).map((p) => ({
    id: p.id,
    label: `${p.emoji} ${p.name}`,
    startMya: p.startMya,
  }));
  return { items: shuffle(items) };
}

/* ---------------- Creature matching ---------------- */

export interface MatchingRound {
  pairs: { id: string; name: string; emoji: string }[];
}

export function getMatchingRound(size = 6): MatchingRound {
  const chosen = pick(CREATURES, size);
  return {
    pairs: chosen.map((c) => ({ id: c.id, name: c.name, emoji: c.emoji })),
  };
}

/* ---------------- Question pools ---------------- */

export function getQuestions(
  game: "quiz" | "daily",
  difficulty: Difficulty,
  category: QuizCategory,
  count: number,
  seed?: number,
): AnyQuestion[] {
  const all: AnyQuestion[] = [...QUIZ_QUESTIONS, ...TRUE_FALSE_QUESTIONS];
  let pool = all.filter((q) => q.difficulty === difficulty);
  if (category !== "mixed") pool = pool.filter((q) => q.category === category);
  if (pool.length < count) {
    const fill = all.filter((q) => !pool.includes(q));
    pool = pool.concat(pick(fill, count - pool.length));
  }
  const rand = seed !== undefined ? mulberry32(seed) : Math.random;
  return pick(pool, count, rand);
}

export function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function getDailyQuestions(count = 5): AnyQuestion[] {
  return getQuestions("daily", "easy", "mixed", count, hashString(todayKey()));
}
