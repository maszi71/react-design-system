export const multiSelectStyles = {
  wrapper: "flex w-[328px] flex-col gap-2",
  label: "text-sm font-medium",
  trigger:
    "inline-flex w-full items-center justify-between gap-3 rounded-md border border-content-250 bg-surface-2 px-3 py-2 text-sm text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary rtl:flex-row-reverse rtl:text-right",
  triggerError:
    "border-danger focus-visible:border-danger focus-visible:ring-danger/30",
  triggerDisabled:
    "cursor-not-allowed border-disabled bg-disabled text-on-disabled",
  value:
    "flex min-w-0 flex-1 flex-wrap items-center gap-2 text-left rtl:text-right",
  placeholder: "text-muted",
  triggerIcon: "h-4 w-4 self-center text-muted",
  tagWrapper: "inline-flex",
  content:
    "z-50 min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-md bg-surface-bg-white p-2 text-text shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
  searchWrapper: "pb-2",
  searchInput:
    "h-10 w-full rounded-md border border-content-250 bg-surface-2 px-3 text-sm text-text placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
  viewport: "flex flex-col",
  item:
    "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pe-3 ps-9 text-sm text-text text-left outline-none transition-colors hover:bg-surface focus:bg-surface data-[highlighted]:bg-surface data-[disabled]:cursor-not-allowed data-[disabled]:text-on-disabled data-[disabled]:hover:bg-transparent data-[disabled]:focus:bg-transparent data-[disabled]:data-[highlighted]:bg-transparent rtl:flex-row-reverse rtl:justify-end rtl:text-right",
  itemIndicator:
    "absolute start-3 inline-flex h-4 w-4 items-center justify-center text-primary",
  itemIcon: "h-4 w-4 text-muted",
  itemText: "inline-flex min-w-0 items-center gap-2",
  itemLabel: "min-w-0",
  emptyState: "px-3 py-2 text-xs text-muted",
  supportingRow: "flex items-start justify-between gap-4",
  supporting: "min-w-0 text-xs",
  sizes: {
    sm: {
      trigger: "min-h-10 text-xs",
      label: "text-xs",
      searchInput: "h-9 text-xs",
    },
    lg: {
      trigger: "min-h-12 text-sm",
      label: "text-sm",
      searchInput: "h-10 text-sm",
    },
  },
} as const;
