import type { Era, Lesson, LessonSection } from "./types";

type TimeEntry = {
  periodId: string;
  title: string;
  era: Era;
  emoji: string;
  summary: string;
  sections: LessonSection[];
  keyPoints: [string, string, string];
};

const entries: TimeEntry[] = [
  {
    periodId: "ediacaran", title: "Ediacaran: Life Before Familiar Animals",
    era: "Precambrian", emoji: "🪸",
    summary: "Discover the unusual large organisms that lived before the Cambrian.",
    sections: [
      {
        heading: "Seas after the great freezes",
        body: "The Ediacaran lasted from about 635 to 539 million years ago. It followed major Cryogenian glaciations, but its oceans were not uniformly oxygen-rich: oxygen availability differed between shallow and deep water. Microbial mats covered many seafloors and helped shape the habitats available to larger organisms.",
        confidence: "established",
      },
      {
        heading: "A world of unfamiliar bodies",
        body: "Organisms such as Dickinsonia and the branching Charnia reached sizes visible without a microscope. Some Ediacaran fossils represent animals, while the relationships of others remain debated. Their shapes should not automatically be matched to modern jellyfish, worms, or plants.",
        confidence: "hypothesized",
      },
      {
        heading: "How do we know?",
        body: "Fossil surfaces at Mistaken Point in Newfoundland preserve communities buried by volcanic ash. Scientists date minerals in ash beds using radioactive decay and compare the resulting ages with fossil-bearing layers. Changing fossil communities near the period's end show major ecological turnover, although its causes and global pattern remain under investigation.",
        confidence: "established",
      },
    ],
    keyPoints: ["Large organisms existed before the Cambrian.", "Ediacaran organisms had diverse, sometimes puzzling body plans.", "Ash beds help date fossil communities."],
  },
  {
    periodId: "cambrian", title: "Cambrian: Animal Diversity Expands",
    era: "Paleozoic", emoji: "🦐",
    summary: "Explore the rapid expansion of animal forms in Cambrian seas.",
    sections: [
      {
        heading: "Shallow seas and changing habitats",
        body: "From about 539 to 485 million years ago, shallow seas covered many continental margins. Animals lived on and within seafloor sediment. Their burrowing disturbed microbial mats and changed how oxygen and nutrients moved through the seabed.",
        confidence: "established",
      },
      {
        heading: "The Cambrian explosion",
        body: "Many major animal groups become conspicuous in the fossil record during the Cambrian. Eyes, jointed limbs, shells, and varied feeding structures supported increasingly complex food webs. This diversification unfolded over millions of years rather than happening in a single moment.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "China's Chengjiang fossils and Canada's Burgess Shale preserve soft-bodied animals that ordinary shell beds miss. Opabinia, Hallucigenia, and early chordates reveal anatomy beyond hard shells. Radiometrically dated volcanic layers help place these communities on a numerical timescale.",
        confidence: "established",
      },
    ],
    keyPoints: ["The Cambrian explosion took millions of years.", "Burrowing animals changed seafloor habitats.", "Exceptional deposits preserve soft anatomy."],
  },
  {
    periodId: "ordovician", title: "Ordovician: Flourishing Seas",
    era: "Paleozoic", emoji: "🐚",
    summary: "Follow a major marine diversification and the extinction that ended the Ordovician.",
    sections: [
      {
        heading: "Continents beneath shallow seas",
        body: "The Ordovician lasted from about 485 to 444 million years ago. Extensive shallow seas supported communities of brachiopods, bryozoans, trilobites, and crinoids. Much of the period was warm, but major cooling developed near its end.",
        confidence: "established",
      },
      {
        heading: "Diversification and crisis",
        body: "The Great Ordovician Biodiversification Event greatly increased marine diversity. Jawless fishes were part of these seas, while microscopic spores provide evidence of early land plants. Near the end, glaciation, falling sea level, and changing ocean conditions accompanied a major extinction.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Fossil-rich limestones around Cincinnati record abundant marine communities. Glacial deposits in North Africa show that parts of Gondwana were covered by ice. Fossil distributions and chemical signals in rocks help scientists reconstruct the timing of extinction pulses.",
        confidence: "established",
      },
    ],
    keyPoints: ["Marine biodiversity expanded greatly.", "Early land-plant evidence includes microscopic spores.", "End-Ordovician extinction coincided with cooling and ocean change."],
  },
  {
    periodId: "silurian", title: "Silurian: Life Rebuilds",
    era: "Paleozoic", emoji: "🌱",
    summary: "See recovering seas and early steps toward complex land ecosystems.",
    sections: [
      {
        heading: "Recovering seas",
        body: "From about 444 to 419 million years ago, seas expanded again after the end-Ordovician crisis. Coral and stromatoporoid reefs supported diverse marine communities. Climate and sea level still fluctuated, so the period was not one unchanging warm interval.",
        confidence: "established",
      },
      {
        heading: "Jaws and upright stems",
        body: "Jawed vertebrates diversified alongside jawless fishes. Small branching plants such as Cooksonia carried reproductive structures above the ground, and some specimens show water-conducting tissues. Land arthropods also appear in Silurian deposits, although the timing of their earliest terrestrial adaptations remains under study.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Silurian rocks of the Welsh Borderland preserve early land-plant remains. Exceptionally preserved fossils from Herefordshire reveal three-dimensional marine animals reconstructed from serial rock sections. Such sites complement ordinary shell beds rather than representing every Silurian habitat.",
        confidence: "established",
      },
    ],
    keyPoints: ["Marine ecosystems recovered after extinction.", "Small vascular plants helped transform land habitats.", "Jawed and jawless fishes lived together."],
  },
  {
    periodId: "devonian", title: "Devonian: Fishes and First Forests",
    era: "Paleozoic", emoji: "🐟",
    summary: "Connect diverse fishes, expanding forests, and the origins of limbed vertebrates.",
    sections: [
      {
        heading: "Forests change the land",
        body: "The Devonian lasted from about 419 to 359 million years ago. Early forests developed deeper roots and larger plant bodies than earlier vegetation. Their effects on soils, weathering, and nutrient runoff changed connections between land and sea.",
        confidence: "established",
      },
      {
        heading: "Fins, limbs, and diversity",
        body: "Armored fishes, sharks, ray-finned fishes, and lobe-finned fishes occupied varied aquatic habitats. Fossils such as Tiktaalik show a mixture of fish features and adaptations associated with supporting the body in shallow water. Limbs with digits evolved in aquatic animals before fully terrestrial vertebrate life.",
        confidence: "established",
      },
      {
        heading: "Extinction and how we know",
        body: "Late Devonian extinction occurred in multiple episodes rather than one simple catastrophe. Black shales and chemical evidence document oxygen-poor seas in many regions, while reef fossils record severe losses. Fossil forests at Gilboa, New York, and vertebrates from Arctic Canada provide independent evidence of changing land ecosystems.",
        confidence: "established",
      },
    ],
    keyPoints: ["Forests changed soils and waterways.", "Digit-bearing limbs first evolved in aquatic settings.", "Late Devonian crises strongly affected marine ecosystems."],
  },
  {
    periodId: "carboniferous", title: "Carboniferous: Coal Forests and Ice",
    era: "Paleozoic", emoji: "🌿",
    summary: "Explore coal-forming wetlands within a world that also contained major ice sheets.",
    sections: [
      {
        heading: "Tropical swamps, southern ice",
        body: "From about 359 to 299 million years ago, equatorial wetlands accumulated plant material while ice sheets occupied parts of southern Gondwana. Burial of peat eventually produced many important coal deposits. Not every Carboniferous landscape was swampy.",
        confidence: "established",
      },
      {
        heading: "Giants and the amniotic egg",
        body: "Tree-sized clubmosses, horsetail relatives, and seed plants built complex forests. Large arthropods included Arthropleura and Meganeura. Early amniotes evolved reproduction less dependent on open water, helping their descendants expand into terrestrial habitats.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Joggins, Nova Scotia, preserves upright fossil trees and early terrestrial vertebrates, including Hylonomus. Repeated marine and nonmarine rock layers record shoreline changes linked partly to glacial cycles. Ancient oxygen concentrations are estimated using geochemical models, not measured directly from preserved Carboniferous air.",
        confidence: "estimated",
      },
    ],
    keyPoints: ["Coal forests coexisted with southern ice sheets.", "Amniotes became less dependent on open water for reproduction.", "Atmospheric oxygen estimates come from indirect evidence."],
  },
  {
    periodId: "permian", title: "Permian: Pangaea and a Great Crisis",
    era: "Paleozoic", emoji: "🌍",
    summary: "Investigate life on Pangaea and the largest known mass extinction.",
    sections: [
      {
        heading: "One vast continent",
        body: "The Permian lasted from about 299 to 252 million years ago. Pangaea's enormous interior included strongly seasonal and dry environments, while other regions held rivers, forests, and wetlands. Southern Glossopteris floras grew across connected parts of Gondwana.",
        confidence: "established",
      },
      {
        heading: "Before dinosaur dominance",
        body: "Synapsids, the broader lineage that includes mammals, were important herbivores and predators. Dimetrodon was a synapsid, not a dinosaur, and lived in the early Permian. Later therapsids evolved varied teeth and body forms, while reptiles also diversified.",
        confidence: "established",
      },
      {
        heading: "Extinction and how we know",
        body: "At the period's end, enormous Siberian Traps eruptions were closely associated with rapid warming, ocean oxygen loss, and widespread extinction. Precisely dated volcanic rocks and the marine boundary section at Meishan, China, constrain the sequence. The relative importance of different killing mechanisms remains an active research question.",
        confidence: "established",
      },
    ],
    keyPoints: ["Pangaea contained varied climates.", "Permian synapsids were not dinosaurs.", "Massive volcanism is strongly linked to the end-Permian crisis."],
  },
  {
    periodId: "triassic", title: "Triassic: Recovery and New Lineages",
    era: "Mesozoic", emoji: "🦎",
    summary: "Trace the recovery of ecosystems and the early history of dinosaurs and mammals.",
    sections: [
      {
        heading: "Life after catastrophe",
        body: "The Triassic lasted from about 252 to 201 million years ago. Early ecosystems recovered from the end-Permian extinction under frequently harsh conditions. Pangaea remained largely connected, with seasonal climates and extensive dry interiors.",
        confidence: "established",
      },
      {
        heading: "New branches of life",
        body: "Dinosaurs appeared during the Triassic but initially shared ecosystems with many other reptile groups. Early pterosaurs took to the air, and marine reptiles diversified in the seas. Mammaliaforms evolved from cynodont ancestors; they were not descended from dinosaurs.",
        confidence: "established",
      },
      {
        heading: "Extinction and how do we know?",
        body: "Argentina's Ischigualasto Formation preserves early dinosaurs alongside other vertebrates. At the end of the Triassic, Central Atlantic Magmatic Province eruptions coincided with a major extinction. Dated volcanic rocks and carbon-isotope changes connect this crisis with large disturbances to the carbon cycle.",
        confidence: "established",
      },
    ],
    keyPoints: ["Triassic ecosystems recovered unevenly.", "Dinosaurs initially shared land with many competing groups.", "End-Triassic volcanism accompanied another mass extinction."],
  },
  {
    periodId: "jurassic", title: "Jurassic: Dinosaurs Across Changing Continents",
    era: "Mesozoic", emoji: "🦕",
    summary: "Explore Jurassic dinosaurs, early birds, and seas around a breaking supercontinent.",
    sections: [
      {
        heading: "A separating world",
        body: "From about 201 to 145 million years ago, Pangaea continued breaking apart. Warm conditions prevailed globally, but rainfall and seasonality differed greatly among regions. Conifers, cycads, ferns, and other nonflowering plants shaped land ecosystems.",
        confidence: "established",
      },
      {
        heading: "Giants and feathered relatives",
        body: "Sauropods and other dinosaurs became prominent in many terrestrial communities. Archaeopteryx combined feathers and wings with teeth and a long bony tail, helping document the relationship between birds and other theropod dinosaurs. Marine reptiles and pterosaurs were separate reptile lineages, not dinosaurs.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "The Morrison Formation records Late Jurassic ecosystems in western North America. Solnhofen's fine limestones in Germany preserve Archaeopteryx and delicate marine and flying organisms. These sites represent different habitats and should not be combined into a single local community.",
        confidence: "established",
      },
    ],
    keyPoints: ["Jurassic climates varied by region.", "Birds belong within theropod dinosaurs.", "Morrison and Solnhofen preserve different ecosystems."],
  },
  {
    periodId: "cretaceous", title: "Cretaceous: Flowers, Seas, and an Impact",
    era: "Mesozoic", emoji: "🌼",
    summary: "Follow flowering plants, diverse dinosaurs, and the impact that ended the Cretaceous.",
    sections: [
      {
        heading: "A greenhouse world",
        body: "The Cretaceous lasted from about 145 to 66 million years ago. High sea levels flooded continental interiors, including North America's Western Interior Seaway. Climate changed through the period, with particularly warm intervals in the middle Cretaceous.",
        confidence: "established",
      },
      {
        heading: "Flowering plants spread",
        body: "Flowering plants diversified and became increasingly important in many habitats. Dinosaur communities differed across continents and through time: Tyrannosaurus and Triceratops lived near the period's end, not throughout it. Birds, mammals, insects, and marine animals were also evolving.",
        confidence: "established",
      },
      {
        heading: "Impact and how we know",
        body: "The Chicxulub impact at about 66 million years ago triggered the end-Cretaceous mass extinction. A worldwide boundary layer contains unusually abundant iridium and shocked minerals, while drilling reveals the crater beneath Mexico's Yucatán region. Hell Creek rocks preserve ecosystems from shortly before the extinction; birds survived, while non-avian dinosaurs disappeared.",
        confidence: "established",
      },
    ],
    keyPoints: ["Flowering plants diversified during the Cretaceous.", "High seas divided some continents.", "Impact evidence connects Chicxulub to the end-Cretaceous extinction."],
  },
  {
    periodId: "paleogene", title: "Paleogene: Mammals in a Changing Climate",
    era: "Cenozoic", emoji: "🐾",
    summary: "Discover mammal diversification during a transition from greenhouse warmth toward a cooler world.",
    sections: [
      {
        heading: "Warmth followed by cooling",
        body: "The Paleogene lasted from 66 to about 23 million years ago. It included very warm intervals, including the Paleocene–Eocene Thermal Maximum around 56 million years ago. Major Antarctic glaciation developed near the Eocene–Oligocene boundary around 34 million years ago.",
        confidence: "established",
      },
      {
        heading: "Mammals diversify",
        body: "Mammals already existed alongside dinosaurs, but many lineages diversified after the end-Cretaceous extinction. Early whales evolved from land-dwelling ancestors, and bats developed powered flight. Birds and flowering plants also continued building new ecological communities.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Wyoming's Green River Formation preserves Eocene fishes, plants, and other organisms. Fossils from Pakistan document important stages in early whale evolution. Oxygen and carbon isotopes in marine microfossils help reconstruct temperature, ice volume, and changes to the carbon cycle.",
        confidence: "estimated",
      },
    ],
    keyPoints: ["Mammals existed before the Paleogene.", "Early whales evolved from terrestrial ancestors.", "Marine microfossils record climate change."],
  },
  {
    periodId: "neogene", title: "Neogene: Grasslands and Human Relatives",
    era: "Cenozoic", emoji: "🌾",
    summary: "Explore expanding open habitats, changing mammals, and early human relatives.",
    sections: [
      {
        heading: "A patchwork of habitats",
        body: "From about 23 to 2.58 million years ago, mountain building and long-term climate change reshaped rainfall and habitats. Grasslands expanded in many regions, but forests persisted and changes were not simultaneous worldwide. Some warm-climate grasses became especially important during the later Neogene.",
        confidence: "established",
      },
      {
        heading: "Grazers and hominins",
        body: "Many mammal lineages developed adaptations useful in open habitats, including teeth resistant to wear from abrasive food. Apes diversified, and early hominins evolved habitual upright walking. Human evolution was branching, not a ladder with one species turning neatly into the next.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Lucy's skeleton was discovered at Hadar, Ethiopia, in 1974 and belongs to Australopithecus afarensis. Laetoli footprints in Tanzania record upright walking about 3.66 million years ago. Fossils, dated volcanic layers, and isotopes in tooth enamel help connect these animals with their environments.",
        confidence: "established",
      },
    ],
    keyPoints: ["Grasslands expanded unevenly.", "Human evolution involved multiple branches.", "Bones, footprints, and chemistry provide different evidence."],
  },
  {
    periodId: "quaternary", title: "Quaternary: Ice Cycles and Our World",
    era: "Cenozoic", emoji: "🧊",
    summary: "Investigate repeated glaciations, human expansion, and changing large-animal communities.",
    sections: [
      {
        heading: "Ice advances and retreats",
        body: "The Quaternary began about 2.58 million years ago and continues today. Repeated glacial and warmer interglacial intervals changed coastlines, vegetation, and animal ranges. We live in the Holocene, the interglacial epoch that began about 11,700 years ago.",
        confidence: "established",
      },
      {
        heading: "Humans and megafauna",
        body: "Several human species lived during the Quaternary, and Homo sapiens evolved in Africa. Mammoths, giant ground sloths, and many other large animals disappeared at different times in different regions. Evidence supports important roles for both human pressures and environmental change, but their contributions varied.",
        confidence: "hypothesized",
      },
      {
        heading: "How do we know?",
        body: "Ice cores preserve climate signals and bubbles of ancient air. Marine sediments, glacial landforms, archaeological sites, and frozen mammoths provide independent records. Radiocarbon dates relatively recent organic remains, while older Quaternary sites require other dating methods.",
        confidence: "established",
      },
    ],
    keyPoints: ["The Quaternary includes today.", "Glacial cycles changed habitats and sea level.", "Megafaunal extinction causes differed among regions."],
  },
];

export const TIME_LESSONS: Lesson[] = [
  {
    id: "time-scale-intro",
    title: "Reading Earth's Deep-Time Calendar",
    module: "time",
    emoji: "⏳",
    minutes: 5,
    summary: "Learn how rock evidence organizes Earth's history into nested units of time.",
    sections: [
      {
        heading: "A calendar built from rocks",
        body: "Earth formed about 4.54 billion years ago. Geologists organize its history into eons, eras, periods, epochs, and ages. The Ediacaran is a period within the Proterozoic Eon; Precambrian is a useful informal umbrella, although this app groups it alongside eras.",
        confidence: "established",
      },
      {
        heading: "Environments and evolution",
        body: "Continents move, climates change, and organisms evolve on branching family trees. A period name does not describe one worldwide habitat. A fossil's age and location both matter when reconstructing the environment in which an organism lived.",
        confidence: "established",
      },
      {
        heading: "Boundaries and extinctions",
        body: "Many time boundaries are defined at particular reference points in rock sections and correlated using fossils or chemical signals. Some coincide with major extinctions, but others do not. Numerical boundary ages may be refined as measurements improve.",
        confidence: "established",
      },
      {
        heading: "How do we know?",
        body: "Relative dating places events in sequence, while radiometric dating estimates numerical ages using radioactive decay. Uranium–lead measurements of zircon crystals can date volcanic ash between fossil layers. Combining independent evidence is more reliable than treating any one fossil or measurement as a complete history.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Geological time units form a nested hierarchy.",
      "A period contained many different habitats.",
      "Rock order and radiometric dates work together.",
    ],
    points: 15,
  },
  ...entries.map((entry): Lesson => ({
    id: `time-${entry.periodId}`,
    title: entry.title,
    module: "time",
    periodId: entry.periodId,
    era: entry.era,
    emoji: entry.emoji,
    minutes: 5,
    summary: entry.summary,
    sections: entry.sections,
    keyPoints: entry.keyPoints,
    points: 15,
  })),
];
