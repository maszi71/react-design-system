import type * as React from "react";

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
