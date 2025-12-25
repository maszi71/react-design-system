import type * as React from "react";
import type * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    "asChild"
  > {
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: "sm" | "lg";
}
