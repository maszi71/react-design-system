import * as React from "react";
import { cn } from "@/utils/cn";
import { useTextField } from "./text-field.hooks";
import { textFieldStyles } from "./text-field.styles";
import type { TextFieldProps } from "./text-field.types";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, label, hint, error, id, disabled, maxLength, onChange, ...props },
    ref
  ) => {
    // Keep character count in sync for both controlled and uncontrolled usage.
    const {
      inputId,
      inputRef,
      hintId,
      errorId,
      describedBy,
      toneClasses,
      supportingTextClass,
      characterCount,
      handleChange,
    } = useTextField({
      id,
      disabled,
      error,
      hint,
      value: props.value,
      defaultValue: props.defaultValue,
      onChange,
    });
    // Render a single row for hint/error + counter with space-between.
    const hasSupporting = Boolean(error || hint || maxLength !== undefined);
    const counterClass = disabled ? "text-on-disabled" : "text-muted";

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <div className={cn(textFieldStyles.wrapper, className)}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(textFieldStyles.label, toneClasses)}
          >
            {label}
          </label>
        ) : null}
        <input
          id={inputId}
          ref={inputRef}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={cn(
            textFieldStyles.input,
            error ? textFieldStyles.inputError : null,
            disabled ? textFieldStyles.inputDisabled : null
          )}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />
        {hasSupporting ? (
          <div className={textFieldStyles.supportingRow}>
            {error ? (
              <span
                id={errorId}
                className={cn(textFieldStyles.supporting, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(textFieldStyles.supporting, supportingTextClass)}
              >
                {hint}
              </span>
            ) : (
              // Keep layout stable when only a counter is shown.
              <span className={textFieldStyles.supporting} />
            )}
            {maxLength !== undefined ? (
              <span className={cn(textFieldStyles.counter, counterClass)}>
                {characterCount}/{maxLength}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
