export const dropdownStyles = {
  content:
    "z-50 min-w-[220px] rounded-md bg-surface-bg-white p-2 text-text shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
  item:
    "flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-sm text-text text-left outline-none transition-colors hover:bg-surface focus:bg-surface data-[highlighted]:bg-surface data-[disabled]:cursor-not-allowed data-[disabled]:text-on-disabled data-[disabled]:hover:bg-transparent data-[disabled]:focus:bg-transparent data-[disabled]:data-[highlighted]:bg-transparent rtl:flex-row-reverse rtl:justify-end rtl:text-right",
  label: "px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted",
  separator: "my-1 h-px bg-border",
  icon: "h-4 w-4 text-muted",
  itemText: "min-w-0",
} as const;
