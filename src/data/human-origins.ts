import type { Hominin } from "./types";

export const HOMININS: Hominin[] = [
  {
    id: "sahelanthropus",
    name: "Sahelanthropus",
    scientificName: "Sahelanthropus tchadensis",
    emoji: "🌳",
    yearsAgo: "about 7–6 million years ago",
    brainSize: "Estimated at about 360–370 cm³",
    height: "Uncertain; too little of the skeleton is known",
    habitat: "Wooded landscapes near lakes in what is now Chad",
    description: "This species lived close to the estimated time when human and chimpanzee lineages separated. Its skull and attributed limb bones suggest upright walking, but its relationships and movements remain debated.",
    facts: [
      "The skull nicknamed Toumaï was discovered in Chad in 2001.",
      "A forward-positioned opening beneath the skull is one clue scientists use to investigate head posture."
    ]
  },
  {
    id: "australopithecus",
    name: "Lucy’s species",
    scientificName: "Australopithecus afarensis",
    emoji: "👣",
    yearsAgo: "about 3.9–2.9 million years ago",
    brainSize: "Approximately 400–550 cm³",
    height: "Approximately 1.0–1.5 m, varying among individuals",
    habitat: "Woodland, grassland, and river-edge mosaics in eastern Africa",
    description: "Fossils show that this species walked on two legs while retaining features useful for climbing. Its small brain demonstrates that habitual upright walking evolved before the large brains typical of later humans.",
    facts: [
      "Lucy, a partial skeleton about 3.18 million years old, was found at Hadar in Ethiopia in 1974.",
      "The roughly 3.66-million-year-old Laetoli footprints are usually attributed to this species."
    ]
  },
  {
    id: "paranthropus",
    name: "Nutcracker Man",
    scientificName: "Paranthropus boisei",
    emoji: "🦷",
    yearsAgo: "about 2.3–1.2 million years ago",
    brainSize: "Approximately 450–550 cm³",
    height: "Estimated at about 1.2–1.4 m",
    habitat: "Eastern African grasslands and wooded areas, often near water",
    description: "Huge cheek teeth and powerful chewing muscles helped this species process demanding plant foods. Despite its nickname, chemical evidence suggests that grasses or sedges supplied much of its diet rather than mostly nuts.",
    facts: [
      "Mary Leakey discovered the famous OH 5 skull at Olduvai Gorge in 1959.",
      "A ridge on the skull anchored large chewing muscles; it does not indicate a large brain."
    ]
  },
  {
    id: "homo-habilis",
    name: "Handy Human",
    scientificName: "Homo habilis",
    emoji: "🪨",
    yearsAgo: "about 2.4–1.4 million years ago",
    brainSize: "Approximately 500–700 cm³",
    height: "Estimated at about 1.0–1.4 m",
    habitat: "Mixed woodland and open habitats in sub-Saharan Africa",
    description: "This early member of Homo had a somewhat larger brain and smaller chewing teeth than many earlier hominins. Its fossils occur near stone tools, but proximity alone cannot identify which species made them.",
    facts: [
      "The OH 7 jaw and hand fossils from Olduvai Gorge helped define the species in 1964.",
      "Stone tools predate the earliest securely identified Homo habilis fossils."
    ]
  },
  {
    id: "homo-erectus",
    name: "Upright Human",
    scientificName: "Homo erectus",
    emoji: "🔥",
    yearsAgo: "about 1.9 million–110,000 years ago",
    brainSize: "Approximately 550–1,250 cm³ across its long history",
    height: "Approximately 1.45–1.85 m",
    habitat: "Diverse African and Eurasian habitats, including open woodland",
    description: "Long legs and humanlike body proportions suited this species to efficient travel on the ground. Populations spread far beyond Africa, although scientists debate how to classify some early African and Eurasian fossils.",
    facts: [
      "Turkana Boy, found near Lake Turkana in Kenya in 1984, preserves much of a juvenile skeleton about 1.5–1.6 million years old.",
      "Burned material at Wonderwerk Cave dates to about one million years ago, but identifying the fire users and their control of fire requires caution."
    ]
  },
  {
    id: "neanderthal",
    name: "Neanderthal",
    scientificName: "Homo neanderthalensis",
    emoji: "❄️",
    yearsAgo: "about 400,000–40,000 years ago",
    brainSize: "Approximately 1,200–1,750 cm³",
    height: "Typically about 1.5–1.7 m",
    habitat: "European and western to central Asian environments, including cold steppe",
    description: "Neanderthals were skilled humans who made tools, hunted, and survived changing Ice Age climates. Ancient DNA shows that they interbred with Homo sapiens, so their disappearance did not erase all their genetic ancestry.",
    facts: [
      "The La Chapelle-aux-Saints skeleton, discovered in France in 1908, helped overturn mistaken pictures of Neanderthals as naturally stooped.",
      "Denisova Cave has yielded evidence of both Neanderthals and Denisovans, including a first-generation child of parents from the two groups."
    ]
  },
  {
    id: "homo-sapiens",
    name: "Modern Human",
    scientificName: "Homo sapiens",
    emoji: "🎨",
    yearsAgo: "about 300,000 years ago–present",
    brainSize: "Living adults average roughly 1,300–1,400 cm³",
    height: "Highly variable; living population averages are roughly 1.5–1.8 m",
    habitat: "Originated in Africa; now occupies nearly every terrestrial environment",
    description: "Our species developed within interacting African populations rather than appearing as a finished package in one sudden step. Fossils and archaeology trace changing combinations of anatomy, technology, social networks, and symbolic expression.",
    facts: [
      "Fossils from Jebel Irhoud in Morocco are associated with deposits dated to about 315,000 years ago.",
      "Engraved ochre from Blombos Cave in South Africa records symbolic behavior tens of thousands of years before European cave paintings."
    ]
  }
];

export interface StoneTool {
  id: string;
  name: string;
  era: string;
  description: string;
  exampleSites: string[];
}

export const STONE_TOOLS: StoneTool[] = [
  {
    id: "oldowan",
    name: "Oldowan",
    era: "Early Stone Age; known by about 2.9 million years ago",
    description: "Hammerstones struck cores to detach sharp flakes useful for cutting and scraping; the flakes were often the main goal, not merely waste.",
    exampleSites: ["Nyayanga, Kenya", "Gona, Ethiopia", "Olduvai Gorge, Tanzania"]
  },
  {
    id: "acheulean",
    name: "Acheulean",
    era: "Early Stone Age / Lower Paleolithic; from about 1.76 million years ago",
    description: "Many assemblages include handaxes and cleavers shaped on two faces, showing planned sequences of flake removal; dates and tool combinations vary by region.",
    exampleSites: ["Kokiselei, Kenya", "Konso, Ethiopia", "Saint-Acheul, France"]
  },
  {
    id: "mousterian",
    name: "Mousterian",
    era: "Middle Paleolithic; roughly 160,000–40,000 years ago, depending on region",
    description: "These varied toolkits often used carefully prepared cores to produce flakes of planned shapes and were associated with Neanderthals and some Homo sapiens populations.",
    exampleSites: ["Le Moustier, France", "Kebara Cave, Israel", "La Ferrassie, France"]
  },
  {
    id: "upper-paleolithic-blades",
    name: "Upper Paleolithic blades",
    era: "Upper Paleolithic; roughly 50,000–12,000 years ago in Eurasia",
    description: "Long, narrow flakes could be turned into cutting tools or components of composite implements; blade-making also existed outside this time and region.",
    exampleSites: ["Abri Pataud, France", "Dolní Věstonice, Czechia", "Kostenki, Russia"]
  },
  {
    id: "microliths",
    name: "Microliths",
    era: "Later Stone Age and Mesolithic traditions; regional origins differ",
    description: "Tiny shaped stone pieces were fitted into wood or bone to create replaceable edges and projectile parts, showing that smaller tools could support complex designs.",
    exampleSites: ["Sibudu Cave, South Africa", "Star Carr, England", "Bagor, India"]
  }
];

export interface CaveArtSite {
  id: string;
  name: string;
  country: string;
  age: string;
  description: string;
}

export const CAVE_ART_SITES: CaveArtSite[] = [
  {
    id: "chauvet",
    name: "Chauvet",
    country: "France",
    age: "Major drawing phases about 37,000–33,500 years ago",
    description: "Charcoal drawings portray lions, rhinoceroses, and other animals with overlapping outlines that suggest movement; dates come from sampled charcoal and archaeological context."
  },
  {
    id: "lascaux",
    name: "Lascaux",
    country: "France",
    age: "Approximately 21,000 years old; exact timing remains debated",
    description: "Painted bulls, horses, and deer fill this cave, but many mineral pigments cannot be radiocarbon dated directly, so researchers also examine associated objects and deposits."
  },
  {
    id: "altamira",
    name: "Altamira",
    country: "Spain",
    age: "Multiple phases; famous bison roughly 15,000–14,000 years old",
    description: "Artists used natural ceiling contours to give painted bison volume; some older marks have minimum ages from dated mineral crusts rather than the paint itself."
  },
  {
    id: "apollo-11",
    name: "Apollo 11 Cave",
    country: "Namibia",
    age: "Painted stone slabs roughly 30,000 years old",
    description: "Small stone slabs bearing animal images were recovered from dated archaeological layers, making this an important example of portable African art rather than a gallery of painted cave walls."
  }
];
