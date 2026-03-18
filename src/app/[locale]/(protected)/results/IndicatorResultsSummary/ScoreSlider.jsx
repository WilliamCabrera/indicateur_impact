import { BQSlider } from "@/components/ui/bqslider";
import { Slider } from "@/components/ui/slider";
import React from "react";

export const ScoreSlider = ({
  min = 0,
  max = 100,
  defaultValue = [],
  onValueChange,
  step = 1,
  readOnly = false,
  disabled = false,
  ...props
}) => {
  return (
    <div className="w-full relative px-1">
      <div className="bg-[#666691] w-2 h-2 rounded-full absolute top-1/2 -translate-y-1/2 left-0" />
      <div className="bg-[#FFAA50] w-2 h-2 rounded-full absolute top-1/2 -translate-y-1/2 right-0" />
      <BQSlider
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        className={`w-full${readOnly ? " pointer-events-none" : ""}`}
        classNameRange="bg-transparent"
        classNameTrack="data-[orientation=horizontal]:h-[2px] bg-gradient-to-r from-[#666691] to-[#FFAA50]"
        disabled={disabled}
        {...(!readOnly && onValueChange && { onValueChange })}
        {...props}
      />
    </div>
  );
};
