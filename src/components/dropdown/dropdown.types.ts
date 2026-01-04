import type * as React from "react";
import type * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Root
>;
export type DropdownTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Trigger
>;
export type DropdownContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Content
> & {
  dir?: "ltr" | "rtl";
};
export type DropdownItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Item
> & {
  startIcon?: React.ReactNode;
};
export type DropdownLabelProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Label
>;
export type DropdownSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Separator
>;
