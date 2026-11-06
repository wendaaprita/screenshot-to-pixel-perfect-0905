import { createFileRoute, Link } from "@tanstack/react-router";

import discoveriesImage from "@/assets/discoveries-hero.jpg";
import { Card, PageHeader, SectionHeading } from "@/components/ui-bits";
import { MODULE_META } from "@/data/lessons";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/discover/")({
  head: () => pageHead("Discoveries — Prehistoric Edu Explorer", "Explore ancient habitats, fossil evidence, human origins and mass extinctions."),
  component: Discoveries,
});

const DESTINATIONS = [
  { id: "world", to: "/discover/world" as const, title: "World Explorer", emoji: "🌍", summary: MODULE_META.world.description },
  { id: "fossil-lab", to: "/discover/fossil-lab" as const, title: "Fossil Lab", emoji: "🔬", summary: MODULE_META["fossil-lab"].description },
  { id: "human", to: "/discover/human" as const, title: "Human Origins", emoji: "🧠", summary: MODULE_META.human.description },
  { id: "extinction", to: "/discover/extinction" as const, title: "Mass Extinctions", emoji: "☄️", summary: MODULE_META.extinction.description },
];

function Discoveries() {
  return (
    <div>
      <PageHeader title="Discoveries" subtitle="Follow the clues left in rocks, landscapes and fossils" />
      <img src={discoveriesImage} alt="Prehistoric landscape with ancient plants and animals" className="h-52 w-full object-cover" />
      <SectionHeading emoji="🧭" title="Choose an expedition" />
      <div className="grid grid-cols-2 gap-3 px-4 pb-8">
        {DESTINATIONS.map((item) => (
          <Link key={item.id} to={item.to}>
            <Card className="h-full transition-colors hover:border-primary/50">
              <span className="text-3xl">{item.emoji}</span>
              <h2 className="mt-2 font-display font-bold text-foreground">{item.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}