import * as React from "react";
import { cn } from "@/utils/cn";
import { tagVariants } from "./tag.styles";
import type { TagProps } from "./tag.types";

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      color,
      size,
      state,
      startIcon,
      endIcon,
      onRemove,
      removeIcon,
      children,
      ...props
    },
    ref
  ) => {
    const iconClassName = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, color, size, state }), className)}
        {...props}
      >
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
        {onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-full",
              iconClassName
            )}
            aria-label="Remove tag"
          >
            {removeIcon}
          </button>
        ) : null}
      </span>
    );
  }
);

Tag.displayName = "Tag";
