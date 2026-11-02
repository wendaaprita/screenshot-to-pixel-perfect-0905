import type { Lesson } from "./types";

export const FOSSIL_LAB_LESSONS: Lesson[] = [
  {
    id: "fossil-what-is-a-fossil",
    title: "What Counts as a Fossil?",
    module: "fossil-lab",
    emoji: "🐚",
    minutes: 4,
    summary: "Distinguish preserved remains, traces of activity, and ordinary look-alike rocks.",
    sections: [
      {
        heading: "Evidence of past life",
        body: "Fossils are preserved remains or traces of organisms from the geological past. A shell, a pollen grain, a footprint, and a burrow can all qualify. There is no single age cutoff used in every scientific setting, and not every fossil has turned completely into stone.",
        confidence: "established",
      },
      {
        heading: "Bodies and behavior",
        body: "Body fossils preserve parts of organisms, while trace fossils record activity. A dinosaur tooth reveals anatomy; a trackway records movement across a surface. Traces can be valuable even when the animal that made them cannot be identified precisely.",
        confidence: "established",
      },
      {
        heading: "Testing an identification",
        body: "Mineral growth and erosion can create shapes that resemble organisms. Paleontologists look for repeated biological structures, internal anatomy, and geological context rather than relying on resemblance alone. Laetoli's footprints, for example, preserve coordinated sequences of steps on a formerly soft surface.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Fossils include remains and activity traces.",
      "Not all fossils are fully mineralized.",
      "A biological-looking shape needs supporting evidence.",
    ],
    points: 10,
  },
  {
    id: "fossil-fossilization",
    title: "From Organism to Fossil",
    module: "fossil-lab",
    emoji: "🦴",
    minutes: 5,
    summary: "Follow burial, decay, and mineralization while learning why the fossil record is incomplete.",
    sections: [
      {
        heading: "A race against destruction",
        body: "After death, scavengers, microbes, weathering, and transport can scatter or destroy remains. Rapid burial often improves preservation by protecting material from some of these processes. Hard parts usually survive more readily than soft tissues, although exceptional sites preserve both.",
        confidence: "established",
      },
      {
        heading: "Several pathways",
        body: "Minerals may fill pores, replace original tissues, or grow around remains. Compression can leave carbon-rich films, while resin, freezing, or drying may preserve original material. Petrified wood can involve both pore filling and replacement, so fossilization categories sometimes overlap.",
        confidence: "established",
      },
      {
        heading: "The fossil record has filters",
        body: "A river animal has a different chance of burial from a small animal on a dry hillside. Later erosion must expose a fossil, and someone must recognize it before it is destroyed. Burgess Shale soft-bodied fossils show how an exceptional deposit can reveal organisms missing from ordinary shell beds.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Burial can protect remains from destruction.",
      "Several preservation processes can affect one fossil.",
      "The fossil record is a biased sample of past life.",
    ],
    points: 15,
  },
  {
    id: "fossil-types",
    title: "Identify the Preservation Clues",
    module: "fossil-lab",
    emoji: "🔎",
    minutes: 5,
    summary: "Compare fossil categories without assuming that each belongs to only one group.",
    sections: [
      {
        heading: "Impressions and replicas",
        body: "A mold is a negative impression or cavity; a cast is a solid filling of a space. An internal cast of a shell records its interior rather than every feature of its outer surface. Carbon films instead preserve thin carbon-rich residues, often flattened on a rock surface.",
        confidence: "established",
      },
      {
        heading: "Minerals and original tissues",
        body: "Permineralized bone has minerals deposited in pore spaces, and petrified wood often preserves microscopic plant anatomy. Amber begins as tree resin, not sap. Frozen remains such as the mammoth calf Lyuba preserve original tissues, although those tissues still undergo chemical change.",
        confidence: "established",
      },
      {
        heading: "Categories can overlap",
        body: "Microfossil describes size, while trace fossil describes the kind of evidence preserved. A microscopic burrow can therefore fit both descriptions. Coprolites are fossil droppings and are commonly classified as trace fossils because they record an organism's activity.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Molds are negative impressions and casts are fillings.",
      "Amber is fossil resin, not fossil sap.",
      "Fossil categories describe different, sometimes overlapping properties.",
    ],
    points: 15,
  },
  {
    id: "fossil-excavation",
    title: "Excavation Without Losing the Story",
    module: "fossil-lab",
    emoji: "⛏️",
    minutes: 5,
    summary: "Learn why documenting a fossil's position matters as much as carefully exposing it.",
    sections: [
      {
        heading: "Before touching the fossil",
        body: "Researchers obtain permission and follow local collecting and heritage laws. They record the location, rock layer, orientation, and nearby geological features before removing material. Never enter unstable cliffs, quarries, or caves without appropriate expertise and permission.",
        confidence: "established",
      },
      {
        heading: "Careful removal",
        body: "Excavators expose remains gradually using tools suited to the rock and specimen. Fragile bones may need consolidants and protective jackets, often made with plaster and supporting fabric. Labels and field notes keep each specimen connected to its original context during transport.",
        confidence: "established",
      },
      {
        heading: "The laboratory continues the excavation",
        body: "Preparators use microscopes, fine tools, and sometimes carefully controlled chemical methods to remove rock. CT scanning can reveal hidden structures without fully exposing them. At Hadar, Lucy's scattered bones were documented and recovered as parts of one associated skeleton, making careful field relationships important to their interpretation.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Permission and safety come first.",
      "Position and rock-layer records are essential evidence.",
      "Preparation requires as much care as field collection.",
    ],
    points: 15,
  },
  {
    id: "fossil-dating",
    title: "How Old Is This Fossil?",
    module: "fossil-lab",
    emoji: "⏱️",
    minutes: 6,
    summary: "Compare relative dating with radiocarbon, uranium–lead, and volcanic-rock dating.",
    sections: [
      {
        heading: "Order before numbers",
        body: "Relative dating asks whether one event happened before another. In an undisturbed sedimentary sequence, lower layers are generally older than upper layers. Fossils enclosed between two dated volcanic layers can be assigned an age range even if the fossils themselves cannot be dated directly.",
        confidence: "established",
      },
      {
        heading: "Radiocarbon has limits",
        body: "Radiocarbon dating measures carbon-14 remaining in suitable once-living material. It is most useful for material younger than roughly 50,000 years, with the practical limit depending on preservation and measurement conditions. It cannot date ordinary dinosaur fossils millions of years old, and results require calibration and contamination checks.",
        confidence: "established",
      },
      {
        heading: "Clocks for deeper time",
        body: "Uranium–lead dating commonly measures zircon crystals in igneous rocks, including volcanic ash. Argon-based methods can date suitable volcanic minerals at sites such as Olduvai Gorge. These methods date geological events associated with fossils rather than automatically measuring the time an animal died.",
        confidence: "established",
      },
      {
        heading: "An age is a measurement",
        body: "Scientists report numerical ages with uncertainties because instruments, samples, and geological histories are imperfect. Reworked ash crystals can be older than the layer in which they were finally deposited. Agreement among rock relationships, several samples, and independent methods makes an age interpretation stronger.",
        confidence: "estimated",
      },
    ],
    keyPoints: [
      "Relative dating establishes sequence.",
      "Radiocarbon cannot date dinosaur-age remains.",
      "Volcanic minerals can bracket the ages of fossil layers.",
    ],
    points: 20,
  },
  {
    id: "fossil-rock-layers",
    title: "Reading Rock Layers",
    module: "fossil-lab",
    emoji: "🪨",
    minutes: 5,
    summary: "Read sedimentary sequences while recognizing erosion, disturbance, and missing time.",
    sections: [
      {
        heading: "A stack of changing environments",
        body: "Sandstone, mudstone, and limestone can record different environments and sediment sources. In a sequence that has not been overturned, lower sedimentary layers generally formed first. A change from river deposits to marine deposits can reveal a shifting shoreline rather than a sudden change everywhere on Earth.",
        confidence: "established",
      },
      {
        heading: "Pages can be missing",
        body: "An unconformity represents erosion or a pause in deposition. Faulting and folding can disrupt the original order, and older fossils may be eroded and redeposited in younger sediment. Geologists inspect structures and sediment details before applying simple rules about layer position.",
        confidence: "established",
      },
      {
        heading: "A worldwide boundary signal",
        body: "The Cretaceous–Paleogene boundary is marked in many places by a thin layer enriched in iridium and impact-related material. It helps correlate distant rock sections around the time of the Chicxulub impact. The layer's thickness and appearance vary locally, and some sections do not preserve it at all.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Rock sequences record changing local environments.",
      "Erosion and nondeposition leave gaps in the record.",
      "Boundary signals can connect widely separated sections.",
    ],
    points: 15,
  },
  {
    id: "fossil-index-fossils",
    title: "Fossils as Time Markers",
    module: "fossil-lab",
    emoji: "📍",
    minutes: 5,
    summary: "Use fossil ranges to correlate rocks while recognizing the limits of index fossils.",
    sections: [
      {
        heading: "What makes a useful marker?",
        body: "A useful index fossil is recognizable, geographically widespread, and restricted to a relatively short interval of geological time. Abundance and good preservation also help. A whole group such as trilobites lasts far too long to identify a narrow interval, but particular trilobite species can be useful.",
        confidence: "established",
      },
      {
        heading: "Matching distant sections",
        body: "Ammonites, graptolites, conodonts, and microscopic foraminifera are widely used in biostratigraphy. Researchers compare the first and last appearances of species to divide rock sequences into zones. Several fossil groups together often provide stronger correlations than one specimen.",
        confidence: "established",
      },
      {
        heading: "A range is not a perfect stopwatch",
        body: "A species may be absent because the local habitat was unsuitable or because its remains were not preserved. Fossils can also be reworked from older rocks into younger layers. Radiometric dates and other signals help calibrate fossil zones and test whether apparently matching layers really have similar ages.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Short-lived widespread species make useful markers.",
      "Specific species are more precise than broad animal groups.",
      "Habitat and reworking can complicate correlations.",
    ],
    points: 15,
  },
  {
    id: "fossil-paleontologists",
    title: "How Paleontologists Investigate",
    module: "fossil-lab",
    emoji: "🧑‍🔬",
    minutes: 5,
    summary: "Meet fossil researchers and learn how teams turn discoveries into testable explanations.",
    sections: [
      {
        heading: "Mary Anning and the Dorset coast",
        body: "Mary Anning collected and studied important Jurassic fossils near Lyme Regis, England. As a young collector, she helped recover a major ichthyosaur skeleton after her brother Joseph found its skull, and she later discovered important plesiosaur and pterosaur remains. Her expertise contributed greatly to paleontology despite barriers linked to her sex and social position.",
        confidence: "established",
      },
      {
        heading: "More than finding bones",
        body: "Paleontologists may study microscopic pollen, fossil plants, footprints, shells, or ancient ecosystems. Preparators, geologists, collections specialists, artists, and local collaborators contribute different skills. A fossil's scientific value depends on documentation and accessible collections, not only on its size or dramatic appearance.",
        confidence: "established",
      },
      {
        heading: "Testing an explanation",
        body: "Researchers compare specimens, measure anatomy, examine rocks, and publish methods so others can evaluate their work. A hypothesis about diet might be tested using tooth wear, jaw mechanics, isotopes, and preserved meals. New evidence can change an interpretation without making the scientific process a failure.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Mary Anning contributed expertise as well as discoveries.",
      "Paleontology depends on teams and well-kept collections.",
      "Scientific explanations should be testable and revisable.",
    ],
    points: 15,
  },
  {
    id: "fossil-famous-finds",
    title: "Famous Finds, Different Questions",
    module: "fossil-lab",
    emoji: "🏛️",
    minutes: 6,
    summary: "Compare major fossil and archaeological discoveries without treating any one as a complete history.",
    sections: [
      {
        heading: "Lucy at Hadar",
        body: "Lucy, catalogued as AL 288-1, was discovered at Hadar in Ethiopia in 1974 by a team including Donald Johanson and Tom Gray. The roughly 3.2-million-year-old partial skeleton belongs to Australopithecus afarensis. Its anatomy contributes evidence of upright walking, but it does not represent the first human or a complete skeleton.",
        confidence: "established",
      },
      {
        heading: "Olduvai Gorge",
        body: "Olduvai Gorge in Tanzania preserves important hominin fossils, stone tools, and environmental records. Mary Leakey discovered the famous OH 5 skull, assigned to Paranthropus boisei, there in 1959. Volcanic layers help date the sequence, but a fossil found near tools does not by itself prove that its species made them.",
        confidence: "established",
      },
      {
        heading: "Feathers at Solnhofen",
        body: "Archaeopteryx specimens from Germany's Solnhofen region preserve a mixture of bird-like and other theropod features. Feathers alongside teeth and a long bony tail helped connect birds with dinosaur evolution. Evolutionary relationships are tested using many specimens and features, not one famous fossil alone.",
        confidence: "established",
      },
      {
        heading: "Soft bodies at the Burgess Shale",
        body: "The Burgess Shale became famous through Charles Walcott's work beginning in 1909, building on a landscape long known to Indigenous peoples. Its exceptional preservation reveals soft-bodied Cambrian animals missing from many ordinary fossil beds. Continued collecting and new analytical methods still change how these organisms are understood.",
        confidence: "established",
      },
    ],
    keyPoints: [
      "Lucy was discovered at Hadar, not Olduvai Gorge.",
      "Association with tools does not automatically identify their maker.",
      "Famous discoveries gain meaning through wider comparisons.",
    ],
    points: 20,
  },
  {
    id: "fossil-plate-tectonics",
    title: "Fossils on Moving Continents",
    module: "fossil-lab",
    emoji: "🌍",
    minutes: 5,
    summary: "Combine fossil distributions with geological and ocean-floor evidence for moving plates.",
    sections: [
      {
        heading: "Matching life across oceans",
        body: "Glossopteris fossils occur across several southern continents, and Mesosaurus fossils occur in both South America and Africa. These distributions helped support the idea that the continents were once connected. Researchers compare fossil ages and habitats rather than assuming that every similar fossil requires a former land connection.",
        confidence: "established",
      },
      {
        heading: "From continental drift to plate tectonics",
        body: "Continents are carried within moving lithospheric plates that also include oceanic crust. Seafloor spreading creates new crust at ridges, while subduction returns some old crust to the mantle. Magnetic patterns and ocean-floor ages supplied important evidence beyond the continental matches used in early drift arguments.",
        confidence: "established",
      },
      {
        heading: "Moving plates change ecosystems",
        body: "Continental movement can open seaways, raise mountain ranges, and separate populations. These changes alter ocean circulation, rainfall, and opportunities for migration or isolation. Plate motion is usually slow on a human timescale but can transform geography over millions of years.",
        confidence: "established",
      },
      {
        heading: "Reconstructing an ancient map",
        body: "Scientists combine fossils, matching rock belts, glacial deposits, paleomagnetism, and measurements of modern plate motion. Each source constrains different parts of a reconstruction. Exact ancient coastlines remain less certain because sea level, erosion, deformation, and later burial can hide their original positions.",
        confidence: "estimated",
      },
    ],
    keyPoints: [
      "Fossils helped reveal former continental connections.",
      "Ocean-floor evidence supports plate tectonics independently.",
      "Ancient maps combine several kinds of evidence.",
    ],
    points: 15,
  },
];
