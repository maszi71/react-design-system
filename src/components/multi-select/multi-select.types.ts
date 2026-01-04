import type * as React from "react";
import type * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export type MultiSelectOption = {
  value: string;
  label: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  searchText?: string;
};

export interface MultiSelectProps
  extends Omit<
    DropdownPrimitive.DropdownMenuProps,
    "children" | "modal" | "dir"
  > {
  id?: string;
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: "sm" | "lg";
  placeholder?: string;
  options: MultiSelectOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  dir?: "ltr" | "rtl";
}
