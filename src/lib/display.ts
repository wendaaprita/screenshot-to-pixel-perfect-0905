import type { Confidence, Difficulty, Diet, Era } from "@/data/types";

export const DIET_LABEL: Record<Diet, string> = {
  carnivore: "Meat-eater",
  herbivore: "Plant-eater",
  omnivore: "Everything-eater",
  piscivore: "Fish-eater",
  insectivore: "Insect-eater",
  "filter-feeder": "Filter-feeder",
};

export const DIET_EMOJI: Record<Diet, string> = {
  carnivore: "🍖",
  herbivore: "🌿",
  omnivore: "🍽️",
  piscivore: "🐟",
  insectivore: "🦗",
  "filter-feeder": "🪸",
};

export const ERA_BG: Record<Era, string> = {
  Precambrian: "bg-era-precambrian",
  Paleozoic: "bg-era-paleozoic",
  Mesozoic: "bg-era-mesozoic",
  Cenozoic: "bg-era-cenozoic",
};

export const ERA_TEXT: Record<Era, string> = {
  Precambrian: "text-era-precambrian",
  Paleozoic: "text-era-paleozoic",
  Mesozoic: "text-era-mesozoic",
  Cenozoic: "text-era-cenozoic",
};

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  established: "Well established",
  estimated: "Estimated",
  hypothesized: "Actively debated",
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

/** "541" -> "541 million years ago"; "4000" -> "4 billion years ago". */
export function mya(n: number): string {
  if (n >= 1000) return `${Number((n / 1000).toFixed(1))} billion years ago`;
  return `${n} million years ago`;
}

export function myaRange(startMya: number, endMya: number): string {
  const fmt = (n: number) => (n >= 1000 ? `${Number((n / 1000).toFixed(1))} billion` : `${n} million`);
  return `${fmt(startMya)} – ${fmt(endMya)} years ago`;
}
