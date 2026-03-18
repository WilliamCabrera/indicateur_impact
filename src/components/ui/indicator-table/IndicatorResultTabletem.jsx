import React from "react";
import { TextBody4 } from "../typography";
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
        "group flex flex-col w-full py-1.5 hover:bg-(--color-neutral-50)  rounded-[8px]",
        active
          ? "px-2.5  bg-(--color-surface-neutral-active) hover:bg-(--color-surface-neutral-active)"
          : ""
      )}
    >
      <div
        className={cn(
          "flex w-full text-(--color-text-neutral-primary) items-center h-full border-b-[2px] border-(--color-border-neutral-primary) group-hover:border-b-transparent",
          active
            ? "text-(--color-text-neutral-active) group-hover:text-(--color-text-neutral-active) border-b-transparent"
            : "text-(--color-text-neutral-primary)"
        )}
      >
        <div className="flex flex-1 items-center gap-2 pl-2">
          <p
            className={cn(
              "font-nomral",
              active
                ? "t-h4 font-bold py-0"
                : "t-body-2 font-bold group-hover:t-h4 group-hover:font-bold  group-hover:py-0"
            )}
          >
            {index}
          </p>
          <TextBody4>{title}</TextBody4>
        </div>
        <p
          className={cn(
            "rounded-t-(--scale-100) py-(--scale-100) px-(--scale-200)   group-hover:border-transparent group-hover:py-0 ",
            active
              ? "bg-transparent py-0 t-h4 font-bold"
              : "bg-(--color-neutral-50) group-hover:py-0 t-body-3 group-hover:t-h4 group-hover:font-bold"
          )}
        >
          {score.toLocaleString("fr-FR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};
