import type * as React from "react";
import type * as SelectPrimitive from "@radix-ui/react-select";

export type SelectOption = {
  value: string;
  label: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  searchText?: string;
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
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  dir?: "ltr" | "rtl";
}
