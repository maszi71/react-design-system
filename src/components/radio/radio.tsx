import * as React from "react";
import { cn } from "@/utils/cn";
import { useRadio } from "./radio.hooks";
import { radioStyles } from "./radio.styles";
import type { RadioProps } from "./radio.types";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      hint,
      error,
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
    } = useRadio({
      id,
      size,
      disabled,
      error,
      hint,
    });
    const sizeClasses = radioStyles.sizes[resolvedSize];
    const hasError = Boolean(error);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const circleStateClass =
      hasError && !disabled
        ? radioStyles.circleStateError
        : radioStyles.circleState;
    const dotColorClass =
      hasError && !disabled ? radioStyles.dotError : null;

    return (
      <label
        className={cn(
          radioStyles.wrapper,
          disabled ? radioStyles.wrapperDisabled : radioStyles.wrapperEnabled,
          className
        )}
        htmlFor={inputId}
      >
        <span
          className={cn(
            radioStyles.circleWrapper,
            sizeClasses.circle,
            disabled
              ? "text-on-disabled"
              : hasError
                ? "text-danger"
                : radioStyles.accent
          )}
        >
          <input
            id={inputId}
            ref={inputRef}
            type="radio"
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className={radioStyles.input}
            {...props}
          />
          <span
            className={cn(
              radioStyles.circle,
              sizeClasses.circle,
              circleStateClass
            )}
          />
          <span
            className={cn(
              radioStyles.dot,
              sizeClasses.dot,
              radioStyles.dotChecked,
              dotColorClass
            )}
          />
        </span>

        {(label || hint || error) && (
          <span className={radioStyles.labelStack}>
            {label ? (
              <span className={cn(sizeClasses.label, toneClasses)}>{label}</span>
            ) : null}
            {error ? (
              <span
                id={errorId}
                className={cn(radioStyles.meta, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(radioStyles.meta, supportingTextClass)}
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

Radio.displayName = "Radio";
