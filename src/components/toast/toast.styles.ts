import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "grid grid-cols-[auto_1fr_auto] items-start gap-3 rounded-md border border-border bg-surface-bg-white p-4 text-text shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
  {
    variants: {
      variant: {
        default: "",
        info: "border-primary/30 bg-primary/10",
        success: "border-success/30 bg-success/10",
        warning: "border-warning/30 bg-warning/10",
        danger: "border-danger/30 bg-danger/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const toastIconVariants = cva("h-5 w-5", {
  variants: {
    variant: {
      default: "text-muted",
      info: "text-primary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const toastStyles = {
  body: "flex flex-col gap-1",
  title: "text-sm font-semibold",
  description: "text-xs text-muted",
  action:
    "inline-flex items-center justify-center rounded-md border border-border px-3 py-1 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  close:
    "inline-flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  viewportBase:
    "fixed z-[60] flex w-[360px] max-w-[calc(100vw-3rem)] flex-col gap-3 outline-none",
  viewportPositions: {
    "bottom-start":
      "bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-8 sm:translate-x-0",
    "bottom-center":
      "bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8",
    "bottom-end":
      "bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0",
    "top-start":
      "top-6 left-1/2 -translate-x-1/2 sm:top-8 sm:left-8 sm:translate-x-0",
    "top-center":
      "top-6 left-1/2 -translate-x-1/2 sm:top-8",
    "top-end":
      "top-6 left-1/2 -translate-x-1/2 sm:top-8 sm:left-auto sm:right-8 sm:translate-x-0",
  },
} as const;
