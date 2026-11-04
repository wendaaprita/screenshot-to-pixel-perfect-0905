import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

/** Standard page header: back arrow + title, sticky on scroll. */
export function PageHeader({
  title,
  subtitle,
  backTo = "/",
  backLabel = "Home",
  right,
}: {
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  right?: ReactNode;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center gap-1 px-4 pb-2 pt-3">
        <Link
          to={backTo}
          className="flex shrink-0 items-center gap-0.5 rounded-full px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          {backLabel}
        </Link>
        {right ? <div className="ml-auto">{right}</div> : null}
      </div>
      <div className="px-4 pb-3">
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle ? <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
    </header>
  );
}

export function Card({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-border bg-card p-4 shadow-sm", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value, max, className }: { value: number; max: number; className?: string }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function SectionHeading({ emoji, title, action }: { emoji?: string; title: string; action?: ReactNode }) {
  return (
    <div className="mb-2 mt-6 flex items-center justify-between px-4">
      <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
        {emoji ? <span className="mr-1.5">{emoji}</span> : null}
        {title}
      </h2>
      {action}
    </div>
  );
}

export function EmptyState({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="mx-4 my-10 rounded-2xl border border-dashed border-border bg-card/60 p-8 text-center">
      <div className="text-4xl">{emoji}</div>
      <p className="mt-2 font-display text-lg font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
