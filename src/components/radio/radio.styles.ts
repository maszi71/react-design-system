export const radioStyles = {
  wrapper: "group inline-flex items-start gap-3",
  wrapperEnabled: "cursor-pointer",
  wrapperDisabled: "cursor-not-allowed",
  circleWrapper: "relative mt-0.5 inline-flex",
  input: "peer sr-only",
  circle:
    "relative flex items-center justify-center rounded-full border border-border bg-transparent transition-colors",
  circleState:
    "group-hover:border-primary group-hover:bg-primary/10 peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-disabled:border-disabled peer-disabled:bg-disabled",
  circleStateError:
    "group-hover:border-danger group-hover:bg-danger/10 peer-checked:border-danger peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-disabled:border-disabled peer-disabled:bg-disabled",
  dot:
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-opacity peer-disabled:bg-on-disabled",
  dotChecked: "peer-checked:opacity-100",
  dotError: "bg-danger",
  labelStack: "flex flex-col gap-1",
  meta: "text-xs",
  accent: "text-primary",
  sizes: {
    sm: {
      circle: "h-4 w-4",
      dot: "h-2 w-2",
      label: "text-xs",
    },
    lg: {
      circle: "h-5 w-5",
      dot: "h-2.5 w-2.5",
      label: "text-sm",
    },
  },
} as const;
