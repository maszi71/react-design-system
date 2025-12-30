export const textFieldStyles = {
  wrapper: "flex w-[328px] flex-col gap-2",
  label: "text-sm font-medium",
  fieldWrapper: "relative flex items-center",
  input:
    "h-12 w-full rounded-md border border-content-250 bg-surface-2 px-3 text-sm text-text placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
  inputWithStartIcon: "ps-10",
  inputWithEndIcon: "pe-10",
  inputError: "border-danger focus-visible:border-danger focus-visible:ring-danger/30",
  inputDisabled:
    "cursor-not-allowed border-disabled bg-disabled text-on-disabled placeholder:text-on-disabled",
  iconSlot:
    "absolute inset-y-0 flex items-center text-muted",
  startIcon: "start-3 pointer-events-none",
  endIcon: "end-3",
  endIconPassive: "pointer-events-none",
  icon: "inline-flex h-5 w-5 items-center justify-center",
  iconButton:
    "pointer-events-auto rounded-md p-1 text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:text-on-disabled",
  supportingRow: "flex items-start justify-between gap-4",
  supporting: "min-w-0 text-xs",
  counter: "shrink-0 text-xs tabular-nums",
} as const;
