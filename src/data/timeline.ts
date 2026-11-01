import type { Era, EraInfo, Period } from "./types";

export const ERAS: EraInfo[] = [
  {
    id: "Precambrian",
    name: "Precambrian",
    tagline: "The long dawn of life",
    description:
      "Earth's longest stretch of time — nearly four billion years when oceans formed, the first cells appeared, and life remained microscopic for most of it. It ends with the first animal communities of the Ediacaran.",
    emoji: "🌊",
  },
  {
    id: "Paleozoic",
    name: "Paleozoic",
    tagline: "Ancient life explodes",
    description:
      "The 'ancient life' era. Animals with shells and backbones explode onto the scene, plants green the land, insects take wing, and forests of giant horsetails cover the swamps.",
    emoji: "🦕",
  },
  {
    id: "Mesozoic",
    name: "Mesozoic",
    tagline: "Age of dinosaurs",
    description:
      "The 'middle life' era, from 252 to 66 million years ago. Dinosaurs ruled the continents, pterosaurs owned the skies, and the first flowers and birds appeared. It ended with the asteroid impact.",
    emoji: "🦖",
  },
  {
    id: "Cenozoic",
    name: "Cenozoic",
    tagline: "Age of mammals",
    description:
      "The 'recent life' era. After the dinosaurs vanished, mammals diversified into whales, elephants, and giant sloths — and in the last few million years, humans appeared.",
    emoji: "🦣",
  },
];

export const PERIODS: Period[] = [
  {
    id: "ediacaran",
    name: "Ediacaran",
    era: "Precambrian",
    startMya: 635,
    endMya: 538.8,
    emoji: "🪼",
    climate: "Generally mild; oceans still low in oxygen in many regions.",
    environments:
      "Shallow seas above soft, muddy seabeds; land was barren rock with no soils or plants.",
    evolution:
      "The first large, complex animals — soft-bodied creatures like Dickinsonia and Charnia — plus the earliest sponge-like and jellyfish-like forms.",
    extinction:
      "Many Ediacaran soft-bodied animals disappear before the Cambrian, for reasons still debated.",
  },
  {
    id: "cambrian",
    name: "Cambrian",
    era: "Paleozoic",
    startMya: 538.8,
    endMya: 485.4,
    emoji: "🦐",
    climate: "Warm greenhouse world; no polar ice caps.",
    environments:
      "Vast shallow seas covering continents; land almost completely lifeless.",
    evolution:
      "The 'Cambrian explosion': nearly every major animal group appears, including arthropods, mollusks, brachiopods, and the first chordates like Pikaia. Predators evolve eyes and armor.",
    extinction:
      "Several smaller extinction pulses toward the end of the period.",
  },
  {
    id: "ordovician",
    name: "Ordovician",
    era: "Paleozoic",
    startMya: 485.4,
    endMya: 443.8,
    emoji: "🐚",
    climate: "Started warm, ended in a severe ice age.",
    environments:
      "Warm shallow seas teeming with life; the very first simple land plants appear at the coasts.",
    evolution:
      "Huge diversity of brachiopods, graptolites, and cephalopods; the first fish with backbones (jawless) and the first land plants.",
    extinction:
      "End-Ordovician mass extinction — the first of the 'Big Five' — killed about 85% of species during the ice age.",
  },
  {
    id: "silurian",
    name: "Silurian",
    era: "Paleozoic",
    startMya: 443.8,
    endMya: 419.2,
    emoji: "🪸",
    climate: "Steady and warm after the ice age melted away.",
    environments:
      "Wide inland seas; the first true soils and small forests on land, with millipedes and scorpions nearby.",
    evolution:
      "Vascular plants like Cooksonia spread inland; jawed fish appear; coral reefs flourish.",
    extinction:
      "No 'Big Five' event; several smaller extinctions.",
  },
  {
    id: "devonian",
    name: "Devonian",
    era: "Paleozoic",
    startMya: 419.2,
    endMya: 358.9,
    emoji: "🐟",
    climate: "Warm, with high sea levels and drying inland basins.",
    environments:
      "Fish-filled oceans, huge reefs, and the first forests of ferns and early trees.",
    evolution:
      "Called the 'Age of Fishes' — armored placoderms, sharks, and lungfish. Four-legged land vertebrates (tetrapods) evolve from fish like Tiktaalik. Insects and the first fern forests appear.",
    extinction:
      "Late Devonian mass extinction hit reef life and many ocean species hard.",
  },
  {
    id: "carboniferous",
    name: "Carboniferous",
    era: "Paleozoic",
    startMya: 358.9,
    endMya: 298.9,
    emoji: "🌿",
    climate: "Humid and tropical in lowlands; high oxygen levels.",
    environments:
      "Endless coal swamps of giant club mosses and horsetails; amphibians ruled the wetlands.",
    evolution:
      "Giant insects like Meganeura (with 70 cm wingspans) thrive in oxygen-rich air; the first reptiles evolve shelled eggs, freeing them from water.",
    extinction:
      "A rainforest collapse near the end reshaped amphibian and reptile lineages.",
  },
  {
    id: "permian",
    name: "Permian",
    era: "Paleozoic",
    startMya: 298.9,
    endMya: 251.9,
    emoji: "🦎",
    climate: "Trended hot and dry; vast deserts formed on the joined supercontinent Pangaea.",
    environments:
      "Dry uplands, conifer forests, and shrinking coal swamps.",
    evolution:
      "Synapsids like Dimetrodon — our own distant relatives — dominate; the first Dicynodont and gorgonopsian predators; reptile diversity surges.",
    extinction:
      "End-Permian mass extinction — Earth's worst — erased about 90% of marine species.",
  },
  {
    id: "triassic",
    name: "Triassic",
    era: "Mesozoic",
    startMya: 251.9,
    endMya: 201.4,
    emoji: "🦕",
    climate: "Hot interior with strong monsoons; Pangaea was one huge landmass.",
    environments:
      "Deserts, conifer woodlands, and warm coastal seas.",
    evolution:
      "The first dinosaurs (small and rare at first), the first pterosaurs, the first true mammals (tiny shrew-like forms), and the first crocodile relatives.",
    extinction:
      "End-Triassic mass extinction cleared the way for dinosaurs to dominate.",
  },
  {
    id: "jurassic",
    name: "Jurassic",
    era: "Mesozoic",
    startMya: 201.4,
    endMya: 145,
    emoji: "🌋",
    climate: "Warm and humid; no ice caps; high sea levels split Pangaea apart.",
    environments:
      "Fern prairies, cycad groves, conifer forests, and shallow seas full of marine reptiles.",
    evolution:
      "Giant long-necked sauropods like Brachiosaurus and Diplodocus; plated Stegosaurus; predators like Allosaurus; the first birds evolve from small feathered dinosaurs.",
    extinction:
      "No 'Big Five' event, but several smaller extinctions at the end.",
  },
  {
    id: "cretaceous",
    name: "Cretaceous",
    era: "Mesozoic",
    startMya: 145,
    endMya: 66,
    emoji: "🌸",
    climate: "Greenhouse world; among the warmest times of the last 500 million years.",
    environments:
      "Flowering plant forests, inland seas in North America, and coastal deltas.",
    evolution:
      "Flowering plants explode in diversity; Tyrannosaurus, Triceratops, and Velociraptor appear; the first ants, bees, and modern birds.",
    extinction:
      "End-Cretaceous (K–Pg) mass extinction — the asteroid impact that ended the dinosaurs.",
  },
  {
    id: "paleogene",
    name: "Paleogene",
    era: "Cenozoic",
    startMya: 66,
    endMya: 23,
    emoji: "🐦",
    climate: "Started very warm globally, cooling later; Antarctica begins to freeze.",
    environments:
      "Forests spread worldwide; whales return to the sea; grasslands not yet widespread.",
    evolution:
      "Mammals and birds diversify rapidly into empty niches; early whales, early primates, and giant flightless birds appear.",
    extinction:
      "Several smaller events, including the Eocene–Oligocene cooling.",
  },
  {
    id: "neogene",
    name: "Neogene",
    era: "Cenozoic",
    startMya: 23,
    endMya: 2.58,
    emoji: "🐘",
    climate: "Cooling trend; ice sheets grow; grasslands spread across continents.",
    environments:
      "Open savannas and grasslands replace forests — the stage on which human ancestors evolved.",
    evolution:
      "Modern mammal groups mature: elephants, horses, apes. Hominins begin walking upright in Africa around 7 million years ago.",
    extinction:
      "No 'Big Five' event; regional turnover as grasslands spread.",
  },
  {
    id: "quaternary",
    name: "Quaternary",
    era: "Cenozoic",
    startMya: 2.58,
    endMya: 0,
    emoji: "❄️",
    climate: "Repeated ice ages, with warm interglacial periods like the one we live in.",
    environments:
      "Cold steppes with mammoths and woolly rhinos during glacial phases; modern ecosystems since the ice retreated.",
    evolution:
      "Homo sapiens evolves in Africa ~300,000 years ago, spreads worldwide, and develops agriculture — while many Ice Age giants go extinct.",
    extinction:
      "Ongoing; the megafaunal extinctions after the last ice age continue today.",
  },
];

export function getPeriod(id: string): Period | undefined {
  return PERIODS.find((p) => p.id === id);
}

export function getEra(era: Era): EraInfo {
  return ERAS.find((e) => e.id === era) ?? ERAS[0];
}

/** Seconds since a given "millions of years ago" moment, for timeline math. */
export function periodSpan(p: Period): number {
  return p.startMya - p.endMya;
}
