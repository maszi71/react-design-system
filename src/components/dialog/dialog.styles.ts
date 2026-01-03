export const dialogStyles = {
  overlay:
    "fixed inset-0 z-40 bg-overlay/60 opacity-0 transition-opacity data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
  positioner:
    "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
  content:
    "relative w-full max-w-[calc(100vw-2rem)] transform-gpu rounded-xl border border-border bg-surface-bg-white p-6 text-text shadow-lg opacity-0 transition-[opacity,transform] duration-200 data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=closed]:scale-95 pointer-events-auto",
  sizes: {
    sm: "max-w-[360px]",
    md: "max-w-[480px]",
    lg: "max-w-[640px]",
    xl: "max-w-[760px]",
  },
  header: "flex items-start justify-between gap-4",
  title: "text-base font-semibold text-text",
  description: "mt-2 text-sm text-muted",
  body: "mt-4 text-sm text-text",
  footer: "mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
  close:
    "absolute end-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  closeIcon: "h-4 w-4",
} as const;
