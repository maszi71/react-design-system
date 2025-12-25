import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        filled: "",
        outline: "border",
        text: "",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        warn: "",
        danger: "",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        lg: "h-10 px-6 text-sm",
      },
      iconOnly: {
        true: "p-0",
        false: "",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        iconOnly: true,
        className: "w-8",
      },
      {
        size: "lg",
        iconOnly: true,
        className: "w-10",
      },
      {
        variant: "filled",
        color: "primary",
        className:
          "bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:text-on-disabled",
      },
      {
        variant: "filled",
        color: "secondary",
        className:
          "bg-secondary text-on-secondary hover:bg-secondary-hover active:bg-secondary-active disabled:bg-disabled disabled:text-on-disabled",
      },
      {
        variant: "filled",
        color: "tertiary",
        className:
          "bg-surface text-text hover:bg-surface-2 active:bg-border disabled:bg-disabled disabled:text-on-disabled",
      },
      {
        variant: "filled",
        color: "warn",
        className:
          "bg-warning text-on-warning hover:bg-warning-hover active:bg-warning-active disabled:bg-disabled disabled:text-on-disabled",
      },
      {
        variant: "filled",
        color: "danger",
        className:
          "bg-danger text-on-danger hover:bg-danger-hover active:bg-danger-active disabled:bg-disabled disabled:text-on-disabled",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "border-primary text-primary hover:bg-primary/10 active:bg-primary/15 disabled:border-disabled disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/15 disabled:border-disabled disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "outline",
        color: "tertiary",
        className:
          "border-border text-text hover:bg-surface-2 active:bg-border disabled:border-disabled disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "outline",
        color: "warn",
        className:
          "border-warning text-warning hover:bg-warning/10 active:bg-warning/15 disabled:border-disabled disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "outline",
        color: "danger",
        className:
          "border-danger text-danger hover:bg-danger/10 active:bg-danger/15 disabled:border-disabled disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "text",
        color: "primary",
        className:
          "text-primary hover:bg-primary/10 active:bg-primary/15 disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "text",
        color: "secondary",
        className:
          "text-secondary hover:bg-secondary/10 active:bg-secondary/15 disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "text",
        color: "tertiary",
        className:
          "text-text hover:bg-surface-2 active:bg-border disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "text",
        color: "warn",
        className:
          "text-warning hover:bg-warning/10 active:bg-warning/15 disabled:text-on-disabled disabled:bg-transparent",
      },
      {
        variant: "text",
        color: "danger",
        className:
          "text-danger hover:bg-danger/10 active:bg-danger/15 disabled:text-on-disabled disabled:bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "lg",
      iconOnly: false,
      rounded: true,
    },
  }
);
