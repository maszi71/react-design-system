import * as React from "react";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      iconOnly,
      startIcon,
      endIcon,
      rounded,
      children,
      ...props
    },
    ref
  ) => {
    const iconClassName = size === "sm" ? "h-4 w-4" : "h-5 w-5";
    const iconOnlyContent = children ?? startIcon ?? endIcon;

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, color, size, iconOnly, rounded }),
          className
        )}
        {...props}
      >
        {iconOnly ? (
          iconOnlyContent
        ) : (
          <>
            {startIcon ? (
              <span className={cn("inline-flex shrink-0", iconClassName)}>
                {startIcon}
              </span>
            ) : null}
            {children}
            {endIcon ? (
              <span className={cn("inline-flex shrink-0", iconClassName)}>
                {endIcon}
              </span>
            ) : null}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
