import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/utils/cn";
import { toastIconVariants, toastStyles, toastVariants } from "./toast.styles";
import type {
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
  ToastViewportProps,
} from "./toast.types";

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M6 6 14 14M14 6 6 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => (
  <ToastPrimitive.Provider {...props}>{children}</ToastPrimitive.Provider>
);

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  ToastViewportProps
>(({ className, position = "bottom-end", ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      toastStyles.viewportBase,
      toastStyles.viewportPositions[position],
      className
    )}
    {...props}
  />
));

ToastViewport.displayName = "ToastViewport";

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant = "default", icon, children, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  >
    {icon ? (
      <span className={toastIconVariants({ variant })}>{icon}</span>
    ) : null}
    <div className={toastStyles.body}>{children}</div>
    <ToastPrimitive.Close
      aria-label="Close"
      className={toastStyles.close}
    >
      <CloseIcon />
    </ToastPrimitive.Close>
  </ToastPrimitive.Root>
));

Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn(toastStyles.title, className)}
    {...props}
  />
));

ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn(toastStyles.description, className)}
    {...props}
  />
));

ToastDescription.displayName = "ToastDescription";

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(toastStyles.action, className)}
    {...props}
  />
));

ToastAction.displayName = "ToastAction";

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  ToastCloseProps
>(({ className, children, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(toastStyles.close, className)}
    {...props}
  >
    {children ?? <CloseIcon />}
  </ToastPrimitive.Close>
));

ToastClose.displayName = "ToastClose";
