import * as React from "react";
import { cn } from "@/utils/cn";
import { skeletonStyles } from "./skeleton.styles";
import type { SkeletonProps } from "./skeleton.types";

const toSize = (value?: number | string) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  return typeof value === "number" ? `${value}px` : value;
};

export const Skeleton = ({
  width,
  height,
  radius,
  variant = "line",
  animate = "pulse",
  className,
  style,
  ...props
}: SkeletonProps) => {
  const resolvedRadius = variant === "circle" ? "full" : radius ?? "md";

  const resolvedStyle: React.CSSProperties = { ...style };
  const resolvedWidth = toSize(width);
  const resolvedHeight = toSize(height);

  if (variant === "circle") {
    const size = resolvedWidth ?? resolvedHeight;
    if (size) {
      resolvedStyle.width = size;
      resolvedStyle.height = size;
    }
  } else {
    if (resolvedWidth) {
      resolvedStyle.width = resolvedWidth;
    }
    if (resolvedHeight) {
      resolvedStyle.height = resolvedHeight;
    }
  }

  return (
    <div
      className={cn(
        skeletonStyles.base,
        skeletonStyles.variants[variant],
        skeletonStyles.radii[resolvedRadius],
        animate === "pulse" ? skeletonStyles.pulse : null,
        animate === "shimmer" ? skeletonStyles.shimmer : null,
        className
      )}
      style={resolvedStyle}
      {...props}
    />
  );
};
