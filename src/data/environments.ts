import type { Environment } from "./types";

export const ENVIRONMENTS: Environment[] = [
  {
    id: "jurassic-forest",
    name: "Jurassic Forest",
    periodId: "jurassic",
    era: "Mesozoic",
    emoji: "🌲",
    description: "Explore a Late Jurassic landscape inspired by western North America's Morrison Formation. Wooded river corridors alternate with fern-covered clearings and seasonally dry plains.",
    climate: "Warm conditions included strong wet and dry seasons, with water concentrated along rivers.",
    points: [
      {
        id: "jf-canopy", name: "Conifer Canopy", x: 18, y: 18, emoji: "🌲",
        info: "Conifers supplied food and shelter in Jurassic forests long before grasslands existed. Brachiosaurus could reach vegetation well above the feeding height of many other herbivores.",
        creatureIds: ["brachiosaurus"],
      },
      {
        id: "jf-clearing", name: "Fern Clearing", x: 40, y: 72, emoji: "🌿",
        info: "Ferns and other low-growing plants occupied disturbed ground near waterways. Stegosaurus had a relatively low head and a beak suited to cropping vegetation, although its exact menu remains uncertain.",
        creatureIds: ["stegosaurus"],
      },
      {
        id: "jf-river", name: "River Crossing", x: 75, y: 83, emoji: "🦕",
        info: "Sauropod skeletons and river sediments occur together in the Morrison Formation. Diplodocus had peg-like teeth near the front of its jaws, unlike the broader teeth of Camarasaurus.",
        creatureIds: ["diplodocus", "camarasaurus"],
      },
      {
        id: "jf-predators", name: "Predator Trail", x: 84, y: 38, emoji: "🦖",
        info: "Allosaurus and Ceratosaurus shared parts of Late Jurassic North America. Their teeth and skeletons reveal meat-eating adaptations, but fossils rarely show whether a particular meal was hunted or scavenged.",
        creatureIds: ["allosaurus", "ceratosaurus"],
      },
    ],
  },
  {
    id: "cretaceous-coast",
    name: "Cretaceous Coast",
    periodId: "cretaceous",
    era: "Mesozoic",
    emoji: "🏖️",
    description: "Visit the Late Cretaceous Western Interior Seaway of North America. This shallow inland sea divided the continent and supported rich marine food webs.",
    climate: "A greenhouse climate and high sea levels allowed warm seas to spread far across continental interiors.",
    points: [
      {
        id: "cc-surface", name: "Above the Waves", x: 18, y: 17, emoji: "🪽",
        info: "Pteranodon fossils occur in marine chalk deposits far from the ancient shoreline. Its long wings suited soaring, and fish remains associated with specimens support a fish-based diet.",
        creatureIds: ["pteranodon"],
      },
      {
        id: "cc-hunter", name: "Open-Water Hunter", x: 78, y: 40, emoji: "🦎",
        info: "Tylosaurus was a marine lizard, not a dinosaur. Fossil stomach contents show that large mosasaurs ate several kinds of marine animals rather than relying on a single prey species.",
        creatureIds: ["tylosaurus"],
      },
      {
        id: "cc-fish", name: "Fish Chase", x: 42, y: 58, emoji: "🐟",
        info: "Xiphactinus was a large predatory bony fish. The famous Kansas 'fish-within-a-fish' fossil preserves one with a substantial fish meal still inside its body cavity.",
        creatureIds: ["xiphactinus"],
      },
      {
        id: "cc-plesiosaur", name: "Long-Necked Swimmer", x: 84, y: 81, emoji: "🌊",
        info: "Elasmosaurus propelled itself with four flippers and had many neck vertebrae. Its neck could not bend into the tight swan-like loops shown in some old illustrations.",
        creatureIds: ["elasmosaurus"],
      },
    ],
  },
  {
    id: "carboniferous-swamps",
    name: "Carboniferous Coal Swamps",
    periodId: "carboniferous",
    era: "Paleozoic",
    emoji: "🌿",
    description: "Enter a tropical wetland inspired by late Carboniferous coal forests. Towering clubmoss relatives and horsetails grow above waterlogged soils that can preserve thick peat.",
    climate: "Equatorial wetlands were humid, even while large ice sheets expanded and contracted over southern Gondwana.",
    points: [
      {
        id: "cs-trees", name: "Scale Trees", x: 16, y: 20, emoji: "🌳",
        info: "Lepidodendron was a tree-sized relative of living clubmosses, not a flowering tree. Diamond-shaped leaf scars make its fossil bark especially recognizable.",
        creatureIds: ["lepidodendron"],
      },
      {
        id: "cs-thicket", name: "Horsetail Thicket", x: 43, y: 48, emoji: "🎋",
        info: "Carboniferous relatives of horsetails included tree-sized forms such as Calamites. Their jointed stems and underground spreading stems helped them occupy disturbed wet ground.",
        creatureIds: ["horsetail"],
      },
      {
        id: "cs-air", name: "Giant Insect Airspace", x: 79, y: 16, emoji: "🪰",
        info: "Meganeura was a large flying insect related to, but outside, modern dragonflies. Elevated atmospheric oxygen probably helped support large arthropods, although ecology and evolution also mattered.",
        creatureIds: ["meganeura"],
      },
      {
        id: "cs-floor", name: "Forest-Floor Giant", x: 75, y: 85, emoji: "🐛",
        info: "Arthropleura was a giant many-legged arthropod that walked on land. Trackways reveal its movement, while its detailed diet remains less certain than older reconstructions suggest.",
        creatureIds: ["arthropleura"],
      },
    ],
  },
  {
    id: "permian-wilderness",
    name: "Permian Gondwana",
    periodId: "permian",
    era: "Paleozoic",
    emoji: "🍂",
    description: "Explore southern Gondwana during the Permian, when seed plants occupied broad river plains. This southern setting differed from the dry continental interiors found elsewhere on Pangaea.",
    climate: "Southern Gondwana experienced strong seasonal changes as the great late Paleozoic ice sheets retreated.",
    points: [
      {
        id: "pw-leaves", name: "Glossopteris Grove", x: 18, y: 23, emoji: "🍃",
        info: "Glossopteris had tongue-shaped leaves with a netlike vein pattern. Its fossils occur across several southern continents that were once joined within Gondwana.",
        creatureIds: ["glossopteris"],
      },
      {
        id: "pw-bank", name: "Riverbank Plants", x: 43, y: 75, emoji: "🌱",
        info: "Horsetail relatives grew beside waterways, where moisture was more dependable than on surrounding plains. Floods could bury stems and leaves in sediment before decay destroyed them.",
        creatureIds: ["horsetail"],
      },
      {
        id: "pw-seasons", name: "Seasonal Leaf Litter", x: 79, y: 43, emoji: "🍂",
        info: "Dense layers of Glossopteris leaves occur in some Permian deposits. Leaf shedding and fossil wood growth rings help scientists investigate seasonal plant growth at high southern latitudes.",
        creatureIds: ["glossopteris"],
      },
      {
        id: "pw-pond", name: "Freshwater Refuge", x: 84, y: 86, emoji: "💧",
        info: "Ponds and river channels supported aquatic life while surrounding landscapes changed through the seasons. Many Permian animal inhabitants lack entries in this explorer, so this stop focuses on the habitat rather than adding an unsuitable creature.",
        creatureIds: [],
      },
    ],
  },
  {
    id: "ancient-oceans",
    name: "Jurassic Open Ocean",
    periodId: "jurassic",
    era: "Mesozoic",
    emoji: "🌊",
    description: "Dive into a Middle to Late Jurassic sea inspired by marine deposits in Europe. Fish, plankton, and air-breathing reptiles occupied different parts of the same marine food web.",
    climate: "Generally warm seas covered broad continental shelves, although water temperature and oxygen varied with depth and location.",
    points: [
      {
        id: "ao-eyes", name: "Big-Eyed Swimmer", x: 18, y: 34, emoji: "👁️",
        info: "Ophthalmosaurus was an ichthyosaur with unusually large eyes supported by rings of bone. The eyes may have helped it find prey in dim water, but exact diving depths cannot be read directly from a skeleton.",
        creatureIds: ["ophthalmosaurus"],
      },
      {
        id: "ao-filter", name: "Giant Filter Feeder", x: 49, y: 61, emoji: "🐟",
        info: "Leedsichthys was a huge bony fish that filtered small food particles from seawater. Its incomplete skeletons make precise body-length estimates difficult.",
        creatureIds: ["leedsichthys"],
      },
      {
        id: "ao-predator", name: "Powerful Pliosaur", x: 84, y: 81, emoji: "🦷",
        info: "Liopleurodon had a short neck, powerful jaws, and four flippers. Reliable specimens indicate an animal much smaller than the enormous versions popularized in some older television reconstructions.",
        creatureIds: ["liopleurodon"],
      },
      {
        id: "ao-wings", name: "Sea-Surface Visitor", x: 74, y: 12, emoji: "🪽",
        info: "Rhamphorhynchus had a long tail and teeth suited to grasping small prey. Some fossils preserve fish remains, linking this flying reptile to marine food webs.",
        creatureIds: ["rhamphorhynchus"],
      },
    ],
  },
  {
    id: "ice-age-landscape",
    name: "Ice Age Mammoth Steppe",
    periodId: "quaternary",
    era: "Cenozoic",
    emoji: "❄️",
    description: "Travel across the cold, open mammoth steppe of Late Pleistocene Eurasia. Grasses, sedges, and flowering herbs supported large herbivores between glaciers and more wooded regions.",
    climate: "Conditions were often cold, dry, and windy, with short growing seasons and regional shifts during warmer intervals.",
    points: [
      {
        id: "il-mammoths", name: "Mammoth Grazing Ground", x: 18, y: 47, emoji: "🦣",
        info: "Woolly mammoths used ridged molars to grind tough vegetation. Frozen remains preserve hair, skin, and sometimes stomach contents that reveal their plant-rich diets.",
        creatureIds: ["woolly-mammoth"],
      },
      {
        id: "il-rhinos", name: "Snow-Swept Plain", x: 47, y: 79, emoji: "🦏",
        info: "Woolly rhinoceroses were grazers with thick coats and large horns. Wear patterns suggest the front horn sometimes contacted the ground, but its exact uses are still studied.",
        creatureIds: ["woolly-rhinoceros"],
      },
      {
        id: "il-lions", name: "Predator Lookout", x: 84, y: 32, emoji: "🦁",
        info: "Cave lions ranged across large areas of northern Eurasia and beyond. Bones, ancient DNA, and Ice Age artwork help distinguish them from living lions.",
        creatureIds: ["cave-lion"],
      },
      {
        id: "il-edge", name: "Meadow and Woodland Edge", x: 30, y: 16, emoji: "🦌",
        info: "Megaloceros carried enormous antlers in males and used a range of open and partly wooded habitats. Its needs were not identical to those of mammoths, so changing vegetation affected these herbivores differently.",
        creatureIds: ["megaloceros"],
      },
    ],
  },
];
