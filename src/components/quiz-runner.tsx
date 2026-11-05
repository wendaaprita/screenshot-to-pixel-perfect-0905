import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AnyQuestion } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Shared question player for the Knowledge Quiz and Daily Trivia.
 * Shows instant feedback and an explanation after each answer.
 */
export function QuizRunner({
  questions,
  onFinish,
}: {
  questions: AnyQuestion[];
  onFinish: (score: number, total: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const total = questions.length;
  const q = questions[idx];

  if (!q) return null;

  const options = q.type === "mcq" ? q.options : ["True", "False"];
  const answerIndex = q.type === "mcq" ? q.answerIndex : q.answer ? 0 : 1;

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      onFinish(score, total);
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  }

  return (
    <div className="mx-4">
      <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {idx + 1} of {total}
        </span>
        <span className="font-medium text-foreground">Score {score}</span>
      </div>
      <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${((idx + (picked !== null ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <p className="font-display text-lg font-semibold leading-snug text-foreground">
          {q.type === "mcq" ? q.question : q.statement}
        </p>
        <div className="mt-4 grid gap-2">
          {options.map((opt, i) => {
            const isAnswer = i === answerIndex;
            const isPicked = picked === i;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={cn(
                  "rounded-xl border border-border bg-background px-4 py-3 text-left text-sm font-medium transition-colors",
                  picked === null && "hover:border-primary hover:bg-muted",
                  picked !== null && isAnswer && "border-primary bg-primary/10 text-foreground",
                  picked !== null && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                  picked !== null && !isPicked && !isAnswer && "opacity-60",
                )}
              >
                <span className="mr-2 font-semibold text-muted-foreground">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {picked !== null ? (
          <div className="mt-4 rounded-xl bg-muted p-3">
            <p className="text-sm font-semibold text-foreground">
              {picked === answerIndex ? "✅ Correct!" : "❌ Not quite"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{q.explanation}</p>
            <Button onClick={next} className="mt-3 w-full">
              {idx + 1 >= total ? "See results" : "Next question"}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
