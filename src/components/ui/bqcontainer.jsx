import React from "react";
import { cn } from "@/lib/utils";
import { borderVariants, surfaceVariants, textVariants } from "../variants";

export const BQContainer = ({
  className,
  variant = "default",
  size = "default",
  state = "default",
  type = "default",
  asChild = false,
  outlined = false,
  ...props
}) => {
  let args = { variant, type, size, state, className };

  if (variant === "disabled") {
    args = {
      variant: "disabled",
      type: "default",
      size,
      state: "default",
      className,
    };
  }
  return (
    <div
      {...props}
      className={cn(
        borderVariants({ ...args }),
        textVariants({ ...args }),
        className,
        outlined ? "" : surfaceVariants({ ...args }),
      )}
    >
      bqcontainer
    </div>
  );
};
