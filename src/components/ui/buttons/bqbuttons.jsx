import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { buttonOutlinedVariants, buttonVariants } from "./button.variants";
import {
  surfaceVariants,
  borderVariants,
  textVariants,
} from "@/components/variants";

function BQButton({
  className,
  variant = "default",
  size = "default",
  state = "",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-state={state}
      className={cn(buttonVariants({ variant, size, state, className }))}
      {...props}
    />
  );
}

function BQButtonOutlined({
  className,
  variant = "default",
  size = "default",
  state = "default",
  type = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

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
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-state={state}
      className={cn(buttonOutlinedVariants({ ...args }))}
      {...props}
    />
  );
}

function BQButtonV1({
  className,
  variant = "default",
  size = "default",
  state = "default",
  type = "default",
  asChild = false,
  outlined = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

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
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-state={state}
      className={cn(
        "px-4 py-2 has-[>svg]:px-3 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        borderVariants({ ...args }),
        textVariants({ ...args }),
        className,
        outlined ? "" : surfaceVariants({ ...args }),
      )}
      {...props}
    />
  );
}

export { BQButton, BQButtonOutlined, BQButtonV1, buttonVariants };
