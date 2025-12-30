import * as React from "react";
import type { TextFieldProps } from "./text-field.types";

type UseTextFieldArgs = Pick<
  TextFieldProps,
  "id" | "disabled" | "error" | "hint" | "value" | "defaultValue" | "onChange"
>;

const getLength = (value?: TextFieldProps["value"]) => {
  if (value === null || value === undefined) {
    return 0;
  }
  return String(value).length;
};

export const useTextField = ({
  id,
  disabled,
  error,
  hint,
  value,
  defaultValue,
  onChange,
}: UseTextFieldArgs) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Initialize from controlled value or default for uncontrolled usage.
  const [localLength, setLocalLength] = React.useState(() =>
    getLength(value ?? defaultValue)
  );

  // Sync length when parent controls the value prop.
  React.useEffect(() => {
    if (value !== undefined) {
      setLocalLength(getLength(value));
    }
  }, [value]);

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

  // Update local count for uncontrolled inputs and still forward onChange.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setLocalLength(event.target.value.length);
    }
    onChange?.(event);
  };

  return {
    inputId,
    inputRef,
    hintId,
    errorId,
    describedBy,
    toneClasses,
    supportingTextClass,
    characterCount: localLength,
    handleChange,
  };
};
