import type * as React from "react";
import type * as ToastPrimitive from "@radix-ui/react-toast";
import type { VariantProps } from "class-variance-authority";
import { toastVariants } from "./toast.styles";

export type ToastVariant = NonNullable<
  VariantProps<typeof toastVariants>["variant"]
>;

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: ToastVariant;
  icon?: React.ReactNode;
}

export type ToastTitleProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Title
>;
export type ToastDescriptionProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Description
>;
export type ToastActionProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Action
>;
export type ToastCloseProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Close
>;
export type ToastProviderProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Provider
>;
export type ToastViewportProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Viewport
> & {
  position?: "bottom-start" | "bottom-center" | "bottom-end" | "top-start" | "top-center" | "top-end";
};
