import * as React from "react";
import type { RadioProps } from "./radio.types";

type UseRadioArgs = Pick<
  RadioProps,
  "id" | "size" | "disabled" | "error" | "hint"
>;

export const useRadio = ({
  id,
  size = "lg",
  disabled,
  error,
  hint,
}: UseRadioArgs) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const inputRef = React.useRef<HTMLInputElement>(null);

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
