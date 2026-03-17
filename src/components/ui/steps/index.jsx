import React from "react";
import { H5, TextBody3Bold } from "../typography";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export const Steps = async ({ step = 0, children, ...props }) => {
  const t = await getTranslations("Steps");

  const STEPS = [
    { name: t("step1") },
    { name: t("step2") },
    { name: t("step3") },
  ];
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex">
        {STEPS.map(({ name }, index) => {
          return (
            <TextBody3Bold
              key={index}
              className={cn(
                "t-body-3 font-bold w-full text-center uppercase ",
                index + 1 > step ? "text-(--color-text-disabled)" : ""
              )}
            >
              {name}
            </TextBody3Bold>
          );
        })}
      </div>
      <div className="w-full flex">
        {STEPS.map((_, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-center items-center "
            >
              <div
                className={cn(
                  "flex-1 h-0 border-[2px] border-(--color-surface-neutral-active)",
                  index + 1 > step ? "border-(color-surface-disabled)" : ""
                )}
              />
              <div
                className={cn(
                  "flex items-center justify-center rounded-full bg-(--color-surface-neutral-active) text-(--color-text-neutral-active) w-7.5 h-7.5",
                  index + 1 > step
                    ? "bg-(--color-surface-disabled) text-(--color-text-disabled)"
                    : ""
                )}
              >
                <H5>{index + 1}</H5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
