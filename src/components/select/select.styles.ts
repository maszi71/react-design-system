export const selectStyles = {
  wrapper: "flex w-[328px] flex-col gap-2",
  label: "text-sm font-medium",
  trigger:
    "inline-flex w-full items-center justify-between gap-2 rounded-md border border-content-250 bg-surface-2 px-3 text-sm text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary rtl:flex-row-reverse rtl:text-right",
  triggerError:
    "border-danger focus-visible:border-danger focus-visible:ring-danger/30",
  triggerDisabled:
    "cursor-not-allowed border-disabled bg-disabled text-on-disabled",
  triggerIcon: "h-4 w-4 text-muted",
  value: "min-w-0 text-left data-[placeholder]:text-muted rtl:text-right",
  content:
    "z-50 min-w-[220px] rounded-md bg-surface-bg-white p-2 text-text shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
  viewport: "flex w-[var(--radix-select-trigger-width)] flex-col",
  item:
    "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pe-3 ps-9 text-sm text-text text-left outline-none transition-colors hover:bg-surface focus:bg-surface data-[highlighted]:bg-surface data-[disabled]:cursor-not-allowed data-[disabled]:text-on-disabled data-[disabled]:hover:bg-transparent data-[disabled]:focus:bg-transparent data-[disabled]:data-[highlighted]:bg-transparent rtl:flex-row-reverse rtl:justify-end rtl:text-right",
  itemIndicator:
    "absolute start-3 inline-flex h-4 w-4 items-center justify-center text-primary",
  itemText: "min-w-0",
  separator: "my-1 h-px bg-border",
  groupLabel:
    "px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted",
  supportingRow: "flex items-start justify-between gap-4",
  supporting: "min-w-0 text-xs",
  sizes: {
    sm: {
      trigger: "h-10 text-xs",
      label: "text-xs",
    },
    lg: {
      trigger: "h-12 text-sm",
      label: "text-sm",
    },
  },
} as const;
