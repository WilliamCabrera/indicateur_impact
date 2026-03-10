import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      type: {
        neutral: "",
        bad: "",
        good: "",
        base: "",
      },
      variant: {
        default:
          "bg-(--color-surface-neutral-primary) text-(--color-text-neutral-primary) hover:bg-(--color-surface-neutral-primary-hover) hover:text-(--color-text-neutral-primary-hover)",
        disabled: "bg-(--color-surface-disabled) text-(--color-text-disabled)",
        base: "bg-(--color-surface-base-primary) text-(--color-text-base-primary) hover:bg-(--color-surface-base-primary-hover) hover:text-(--color-text-base-primary-hover)",
        good: "bg-(--color-surface-good-primary) text-(--color-text-good-primary) hover:bg-(--color-surface-good-primary-hover) hover:text-(--color-text-good-primary-hover)",
        bad: "bg-(--color-surface-bad-primary) text-(--color-text-bad-primary) hover:bg-(--color-surface-bad-primary-hover) hover:text-(--color-text-bad-primary-hover)",
      },
      state: {
        active: "",
        inactive: "",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        state: "active",
        class:
          "bg-(--color-surface-neutral-active) text-(--color-text-neutral-active)",
      },

      {
        variant: "disabled",
        state: "active",
        class: "bg-(--color-surface-disabled) text-(--color-text-disabled)",
      },
      {
        variant: "base",
        state: "active",
        class:
          "bg-(--color-surface-base-primary) text-(--color-text-base-primary)",
      },
      {
        variant: "good",
        state: "active",
        class:
          "bg-(--color-surface-good-active) text-(--color-text-good-active)",
      },
      {
        variant: "bad",
        state: "active",
        class: "bg-(--color-surface-bad-active) text-(--color-text-bad-active)",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const buttonOutlinedVariants = cva(
  "bg-transparent border cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      type: {
        neutral: "",
        bad: "",
        good: "",
      },
      variant: {
        default: "",
        primary: "",
        secondary: "",
        disabled: "",
      },
      state: {
        active: "",
        inactive: "",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
      },
    },
    compoundVariants: [
      // Neutral
      {
        type: "neutral",
        variant: "primary",
        state: "default",
        class:
          "border-(--color-border-neutral-primary) text-(--color-text-neutral-primary)  hover:border-(--color-border-neutral-primary-hover) hover:text-(--color-text-neutral-primary-hover)",
      },
      {
        type: "neutral",
        variant: "primary",
        state: "active",
        class:
          "border-(--color-border-neutral-primary-active) text-(--color-text-neutral-primary-active)  hover:border-(--color-border-neutral-primary-hover) hover:text-(--color-text-neutral-primary-hover)",
      },

      {
        type: "neutral",
        variant: "secondary",
        state: "default",
        class:
          "border-(--color-border-neutral-secondary) text-(--color-text-neutral-primary)  hover:border-(--color-border-neutral-secondary-hover) hover:text-(--color-text-neutral-primary-hover)",
      },
      {
        type: "neutral",
        variant: "secondary",
        state: "active",
        class:
          "border-(--color-border-neutral-secondary-active) text-(--color-text-neutral-primary-active)  hover:border-(--color-border-neutral-secondary-hover) hover:text-(--color-text-neutral-primary-hover)",
      },

      // Bad
      {
        type: "bad",
        variant: "primary",
        state: "default",
        class:
          "border-(--color-border-bad-primary) text-(--color-text-bad-secondary)  hover:border-(--color-border-bad-primary-hover) hover:text-(--color-text-bad-secondary-hover)",
      },
      {
        type: "bad",
        variant: "primary",
        state: "active",
        class:
          "border-(--color-border-bad-primary-active) text-(--color-text-bad-primary-active)  hover:border-(--color-border-bad-primary-hover) hover:text-(--color-text-bad-primary-hover)",
      },

      {
        type: "bad",
        variant: "secondary",
        state: "default",
        class:
          "border-(--color-border-bad-secondary) text-(--color-text-bad-secondary)  hover:border-(--color-border-bad-secondary-hover) hover:text-(--color-text-bad-secondary-hover)",
      },
      {
        type: "bad",
        variant: "secondary",
        state: "active",
        class:
          "border-(--color-border-bad-secondary-active) text-(--color-text-bad-secondary-active)  hover:border-(--color-border-bad-secondary-hover) hover:text-(--color-text-bad-secondary-hover)",
      },

      // Good
      {
        type: "good",
        variant: "primary",
        state: "default",
        class:
          "border-(--color-border-good-primary) text-(--color-text-good-secondary)  hover:border-(--color-border-good-primary-hover) hover:text-(--color-text-good-secondary-hover)",
      },
      {
        type: "good",
        variant: "primary",
        state: "active",
        class:
          "border-(--color-border-good-primary-active) text-(--color-text-good-primary-active)  hover:border-(--color-border-good-primary-hover) hover:text-(--color-text-good-primary-hover)",
      },

      {
        type: "good",
        variant: "secondary",
        state: "default",
        class:
          "border-(--color-border-good-secondary) text-(--color-text-good-secondary)  hover:border-(--color-border-good-secondary-hover) hover:text-(--color-text-good-secondary-hover)",
      },
      {
        type: "good",
        variant: "secondary",
        state: "active",
        class:
          "border-(--color-border-good-secondary-active) text-(--color-text-good-secondary-active)  hover:border-(--color-border-good-secondary-hover) hover:text-(--color-text-good-secondary-hover)",
      },
      {
        type: "default",
        variant: "disabled",
        state: "default",
        class: "border-(--color-border-disabled) text-(--color-text-disabled)",
      },
    ],
    defaultVariants: {
      type: "neutral",
      variant: "primary",
      state: "default",
    },
  },
);
