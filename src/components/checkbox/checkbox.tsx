import * as React from "react";
import { cn } from "@/utils/cn";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode; //plain text or richer content (e.g., a link, icon, or formatted text).
  error?: React.ReactNode; //plain text or richer content (e.g., a link, icon, or formatted text).
  indeterminate?: boolean;
  size?: "sm" | "lg";
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      hint,
      error,
      indeterminate = false,
      size = "lg",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy =
      errorId && hintId ? `${errorId} ${hintId}` : errorId ?? hintId;

    const toneClasses = error
      ? "text-danger"
      : disabled
        ? "text-on-disabled"
        : "text-text";

    const supportingTextClass = error ? "text-danger" : "text-muted";
    const boxClassName = size === "sm" ? "h-4 w-4" : "h-5 w-5";
    const iconClassName = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
    const labelClassName = size === "sm" ? "text-xs" : "text-sm";
    const metaClassName = "text-xs";

    return (
      <label
        className={cn(
          "inline-flex items-start gap-3",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className
        )}
        htmlFor={inputId}
      >
        <span
          className={cn(
            "relative mt-0.5 inline-flex",
            boxClassName,
            disabled ? "text-on-disabled" : "text-primary"
          )}
        >
          <input
            id={inputId}
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-checked={indeterminate ? "mixed" : undefined}
            aria-describedby={describedBy}
            data-indeterminate={indeterminate || undefined}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "relative flex items-center justify-center rounded-sm border border-border bg-transparent transition-colors",
              boxClassName,
              "peer-checked:border-current",
              "peer-data-[indeterminate=true]:border-current",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
              "peer-disabled:border-disabled peer-disabled:bg-disabled"
            )}
          />
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity",
              "text-primary",
              iconClassName,
              "peer-checked:opacity-100 peer-data-[indeterminate=true]:opacity-0",
              "peer-disabled:text-on-disabled"
            )}
          >
            <path
              d="M5 10.5l3.5 3.5L15 7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity",
              "text-primary",
              iconClassName,
              "peer-data-[indeterminate=true]:opacity-100",
              "peer-disabled:text-on-disabled"
            )}
          >
            <path
              d="M5 10h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>

        {(label || hint || error) && (
          <span className="flex flex-col gap-1">
            {label ? (
              <span className={cn(labelClassName, toneClasses)}>{label}</span>
            ) : null}
            {error ? (
              <span id={errorId} className={cn(metaClassName, supportingTextClass)}>
                {error}
              </span>
            ) : hint ? (
              <span id={hintId} className={cn(metaClassName, supportingTextClass)}>
                {hint}
              </span>
            ) : null}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
