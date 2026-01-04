import * as React from "react";
import type { MultiSelectProps } from "./multi-select.types";

type UseMultiSelectArgs = Pick<
  MultiSelectProps,
  "id" | "size" | "disabled" | "error" | "hint"
>;

export const useMultiSelect = ({
  id,
  size = "lg",
  disabled,
  error,
  hint,
}: UseMultiSelectArgs) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;

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
    hintId,
    errorId,
    describedBy,
    toneClasses,
    supportingTextClass,
    size,
  };
};
