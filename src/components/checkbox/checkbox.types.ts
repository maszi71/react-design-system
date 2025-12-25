import type * as React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  indeterminate?: boolean;
  size?: "sm" | "lg";
}
