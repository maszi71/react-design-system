import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/cn";
import {
  tabsContentStyles,
  tabsListVariants,
  tabsTriggerVariants,
} from "./tabs.styles";
import type {
  TabsContentProps,
  TabsListProps,
  TabsTriggerProps,
} from "./tabs.types";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size, fullWidth }), className)}
    {...props}
  />
));

TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, fullWidth, startIcon, endIcon, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabsTriggerVariants({ variant, size, fullWidth }),
      className
    )}
    {...props}
  >
    {startIcon ? <span className="h-4 w-4">{startIcon}</span> : null}
    {children}
    {endIcon ? <span className="h-4 w-4">{endIcon}</span> : null}
  </TabsPrimitive.Trigger>
));

TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentStyles, className)}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";
