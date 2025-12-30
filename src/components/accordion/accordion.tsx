import * as React from "react";
import { cn } from "@/utils/cn";
import { accordionStyles } from "./accordion.styles";
import type { AccordionProps } from "./accordion.types";

const getSingleValue = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] ?? "" : value ?? "";

const getMultipleValue = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value;
  }
  return value ? [value] : [];
};

export const Accordion = ({
  items,
  type = "single",
  value,
  defaultValue,
  collapsible = true,
  onValueChange,
  className,
}: AccordionProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    type === "multiple"
      ? getMultipleValue(defaultValue)
      : getSingleValue(defaultValue)
  );
  const resolvedValue = isControlled ? value : internalValue;
  const baseId = React.useId();

  React.useEffect(() => {
    if (!isControlled) {
      setInternalValue(
        type === "multiple"
          ? getMultipleValue(defaultValue)
          : getSingleValue(defaultValue)
      );
    }
  }, [defaultValue, isControlled, type]);

  const handleToggle = (itemValue: string) => {
    if (type === "multiple") {
      const current = getMultipleValue(resolvedValue);
      const next = current.includes(itemValue)
        ? current.filter((valueItem) => valueItem !== itemValue)
        : [...current, itemValue];

      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
      return;
    }

    const current = getSingleValue(resolvedValue);
    const next =
      current === itemValue && collapsible ? "" : itemValue;

    if (!isControlled) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  return (
    <div className={cn(accordionStyles.root, className)}>
      {items.map((item) => {
        const isOpen =
          type === "multiple"
            ? getMultipleValue(resolvedValue).includes(item.value)
            : getSingleValue(resolvedValue) === item.value;
        const triggerId = `${baseId}-${item.value}-trigger`;
        const contentId = `${baseId}-${item.value}-content`;

        return (
          <div key={item.value} className={accordionStyles.item}>
            <button
              type="button"
              id={triggerId}
              className={cn(
                accordionStyles.trigger,
                item.disabled ? accordionStyles.triggerDisabled : null
              )}
              onClick={() => handleToggle(item.value)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              disabled={item.disabled}
            >
              <span>{item.title}</span>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={cn(
                  accordionStyles.icon,
                  isOpen ? accordionStyles.iconOpen : null
                )}
              >
                <path
                  d="M5 7.5 10 12.5 15 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={cn(
                accordionStyles.contentWrapper,
                isOpen ? accordionStyles.contentWrapperOpen : null
              )}
              role="region"
              id={contentId}
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
            >
              <div className={accordionStyles.content}>
                <div className={accordionStyles.contentInner}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
