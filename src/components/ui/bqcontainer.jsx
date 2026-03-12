import React from "react";
import { cn } from "@/lib/utils";
import { borderVariants, surfaceVariants, textVariants } from "../variants";

export const BQContainer = ({
  className,
  variant = "primary",
  size = "default",
  state = "inactive",
  type = "neutral",
  asChild = false,
  outlined = false,
  children,
  ...props
}) => {
  let args = { variant, type, size, state, className };

  if (variant === "disabled") {
    args = {
      variant: "disabled",
      type: "none",
      size,
      state: "none",
      className,
    };
  }
  return (
    <div
      className={cn(
        borderVariants({ ...args }),
        textVariants({ ...args }),
        className,
        outlined ? "" : surfaceVariants({ ...args }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
