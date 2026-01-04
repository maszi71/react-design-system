import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";
import { dialogStyles } from "./dialog.styles";
import type {
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./dialog.types";

// Root manages open/close state (controlled or uncontrolled).
export const Dialog = DialogPrimitive.Root;
// Trigger opens the dialog when interacted with.
export const DialogTrigger = DialogPrimitive.Trigger;

// Content renders in a Portal with overlay + centered panel.
export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, size = "md", showCloseButton = true, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={dialogStyles.overlay} />
    <div className={dialogStyles.positioner}>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(dialogStyles.content, dialogStyles.sizes[size], className)}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close className={dialogStyles.close}>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={dialogStyles.closeIcon}
            >
              <path
                d="M5 5l10 10M15 5L5 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </div>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "DialogContent";

// Title hooks into Radix aria-labelledby.
export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(dialogStyles.title, className)}
    {...props}
  />
));

DialogTitle.displayName = "DialogTitle";

// Description hooks into Radix aria-describedby.
export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogStyles.description, className)}
    {...props}
  />
));

DialogDescription.displayName = "DialogDescription";

// Layout helpers for consistent spacing.
export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(dialogStyles.header, className)} {...props} />
);

// Body wrapper for main content.
export const DialogBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(dialogStyles.body, className)} {...props} />
);

// Footer wrapper for actions.
export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(dialogStyles.footer, className)} {...props} />
  )
);

DialogFooter.displayName = "DialogFooter";

// Close can be used to wire any button to close the dialog.
export const DialogClose = DialogPrimitive.Close;
export type { DialogTriggerProps };
