import type * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { tagVariants } from "./tag.styles";

export type TagVariant = NonNullable<VariantProps<typeof tagVariants>["variant"]>;
export type TagColor = NonNullable<VariantProps<typeof tagVariants>["color"]>;
export type TagSize = NonNullable<VariantProps<typeof tagVariants>["size"]>;
export type TagState = NonNullable<VariantProps<typeof tagVariants>["state"]>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  state?: TagState;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onRemove?: () => void;
  removeIcon?: React.ReactNode;
}
