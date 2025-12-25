import * as React from "react";
import { cn } from "@/utils/cn";
import { useCheckbox } from "./checkbox.hooks";
import { checkboxStyles } from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

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
    const {
      inputId,
      inputRef,
      hintId,
      errorId,
      describedBy,
      toneClasses,
      supportingTextClass,
      size: resolvedSize,
    } = useCheckbox({
      id,
      indeterminate,
      size,
      disabled,
      error,
      hint,
    });
    const sizeClasses = checkboxStyles.sizes[resolvedSize];

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <label
        className={cn(
          checkboxStyles.wrapper,
          disabled
            ? checkboxStyles.wrapperDisabled
            : checkboxStyles.wrapperEnabled,
          className
        )}
        htmlFor={inputId}
      >
        <span
          className={cn(
            checkboxStyles.boxWrapper,
            sizeClasses.box,
            disabled ? "text-on-disabled" : checkboxStyles.accent
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
            className={checkboxStyles.input}
            {...props}
          />
          <span
            className={cn(
              checkboxStyles.box,
              sizeClasses.box,
              checkboxStyles.boxState
            )}
          />
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={cn(
              checkboxStyles.icon,
              sizeClasses.icon,
              checkboxStyles.iconChecked
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
              checkboxStyles.icon,
              sizeClasses.icon,
              checkboxStyles.iconIndeterminate
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
          <span className={checkboxStyles.labelStack}>
            {label ? (
              <span className={cn(sizeClasses.label, toneClasses)}>{label}</span>
            ) : null}
            {error ? (
              <span
                id={errorId}
                className={cn(checkboxStyles.meta, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(checkboxStyles.meta, supportingTextClass)}
              >
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
