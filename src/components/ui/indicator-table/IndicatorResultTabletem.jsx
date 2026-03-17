import React from "react";
import { H4Bold, TextBody2Bold, TextBody3, TextBody4 } from "../typography";
import { cn } from "@/lib/utils";

export const IndicatorResultTableItem = ({
  index = 0,
  title = "IndicatorResultTabletem",
  score = 0.75,
  active = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full py-1.25",
        active
          ? "px-2.5 py-(--scale-150) rounded-[8px] bg-(--color-surface-neutral-active)"
          : ""
      )}
    >
      <div
        className={cn(
          "flex w-full text-(--color-text-neutral-primary) items-center",
          active
            ? "text-(--color-text-neutral-active)"
            : "text-(--color-text-neutral-primary)"
        )}
      >
        <div className="flex flex-1 items-center gap-2 pl-2">
          {active ? (
            <H4Bold>{index}</H4Bold>
          ) : (
            <TextBody2Bold>{index}</TextBody2Bold>
          )}
          <TextBody4>{title}</TextBody4>
        </div>
        <div
          className={cn(
            "rounded-t-(--scale-100) py-(--scale-100) px-(--scale-200) ",
            active ? "bg-transparent" : "bg-(--color-neutral-50)"
          )}
        >
          {active ? (
            <H4Bold>
              {score.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </H4Bold>
          ) : (
            <TextBody3>
              {score.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </TextBody3>
          )}
        </div>
      </div>
      {!active && (
        <div className="h-0 w-full border-b-[2px] border-(--color-border-neutral-primary)" />
      )}
    </div>
  );
};
