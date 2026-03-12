import { cva } from "class-variance-authority";

export const surfaceVariants = cva("bg-transparent", {
  variants: {
    type: {
      neutral: "",
      bad: "",
      good: "",
      base: "",
    },
    variant: {
      primary: "",
      secondary: "",
      disabled: "",
    },
    state: {
      active: "",
      inactive: "",
    },
    size: {
      default: "",
    },
  },
  compoundVariants: [
    // Neutral
    {
      type: "neutral",
      variant: "primary",
      state: "inactive",
      class:
        "bg-(--color-surface-neutral-primary) hover:bg-(--color-surface-neutral-primary-hover)",
    },
    {
      type: "neutral",
      variant: "primary",
      state: "active",
      class: "bg-(--color-surface-neutral-active)",
    },

    {
      type: "neutral",
      variant: "secondary",
      state: "inactive",
      class:
        "bg-(--color-surface-neutral-secondary) hover:bg-(--color-surface-neutral-secondary-hover)",
    },
    {
      type: "neutral",
      variant: "secondary",
      state: "active",
      class: "bg-(--color-surface-neutral-active)",
    },

    // Base
    {
      type: "base",
      variant: "primary",
      state: "inactive",
      class:
        "bg-(--color-surface-base-primary) hover:bg-(--color-surface-base-primary-hover)",
    },
    {
      type: "base",
      variant: "primary",
      state: "active",
      class: "bg-(--color-surface-base-primary)",
    },

    {
      type: "base",
      variant: "secondary",
      state: "inactive",
      class:
        "bg-(--color-surface-base-secondary) hover:bg-(--color-surface-base-secondary-hover)",
    },
    {
      type: "base",
      variant: "secondary",
      state: "active",
      class: "bg-(--color-surface-base-secondary)",
    },

    // Bad
    {
      type: "bad",
      variant: "primary",
      state: "inactive",
      class:
        "bg-(--color-surface-bad-primary) hover:bg-(--color-surface-bad-primary-hover)",
    },
    {
      type: "bad",
      variant: "primary",
      state: "active",
      class: "bg-(--color-surface-bad-active)",
    },

    {
      type: "bad",
      variant: "secondary",
      state: "inactive",
      class:
        "bg-(--color-surface-bad-secondary) hover:bg-(--color-surface-bad-secondary-hover)",
    },
    {
      type: "bad",
      variant: "secondary",
      state: "active",
      class: "bg-(--color-surface-bad-active)",
    },

    // Good
    {
      type: "good",
      variant: "primary",
      state: "inactive",
      class:
        "bg-(--color-surface-good-primary) hover:bg-(--color-surface-good-primary-hover)",
    },
    {
      type: "good",
      variant: "primary",
      state: "active",
      class: "bg-(--color-surface-good-active)",
    },

    {
      type: "good",
      variant: "secondary",
      state: "inactive",
      class:
        "bg-(--color-surface-good-secondary) hover:bg-(--color-surface-good-secondary-hover)",
    },
    {
      type: "good",
      variant: "secondary",
      state: "active",
      class: "bg-(--color-surface-good-active)",
    },

    //
    {
      type: "none",
      variant: "disabled",
      state: "none",
      class: "bg-(--color-surface-disabled)",
    },
  ],
  defaultVariants: {
    type: "neutral",
    variant: "primary",
    state: "inactive",
    size: "default",
  },
});

export const borderVariants = cva("bg-transparent border", {
  variants: {
    type: {
      neutral: "",
      bad: "",
      good: "",
    },
    variant: {
      primary: "",
      secondary: "",
      disabled: "",
    },
    state: {
      active: "",
      inactive: "",
    },
    size: {
      default: "",
    },
  },
  compoundVariants: [
    // Neutral
    {
      type: "neutral",
      variant: "primary",
      state: "inactive",
      class:
        "border-(--color-border-neutral-primary)  hover:border-(--color-border-neutral-primary-hover)",
    },
    {
      type: "neutral",
      variant: "primary",
      state: "active",
      class:
        "border-(--color-border-neutral-primary-active)  hover:border-(--color-border-neutral-primary-hover)",
    },

    {
      type: "neutral",
      variant: "secondary",
      state: "inactive",
      class:
        "border-(--color-border-neutral-secondary)  hover:border-(--color-border-neutral-secondary-hover)",
    },
    {
      type: "neutral",
      variant: "secondary",
      state: "active",
      class:
        "border-(--color-border-neutral-secondary-active)  hover:border-(--color-border-neutral-secondary-hover)",
    },

    // Bad
    {
      type: "bad",
      variant: "primary",
      state: "inactive",
      class:
        "border-(--color-border-bad-primary)   hover:border-(--color-border-bad-primary-hover)",
    },
    {
      type: "bad",
      variant: "primary",
      state: "active",
      class:
        "border-(--color-border-bad-primary-active)   hover:border-(--color-border-bad-primary-hover)",
    },

    {
      type: "bad",
      variant: "secondary",
      state: "inactive",
      class:
        "border-(--color-border-bad-secondary)  hover:border-(--color-border-bad-secondary-hover)",
    },
    {
      type: "bad",
      variant: "secondary",
      state: "active",
      class:
        "border-(--color-border-bad-secondary-active)  hover:border-(--color-border-bad-secondary-hover)",
    },

    // Good
    {
      type: "good",
      variant: "primary",
      state: "inactive",
      class:
        "border-(--color-border-good-primary)  hover:border-(--color-border-good-primary-hover)",
    },
    {
      type: "good",
      variant: "primary",
      state: "active",
      class:
        "border-(--color-border-good-primary-active)  hover:border-(--color-border-good-primary-hover)",
    },

    {
      type: "good",
      variant: "secondary",
      state: "inactive",
      class:
        "border-(--color-border-good-secondary) hover:border-(--color-border-good-secondary-hover)",
    },
    {
      type: "good",
      variant: "secondary",
      state: "active",
      class:
        "border-(--color-border-good-secondary-active)  hover:border-(--color-border-good-secondary-hover)",
    },
    {
      type: "none",
      variant: "disabled",
      state: "none",
      class: "border-(--color-border-disabled)",
    },
  ],
  defaultVariants: {
    type: "neutral",
    variant: "primary",
    state: "inactive",
  },
});

export const textVariants = cva("", {
  variants: {
    type: {
      neutral: "",
      bad: "",
      good: "",
    },
    variant: {
      primary: "",
      secondary: "",
      disabled: "",
    },
    state: {
      active: "",
      inactive: "",
    },
    size: {
      default: "",
    },
  },
  compoundVariants: [
    // Neutral
    {
      type: "neutral",
      variant: "primary",
      state: "inactive",
      class:
        "text-(--color-text-neutral-primary) hover:text-(--color-text-neutral-primary-hover)",
    },
    {
      type: "neutral",
      variant: "primary",
      state: "active",
      class: "text-(--color-text-neutral-active)",
    },

    {
      type: "neutral",
      variant: "secondary",
      state: "inactive",
      class:
        "text-(--color-text-neutral-secondary) hover:text-(--color-text-neutral-secondary-hover)",
    },
    {
      type: "neutral",
      variant: "secondary",
      state: "active",
      class: "text-(--color-text-neutral-active)",
    },

    // Bad
    {
      type: "bad",
      variant: "primary",
      state: "inactive",
      class:
        "text-(--color-text-bad-primary)   hover:text-(--color-text-bad-primary-hover)",
    },
    {
      type: "bad",
      variant: "primary",
      state: "active",
      class: "text-(--color-text-bad-active)",
    },

    {
      type: "bad",
      variant: "secondary",
      state: "inactive",
      class:
        "text-(--color-text-bad-secondary)  hover:text-(--color-text-bad-secondary-hover)",
    },
    {
      type: "bad",
      variant: "secondary",
      state: "active",
      class: "text-(--color-text-bad-active)",
    },

    // Good
    {
      type: "good",
      variant: "primary",
      state: "inactive",
      class:
        "text-(--color-text-good-primary)  hover:text-(--color-text-good-primary-hover)",
    },
    {
      type: "good",
      variant: "primary",
      state: "active",
      class: "text-(--color-text-good-active) ",
    },

    {
      type: "good",
      variant: "secondary",
      state: "inactive",
      class:
        "text-(--color-text-good-secondary)  hover:text-(--color-text-good-secondary-hover)",
    },
    {
      type: "good",
      variant: "secondary",
      state: "active",
      class: "text-(--color-text-good-active)",
    },
    {
      type: "none",
      variant: "disabled",
      state: "none",
      class: "text-(--color-text-disabled)",
    },
  ],
  defaultVariants: {
    type: "neutral",
    variant: "primary",
    state: "inactive",
    size: "default",
  },
});
