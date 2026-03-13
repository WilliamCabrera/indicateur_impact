import React from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export const BQCard = ({ className, children, ...props }) => {
  return (
    <Card
      className={cn(
        "bg-(--color-surface-base-secondary) border shadow-lg p-5 rounded-(--space-200) ",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};
