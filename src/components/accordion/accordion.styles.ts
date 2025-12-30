export const accordionStyles = {
  root: "flex w-full flex-col gap-4",
  item: "overflow-hidden rounded-xl border border-border bg-surface-bg-white",
  trigger:
    "flex w-full items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-text transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  triggerDisabled: "cursor-not-allowed text-on-disabled",
  contentWrapper:
    "grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out",
  contentWrapperOpen: "grid-rows-[1fr]",
  content: "overflow-hidden",
  contentInner: "border-t border-border px-5 py-4 text-sm text-muted",
  icon: "h-4 w-4 text-muted transition-transform",
  iconOpen: "rotate-180",
} as const;
