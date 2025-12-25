import * as React from "react";
import type { CheckboxProps } from "./checkbox.types";

type UseCheckboxArgs = Pick<
  CheckboxProps,
  "id" | "indeterminate" | "size" | "disabled" | "error" | "hint"
>;

export const useCheckbox = ({
  id,
  indeterminate,
  size = "lg",
  disabled,
  error,
  hint,
}: UseCheckboxArgs) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const inputRef = React.useRef<HTMLInputElement>(null);

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

  return {
    inputId,
    inputRef,
    hintId,
    errorId,
    describedBy,
    toneClasses,
    supportingTextClass,
    size,
  };
};
