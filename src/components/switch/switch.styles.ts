export const switchStyles = {
  wrapper: "inline-flex items-start gap-3",
  wrapperEnabled: "cursor-pointer",
  wrapperDisabled: "cursor-not-allowed",
  track:
    "relative inline-flex shrink-0 items-center rounded-full border border-border bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=unchecked]:hover:bg-surface-2 data-[state=checked]:hover:bg-primary-hover",
  trackError:
    "border-danger data-[state=checked]:bg-danger data-[state=checked]:border-danger data-[state=unchecked]:hover:bg-danger/10 data-[state=checked]:hover:bg-danger-hover",
  trackDisabled: "disabled:bg-disabled disabled:border-disabled",
  thumb:
    "pointer-events-none block rounded-full bg-on-primary shadow-sm transition-transform ring-1 ring-border",
  thumbUnchecked: "data-[state=unchecked]:bg-surface-2",
  thumbChecked: "data-[state=checked]:bg-on-primary",
  thumbDisabled: "disabled:bg-on-disabled",
  labelStack: "flex flex-col gap-1",
  meta: "text-xs",
  sizes: {
    sm: {
      track: "h-5 w-9",
      thumb: "h-4 w-4",
      thumbTranslate:
        "data-[state=checked]:translate-x-[calc(var(--switch-dir)*1rem)]",
      label: "text-xs",
    },
    lg: {
      track: "h-6 w-11",
      thumb: "h-5 w-5",
      thumbTranslate:
        "data-[state=checked]:translate-x-[calc(var(--switch-dir)*1.25rem)]",
      label: "text-sm",
    },
  },
} as const;
