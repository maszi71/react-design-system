import type * as React from "react";
import type * as SelectPrimitive from "@radix-ui/react-select";

export type SelectOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export interface SelectProps
  extends Omit<SelectPrimitive.SelectProps, "children" | "dir"> {
  id?: string;
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: "sm" | "lg";
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  dir?: "ltr" | "rtl";
}
