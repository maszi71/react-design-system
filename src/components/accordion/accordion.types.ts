import type * as React from "react";

export type AccordionItem = {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  collapsible?: boolean;
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}
