// Shared content types for the Prehistoric Edu Explorer.
// All content lives in local TS/JSON datasets — nothing is fetched remotely.

export type Era = "Precambrian" | "Paleozoic" | "Mesozoic" | "Cenozoic";

export type Confidence = "established" | "estimated" | "hypothesized";

export interface Period {
  id: string;
  name: string;
  era: Era;
  /** Millions of years ago */
  startMya: number;
  endMya: number;
  emoji: string;
  climate: string;
  environments: string;
  /** Major evolutionary developments */
  evolution: string;
  extinction?: string;
}

export interface EraInfo {
  id: Era;
  name: string;
  tagline: string;
  description: string;
  emoji: string;
}

export type CreatureCategory =
  | "dinosaur"
  | "mammal"
  | "marine-reptile"
  | "fish"
  | "insect"
  | "flying-reptile"
  | "early-human"
  | "plant"
  | "other";

export type Diet =
  | "carnivore"
  | "herbivore"
  | "omnivore"
  | "piscivore"
  | "insectivore"
  | "filter-feeder";

export interface Creature {
  id: string;
  name: string;
  scientificName: string;
  category: CreatureCategory;
  emoji: string;
  /** Period id from periods dataset */
  period: string;
  era: Era;
  diet: Diet;
  habitat: string;
  /** Human-readable size, e.g. "Up to 12 m long; about 6 t" */
  size: string;
  /** Physical characteristics, 1-2 sentences */
  characteristics: string;
  /** Behavior, 1-2 sentences */
  behavior: string;
  /** Where/when fossils were discovered */
  discovery: string;
  facts: [string, string];
}

export interface LessonSection {
  heading: string;
  body: string;
  /** Marks how established the claim is, per the app's evidence convention */
  confidence?: Confidence;
}

export type LessonModule = "time" | "world" | "fossil-lab" | "human" | "extinction";

export interface Lesson {
  id: string;
  title: string;
  module: LessonModule;
  emoji: string;
  /** Related ids, optional */
  periodId?: string;
  era?: Era;
  environmentId?: string;
  /** Estimated reading time in minutes */
  minutes: number;
  summary: string;
  sections: LessonSection[];
  keyPoints: string[];
  /** Points awarded for completing */
  points: number;
}

export interface DiscoveryPoint {
  id: string;
  name: string;
  /** Position on the scene, in percent (0-100) */
  x: number;
  y: number;
  emoji: string;
  info: string;
  creatureIds: string[];
}

export interface Environment {
  id: string;
  name: string;
  periodId: string;
  era: Era;
  emoji: string;
  description: string;
  climate: string;
  /** Optional local illustration in src/assets */
  image?: string;
  points: DiscoveryPoint[];
}

export interface FossilType {
  id: string;
  name: string;
  emoji: string;
  /** How this fossil type forms */
  formation: string;
  /** A real-world example specimen */
  example: string;
  /** One-line clue used in the fossil identification game */
  clue: string;
}

export interface ExtinctionEvent {
  id: string;
  name: string;
  mya: number;
  emoji: string;
  /** Approximate share of species lost */
  speciesLost: string;
  causes: string[];
  evidence: string;
  consequences: string;
  confidenceNotes: string;
}

export interface Hominin {
  id: string;
  name: string;
  scientificName: string;
  emoji: string;
  /** Years ago range */
  yearsAgo: string;
  brainSize: string;
  height: string;
  habitat: string;
  description: string;
  facts: [string, string];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  points: number;
}

export type Difficulty = "easy" | "medium" | "hard";

export type QuizCategory =
  | "time"
  | "creatures"
  | "fossils"
  | "human"
  | "extinction"
  | "mixed";

export interface QuizQuestion {
  id: string;
  type: "mcq";
  difficulty: Difficulty;
  category: QuizCategory;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  type: "tf";
  difficulty: Difficulty;
  category: QuizCategory;
  statement: string;
  answer: boolean;
  explanation: string;
}

export type AnyQuestion = QuizQuestion | TrueFalseQuestion;
