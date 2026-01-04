import { cva } from "class-variance-authority";

export const tabsListVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      underline: "border-b border-border",
      pill:
        "rounded-full bg-surface-bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
    },
    size: {
      sm: "text-xs",
      lg: "text-sm",
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "underline",
    size: "lg",
    fullWidth: false,
  },
});

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 font-medium text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        underline:
          "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-text",
        pill:
          "rounded-full data-[state=active]:bg-primary data-[state=active]:text-on-primary",
      },
      size: {
        sm: "h-8",
        lg: "h-10",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "underline",
      size: "lg",
      fullWidth: false,
    },
  }
);

export const tabsContentStyles =
  "mt-4 text-sm text-text focus-visible:outline-none";
