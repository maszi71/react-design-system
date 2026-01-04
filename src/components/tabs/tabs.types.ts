import type * as React from "react";
import type * as TabsPrimitive from "@radix-ui/react-tabs";
import type { VariantProps } from "class-variance-authority";
import { tabsListVariants, tabsTriggerVariants } from "./tabs.styles";

export type TabsVariant = NonNullable<
  VariantProps<typeof tabsListVariants>["variant"]
>;
export type TabsSize = NonNullable<
  VariantProps<typeof tabsListVariants>["size"]
>;

export type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;
