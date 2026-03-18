import React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";

export const BQInput = ({ className, ...props }) => {
  return (
    <Input
      {...props}
      className={cn(
        "bg-(--color-surface-neutral-secondary) border-none rounded-bq-sm pt-(--scale-150)",
        "pb-(--p-xm) px-(--scale-500) placeholder:text-(--color-text-disabled)",
        className
      )}
    />
  );
};
