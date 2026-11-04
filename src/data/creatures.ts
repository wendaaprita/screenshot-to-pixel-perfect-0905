import type { Creature, CreatureCategory } from "./types";
import { MAIN_CREATURES } from "./creatures-main";
import { OTHER_CREATURES } from "./creatures-others";

/** Every creature profile in the app — main dinosaurs/ptosaurs plus everything else. */
export const CREATURES: Creature[] = [...MAIN_CREATURES, ...OTHER_CREATURES];

export const CATEGORY_META: Record<CreatureCategory, { label: string; emoji: string }> = {
  dinosaur: { label: "Dinosaurs", emoji: "🦖" },
  "flying-reptile": { label: "Flying reptiles", emoji: "🦅" },
  "marine-reptile": { label: "Marine reptiles", emoji: "🐋" },
  fish: { label: "Fish", emoji: "🐟" },
  insect: { label: "Insects & arthropods", emoji: "🐝" },
  mammal: { label: "Mammals", emoji: "🦣" },
  "early-human": { label: "Early humans", emoji: "🧑‍🤝‍🧑" },
  plant: { label: "Plants", emoji: "🌿" },
  other: { label: "Other life", emoji: "🪸" },
};

export function getCreature(id: string): Creature | undefined {
  return CREATURES.find((c) => c.id === id);
}

export function creaturesByCategory(category: CreatureCategory): Creature[] {
  return CREATURES.filter((c) => c.category === category);
}

export function searchCreatures(query: string, category: CreatureCategory | "all"): Creature[] {
  const q = query.trim().toLowerCase();
  return CREATURES.filter((c) => {
    if (category !== "all" && c.category !== category) return false;
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.scientificName.toLowerCase().includes(q) ||
      c.characteristics.toLowerCase().includes(q)
    );
  });
}
