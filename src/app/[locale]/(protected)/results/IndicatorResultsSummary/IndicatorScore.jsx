import { INDICATORS } from "@/components/ui/indicator-table";
import { IndicatorResultTableItem } from "@/components/ui/indicator-table/IndicatorResultTabletem";
import React, { useMemo } from "react";
import { ScoreSlider } from "./ScoreSlider";
import { cn } from "@/lib/utils";

const SliderGrid = () => {
  return (
    <div className="w-full flex h-full justify-between">
      <div className="w-0 border-0 h-full bg-black " />
      <div className="w-0 border-[0.5px] h-full bg-black " />
      <div className="w-0 border-[0.5px] h-full bg-black " />
      <div className="w-0 border-[0.5px] h-full bg-black " />
      <div className="w-0 border-0 h-full bg-black " />
    </div>
  );
};

export const IndicatorScore = () => {
  const sorted = useMemo(() => {
    return INDICATORS.map((item) => item).sort((ind1, ind2) =>
      ind1.score > ind2.score ? -1 : 1
    );
  }, [INDICATORS]);

  return (
    <div className="flex flex-col  px-0 ">
      {sorted.map((indicator, index) => {
        return (
          <div className="flex w-full gap-5.75" key={indicator.index}>
            <div
              className={cn(
                `w-full py-1.5`,
                index === 0 ? "pt-0" : "",
                index === sorted.length - 1 ? "pb-0" : ""
              )}
            >
              <IndicatorResultTableItem {...indicator} />
            </div>
            <div className="flex items-center w-full relative">
              <div
                className={cn(
                  "absolute left-0 right-0",
                  index === 0
                    ? "top-1/2 bottom-0"
                    : index === sorted.length - 1
                      ? "top-0 bottom-1/2"
                      : "inset-0"
                )}
              >
                <SliderGrid />
              </div>
              {/* important to add the correct scale ([0,1])*/}

              <ScoreSlider
                min={0}
                max={1}
                defaultValue={[indicator.score]}
                value={[indicator.score]}
                step={0.01}
                readOnly={true}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
