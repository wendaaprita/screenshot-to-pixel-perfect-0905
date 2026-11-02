import type { Lesson } from "./types";

export const HUMAN_LESSONS: Lesson[] = [
  {
    id: "human-what-is-a-hominin",
    title: "Our Branch of the Family Tree",
    module: "human",
    emoji: "🌳",
    minutes: 4,
    points: 15,
    summary: "Learn how fossils and DNA reveal a branching human history.",
    sections: [
      {
        heading: "A family, not a ladder",
        body: "In the usage common in human-origins research, hominins are living humans and extinct species more closely related to us than to chimpanzees. Chimpanzees are our living cousins, not our ancestors. Both lineages descend from shared ancestral populations. Picture a branching bush rather than a ladder: several hominin species sometimes lived at the same time, and most branches eventually ended.",
        confidence: "established"
      },
      {
        heading: "Walking before big brains",
        body: "Habitual bipedalism means regularly moving on two legs. Researchers study the pelvis, knee, foot, and opening beneath the skull to reconstruct movement. No single feature tells the whole story. Australopithecus fossils show upright walking with brains much smaller than ours, so walking upright did not wait for a large brain. Some early walkers also retained climbing abilities.",
        confidence: "established"
      },
      {
        heading: "Reading incomplete clues",
        body: "Fossils preserve anatomy, tools preserve actions, and ancient DNA can reveal relationships when it survives. Each source has limits: stone tools rarely identify their maker, and DNA survives poorly in many hot environments. Ask three questions about any reconstruction: What was actually found? What was measured? What is being inferred? These questions help separate evidence from an appealing story.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Human evolution is a branching history, not a march toward perfection.",
      "Habitual upright walking preceded the large brains of later Homo.",
      "Fossils, artifacts, and DNA answer different questions and have different limits."
    ]
  },
  {
    id: "human-sahelanthropus",
    title: "Toumaï and the Earliest Clues",
    module: "human",
    emoji: "🔎",
    minutes: 4,
    points: 15,
    summary: "Investigate a seven-million-year-old skull and the challenges of identifying early hominins.",
    sections: [
      {
        heading: "A discovery in Chad",
        body: "In 2001, researchers in Chad discovered the skull nicknamed Toumaï, assigned to Sahelanthropus tchadensis. It lived about seven to six million years ago. Its discovery widened the known geography of possible early hominins beyond eastern Africa. Associated animal fossils suggest a landscape containing water and wooded habitats, very different from the desert visible there today.",
        confidence: "established"
      },
      {
        heading: "Where did the head balance?",
        body: "The foramen magnum is the opening where the spinal cord enters the skull. Its position can help researchers investigate how the head balanced above the body. Toumaï's skull has been used to argue for upright posture, but it was distorted during fossilization and required reconstruction. Attributed thigh and forearm bones add evidence that must also be interpreted carefully.",
        confidence: "estimated"
      },
      {
        heading: "Why uncertainty matters",
        body: "Researchers have argued that the limb anatomy supports bipedal walking alongside climbing, but the interpretation and evolutionary placement remain debated. A fossil near a branching point may combine traits unfamiliar from living animals. Calling Sahelanthropus a possible early hominin is not the same as proving it was our direct ancestor. More discoveries could change the family tree.",
        confidence: "hypothesized"
      }
    ],
    keyPoints: [
      "Toumaï shows that possible early hominins lived in central Africa.",
      "Skull and limb anatomy provide clues to movement, not a filmed record.",
      "A close relative is not necessarily a direct ancestor."
    ]
  },
  {
    id: "human-australopithecus",
    title: "Lucy Walks into View",
    module: "human",
    emoji: "👣",
    minutes: 5,
    points: 15,
    summary: "Combine skeletons and footprints to reconstruct Australopithecus afarensis.",
    sections: [
      {
        heading: "Lucy at Hadar",
        body: "Lucy was discovered at Hadar in Ethiopia in 1974 and lived about 3.18 million years ago. Her partial skeleton belongs to Australopithecus afarensis. A pelvis adapted for upright support and a knee suited to carrying weight help demonstrate bipedalism. Because Lucy was one individual, researchers compare her with other fossils rather than treating her size as typical of every member of the species.",
        confidence: "established"
      },
      {
        heading: "Footprints in ash",
        body: "At Laetoli in Tanzania, footprints preserved in volcanic ash record hominins walking about 3.66 million years ago. The tracks show forward-facing big toes rather than the widely grasping toes of living apes. They are usually attributed to Australopithecus afarensis because of their age, anatomy, and nearby fossil evidence, although the trackmakers cannot be identified with absolute certainty.",
        confidence: "estimated"
      },
      {
        heading: "A body with mixed abilities",
        body: "Curved finger bones and aspects of the upper body suggest that climbing remained useful. Walking and climbing are not mutually exclusive skills. The species occupied varied environments, not simply a treeless grassland. Its relatively small brain also challenges the idea that every humanlike feature evolved together: evolution changes different parts of the body at different times.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Lucy’s skeleton provides evidence of habitual upright walking.",
      "Laetoli footprints preserve behavior as well as anatomy.",
      "Australopithecus combined terrestrial walking with climbing-related features."
    ]
  },
  {
    id: "human-paranthropus",
    title: "What Giant Teeth Can Tell Us",
    module: "human",
    emoji: "🦷",
    minutes: 4,
    points: 15,
    summary: "Explore how teeth, skulls, and chemistry reveal ancient diets.",
    sections: [
      {
        heading: "Built for chewing",
        body: "Paranthropus species had large cheek teeth, thick enamel, and skulls adapted to strong chewing forces. In some individuals, a bony crest supported large jaw muscles. Paranthropus boisei lived in eastern Africa while early Homo also lived there. These were different evolutionary branches sharing landscapes, not consecutive steps in a single line.",
        confidence: "established"
      },
      {
        heading: "Beyond the nickname",
        body: "The famous OH 5 skull was discovered by Mary Leakey at Olduvai Gorge in 1959. Its nickname, Nutcracker Man, encouraged a picture of an animal living mainly on nuts. However, tooth wear and stable carbon isotopes tell a more complicated story. Isotopes indicate that grasses or sedges, or foods derived from them, supplied much of the diet of Paranthropus boisei.",
        confidence: "established"
      },
      {
        heading: "Different clues, different questions",
        body: "A tooth's shape reveals what it could withstand; microscopic scratches and pits sample foods eaten near the end of life; isotopes reflect dietary sources over longer periods. These clues need not give identical answers. Large teeth might have helped process frequent foods or difficult fallback foods. Scientists compare multiple kinds of evidence before proposing a feeding strategy.",
        confidence: "hypothesized"
      }
    ],
    keyPoints: [
      "Paranthropus was a specialized branch that overlapped with early Homo.",
      "A memorable nickname is not a reliable dietary reconstruction.",
      "Tooth shape, wear, and isotopes reveal different aspects of feeding."
    ]
  },
  {
    id: "human-homo-habilis",
    title: "Sharp Stones, Difficult Questions",
    module: "human",
    emoji: "🪨",
    minutes: 5,
    points: 15,
    summary: "Discover early Homo and learn why identifying toolmakers is difficult.",
    sections: [
      {
        heading: "Meet Homo habilis",
        body: "Fossils assigned to Homo habilis date to roughly 2.4–1.4 million years ago. Finds at Olduvai Gorge helped researchers recognize the species, whose name means handy human. Compared with many earlier hominins, it generally had a larger brain and smaller chewing teeth. However, the fossils vary, and scientists debate the boundaries between some early Homo species.",
        confidence: "established"
      },
      {
        heading: "The useful flake",
        body: "In Oldowan technology, a hammerstone strikes a stone core and removes a sharp flake. The flake can slice tissue or plant material, while other stones can pound or break objects. Recognizing deliberate manufacture involves examining repeated flake scars, striking platforms, and the arrangement of finds. Archaeologists must distinguish these patterns from stones broken naturally by rivers or falling rocks.",
        confidence: "established"
      },
      {
        heading: "Who held the hammerstone?",
        body: "Tools existed before the earliest securely identified Homo habilis fossils. The approximately 3.3-million-year-old Lomekwi tools are older than classic Oldowan assemblages, and early Oldowan tools at Nyayanga occur with Paranthropus teeth. Neither association proves the maker. Cut marks can show carcass processing, but they do not automatically tell us whether an animal was hunted or scavenged.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Homo habilis is associated with early tools but was not necessarily their inventor.",
      "Sharp flakes were valuable products of stone working.",
      "Toolmaking, meat cutting, hunting, and scavenging require different evidence."
    ]
  },
  {
    id: "human-homo-erectus",
    title: "Long-Distance Humans",
    module: "human",
    emoji: "🔥",
    minutes: 5,
    points: 15,
    summary: "Follow early human dispersal and investigate the evidence for fire.",
    sections: [
      {
        heading: "Bodies built for travel",
        body: "Homo erectus had long legs and body proportions closer to ours than those of earlier hominins. Turkana Boy, a juvenile skeleton found in Kenya, preserves unusually detailed evidence of the body around 1.5–1.6 million years ago. Early Homo fossils at Dmanisi in Georgia show that dispersal outside Africa began by about 1.8 million years ago, before very large brains evolved.",
        confidence: "established"
      },
      {
        heading: "Planning a handaxe",
        body: "Acheulean toolmakers shaped many handaxes by removing flakes from both sides. Producing a useful edge required choosing stone and adjusting strikes as the shape changed. Nevertheless, not all populations assigned to Homo erectus made handaxes, and a tool tradition is not a species label. Brain size increased unevenly across a long history rather than rising smoothly in every population.",
        confidence: "established"
      },
      {
        heading: "Fire: presence or control?",
        body: "Burned bones and plant ash deep inside Wonderwerk Cave in South Africa date to about one million years ago. Their context supports fire inside the cave, but archaeologists still distinguish fire use, maintenance, and deliberate ignition. Cooking could make some foods easier to digest, yet the timing of habitual cooking remains debated. Regular fire use is clearer at several younger sites.",
        confidence: "estimated"
      }
    ],
    keyPoints: [
      "Early humans dispersed beyond Africa before reaching modern brain sizes.",
      "Acheulean handaxes show planned stone shaping but do not identify a species alone.",
      "Evidence of burning is not automatically evidence of deliberate fire-making."
    ]
  },
  {
    id: "human-neanderthals",
    title: "Our Ice Age Cousins",
    module: "human",
    emoji: "❄️",
    minutes: 5,
    points: 15,
    summary: "Use archaeology and ancient DNA to meet Neanderthals and Denisovans.",
    sections: [
      {
        heading: "More than an old stereotype",
        body: "Neanderthals lived across Europe and parts of Asia, with sturdy bodies and large brains. The La Chapelle-aux-Saints skeleton once helped inspire a misleading stooped reconstruction; age-related disease and assumptions about primitiveness influenced that picture. Neanderthals normally walked upright. Healed injuries and tooth loss show survival through hardship, although the exact care each person received is not always recoverable.",
        confidence: "established"
      },
      {
        heading: "Skilled daily lives",
        body: "Neanderthals made prepared-core stone tools, used fire, and hunted large animals in many settings. Wooden weapons, hafting materials, and cut-marked bones reveal knowledge that stone flakes alone cannot capture. Diets differed by place and could include plants, shellfish, and small animals. Claims about burial and symbolic behavior should be evaluated site by site rather than accepted or rejected as a package.",
        confidence: "established"
      },
      {
        heading: "DNA opens another window",
        body: "Denisova Cave in Siberia preserves evidence of Neanderthals and a related group called Denisovans. DNA identified one individual whose mother was Neanderthal and father Denisovan. Many living people also carry some Neanderthal ancestry, and some populations carry Denisovan ancestry. These findings reveal interbreeding between branches. Why Neanderthals disappeared as a distinct population remains a question involving several possible interacting factors.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Neanderthals were upright, skilled humans rather than failed versions of us.",
      "Archaeological evidence reveals varied diets and technologies.",
      "Ancient DNA demonstrates interbreeding among several human lineages."
    ]
  },
  {
    id: "human-homo-sapiens",
    title: "Becoming Our Species",
    module: "human",
    emoji: "🎨",
    minutes: 5,
    points: 15,
    summary: "Explore African origins, symbolic objects, and a connected human world.",
    sections: [
      {
        heading: "An African beginning",
        body: "Jebel Irhoud in Morocco preserves fossils associated with deposits dated to about 315,000 years ago. Their faces resemble those of later humans more than their long braincases do, illustrating that modern anatomy developed in combinations. Fossils and genetic models support origins within Africa, probably involving interacting populations rather than a single isolated birthplace that explains every feature.",
        confidence: "estimated"
      },
      {
        heading: "Marks with meaning",
        body: "Blombos Cave in South Africa has yielded engraved ochre and perforated shell beads from Middle Stone Age contexts. Deliberate repeated patterns and worn beads support interpretations involving symbolic communication or display. We cannot translate their exact meanings. Symbolic objects also preserve unevenly: a missing painted skin or wooden ornament leaves less evidence than a surviving stone object.",
        confidence: "estimated"
      },
      {
        heading: "Many journeys, one species",
        body: "Homo sapiens populations dispersed beyond Africa in multiple movements, encountering other human groups. Later cave art at Chauvet and Lascaux records remarkable visual skill, but it was not the beginning of all art. Cultural learning and exchange allowed useful ideas to spread without waiting for genetic evolution. Human success depended on cooperation and flexible traditions, not simply the largest possible brain.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Early Homo sapiens fossils combine features in ways unlike a simple modern-or-ancient divide.",
      "Blombos provides African evidence of symbolic behavior before famous European cave paintings.",
      "Migration, interbreeding, and cultural exchange all shaped our history."
    ]
  },
  {
    id: "human-stone-age-life",
    title: "Food, Fire, Art, and Home",
    module: "human",
    emoji: "🏕️",
    minutes: 6,
    points: 15,
    summary: "Reconstruct everyday life without imagining one universal Stone Age lifestyle.",
    sections: [
      {
        heading: "Making a living",
        body: "Hunter-gatherers combined foods according to seasons and local conditions. Plant gathering, fishing, collecting shellfish, hunting, and scavenging left different traces. Wooden spears at Schöningen in Germany and butchered animal remains provide evidence of sophisticated hunting-related activities hundreds of thousands of years ago. Organic tools rarely survive, so a stone-heavy archaeological record can make daily life appear more stone-centered than it really was.",
        confidence: "established"
      },
      {
        heading: "Around the hearth",
        body: "Hearths can preserve ash, burned bones, heated stones, and traces of repeated occupation. Fire provided opportunities for warmth, light, cooking, and social activity, but a hearth cannot tell us the exact conversations held beside it. Microliths fitted into handles show how small replaceable pieces formed complex tools. Repairs, shared skills, and knowledge of raw materials were important technologies too.",
        confidence: "established"
      },
      {
        heading: "Images and portable objects",
        body: "Chauvet contains paintings of animals including lions and rhinoceroses, while Apollo 11 Cave in Namibia yielded painted stone slabs. These finds represent different artistic practices, not one worldwide tradition. Scientists investigate pigments, superimposed drawings, and dated deposits to reconstruct their histories. The meanings of many images remain unknown, and calling every image hunting magic goes beyond the evidence.",
        confidence: "established"
      },
      {
        heading: "When a camp becomes a settlement",
        body: "Mobility varied: some groups moved frequently, while others returned to or occupied resource-rich places for long periods. Ohalo II, beside the Sea of Galilee, preserves brush huts about 23,000 years old. Later Natufian communities built substantial settlements before farming was fully established. Settlement was therefore not an automatic consequence of agriculture, and living in one place did not mean people stopped hunting or gathering.",
        confidence: "established"
      }
    ],
    keyPoints: [
      "Stone Age lifeways varied with place, season, and cultural tradition.",
      "Organic tools and activities are underrepresented because preservation is uneven.",
      "Longer-term settlements sometimes developed before farming."
    ]
  }
];
