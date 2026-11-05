import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart, Search } from "lucide-react";

import { PageHeader, Card, Chip, EmptyState } from "@/components/ui-bits";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CREATURES, CATEGORY_META } from "@/data/creatures";
import type { CreatureCategory } from "@/data/types";
import { DIET_EMOJI, DIET_LABEL } from "@/lib/display";
import { cn } from "@/lib/utils";
import { useProgress, toggleFavorite } from "@/lib/progress";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/creatures")({
  head: () =>
    pageHead(
      "Creaturepedia — Prehistoric Edu Explorer",
      "Search and browse every creature profile: dinosaurs, pterosaurs, marine reptiles, mammals and more.",
    ),
  component: Creaturepedia,
});

const CATEGORIES: (CreatureCategory | "all")[] = [
  "all",
  "dinosaur",
  "flying-reptile",
  "marine-reptile",
  "fish",
  "insect",
  "mammal",
  "early-human",
  "plant",
  "other",
];

function Creaturepedia() {
  const progress = useProgress();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CreatureCategory | "all">("all");
  const [favsOnly, setFavsOnly] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CREATURES.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (favsOnly && !progress.favoriteCreatures.includes(c.id)) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.scientificName.toLowerCase().includes(q) ||
        c.characteristics.toLowerCase().includes(q)
      );
    });
  }, [query, category, favsOnly, progress.favoriteCreatures]);

  return (
    <div>
      <PageHeader
        title="Creaturepedia"
        subtitle={`${CREATURES.length} prehistoric profiles`}
        right={
          <Button
            variant={favsOnly ? "default" : "outline"}
            size="sm"
            className="gap-1"
            onClick={() => setFavsOnly((v) => !v)}
          >
            <Heart className="size-4" /> Favorites
          </Button>
        }
      />

      {/* Search */}
      <div className="relative px-4 pt-4">
        <Search className="absolute left-7 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or trait…"
          className="pl-9"
          aria-label="Search creatures"
        />
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((cat) => {
          const meta = cat === "all" ? null : CATEGORY_META[cat];
          const active = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {meta ? `${meta.emoji} ${meta.label}` : "🌍 All"}
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <EmptyState
          emoji="🔍"
          title="No creatures found"
          body="Try a different search or category."
        />
      ) : (
        <div className="grid grid-cols-2 gap-3 px-4 pb-6">
          {results.map((c) => {
            const fav = progress.favoriteCreatures.includes(c.id);
            return (
              <Card key={c.id} className="relative p-3">
                <button
                  aria-label={fav ? `Unfavorite ${c.name}` : `Favorite ${c.name}`}
                  onClick={() => toggleFavorite(c.id)}
                  className="absolute right-2 top-2 rounded-full p-1 transition-colors hover:bg-muted"
                >
                  <Heart
                    className={cn("size-4", fav ? "fill-destructive text-destructive" : "text-muted-foreground")}
                  />
                </button>
                <Link to="/creatures/$id" params={{ id: c.id }} className="block">
                  <div className="text-3xl">{c.emoji}</div>
                  <p className="mt-1 pr-6 font-display font-bold leading-tight text-foreground">
                    {c.name}
                  </p>
                  <p className="truncate text-xs italic text-muted-foreground">{c.scientificName}</p>
                  <Chip className="mt-2 text-[11px]">
                    {DIET_EMOJI[c.diet]} {DIET_LABEL[c.diet]}
                  </Chip>
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
