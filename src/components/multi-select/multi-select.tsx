import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/cn";
import { Tag } from "@/components/tag";
import { useMultiSelect } from "./multi-select.hooks";
import { multiSelectStyles } from "./multi-select.styles";
import type { MultiSelectOption, MultiSelectProps } from "./multi-select.types";

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

const getOptionLabelText = (option: MultiSelectOption) => {
  if (option.searchText) {
    return option.searchText;
  }
  return typeof option.label === "string" ? option.label : "";
};

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      label,
      hint,
      error,
      size = "lg",
      placeholder = "Select options",
      options,
      value,
      defaultValue,
      onValueChange,
      searchable = true,
      searchPlaceholder = "Search...",
      emptyMessage = "No results",
      id,
      disabled,
      dir,
      triggerClassName,
      contentClassName,
      onOpenChange,
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
    } = useMultiSelect({
      id,
      size,
      disabled,
      error,
      hint,
    });

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<string[]>(
      defaultValue ?? []
    );
    const selectedValues = isControlled ? value ?? [] : internalValue;

    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");

    const handleOpenChange = (nextOpen: boolean) => {
      if (disabled) {
        setOpen(false);
        return;
      }
      setOpen(nextOpen);
      if (!nextOpen) {
        setQuery("");
      }
      onOpenChange?.(nextOpen);
    };

    const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        return;
      }
      event.stopPropagation();
    };

    const updateValue = (nextValue: string[]) => {
      const unique = Array.from(new Set(nextValue));
      if (!isControlled) {
        setInternalValue(unique);
      }
      onValueChange?.(unique);
    };

    const toggleValue = (nextValue: string) => {
      if (selectedValues.includes(nextValue)) {
        updateValue(selectedValues.filter((item) => item !== nextValue));
        return;
      }
      updateValue([...selectedValues, nextValue]);
    };

    const handleRemove = (nextValue: string) => {
      updateValue(selectedValues.filter((item) => item !== nextValue));
    };

    const selectedOptions = options.filter((option) =>
      selectedValues.includes(option.value)
    );

    const normalizedQuery = query.trim().toLowerCase();
    const filteredOptions = normalizedQuery
      ? options.filter((option) =>
          getOptionLabelText(option).toLowerCase().includes(normalizedQuery)
        )
      : options;

    const sizeClasses = multiSelectStyles.sizes[resolvedSize];
    const triggerClasses = cn(
      multiSelectStyles.trigger,
      sizeClasses.trigger,
      error && !disabled ? multiSelectStyles.triggerError : null,
      disabled ? multiSelectStyles.triggerDisabled : null,
      triggerClassName
    );
    const iconToneClass = disabled ? "text-on-disabled" : null;
    const tagSize = resolvedSize === "sm" ? "sm" : "lg";

    return (
      <div className={cn(multiSelectStyles.wrapper, className)} dir={dir}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(multiSelectStyles.label, sizeClasses.label, toneClasses)}
          >
            {label}
          </label>
        ) : null}

        <DropdownPrimitive.Root
          open={open}
          onOpenChange={handleOpenChange}
          modal={false}
          {...props}
        >
          <DropdownPrimitive.Trigger asChild>
            <div
              ref={ref}
              id={inputId}
              role="button"
              tabIndex={disabled ? -1 : 0}
              aria-disabled={disabled ? "true" : undefined}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={describedBy}
              className={triggerClasses}
            >
              <div className={multiSelectStyles.value}>
                {selectedOptions.length ? (
                  selectedOptions.map((option) => (
                    <span
                      key={option.value}
                      className={multiSelectStyles.tagWrapper}
                      onClick={(event) => event.stopPropagation()}
                      onPointerDown={(event) => event.stopPropagation()}
                    >
                      <Tag
                        variant="outline"
                        color="tertiary"
                        size={tagSize}
                        startIcon={option.startIcon}
                        onRemove={() => handleRemove(option.value)}
                        removeIcon={<CloseIcon />}
                      >
                        {option.label}
                      </Tag>
                    </span>
                  ))
                ) : (
                  <span className={multiSelectStyles.placeholder}>
                    {placeholder}
                  </span>
                )}
              </div>
              <span
                className={cn(multiSelectStyles.triggerIcon, iconToneClass)}
                aria-hidden="true"
              >
                <ChevronDownIcon />
              </span>
            </div>
          </DropdownPrimitive.Trigger>
          <DropdownPrimitive.Portal>
            <DropdownPrimitive.Content
              align="start"
              sideOffset={8}
              className={cn(multiSelectStyles.content, contentClassName)}
            >
              {searchable ? (
                <div className={multiSelectStyles.searchWrapper}>
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder={searchPlaceholder}
                    className={cn(
                      multiSelectStyles.searchInput,
                      sizeClasses.searchInput
                    )}
                    autoFocus
                  />
                </div>
              ) : null}
              <div className={multiSelectStyles.viewport}>
                {filteredOptions.length ? (
                  filteredOptions.map((option) => (
                    <DropdownPrimitive.CheckboxItem
                      key={option.value}
                      checked={selectedValues.includes(option.value)}
                      onCheckedChange={() => toggleValue(option.value)}
                      onSelect={(event) => event.preventDefault()}
                      disabled={option.disabled}
                      className={multiSelectStyles.item}
                    >
                      <DropdownPrimitive.ItemIndicator
                        className={multiSelectStyles.itemIndicator}
                      >
                        <CheckIcon />
                      </DropdownPrimitive.ItemIndicator>
                      <span className={multiSelectStyles.itemText}>
                        {option.startIcon ? (
                          <span
                            className={multiSelectStyles.itemIcon}
                            aria-hidden="true"
                          >
                            {option.startIcon}
                          </span>
                        ) : null}
                        <span className={multiSelectStyles.itemLabel}>
                          {option.label}
                        </span>
                      </span>
                    </DropdownPrimitive.CheckboxItem>
                  ))
                ) : (
                  <div className={multiSelectStyles.emptyState}>
                    {emptyMessage}
                  </div>
                )}
              </div>
            </DropdownPrimitive.Content>
          </DropdownPrimitive.Portal>
        </DropdownPrimitive.Root>

        {error || hint ? (
          <div className={multiSelectStyles.supportingRow}>
            {error ? (
              <span
                id={errorId}
                className={cn(multiSelectStyles.supporting, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(multiSelectStyles.supporting, supportingTextClass)}
              >
                {hint}
              </span>
            ) : (
              <span className={multiSelectStyles.supporting} />
            )}
          </div>
        ) : null}
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
