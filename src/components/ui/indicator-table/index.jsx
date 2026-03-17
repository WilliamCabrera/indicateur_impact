import React from "react";
import { BQCard } from "../bqcard";
import { TextBody2Bold, TextBody4 } from "../typography";
import { IndicatorResultTableItem } from "./IndicatorResultTabletem";
import { cn } from "@/lib/utils";

const indicators = [
  {
    index: 1,
    title: "Impact sur les services écosystémiques",
    score: 0.75,
    active: false,
  },
  {
    index: 2,
    title: "Impact sur les espèces à statut et d'intérêt culturel",
    score: 0.6,
    active: false,
  },
  { index: 3, title: "Impact sur la conservation", score: 0.5, active: false },
  { index: 4, title: "Destruction d'habitat", score: 0.34, active: false },
  { index: 5, title: "Pollution", score: 0.77, active: false },
  {
    index: 6,
    title: "Introduction d'espèces exotiques envahissantes",
    score: 0.34,
    active: false,
  },
  { index: 7, title: "Impact sur la connectivité", score: 0.78, active: false },
  { index: 8, title: "Stress cumulés", score: 0.34, active: false },
  {
    index: 9,
    title: "Impact sur la destruction de puits carbone",
    score: 0.7,
    active: false,
  },
];

export const IndicatorTable = () => {
  const active = true;
  return (
    <BQCard className="flex flex-col  bg-(--color-surface-neutral-secondary) rounded-(--scale-500) p-0 pb-(--scale-500) gap-(--scale-500) border-none shadow-none">
      <div
        className={cn(
          "flex w-full justify-center items-center uppercase rounded-t-(--scale-500) bg-(--color-surface-neutral-active)  py-2.5",
          active
            ? " bg-(--color-surface-neutral-active) text-(--color-text-neutral-active)"
            : " bg-transparent border-[2px] border-(--color-border-neutral-primary) text-(--color-text-neutral-primary)"
        )}
      >
        {active && <TextBody2Bold> Vue D'ensemble</TextBody2Bold>}
        {!active && <TextBody4> Vue D'ensemble</TextBody4>}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-y-3 gap-x-5  px-5">
        {indicators.map((indicator) => (
          <IndicatorResultTableItem key={indicator.index} {...indicator} />
        ))}
      </div>
    </BQCard>
  );
};
