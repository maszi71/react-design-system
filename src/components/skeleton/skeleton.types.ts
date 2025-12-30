import type * as React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  radius?: "sm" | "md" | "lg" | "full";
  variant?: "line" | "rect" | "circle";
  animate?: "pulse" | "shimmer" | "none";
}
