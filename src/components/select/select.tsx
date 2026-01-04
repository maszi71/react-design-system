import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/utils/cn";
import { useSelect } from "./select.hooks";
import { selectStyles } from "./select.styles";
import type { SelectProps } from "./select.types";

const ChevronDownIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M5 7.5 10 12.5 15 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M5 10.5l3.5 3.5L15 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      label,
      hint,
      error,
      size = "lg",
      placeholder = "Select an option",
      options,
      id,
      disabled,
      dir,
      triggerClassName,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const {
      inputId,
      hintId,
      errorId,
      describedBy,
      toneClasses,
      supportingTextClass,
      size: resolvedSize,
    } = useSelect({
      id,
      size,
      disabled,
      error,
      hint,
    });

    const sizeClasses = selectStyles.sizes[resolvedSize];
    const triggerClasses = cn(
      selectStyles.trigger,
      sizeClasses.trigger,
      error && !disabled ? selectStyles.triggerError : null,
      disabled ? selectStyles.triggerDisabled : null,
      triggerClassName
    );
    const iconToneClass = disabled ? "text-on-disabled" : null;

    return (
      <div className={cn(selectStyles.wrapper, className)} dir={dir}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(selectStyles.label, sizeClasses.label, toneClasses)}
          >
            {label}
          </label>
        ) : null}
        <SelectPrimitive.Root disabled={disabled} {...props}>
          <SelectPrimitive.Trigger
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className={triggerClasses}
          >
            <SelectPrimitive.Value
              placeholder={placeholder}
              className={selectStyles.value}
            />
            <SelectPrimitive.Icon
              className={cn(selectStyles.triggerIcon, iconToneClass)}
            >
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={8}
              className={cn(selectStyles.content, contentClassName)}
              dir={dir}
            >
              <SelectPrimitive.Viewport className={selectStyles.viewport}>
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={selectStyles.item}
                  >
                    <SelectPrimitive.ItemIndicator
                      className={selectStyles.itemIndicator}
                    >
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                    <SelectPrimitive.ItemText asChild>
                      <span className={selectStyles.itemText}>
                        {option.startIcon ? (
                          <span
                            className={selectStyles.itemIcon}
                            aria-hidden="true"
                          >
                            {option.startIcon}
                          </span>
                        ) : null}
                        <span className={selectStyles.itemLabel}>
                          {option.label}
                        </span>
                      </span>
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {error || hint ? (
          <div className={selectStyles.supportingRow}>
            {error ? (
              <span
                id={errorId}
                className={cn(selectStyles.supporting, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(selectStyles.supporting, supportingTextClass)}
              >
                {hint}
              </span>
            ) : (
              <span className={selectStyles.supporting} />
            )}
          </div>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
