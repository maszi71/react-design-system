import * as React from "react";
import { cn } from "@/utils/cn";
import { useTextField } from "./text-field.hooks";
import { textFieldStyles } from "./text-field.styles";
import type { TextFieldProps } from "./text-field.types";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      hint,
      error,
      id,
      disabled,
      maxLength,
      startIcon,
      endIcon,
      onEndIconClick,
      endIconAriaLabel,
      onChange,
      ...props
    },
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
    const iconToneClass = disabled ? "text-on-disabled" : null;

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
        <div className={textFieldStyles.fieldWrapper}>
          {startIcon ? (
            <span
              className={cn(
                textFieldStyles.iconSlot,
                textFieldStyles.startIcon,
                iconToneClass
              )}
            >
              <span className={textFieldStyles.icon}>{startIcon}</span>
            </span>
          ) : null}
          <input
            id={inputId}
            ref={inputRef}
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className={cn(
              textFieldStyles.input,
              startIcon ? textFieldStyles.inputWithStartIcon : null,
              endIcon ? textFieldStyles.inputWithEndIcon : null,
              error ? textFieldStyles.inputError : null,
              disabled ? textFieldStyles.inputDisabled : null
            )}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
          {endIcon ? (
            <span
              className={cn(
                textFieldStyles.iconSlot,
                textFieldStyles.endIcon,
                onEndIconClick ? null : textFieldStyles.endIconPassive,
                iconToneClass
              )}
            >
              {onEndIconClick ? (
                <button
                  type="button"
                  onClick={onEndIconClick}
                  disabled={disabled}
                  className={textFieldStyles.iconButton}
                  aria-label={endIconAriaLabel ?? "Input action"}
                >
                  <span className={textFieldStyles.icon}>{endIcon}</span>
                </button>
              ) : (
                <span className={textFieldStyles.icon}>{endIcon}</span>
              )}
            </span>
          ) : null}
        </div>
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
