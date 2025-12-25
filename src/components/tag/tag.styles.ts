import { cva } from "class-variance-authority";

export const tagVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-medium transition-colors whitespace-nowrap",
  {
    variants: {
      variant: {
        filled: "",
        outline: "border bg-transparent",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        warn: "",
        danger: "",
      },
      size: {
        sm: "min-h-6 px-3 py-1 text-xs",
        lg: "min-h-8 px-4 py-1.5 text-sm",
      },
      state: {
        default: "",
        selected: "",
        deactive: "bg-disabled text-on-disabled",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        state: "default",
        className: "bg-primary text-on-primary",
      },
      {
        variant: "filled",
        color: "secondary",
        state: "default",
        className: "bg-secondary text-on-secondary",
      },
      {
        variant: "filled",
        color: "tertiary",
        state: "default",
        className: "bg-surface text-text",
      },
      {
        variant: "filled",
        color: "warn",
        state: "default",
        className: "bg-warning text-on-warning",
      },
      {
        variant: "filled",
        color: "danger",
        state: "default",
        className: "bg-danger text-on-danger",
      },
      {
        variant: "filled",
        color: "primary",
        state: "selected",
        className: "bg-primary-active text-on-primary",
      },
      {
        variant: "filled",
        color: "secondary",
        state: "selected",
        className: "bg-secondary-active text-on-secondary",
      },
      {
        variant: "filled",
        color: "tertiary",
        state: "selected",
        className: "bg-surface-2 text-text",
      },
      {
        variant: "filled",
        color: "warn",
        state: "selected",
        className: "bg-warning-active text-on-warning",
      },
      {
        variant: "filled",
        color: "danger",
        state: "selected",
        className: "bg-danger-active text-on-danger",
      },
      {
        variant: "outline",
        color: "primary",
        state: "default",
        className: "border-primary text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        state: "default",
        className: "border-secondary text-secondary",
      },
      {
        variant: "outline",
        color: "tertiary",
        state: "default",
        className: "border-border text-text",
      },
      {
        variant: "outline",
        color: "warn",
        state: "default",
        className: "border-warning text-warning",
      },
      {
        variant: "outline",
        color: "danger",
        state: "default",
        className: "border-danger text-danger",
      },
      {
        variant: "outline",
        color: "primary",
        state: "selected",
        className: "border-primary text-primary bg-primary/10",
      },
      {
        variant: "outline",
        color: "secondary",
        state: "selected",
        className: "border-secondary text-secondary bg-secondary/10",
      },
      {
        variant: "outline",
        color: "tertiary",
        state: "selected",
        className: "border-border text-text bg-surface-2",
      },
      {
        variant: "outline",
        color: "warn",
        state: "selected",
        className: "border-warning text-warning bg-warning/10",
      },
      {
        variant: "outline",
        color: "danger",
        state: "selected",
        className: "border-danger text-danger bg-danger/10",
      },
      {
        variant: "outline",
        state: "deactive",
        className: "border-disabled",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "lg",
      state: "default",
    },
  }
);
