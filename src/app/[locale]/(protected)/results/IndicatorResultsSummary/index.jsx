import { BQCard } from "@/components/ui/bqcard";
import { H4Bold } from "@/components/ui/typography";
import React from "react";
import { IndicatorScore } from "./IndicatorScore";
import { IndicatorMethodologyInterpretationResultsView } from "./IndicatorMethodologyInterpretation";

export const IndicatorResultsSummary = () => {
  return (
    <BQCard className="w-full flex flex-col    bg-(--color-surface-neutral-secondary) rounded-(--scale-500) p-(--scale-500) gap-(--scale-500) border-none shadow-none">
      <div className="flex gap-(--scale-500)  flex-1">
        <H4Bold>Vue d'ensemble</H4Bold>
      </div>
      <IndicatorScore />
      <IndicatorMethodologyInterpretationResultsView />
    </BQCard>
  );
};
