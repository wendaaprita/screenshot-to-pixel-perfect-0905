import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { CREATURES } from "@/data/creatures";
import type { Difficulty } from "@/data/types";

/**
 * Fully offline progress store.
 * Everything persists to localStorage — no backend, no accounts, no network.
 */

const STORAGE_KEY = "prehistoric-explorer-progress-v1";

export interface QuizRecord {
  game: string;
  difficulty: Difficulty;
  score: number;
  total: number;
  at: number;
}

export interface NoteEntry {
  id: string;
  /** Optional lesson or creature id this note is about */
  refId?: string;
  text: string;
  at: number;
}

export interface ProgressState {
  points: number;
  completedLessons: string[];
  viewedCreatures: string[];
  favoriteCreatures: string[];
  bookmarkedLessons: string[];
  visitedEnvironments: string[];
  badges: string[];
  quizHistory: QuizRecord[];
  bestScores: Record<string, number>;
  gamesPlayed: number;
  whoamiWins: number;
  timelinePerfect: number;
  notes: NoteEntry[];
  dailyDates: string[];
  createdAt: number;
}

export const DEFAULT_PROGRESS: ProgressState = {
  points: 0,
  completedLessons: [],
  viewedCreatures: [],
  favoriteCreatures: [],
  bookmarkedLessons: [],
  visitedEnvironments: [],
  badges: [],
  quizHistory: [],
  bestScores: {},
  gamesPlayed: 0,
  whoamiWins: 0,
  timelinePerfect: 0,
  notes: [],
  dailyDates: [],
  createdAt: 0,
};

function load(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

let state: ProgressState = load();
const listeners = new Set<() => void>();

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage full or unavailable — progress stays in memory for this session
  }
}

function set(updater: (s: ProgressState) => ProgressState) {
  state = updater(state);
  persist();
  listeners.forEach((l) => l());
}

const clientSnapshot = () => state;
const serverSnapshot = () => DEFAULT_PROGRESS;

export function useProgress(): ProgressState {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    clientSnapshot,
    serverSnapshot,
  );
}

export function getProgress(): ProgressState {
  return state;
}

/* ---------------- Achievements ---------------- */

/** Wired to the ids in src/data/achievements.ts — keep both in sync. */
const BADGE_CHECKS: Record<string, (s: ProgressState) => boolean> = {
  "first-lesson": (s) => s.completedLessons.length >= 1,
  "lessons-5": (s) => s.completedLessons.length >= 5,
  "lessons-10": (s) => s.completedLessons.length >= 10,
  "lessons-25": (s) => s.completedLessons.length >= 25,
  "all-time-lessons": (s) => countModuleDone(s, "time") >= 14,
  "first-quiz": (s) => s.quizHistory.length >= 1,
  "quizzes-5": (s) => s.quizHistory.length >= 5,
  "perfect-quiz": (s) => s.quizHistory.some((r) => r.total >= 5 && r.score === r.total),
  "quiz-hard-master": (s) =>
    s.quizHistory.some((r) => r.difficulty === "hard" && r.total >= 5 && r.score === r.total),
  "creatures-viewed-10": (s) => s.viewedCreatures.length >= 10,
  "creatures-viewed-40": (s) => s.viewedCreatures.length >= 40,
  "all-categories": (s) => viewedCategories(s).size >= 9,
  "favorite-5": (s) => s.favoriteCreatures.length >= 5,
  "world-1": (s) => s.visitedEnvironments.length >= 1,
  "world-all": (s) => s.visitedEnvironments.length >= 6,
  "fossil-lab-all": (s) => countModuleDone(s, "fossil-lab") >= 10,
  "human-all": (s) => countModuleDone(s, "human") >= 9,
  "extinction-all": (s) => countModuleDone(s, "extinction") >= 6,
  "points-250": (s) => s.points >= 250,
  "points-1000": (s) => s.points >= 1000,
  "points-3000": (s) => s.points >= 3000,
  "games-played-10": (s) => s.gamesPlayed >= 10,
  "whoami-win-5": (s) => s.whoamiWins >= 5,
  "timeline-ace": (s) => s.timelinePerfect >= 1,
  "first-note": (s) => s.notes.length >= 1,
};

function countModuleDone(s: ProgressState, module: string): number {
  // Lesson ids are prefixed by module: time-, world-, fossil-, human-, extinction-
  const prefix = module === "fossil-lab" ? "fossil-" : `${module}-`;
  return s.completedLessons.filter((id) => id.startsWith(prefix)).length;
}

function viewedCategories(s: ProgressState): Set<string> {
  const cats = new Set<string>();
  for (const c of CREATURES) {
    if (s.viewedCreatures.includes(c.id)) cats.add(c.category);
  }
  return cats;
}

function checkBadges() {
  if (typeof window === "undefined") return;
  const earned = state.badges;
  const newly: string[] = [];
  for (const [id, check] of Object.entries(BADGE_CHECKS)) {
    if (!earned.includes(id) && check(state)) newly.push(id);
  }
  if (newly.length === 0) return;
  set((s) => ({ ...s, badges: [...s.badges, ...newly] }));
  import("@/data/achievements")
    .then(({ ACHIEVEMENTS }) => {
      for (const id of newly) {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        if (a) {
          toast.success(`Badge earned: ${a.emoji} ${a.name}`, {
            description: a.description,
          });
        }
      }
    })
    .catch(() => {
      for (const id of newly) toast.success(`Badge earned: ${id}`);
    });
}

/* ---------------- Actions ---------------- */

export function awardPoints(n: number) {
  set((s) => ({ ...s, points: s.points + n }));
  checkBadges();
}

export function completeLesson(lessonId: string, points: number) {
  set((s) =>
    s.completedLessons.includes(lessonId)
      ? s
      : {
          ...s,
          completedLessons: [...s.completedLessons, lessonId],
          points: s.points + points,
        },
  );
  checkBadges();
}

export function markCreatureViewed(creatureId: string, points = 5) {
  set((s) =>
    s.viewedCreatures.includes(creatureId)
      ? s
      : {
          ...s,
          viewedCreatures: [...s.viewedCreatures, creatureId],
          points: s.points + points,
        },
  );
  checkBadges();
}

export function toggleFavorite(creatureId: string) {
  set((s) => ({
    ...s,
    favoriteCreatures: s.favoriteCreatures.includes(creatureId)
      ? s.favoriteCreatures.filter((c) => c !== creatureId)
      : [...s.favoriteCreatures, creatureId],
  }));
  checkBadges();
}

export function toggleBookmark(lessonId: string) {
  set((s) => ({
    ...s,
    bookmarkedLessons: s.bookmarkedLessons.includes(lessonId)
      ? s.bookmarkedLessons.filter((l) => l !== lessonId)
      : [...s.bookmarkedLessons, lessonId],
  }));
}

export function visitEnvironment(environmentId: string, points = 10) {
  set((s) =>
    s.visitedEnvironments.includes(environmentId)
      ? s
      : {
          ...s,
          visitedEnvironments: [...s.visitedEnvironments, environmentId],
          points: s.points + points,
        },
  );
  checkBadges();
}

export function recordQuizResult(rec: QuizRecord, pointsEarned: number) {
  const key = `${rec.game}-${rec.difficulty}`;
  set((s) => ({
    ...s,
    quizHistory: [...s.quizHistory.slice(-49), rec],
    gamesPlayed: s.gamesPlayed + 1,
    points: s.points + pointsEarned,
    whoamiWins:
      rec.game === "whoami" && rec.score === rec.total ? s.whoamiWins + 1 : s.whoamiWins,
    timelinePerfect:
      rec.game === "timeline" && rec.score === rec.total ? s.timelinePerfect + 1 : s.timelinePerfect,
    bestScores:
      rec.score > (s.bestScores[key] ?? 0)
        ? { ...s.bestScores, [key]: rec.score }
        : s.bestScores,
  }));
  checkBadges();
}

export function markDailyFactSeen(dateKey: string) {
  set((s) => (s.dailyDates.includes(dateKey) ? s : { ...s, dailyDates: [...s.dailyDates, dateKey] }));
}

export function addNote(text: string, refId?: string) {
  set((s) => ({
    ...s,
    notes: [
      { id: `note-${Date.now()}`, text, ...(refId ? { refId } : {}), at: Date.now() },
      ...s.notes,
    ],
  }));
  checkBadges();
}

export function deleteNote(id: string) {
  set((s) => ({ ...s, notes: s.notes.filter((n) => n.id !== id) }));
}

export function resetAllProgress() {
  state = { ...DEFAULT_PROGRESS, createdAt: Date.now() };
  persist();
  listeners.forEach((l) => l());
}

/** Categories the learner has already explored (for stats + badges). */
export function getViewedCategories(): Set<string> {
  return viewedCategories(state);
}
