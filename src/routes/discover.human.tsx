import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, PageHeader, SectionHeading } from "@/components/ui-bits";
import { CAVE_ART_SITES, HOMININS, STONE_TOOLS } from "@/data/human-origins";
import { lessonsByModule } from "@/data/lessons";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/discover/human")({
  head: () => pageHead("Human Origins — Prehistoric Edu Explorer", "Explore hominin fossils, stone tools and ancient art through the evidence."),
  component: HumanOrigins,
});

function HumanOrigins() {
  return (
    <div>
      <PageHeader title="Human Origins" subtitle="A branching story told by fossils and artifacts" backTo="/discover" backLabel="Discoveries" />
      <SectionHeading emoji="🧠" title="Hominins" />
      <div className="space-y-2 px-4">
        {HOMININS.map((hominin) => (
          <Card key={hominin.id}>
            <h2 className="font-display text-lg font-bold text-foreground">{hominin.emoji} {hominin.name}</h2>
            <p className="text-xs italic text-muted-foreground">{hominin.scientificName} · {hominin.yearsAgo}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{hominin.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <p>Brain: {hominin.brainSize}</p><p>Height: {hominin.height}</p>
              <p className="col-span-2">Habitat: {hominin.habitat}</p>
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-muted-foreground">{hominin.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </Card>
        ))}
      </div>
      <SectionHeading emoji="🪨" title="Stone tools" />
      <div className="space-y-2 px-4">
        {STONE_TOOLS.map((tool) => <Card key={tool.id}><h3 className="font-semibold text-foreground">{tool.name}</h3><p className="text-xs text-muted-foreground">{tool.era}</p><p className="mt-2 text-sm leading-relaxed text-foreground">{tool.description}</p><p className="mt-2 text-xs text-muted-foreground">Sites: {tool.exampleSites.join(" · ")}</p></Card>)}
      </div>
      <SectionHeading emoji="🎨" title="Ancient art" />
      <div className="space-y-2 px-4">
        {CAVE_ART_SITES.map((site) => <Card key={site.id}><h3 className="font-semibold text-foreground">{site.name} · {site.country}</h3><p className="text-xs text-muted-foreground">{site.age}</p><p className="mt-2 text-sm leading-relaxed text-foreground">{site.description}</p></Card>)}
      </div>
      <SectionHeading emoji="📖" title="Human origins lessons" />
      <div className="space-y-2 px-4 pb-8">
        {lessonsByModule("human").map((lesson) => <Link key={lesson.id} to="/lessons/$lessonId" params={{ lessonId: lesson.id }}><Card><h3 className="font-semibold text-foreground">{lesson.emoji} {lesson.title}</h3><p className="mt-1 text-xs text-muted-foreground">{lesson.summary}</p></Card></Link>)}
      </div>
    </div>
  );
}