export const skeletonStyles = {
  base: "relative overflow-hidden bg-surface-bg-soft",
  pulse: "animate-pulse",
  shimmer: "ds-skeleton-shimmer",
  variants: {
    line: "h-4 w-full",
    rect: "h-24 w-full",
    circle: "h-10 w-10",
  },
  radii: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },
} as const;
