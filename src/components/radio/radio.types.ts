import type * as React from "react";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: "sm" | "lg";
}
