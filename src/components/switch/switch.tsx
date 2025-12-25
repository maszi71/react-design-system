import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/utils/cn";
import { useSwitch } from "./switch.hooks";
import { switchStyles } from "./switch.styles";
import type { SwitchProps } from "./switch.types";

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      label,
      hint,
      error,
      size = "lg",
      id,
      disabled,
      style,
      dir,
      ...props
    },
    ref
  ) => {
    const rootRef = React.useRef<HTMLButtonElement>(null);
    const {
      inputId,
      hintId,
      errorId,
      describedBy,
      toneClasses,
      supportingTextClass,
      size: resolvedSize,
    } = useSwitch({
      id,
      size,
      disabled,
      error,
      hint,
    });
    const sizeClasses = switchStyles.sizes[resolvedSize];
    const hasError = Boolean(error);

    const [computedDir, setComputedDir] = React.useState<"ltr" | "rtl">(
      dir === "rtl" ? "rtl" : "ltr"
    );

    React.useEffect(() => {
      if (dir === "rtl" || dir === "ltr") {
        setComputedDir(dir);
        return;
      }
      if (rootRef.current) {
        const { direction } = getComputedStyle(rootRef.current);
        setComputedDir(direction === "rtl" ? "rtl" : "ltr");
      }
    }, [dir]);

    const trackClasses = cn(
      switchStyles.track,
      sizeClasses.track,
      hasError && !disabled ? switchStyles.trackError : null,
      switchStyles.trackDisabled
    );

    const thumbClasses = cn(
      switchStyles.thumb,
      sizeClasses.thumb,
      sizeClasses.thumbTranslate,
      switchStyles.thumbUnchecked,
      switchStyles.thumbChecked,
      switchStyles.thumbDisabled
    );

    const switchStyle: React.CSSProperties & { ["--switch-dir"]?: string } = {
      ...(style as React.CSSProperties),
      "--switch-dir": computedDir === "rtl" ? "-1" : "1",
    };

    React.useImperativeHandle(ref, () => rootRef.current as HTMLButtonElement);

    return (
      <label
        className={cn(
          switchStyles.wrapper,
          disabled ? switchStyles.wrapperDisabled : switchStyles.wrapperEnabled,
          className
        )}
        htmlFor={inputId}
      >
        <SwitchPrimitive.Root
          ref={rootRef}
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={trackClasses}
          style={switchStyle}
          dir={dir}
          {...props}
        >
          <SwitchPrimitive.Thumb className={thumbClasses} />
        </SwitchPrimitive.Root>

        {(label || hint || error) && (
          <span className={switchStyles.labelStack}>
            {label ? (
              <span className={cn(sizeClasses.label, toneClasses)}>{label}</span>
            ) : null}
            {error ? (
              <span
                id={errorId}
                className={cn(switchStyles.meta, supportingTextClass)}
              >
                {error}
              </span>
            ) : hint ? (
              <span
                id={hintId}
                className={cn(switchStyles.meta, supportingTextClass)}
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

Switch.displayName = "Switch";
