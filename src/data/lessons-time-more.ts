import type { Lesson } from "./types";

export const TIME_LESSONS_MORE: Lesson[] = [
  {
    id: "time-cambrian", title: "Cambrian: Life Explodes", module: "time", periodId: "cambrian", era: "Paleozoic", emoji: "🦐", minutes: 5,
    summary: "Meet the diverse sea life that transformed ecosystems during the Cambrian.", points: 15,
    sections: [
      { heading: "Warm seas and changing seafloors", body: "About 539–485 million years ago, warm conditions and high seas created broad shallow marine habitats. Most continents had no forests or soils, and life on land was sparse.", confidence: "established" },
      { heading: "A burst of animal diversity", body: "Many animal groups became abundant and recognizable in the fossil record, including trilobites and mollusks. Pikaia, a soft-bodied animal with a notochord, is an early chordate from the Burgess Shale; predators such as Anomalocaris hunted in the seas.", confidence: "established" },
      { heading: "A gradual revolution", body: "The Cambrian explosion was a major diversification over millions of years, not a sudden event. Burrowing animals disturbed microbial mats, changing seafloor habitats and food webs.", confidence: "established" },
      { heading: "How do we know?", body: "Chengjiang in China and Canada's Burgess Shale preserve delicate soft-bodied fossils. Fossils, rock layers, and radiometric dates from volcanic ash help reconstruct this ancient world.", confidence: "established" },
    ], keyPoints: ["Warm shallow seas covered many continental margins.", "Pikaia is an early chordate known from exceptional fossils.", "The Cambrian explosion unfolded over millions of years."],
  },
  {
    id: "time-ordovician", title: "Ordovician: Seas Teeming with Life", module: "time", periodId: "ordovician", era: "Paleozoic", emoji: "🐚", minutes: 5,
    summary: "Explore thriving marine ecosystems and the ice-age extinction that closed the Ordovician.", points: 15,
    sections: [
      { heading: "A world of shallow seas", body: "From about 485 to 444 million years ago, extensive shallow seas covered large parts of continents. Most of the period was warm, with rich marine habitats including reefs and seafloors.", confidence: "established" },
      { heading: "Life diversifies", body: "The Great Ordovician Biodiversification Event expanded marine diversity. Brachiopods, trilobites, graptolites, and nautiloid relatives flourished, while jawless vertebrates swam in the seas. Tiny spores provide evidence for early land plants.", confidence: "established" },
      { heading: "A mass extinction", body: "Near the end of the period, ice sheets grew on Gondwana and sea levels fell, removing shallow-sea habitats. The resulting Ordovician–Silurian extinction was one of the Big Five, though estimates of species losses depend on the fossil record.", confidence: "estimated" },
      { heading: "Reading the rocks", body: "Glacial deposits in areas once part of Gondwana, fossil changes, and chemical signals preserve evidence of this crisis. Scientists continue to study how cooling, sea-level change, and ocean oxygen interacted.", confidence: "established" },
    ], keyPoints: ["Marine life diversified greatly.", "Early land plants are known from microscopic spores.", "End-Ordovician glaciation and habitat loss accompanied a mass extinction."],
  },
  {
    id: "time-silurian", title: "Silurian: Reefs and the First Green Land", module: "time", periodId: "silurian", era: "Paleozoic", emoji: "🌱", minutes: 4,
    summary: "Discover recovering reefs, early jawed fishes, and plants spreading onto land.", points: 15,
    sections: [
      { heading: "Seas recover", body: "The Silurian, about 444–419 million years ago, followed the end-Ordovician extinction. Sea levels rose in many areas and reef communities built by corals and stromatoporoids expanded.", confidence: "established" },
      { heading: "Small plants, big changes", body: "Cooksonia and other early vascular plants had simple branching stems and reproductive structures. Their descendants helped develop soils and more complex land habitats, where arthropods also lived.", confidence: "established" },
      { heading: "New fish and reefs", body: "Jawed fishes diversified alongside jawless forms, while coral reefs supported varied marine communities. These were important changes, but ecosystems still differed greatly from those of today.", confidence: "established" },
      { heading: "Evidence in stone", body: "Fossils from the Welsh Borderland document early plants, and Silurian reef limestones record marine life. Exceptional sites can preserve delicate details rarely seen in ordinary fossil beds.", confidence: "established" },
    ], keyPoints: ["Marine ecosystems recovered after the Ordovician crisis.", "Cooksonia is among the best-known early vascular plants.", "Jawed fishes and reef communities diversified."],
  },
  {
    id: "time-devonian", title: "Devonian: Fishes, Forests, and First Limbs", module: "time", periodId: "devonian", era: "Paleozoic", emoji: "🐟", minutes: 5,
    summary: "Follow the rise of diverse fishes and forests, and the transition toward life on land.", points: 15,
    sections: [
      { heading: "Warm seas and growing forests", body: "The Devonian lasted about 419–359 million years ago and generally had warm conditions, though climates varied by place and time. Early forests and deeper plant roots changed soils, weathering, and the flow of nutrients into waterways.", confidence: "established" },
      { heading: "An age of fishes", body: "Armored placoderms, sharks, ray-finned fishes, and lobe-finned fishes lived in seas and freshwater habitats. Tiktaalik had fish traits as well as a sturdy skeleton and fins able to support its body in shallow water.", confidence: "established" },
      { heading: "From fins toward limbs", body: "The earliest animals with limbs bearing digits were still aquatic; the move onto land happened in stages. Devonian fossils reveal this branching transition rather than a single fish suddenly becoming a land animal.", confidence: "established" },
      { heading: "Extinction and evidence", body: "Several Late Devonian extinction pulses severely affected reefs and other marine life. Fossils, black shales, and chemical clues document ecosystem disruption, including oxygen-poor waters in some regions.", confidence: "established" },
    ], keyPoints: ["Early forests changed land and waterways.", "Tiktaalik combines fish features with adaptations for shallow water.", "Late Devonian extinction pulses hit marine ecosystems hard."],
  },
  {
    id: "time-carboniferous", title: "Carboniferous: Coal Forests and Giant Insects", module: "time", periodId: "carboniferous", era: "Paleozoic", emoji: "🌿", minutes: 5,
    summary: "Step into coal-forming wetlands, southern ice-age landscapes, and a world of early amniotes.", points: 15,
    sections: [
      { heading: "Swamps and ice", body: "About 359–299 million years ago, humid equatorial wetlands existed alongside glaciers in parts of southern Gondwana. Buried plant material from some of these wetlands eventually became coal, but not every landscape was swamp.", confidence: "established" },
      { heading: "Forests and giants", body: "Tree-sized clubmosses, horsetail relatives, and ferns formed lush forests. Arthropods included the large millipede Arthropleura and the flying insect Meganeura; its exact wingspan varied among species and estimates.", confidence: "estimated" },
      { heading: "A new way to reproduce", body: "Early amniotes evolved eggs and reproductive membranes that reduced dependence on standing water. Their descendants spread into a wider range of terrestrial habitats than most amphibians.", confidence: "established" },
      { heading: "How we know", body: "Joggins in Nova Scotia preserves fossil trees and early land vertebrates such as Hylonomus. Ancient atmospheric oxygen levels are reconstructed indirectly from evidence and models, not measured directly.", confidence: "estimated" },
    ], keyPoints: ["Equatorial coal wetlands coexisted with southern glaciers.", "Meganeura and Arthropleura were notable large arthropods.", "Amniote reproduction helped vertebrates spread on land."],
  },
  {
    id: "time-permian", title: "Permian: Pangaea and the Greatest Extinction", module: "time", periodId: "permian", era: "Paleozoic", emoji: "🦎", minutes: 5,
    summary: "Explore dry landscapes, remarkable synapsids, and Earth's most severe known mass extinction.", points: 15,
    sections: [
      { heading: "One supercontinent", body: "The Permian lasted about 299–252 million years ago, as most land formed the supercontinent Pangaea. Vast interiors were far from the sea and often dry, while climates varied across the continent.", confidence: "established" },
      { heading: "Synapsids take many forms", body: "Synapsids, the wider group that includes mammals, were diverse land vertebrates. Dimetrodon was a sail-backed predator, not a dinosaur; later Permian ecosystems included plant-eating dicynodonts and predatory gorgonopsians.", confidence: "established" },
      { heading: "The end-Permian catastrophe", body: "At the end of the Permian, a mass extinction eliminated most marine species and many land groups. Siberian volcanic eruptions, rapid warming, ocean acidification, and oxygen loss are linked to the crisis; the exact chain of causes is still studied.", confidence: "established" },
      { heading: "Tracing a crisis", body: "Fossil turnover, changes in rock chemistry, and volcanic rocks in Siberia preserve evidence for the extinction. Percentages of losses are estimates because the fossil record is incomplete.", confidence: "estimated" },
    ], keyPoints: ["Pangaea's interiors included extensive dry regions.", "Dimetrodon was a synapsid, not a dinosaur.", "End-Permian extinction was Earth's most severe known mass extinction."],
  },
  {
    id: "time-triassic", title: "Triassic: Life Rebounds and Dinosaurs Begin", module: "time", periodId: "triassic", era: "Mesozoic", emoji: "🦕", minutes: 5,
    summary: "See ecosystems recover after the Permian extinction as dinosaurs and mammals first appear.", points: 15,
    sections: [
      { heading: "A hot, connected world", body: "The Triassic lasted about 252–201 million years ago, when Pangaea remained joined for much of the period. Large inland areas were dry, with strong seasonal rainfall and monsoons in some regions.", confidence: "established" },
      { heading: "Recovery and new life", body: "Life recovered unevenly after the end-Permian crisis. Conifers and other plants grew across drylands, while reptiles diversified in terrestrial and marine habitats.", confidence: "established" },
      { heading: "Dinosaurs and early mammals", body: "The first dinosaurs appeared in the Triassic and were initially only part of a diverse animal community. Pterosaurs took to the air, and early mammal relatives called mammaliaforms appeared; the earliest true mammal status depends on how scientists define the group.", confidence: "hypothesized" },
      { heading: "Another extinction", body: "Mass extinction at the Triassic–Jurassic boundary removed many groups and helped dinosaurs become dominant on land. Large-scale volcanism as Pangaea began splitting is strongly linked to environmental disruption.", confidence: "established" },
    ], keyPoints: ["Pangaea had extensive dry interiors.", "Early dinosaurs shared ecosystems with many other animals.", "End-Triassic extinction preceded dinosaur dominance."],
  },
  {
    id: "time-jurassic", title: "Jurassic: Giants on Land and Sea", module: "time", periodId: "jurassic", era: "Mesozoic", emoji: "🦖", minutes: 5,
    summary: "Meet giant dinosaurs, marine reptiles, and feathered dinosaurs close to the origin of birds.", points: 15,
    sections: [
      { heading: "A splitting supercontinent", body: "From about 201 to 145 million years ago, Pangaea continued to break apart. The Jurassic was generally warm, with high sea levels and many coastal and shallow-sea habitats.", confidence: "established" },
      { heading: "Dinosaurs diversify", body: "Sauropods such as Diplodocus and Brachiosaurus were among the great plant-eaters, while Allosaurus was a major predator. Stegosaurus carried distinctive plates and spikes, and many ecosystems also included smaller dinosaurs.", confidence: "established" },
      { heading: "Wings and oceans", body: "Pterosaurs flew above landscapes, while marine reptiles such as plesiosaurs and ichthyosaurs lived in the sea. Archaeopteryx and other feathered dinosaurs show the close evolutionary relationship between birds and theropod dinosaurs.", confidence: "established" },
      { heading: "Reading Jurassic worlds", body: "Fossils from places such as China's Liaoning preserve feathers, while the Morrison Formation of western North America records dinosaurs and ancient environments. No single site represents the whole Jurassic world.", confidence: "established" },
    ], keyPoints: ["Pangaea continued to split apart.", "Large sauropods and predators such as Allosaurus lived on land.", "Fossils link birds with feathered theropod dinosaurs."],
  },
  {
    id: "time-cretaceous", title: "Cretaceous: Flowering Plants and the Asteroid", module: "time", periodId: "cretaceous", era: "Mesozoic", emoji: "🌸", minutes: 5,
    summary: "Explore the spread of flowering plants and the mass extinction that ended the age of non-bird dinosaurs.", points: 15,
    sections: [
      { heading: "Greenhouse climates", body: "The Cretaceous lasted about 145–66 million years ago and was generally a greenhouse interval, though temperature varied over time. High sea levels created inland seas and coastal habitats in many regions.", confidence: "established" },
      { heading: "Flowers transform ecosystems", body: "Flowering plants diversified and became increasingly important on land. Insects including early relatives of bees and ants evolved alongside changing plant communities, while conifers and ferns remained widespread.", confidence: "established" },
      { heading: "Dinosaurs and birds", body: "Tyrannosaurus, Triceratops, and many other dinosaurs lived during the later Cretaceous. Birds diversified from feathered dinosaur ancestors; modern birds are the dinosaur lineage that survived the extinction.", confidence: "established" },
      { heading: "K–Pg mass extinction", body: "About 66 million years ago an asteroid struck near what is now Mexico, triggering the Cretaceous–Paleogene mass extinction. Non-bird dinosaurs and many other groups disappeared, while birds, mammals, and other survivors diversified afterward.", confidence: "established" },
    ], keyPoints: ["Flowering plants expanded in diversity.", "Birds are surviving dinosaurs.", "An asteroid impact caused the end-Cretaceous mass extinction."],
  },
  {
    id: "time-paleogene", title: "Paleogene: Mammals Enter New Worlds", module: "time", periodId: "paleogene", era: "Cenozoic", emoji: "🐦", minutes: 5,
    summary: "Follow mammal and bird diversification through a long-term cooling world after the asteroid impact.", points: 15,
    sections: [
      { heading: "A changing climate", body: "The Paleogene lasted about 66–23 million years ago. It began with warm conditions, including a brief major warming event, and cooled overall; Antarctica developed large ice sheets near the end.", confidence: "established" },
      { heading: "Mammals and birds diversify", body: "After the end-Cretaceous extinction, surviving mammals and birds diversified into many habitats. Early whales evolved from land-dwelling ancestors, and early primates lived in forest environments.", confidence: "established" },
      { heading: "Forests and grasslands", body: "Forests were widespread for much of the period, while open grasslands were not yet as extensive as they became later. Plant communities shifted as climate and continents changed.", confidence: "established" },
      { heading: "Evidence through time", body: "Fossils, isotopes in rocks, and ocean sediments record climate shifts and evolutionary changes. The Eocene–Oligocene transition included substantial cooling, although effects differed among regions.", confidence: "established" },
    ], keyPoints: ["Mammals and birds diversified after the K–Pg extinction.", "Early whales evolved from land-dwelling ancestors.", "The Paleogene cooled overall, with major regional changes."],
  },
  {
    id: "time-neogene", title: "Neogene: Grasslands and Human Relatives", module: "time", periodId: "neogene", era: "Cenozoic", emoji: "🌾", minutes: 5,
    summary: "Discover expanding grasslands, modernizing animal groups, and early human relatives.", points: 15,
    sections: [
      { heading: "Cooling and open habitats", body: "From about 23 to 2.58 million years ago, long-term cooling and changing rainfall reshaped habitats. Grasslands expanded in many places, but forests persisted and the change was not simultaneous worldwide.", confidence: "established" },
      { heading: "Mammals adapt", body: "Horses, elephants, and many other mammal groups changed and diversified. Some grazers evolved high-crowned teeth that resisted wear from gritty grasses, while apes lived in varied habitats.", confidence: "established" },
      { heading: "Our branching family tree", body: "Early hominins evolved in Africa, and some walked upright. Human evolution was branching, not a straight ladder; fossil species represent different parts of a complicated family tree.", confidence: "established" },
      { heading: "Footprints and fossils", body: "Laetoli footprints in Tanzania preserve evidence of upright walking about 3.66 million years ago. Bones, footprints, dated volcanic layers, and chemistry in tooth enamel help scientists connect ancient animals with their environments.", confidence: "established" },
    ], keyPoints: ["Grasslands expanded unevenly as climates changed.", "Mammal groups including horses and elephants diversified.", "Hominin evolution was branching, not a straight line."],
  },
  {
    id: "time-quaternary", title: "Quaternary: Ice Ages and Our World", module: "time", periodId: "quaternary", era: "Cenozoic", emoji: "❄️", minutes: 5,
    summary: "Investigate repeated ice ages, human history, and changing megafauna from 2.58 million years ago to today.", points: 15,
    sections: [
      { heading: "Glaciers come and go", body: "The Quaternary began about 2.58 million years ago and continues today. Repeated glacial and warmer interglacial periods changed coastlines, habitats, and animal ranges; we live in the Holocene interglacial.", confidence: "established" },
      { heading: "People and other animals", body: "Homo sapiens evolved in Africa roughly 300,000 years ago and eventually spread worldwide. Mammoths, woolly rhinos, and giant ground sloths lived in some Ice Age landscapes, but many large animals later disappeared.", confidence: "estimated" },
      { heading: "Why did megafauna disappear?", body: "Large-animal extinctions happened at different times in different places. Evidence suggests that climate change and human activities both mattered, but their relative effects varied by region and remain debated.", confidence: "hypothesized" },
      { heading: "Clues from ice and earth", body: "Ice cores preserve climate signals and tiny bubbles of ancient air, while sediments, landforms, fossils, and archaeological sites add other clues. Radiocarbon dating works for relatively recent organic material; older sites require different dating methods.", confidence: "established" },
    ], keyPoints: ["The Quaternary includes the present day.", "Repeated glaciations reshaped habitats and coastlines.", "Human and environmental effects on megafaunal extinctions varied by region."],
  },
  {
    id: "time-how-we-know", title: "How We Know: Fossils, Dating, and Deep Time", module: "time", emoji: "🔎", minutes: 5,
    summary: "Learn how fossils, rock layers, and radioactive clocks combine to reveal Earth's history.", points: 15,
    sections: [
      { heading: "Fossils are clues", body: "Fossils preserve parts or traces of past life, from bones and shells to footprints and pollen. Each fossil records a particular organism and setting, not an entire ancient ecosystem by itself.", confidence: "established" },
      { heading: "Reading rock layers", body: "In undisturbed layers, lower rocks are generally older than layers above them. Fossils and distinctive chemical signals help scientists compare rock sequences from different places.", confidence: "established" },
      { heading: "Radioactive clocks", body: "Some minerals contain radioactive atoms that change into other atoms at predictable rates. Measuring these parent and daughter atoms can estimate the age of a mineral, often helping date volcanic layers above or below fossils.", confidence: "established" },
      { heading: "Putting evidence together", body: "Geological periods are chapters in a timescale built from rock records and evidence of changing life. Their numerical boundaries are estimates that can be refined as measurements improve; combining independent methods makes the history more reliable.", confidence: "established" },
    ], keyPoints: ["Fossils preserve evidence of organisms and their traces.", "Rock order helps establish which events came first.", "Radiometric dating and other evidence work together to estimate ages."],
  },
];
