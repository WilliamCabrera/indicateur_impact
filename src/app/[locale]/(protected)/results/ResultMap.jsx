import { BQCard } from "@/components/ui/bqcard";
import { H4Bold, H4Regular, TextBody2 } from "@/components/ui/typography";
import React from "react";

export const ResultMap = () => {
  return (
    <BQCard className="w-full flex  items-end flex-row bg-(--color-surface-neutral-secondary) rounded-(--scale-500) p-(--scale-500) gap-(--scale-500) border-none shadow-none">
      <div className="flex flex-col gap-(--scale-500)  flex-1">
        <div className="flex items-center justify-between">
          <H4Bold>Carte</H4Bold>
          <div className=" flex text text-(--color-text-neutral-primary) gap-(--scale-500) ">
            <div className="flex gap-(--scale-200) ">
              <img
                src="/icons/geospatial-footprint.svg"
                alt="legend geospatial solide line polygon"
              />
              <div className="flex border-b-[1px] border-(--color-border-neutral-primary) hover:border-b-[2px]">
                <TextBody2>Emprise géospatiale</TextBody2>
              </div>
            </div>
            <div className="flex gap-(--scale-200)">
              <img
                src="/icons/area.svg"
                alt="legend geospatial dashed line polygon"
              />
              <div className="flex border-b-[1px]  border-(--color-border-neutral-primary) hover:border-b-[2px]">
                <TextBody2>Aire d’influence</TextBody2>
              </div>
            </div>
          </div>
        </div>
        <div className="border h-[417px] bg-(--color-base-500)"></div>
      </div>
      <div className="relative w-[426px] border h-[417px] border-(--color-border-neutral-primary)">
        <H4Regular className={"w-[166px] absolute top-[14px] left-[17px] z-10"}>
          Emplacement au Québec
        </H4Regular>
        <img
          src="/images/emplacement_au_quebec.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/icons/geopointer.svg"
          className="absolute z-10 top-[180px] left-[231px]"
        />
      </div>
    </BQCard>
  );
};
