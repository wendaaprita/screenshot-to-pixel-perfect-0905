import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, Heart, Plus } from "lucide-react";
import { toast } from "sonner";

import { PageHeader, Card, Chip, SectionHeading } from "@/components/ui-bits";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getCreature, CATEGORY_META, CREATURES } from "@/data/creatures";
import { getPeriod } from "@/data/timeline";
import { DIET_EMOJI, DIET_LABEL, mya } from "@/lib/display";
import { cn } from "@/lib/utils";
import { addNote, markCreatureViewed, toggleFavorite, useProgress } from "@/lib/progress";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/creatures/$id")({
  head: () => pageHead("Creature profile — Creaturepedia", "A prehistoric creature profile: size, diet, habitat, behavior and fossil discoveries."),
  component: CreatureDetail,
});

function CreatureDetail() {
  const { id } = Route.useParams();
  const progress = useProgress();
  const creature = getCreature(id);

  // Award exploration points once per creature.
  useEffect(() => {
    if (creature) markCreatureViewed(creature.id);
  }, [creature]);

  if (!creature) {
    return (
      <div>
        <PageHeader title="Not found" backTo="/creatures" backLabel="Creaturepedia" />
        <div className="px-4 py-10 text-center text-sm text-muted-foreground">
          That creature isn't in the Creaturepedia.
        </div>
      </div>
    );
  }

  const fav = progress.favoriteCreatures.includes(creature.id);
  const period = getPeriod(creature.period);
  const sameEra = CREATURES.filter((c) => c.id !== creature.id && c.era === creature.era).slice(0, 4);
  const [noteText, setNoteText] = [undefined, undefined] as const; // placeholder removed below

  return (
    <div>
      <PageHeader
        title={creature.name}
        subtitle={creature.scientificName}
        backTo="/creatures"
        backLabel="Creaturepedia"
        right={
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleFavorite(creature.id)}
            className="gap-1"
          >
            <Heart className={cn("size-4", fav && "fill-destructive text-destructive")} />
            {fav ? "Saved" : "Save"}
          </Button>
        }
      />

      {/* Hero row */}
      <div className="px-4 pt-4">
        <Card className="flex items-center gap-4">
          <span className="text-5xl">{creature.emoji}</span>
          <div className="flex flex-wrap gap-1.5">
            <Chip>{CATEGORY_META[creature.category].emoji} {CATEGORY_META[creature.category].label}</Chip>
            <Chip>{DIET_EMOJI[creature.diet]} {DIET_LABEL[creature.diet]}</Chip>
            <Chip>{period ? `${period.emoji} ${period.name}` : creature.era}</Chip>
            <Chip>{mya(creature.era === "Cenozoic" && creature.period === "quaternary" ? 0.1 : 0)}</Chip>
          </div>
        </Card>
      </div>
      <CreatureNote refId={creature.id} />

      <div className="space-y-3 px-4 pt-3">
        <Card>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">📏 Size</p>
          <p className="mt-1 text-sm text-foreground">{creature.size}</p>
        </Card>
        <Card>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">🦴 Characteristics</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{creature.characteristics}</p>
        </Card>
        <Card>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">🐾 Behavior</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{creature.behavior}</p>
        </Card>
        <Card>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">🗺️ Habitat</p>
          <p className="mt-1 text-sm text-foreground">{creature.habitat}</p>
        </Card>
        <Card>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">⛏️ Fossil discoveries</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{creature.discovery}</p>
        </Card>
      </div>

      <SectionHeading emoji="✨" title="Fun facts" />
      <div className="space-y-2 px-4">
        {creature.facts.map((f, i) => (
          <Card key={i} className="flex items-start gap-2 bg-primary/5">
            <span className="text-lg">{i === 0 ? "1️⃣" : "2️⃣"}</span>
            <p className="text-sm leading-relaxed text-foreground">{f}</p>
          </Card>
        ))}
      </div>

      <SectionHeading emoji="🦴" title="Others from the same era" />
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {sameEra.map((c) => (
          <Link key={c.id} to="/creatures/$id" params={{ id: c.id }}>
            <Card className="text-center transition-colors hover:border-primary/50">
              <div className="text-2xl">{c.emoji}</div>
              <p className="mt-1 text-sm font-semibold text-foreground">{c.name}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Small inline note composer tied to this creature. */
function CreatureNote({ refId }: { refId: string }) {
  const [text, setText] = useState("");
  return (
    <div className="px-4 pt-3">
      <Card className="bg-muted/40">
        <p className="text-sm font-semibold text-foreground">✍️ Add a journal note about this creature</p>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What surprised you?"
          className="mt-2 min-h-16 bg-background"
        />
        <Button
          size="sm"
          className="mt-2"
          disabled={!text.trim()}
          onClick={() => {
            addNote(text.trim(), refId);
            setText("");
            toast.success("Note added to your journal");
          }}
        >
          <Plus className="size-4" /> Save note
        </Button>
      </Card>
    </div>
  );
}

void Check;
