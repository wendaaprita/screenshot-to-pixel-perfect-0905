import type { ExtinctionEvent } from "./types";

export const EXTINCTION_EVENTS: ExtinctionEvent[] = [
  {
    id: "ordovician-extinction",
    name: "Ordovician–Silurian extinction",
    mya: 444,
    emoji: "🧊",
    speciesLost: "~85% of marine species — an estimate from fossil counts",
    causes: [
      "Growth of Gondwanan ice sheets cooled the climate.",
      "Falling sea level removed extensive shallow-sea habitats.",
      "Later warming and ice retreat reorganized ocean circulation.",
      "Oxygen-poor waters expanded during parts of the crisis; their timing and drivers remain debated."
    ],
    evidence: "Glacial deposits on former Gondwana, changes in oxygen isotopes, sea-level records, and fossil disappearances document a crisis with at least two major pulses.",
    consequences: "Many brachiopods, trilobites, and reef organisms disappeared as marine communities were reorganized. Surviving lineages diversified during the Silurian, but recovery varied among habitats.",
    confidenceNotes: "Large marine losses and major climatic changes are well established. The precise ordering of cooling, warming, and oxygen loss differs among records and remains under study."
  },
  {
    id: "devonian-extinction",
    name: "Late Devonian extinctions",
    mya: 372,
    emoji: "🌊",
    speciesLost: "~75% of species — an approximate estimate across a prolonged crisis",
    causes: [
      "Widespread ocean oxygen loss stressed marine animals.",
      "Climate and sea-level changes repeatedly altered habitats.",
      "Expanding land plants may have increased nutrient runoff and oxygen-consuming algal growth.",
      "Volcanism may have contributed; its importance relative to other drivers is debated."
    ],
    evidence: "Organic-rich black shales, carbon-isotope changes, and fossil turnover mark the Kellwasser events near 372 million years ago; the later Hangenberg crisis occurred near 359 million years ago.",
    consequences: "Large reef systems built by stromatoporoids and corals suffered severe losses. Fish and other marine groups were reshaped through several crises rather than one worldwide instant.",
    confidenceNotes: "Repeated marine oxygen loss and major biological turnover are supported by many rock records. No single trigger explains every Late Devonian extinction pulse with equal confidence."
  },
  {
    id: "permian-extinction",
    name: "End-Permian extinction",
    mya: 252,
    emoji: "🌋",
    speciesLost: "~81–94% of marine species — estimates vary with methods and sampling",
    causes: [
      "Siberian Traps magmatism released enormous quantities of gases.",
      "Greenhouse warming raised ocean and land temperatures.",
      "Ocean deoxygenation reduced habitable marine water.",
      "Carbon dioxide contributed to ocean acidification, with severity varying among settings."
    ],
    evidence: "Radiometric dates link Siberian Traps activity with the crisis near 251.9 million years ago; carbon-isotope shifts, temperature proxies, and oxygen-sensitive sediments record environmental disruption.",
    consequences: "Trilobites vanished, and many marine and land ecosystems lost much of their diversity. Recovery took millions of years in many settings while heat and oxygen stress continued.",
    confidenceNotes: "The close timing of Siberian Traps activity and the extinction strongly supports a volcanic driver. The relative roles of warming, acidification, toxic waters, and different gas sources remain active research topics."
  },
  {
    id: "triassic-extinction",
    name: "End-Triassic extinction",
    mya: 201,
    emoji: "🌡️",
    speciesLost: "~70–80% of species — an estimate from an incomplete fossil record",
    causes: [
      "Central Atlantic Magmatic Province eruptions released gases as Pangaea began to split.",
      "Carbon dioxide drove greenhouse warming.",
      "Ocean acidification stressed some shell-building organisms.",
      "Ocean oxygen loss and possible short volcanic cooling episodes added environmental stress."
    ],
    evidence: "Dated lava flows and intrusions from the Central Atlantic Magmatic Province closely match fossil turnover; carbon-isotope changes and mercury enrichments provide additional evidence of disturbance.",
    consequences: "Many large crocodile-line archosaurs and several marine groups disappeared. Dinosaurs survived and became more prominent in many Jurassic land ecosystems.",
    confidenceNotes: "The volcanic connection is strongly supported by dating and geochemical evidence. Scientists still investigate the sequence of eruptive pulses and the different stresses affecting land and sea."
  },
  {
    id: "cretaceous-extinction",
    name: "End-Cretaceous K–Pg extinction",
    mya: 66,
    emoji: "☄️",
    speciesLost: "~76% of species — an estimate from fossil counts",
    causes: [
      "The Chicxulub asteroid impact released immense energy.",
      "Impact dust, soot, and sulfur aerosols reduced sunlight and cooled the surface.",
      "Reduced photosynthesis disrupted food webs on land and in the ocean.",
      "Deccan Traps volcanism altered climate before and around the boundary; its contribution to extinction severity is debated."
    ],
    evidence: "A worldwide iridium-rich boundary layer, shocked quartz, impact spherules, and the Chicxulub crater identify the impact; fern spikes in some land records document early recovery vegetation.",
    consequences: "Non-avian dinosaurs, ammonites, and many plankton species disappeared, while birds and several mammal lineages survived. Surviving groups later diversified into ecosystems transformed by the losses.",
    confidenceNotes: "The impact and its close match to the main extinction are established, and it is the leading explanation for the abrupt global crisis. Deccan volcanism was real, but its exact contribution relative to the impact remains debated."
  },
  {
    id: "holocene-extinction",
    name: "Ongoing biodiversity crisis",
    mya: 0,
    emoji: "🌍",
    speciesLost: "No agreed global percentage; documented losses underestimate poorly studied groups",
    causes: [
      "Habitat destruction and fragmentation remove places organisms need to survive.",
      "Overexploitation through hunting, fishing, and collection reduces populations.",
      "Introduced invasive species and pollution disrupt ecosystems.",
      "Human-driven climate change shifts temperatures, rainfall, and ocean chemistry."
    ],
    evidence: "Documented extinctions, repeated population surveys, shrinking species ranges, and assessed extinction risks show ongoing biodiversity loss; older losses are also recorded in archaeological and fossil deposits.",
    consequences: "Losing species can disrupt pollination, food webs, and other ecological functions that support people and wildlife. Conservation can prevent extinctions, so the eventual scale is not predetermined.",
    confidenceNotes: "Human-driven biodiversity decline is well established, although rates are uncertain for poorly monitored groups. The crisis has not demonstrably reached the roughly 75% global species-loss threshold often used for fossil mass extinctions."
  }
];
