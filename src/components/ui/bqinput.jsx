import React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";

export const BQInput = ({ className, ...props }) => {
  return (
    <Input
      {...props}
      className={cn(
        "bg-(--color-surface-neutral-secondary) border-none rounded-bq-sm pt-(--space-150)",
        "pb - (--p - xm) px - (--space - 500) placeholder:text-(--color-text-disabled)",
        className
      )}
    />
  );
};
