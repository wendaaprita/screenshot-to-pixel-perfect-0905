import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, Chip, PageHeader, SectionHeading } from "@/components/ui-bits";
import { ENVIRONMENTS } from "@/data/environments";
import { CREATURES } from "@/data/creatures";
import { pageHead } from "@/lib/head";
import { visitEnvironment } from "@/lib/progress";

export const Route = createFileRoute("/discover/world")({
  head: () => pageHead("World Explorer — Prehistoric Edu Explorer", "Visit six ancient environments and explore their plants, animals and fossil clues."),
  component: WorldExplorer,
});

function WorldExplorer() {
  const [environmentId, setEnvironmentId] = useState(ENVIRONMENTS[0]?.id ?? "");
  const [pointId, setPointId] = useState("");
  const selected = ENVIRONMENTS.find((environment) => environment.id === environmentId) ?? ENVIRONMENTS[0];
  const point = selected?.points.find((item) => item.id === pointId);

  return (
    <div>
      <PageHeader title="World Explorer" subtitle="Choose a landscape and inspect its fossil clues" backTo="/discover" backLabel="Discoveries" />
      <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ENVIRONMENTS.map((environment) => (
          <Button
            key={environment.id}
            variant={environment.id === selected?.id ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => {
              setEnvironmentId(environment.id);
              setPointId("");
              visitEnvironment(environment.id);
            }}
          >
            {environment.emoji} {environment.name}
          </Button>
        ))}
      </div>
      {selected ? (
        <>
          <section className="px-4 pt-1">
            <Card className="border-l-4 border-l-primary">
              <h2 className="font-display text-xl font-bold text-foreground">{selected.emoji} {selected.name}</h2>
              <Chip className="mt-2">{selected.era} · {selected.periodId}</Chip>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{selected.description}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.climate}</p>
            </Card>
          </section>
          <SectionHeading emoji="📍" title="Field stops" />
          <div className="space-y-2 px-4">
            {selected.points.map((stop) => (
              <button key={stop.id} className="w-full text-left" onClick={() => setPointId(stop.id)}>
                <Card className={`transition-colors ${pointId === stop.id ? "border-primary" : "hover:border-primary/50"}`}>
                  <h3 className="font-semibold text-foreground">{stop.emoji} {stop.name}</h3>
                  {pointId === stop.id ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stop.info}</p> : null}
                  {pointId === stop.id && stop.creatureIds.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {stop.creatureIds.map((creatureId) => {
                        const creature = CREATURES.find((item) => item.id === creatureId);
                        return creature ? <Link key={creature.id} to="/creatures/$id" params={{ id: creature.id }} className="text-sm font-medium text-primary">{creature.emoji} {creature.name}</Link> : null;
                      })}
                    </div>
                  ) : null}
                </Card>
              </button>
            ))}
          </div>
          {point ? <span className="sr-only">Selected field stop: {point.name}</span> : null}
        </>
      ) : null}
      <SectionHeading emoji="📖" title="Related lessons" />
      <div className="space-y-2 px-4 pb-8">
        {selected ? <Link to="/lessons/$lessonId" params={{ lessonId: `world-${selected.id}` }} className="text-sm font-medium text-primary">Read about {selected.name} →</Link> : null}
      </div>
    </div>
  );
}