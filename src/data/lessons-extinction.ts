import type { Lesson } from "./types";

export const EXTINCTION_LESSONS: Lesson[] = [
  {
    id: "extinction-what-is-mass-extinction",
    title: "When Life’s Losses Become Global",
    module: "extinction",
    emoji: "🌍",
    minutes: 5,
    points: 15,
    summary: "Learn the Big Five framework and how scientists measure ancient biodiversity crises.",
    sections: [
      {
        heading: "Background loss and exceptional crises",
        body: "Extinction is the permanent disappearance of a species. It occurs throughout geological history, but a mass extinction involves unusually widespread losses across many groups in a geologically short interval. Researchers often use a loss of roughly 75% of species as a guide, not an easily measured universal rule. A crisis lasting thousands of years is geologically rapid even though it exceeds many human lifetimes.",
        confidence: "established"
      },
      {
        heading: "Why the Big Five?",
        body: "The Big Five are the end-Ordovician, Late Devonian, end-Permian, end-Triassic, and end-Cretaceous crises identified especially from marine fossil diversity. The framework is useful but does not mean every crisis had one pulse or affected land and sea equally. Marine fossils dominate many analyses because sedimentary rocks preserve them relatively well. Other important extinctions fall outside this familiar list.",
        confidence: "established"
      },
      {
        heading: "Counting an incomplete record",
        body: "Species-loss percentages are estimates, not a count of every organism that lived. Researchers compare fossil occurrences, rock availability, and groups with different preservation potential. A species may seem to vanish early simply because its youngest fossils were not preserved or found. Repeated patterns across many sites and independent chemical clues help separate genuine biological change from gaps in sampling.",
        confidence: "established"
      },
      {
        heading: "The present is not predetermined",
        body: "Today's biodiversity crisis is supported by documented extinctions, population declines, and habitat losses. However, it has not demonstrably reached the global species-loss scale of the fossil Big Five. Current rates and future risks are different measurements from the fraction already extinct. Conservation changes outcomes: protecting habitat and reducing direct pressures can prevent losses rather than merely record them.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Mass extinctions combine exceptional scale with geologically rapid loss.",
      "The Big Five framework is based heavily on the marine fossil record.",
      "Estimated ancient losses and modern extinction rates require careful comparison."
    ]
  },
  {
    id: "extinction-ordovician",
    title: "An Ice Age in a Marine World",
    module: "extinction",
    emoji: "🧊",
    minutes: 4,
    points: 15,
    summary: "Follow cooling, sea-level change, and oxygen stress around 444 million years ago.",
    sections: [
      {
        heading: "Life in shallow seas",
        body: "Late Ordovician seas supported brachiopods, trilobites, corals, and many other groups. Broad shallow seas covered parts of continents, providing extensive habitat. Around 444 million years ago, severe losses occurred in at least two major pulses. Estimates suggest roughly 85% of marine species disappeared, although the exact percentage depends on fossil sampling and how species are counted.",
        confidence: "estimated"
      },
      {
        heading: "Ice changes the map",
        body: "As ice sheets grew over Gondwana near the South Pole, cooling altered environments and water became stored on land. Sea level fell, reducing shallow marine habitat. Later warming and ice retreat raised sea level and changed circulation again. Oxygen-poor waters affected parts of the oceans, so the extinction cannot be explained simply as animals being too cold.",
        confidence: "established"
      },
      {
        heading: "Testing the sequence",
        body: "Glacial deposits show that large ice sheets existed, while isotope changes and sedimentary sequences help reconstruct temperature and sea level. Fossils track which groups disappeared during different intervals. Researchers still debate how oxygen loss, cooling, and warming lined up across regions. Silurian recovery brought new communities, but the return of diversity did not recreate every ecosystem that had been lost.",
        confidence: "estimated"
      }
    ],
    keyPoints: [
      "The crisis involved multiple pulses rather than one simple event.",
      "Glaciation changed temperature, sea level, and shallow-sea habitat.",
      "Different evidence types are needed to reconstruct the order of environmental stresses."
    ]
  },
  {
    id: "extinction-devonian",
    title: "The Long Devonian Crisis",
    module: "extinction",
    emoji: "🐟",
    minutes: 5,
    points: 15,
    summary: "Investigate repeated marine losses and the possible links between forests and ocean oxygen.",
    sections: [
      {
        heading: "Not one bad afternoon",
        body: "The Late Devonian extinction refers to a prolonged interval with several crises. The Kellwasser events occurred near 372 million years ago, while the Hangenberg crisis occurred near 359 million years ago. Treating them as a single instant hides important differences. Reef builders, including many stromatoporoids and corals, suffered greatly, and various fish groups experienced major turnover.",
        confidence: "established"
      },
      {
        heading: "Oceans short of oxygen",
        body: "Dark, organic-rich shales provide evidence for oxygen-poor conditions in many marine basins. When abundant organic matter decays, microbes consume oxygen; restricted circulation can make replenishment difficult. However, a black shale from one basin is not proof that the entire global ocean lost oxygen simultaneously. Researchers compare many locations and use chemical indicators to test the extent of the problem.",
        confidence: "established"
      },
      {
        heading: "Could forests affect the sea?",
        body: "Expanding forests changed soils and chemical weathering on land. A leading hypothesis proposes that increased nutrient delivery encouraged aquatic growth, followed by decay that consumed oxygen. Volcanism, climate shifts, and sea-level change may also have contributed. These mechanisms are not mutually exclusive, but no single explanation fits every pulse equally well. Long-lasting reef losses show how recovery can lag behind the initial disturbance.",
        confidence: "hypothesized"
      }
    ],
    keyPoints: [
      "The Late Devonian crisis included distinct events separated by millions of years.",
      "Marine oxygen loss is well supported, but its geographic extent varied.",
      "Land plants may have influenced ocean chemistry, alongside other proposed drivers."
    ]
  },
  {
    id: "extinction-permian",
    title: "The Greatest Biodiversity Crash",
    module: "extinction",
    emoji: "🌋",
    minutes: 5,
    points: 15,
    summary: "Connect Siberian magmatism with warming, ocean stress, and difficult recovery.",
    sections: [
      {
        heading: "A boundary of enormous loss",
        body: "Near 251.9 million years ago, the end-Permian crisis devastated marine ecosystems and caused major losses on land. Estimates of marine species losses vary, commonly falling around 81–94%. Trilobites disappeared completely. The extinction was not simply the disappearance of one famous animal group: it transformed reefs, seafloor communities, and terrestrial food webs across the planet.",
        confidence: "estimated"
      },
      {
        heading: "A volcanic chain reaction",
        body: "Siberian Traps magmatism produced vast lava fields and underground intrusions. Released gases, including those generated when intrusions heated surrounding rocks, disturbed the carbon cycle. Greenhouse warming made many environments hotter; warmer seawater also holds less dissolved oxygen. Changed circulation and biological processes contributed further oxygen loss. Added carbon dioxide could acidify seawater, creating additional difficulties for some shell-building organisms.",
        confidence: "established"
      },
      {
        heading: "Matching clocks and chemical clues",
        body: "Precise radiometric dating links major Siberian magmatism with the extinction interval. Carbon-isotope shifts record a major carbon-cycle disturbance, while temperature and redox proxies help reconstruct heating and oxygen conditions. These clues support a volcanic driver without making every proposed killing mechanism equally certain. Many ecosystems recovered slowly over millions of years, with continued environmental stress shaping which survivors could expand.",
        confidence: "estimated"
      }
    ],
    keyPoints: [
      "The end-Permian event was the largest of the Big Five by estimated marine losses.",
      "Siberian magmatism triggered linked climate and ocean-chemistry disturbances.",
      "Dating, isotopes, and fossils together test causal explanations."
    ]
  },
  {
    id: "extinction-triassic",
    title: "Volcanoes Before the Jurassic",
    module: "extinction",
    emoji: "🦖",
    minutes: 4,
    points: 15,
    summary: "Explore how continental breakup and volcanic gases reshaped ecosystems.",
    sections: [
      {
        heading: "A crowded Triassic world",
        body: "Before the extinction near 201 million years ago, dinosaurs shared land ecosystems with many other archosaurs and large amphibians. Marine communities included ammonoids, bivalves, and reef organisms. The crisis eliminated many lineages, including numerous large crocodile-line archosaurs, although the ancestors of modern crocodilians survived. Dinosaurs were survivors, not newcomers created by the extinction.",
        confidence: "established"
      },
      {
        heading: "Pangaea begins to split",
        body: "Central Atlantic Magmatic Province activity accompanied the early breakup of Pangaea. Its rocks are now separated across several continents. Volcanic carbon dioxide contributed to warming and ocean acidification, while oxygen loss affected marine habitats. Short-lived aerosol cooling may also have added stress during some eruptive phases. A large igneous province acts through changing environments, not merely through lava burying nearby animals.",
        confidence: "estimated"
      },
      {
        heading: "Evidence and opportunity",
        body: "Radiometric dates place major eruptions close to the extinction, and carbon-isotope changes reveal carbon-cycle disturbance. Mercury enrichments provide additional clues, although mercury can move through sediments and must be interpreted carefully. After the crisis, dinosaurs became more prominent in many terrestrial ecosystems. Calling this an opportunity describes ecological change; it does not imply the extinction happened for their benefit.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Dinosaurs existed before the end-Triassic extinction and survived it.",
      "Central Atlantic magmatism affected climate and ocean conditions.",
      "Post-extinction dominance is an outcome, not the purpose of an extinction."
    ]
  },
  {
    id: "extinction-cretaceous",
    title: "Impact, Volcanoes, and the K–Pg Boundary",
    module: "extinction",
    emoji: "☄️",
    minutes: 6,
    points: 15,
    summary: "Evaluate the evidence for Chicxulub and the debated contribution of Deccan volcanism.",
    sections: [
      {
        heading: "A chemical clue around the world",
        body: "At the boundary between the Cretaceous and Paleogene, many sites contain unusually high iridium concentrations. Iridium is rare in Earth's crust but relatively abundant in many meteorites. Shocked quartz records extreme pressures, and glassy spherules record melted material. Together with the roughly 180-kilometer Chicxulub crater in Mexico, these clues establish a major asteroid impact near 66 million years ago.",
        confidence: "established"
      },
      {
        heading: "How an impact reaches distant ecosystems",
        body: "The impact caused violent local and regional destruction, but global extinction requires effects reaching far beyond the crater. Dust, soot, and sulfur aerosols reduced incoming sunlight and cooled the surface. Disrupted photosynthesis damaged food webs on land and at sea. The amounts and persistence of different particles remain modeled quantities, but darkness and cooling provide a strong mechanism for widespread biological stress.",
        confidence: "estimated"
      },
      {
        heading: "Where do the Deccan volcanoes fit?",
        body: "Deccan Traps eruptions in India occurred before and around the boundary and released climate-altering gases. The main debate is not whether the impact or volcanoes existed: both are established. Researchers ask how much volcanic activity stressed ecosystems beforehand and how eruption timing matches the sharp extinction. Dating, temperature records, and fossils currently favor the impact as the principal trigger of the abrupt global crisis, while the volcanic contribution remains debated.",
        confidence: "estimated"
      },
      {
        heading: "Losses and the first return of plants",
        body: "Non-avian dinosaurs, ammonites, and many plankton species vanished. Birds survived, so dinosaurs did not become completely extinct. In some terrestrial deposits, a fern spike records a sudden abundance of fern spores after forest disruption; it is a recovery signal, not direct evidence of the impact itself. Mammals and birds later diversified, but recovery differed between habitats and involved much more than simply replacing dinosaurs.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Iridium, shocked quartz, ejecta, and Chicxulub establish the impact.",
      "The impact is the leading abrupt-extinction trigger; Deccan volcanism’s contribution remains debated.",
      "Fern spikes record vegetation recovery, and surviving birds are living dinosaurs."
    ]
  }
];
