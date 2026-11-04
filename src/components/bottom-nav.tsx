import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import {
  Home,
  Hourglass,
  PawPrint,
  Compass,
  Gamepad2,
  NotebookPen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/time", label: "Time", icon: Hourglass },
  { to: "/creatures", label: "Creatures", icon: PawPrint },
  { to: "/discover", label: "Discover", icon: Compass },
  { to: "/games", label: "Games", icon: Gamepad2 },
  { to: "/journal", label: "Journal", icon: NotebookPen },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/90"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid w-full max-w-2xl grid-cols-6">
        {TABS.map((tab) => {
          const active = tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                "flex flex-col items-center gap-0.5 px-1 py-2 text-[11px] font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
