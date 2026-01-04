export const checkboxStyles = {
  wrapper: "inline-flex items-center gap-3",
  wrapperEnabled: "cursor-pointer",
  wrapperDisabled: "cursor-not-allowed",
  boxWrapper: "relative inline-flex",
  input: "peer sr-only",
  box: "relative flex items-center justify-center rounded-sm border border-border bg-transparent transition-colors",
  boxState:
    "peer-checked:border-primary peer-checked:bg-primary peer-data-[indeterminate=true]:border-current peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-disabled:border-disabled peer-disabled:bg-disabled",
  icon:
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity text-on-primary peer-disabled:text-on-disabled",
  iconChecked: "peer-checked:opacity-100 peer-data-[indeterminate=true]:opacity-0",
  iconIndeterminate: "peer-data-[indeterminate=true]:opacity-100",
  labelStack: "flex flex-col gap-1",
  meta: "text-xs",
  accent: "text-primary",
  sizes: {
    sm: {
      box: "h-4 w-4",
      icon: "h-3 w-3",
      label: "text-xs",
    },
    lg: {
      box: "h-5 w-5",
      icon: "h-3.5 w-3.5",
      label: "text-sm",
    },
  },
} as const;
