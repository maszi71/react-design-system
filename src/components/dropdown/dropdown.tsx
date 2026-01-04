import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/cn";
import { dropdownStyles } from "./dropdown.styles";
import type {
  DropdownContentProps,
  DropdownItemProps,
  DropdownLabelProps,
  DropdownSeparatorProps,
} from "./dropdown.types";

export const Dropdown = DropdownPrimitive.Root;
export const DropdownTrigger = DropdownPrimitive.Trigger;

export const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof DropdownPrimitive.Content>,
  DropdownContentProps
>(({ className, sideOffset = 8, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownStyles.content, className)}
      {...props}
    />
  </DropdownPrimitive.Portal>
));

DropdownContent.displayName = "DropdownContent";

export const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof DropdownPrimitive.Item>,
  DropdownItemProps
>(({ className, startIcon, children, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(dropdownStyles.item, className)}
    {...props}
  >
    {startIcon ? <span className={dropdownStyles.icon}>{startIcon}</span> : null}
    <span className={dropdownStyles.itemText}>{children}</span>
  </DropdownPrimitive.Item>
));

DropdownItem.displayName = "DropdownItem";

export const DropdownLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownPrimitive.Label>,
  DropdownLabelProps
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn(dropdownStyles.label, className)}
    {...props}
  />
));

DropdownLabel.displayName = "DropdownLabel";

export const DropdownSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownPrimitive.Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn(dropdownStyles.separator, className)}
    {...props}
  />
));

DropdownSeparator.displayName = "DropdownSeparator";
