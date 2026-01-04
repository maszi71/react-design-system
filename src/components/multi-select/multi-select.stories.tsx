import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./multi-select";
import type { MultiSelectOption } from "./multi-select.types";

const IconBox = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4 7.5h12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconCircle = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <circle
      cx="10"
      cy="10"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const IconTriangle = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M10 3 18 17H2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const options: MultiSelectOption[] = [
  { value: "design", label: "Design", startIcon: <IconCircle /> },
  { value: "engineering", label: "Engineering", startIcon: <IconBox /> },
  { value: "product", label: "Product", startIcon: <IconTriangle /> },
  { value: "marketing", label: "Marketing", disabled: true },
];

const rtlOptions: MultiSelectOption[] = [
  { value: "design", label: "طراحی", startIcon: <IconCircle /> },
  { value: "engineering", label: "مهندسی", startIcon: <IconBox /> },
  { value: "product", label: "محصول", startIcon: <IconTriangle /> },
  { value: "marketing", label: "بازاریابی", disabled: true },
];

const MultiSelectStory = (args: React.ComponentProps<typeof MultiSelect>) => {
  const [value, setValue] = React.useState<string[]>(args.value ?? []);

  React.useEffect(() => {
    setValue(args.value ?? []);
  }, [args.value]);

  const handleValueChange = (nextValue: string[]) => {
    setValue(nextValue);
    args.onValueChange?.(nextValue);
  };

  return (
    <MultiSelect {...args} value={value} onValueChange={handleValueChange} />
  );
};

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  args: {
    label: "Teams",
    placeholder: "Select teams",
    hint: "Choose as many as you need.",
    error: "",
    disabled: false,
    size: "lg",
    value: ["design"],
    options,
    searchable: true,
  },
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
    disabled: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    searchable: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    onValueChange: { action: "changed" },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const MultiSelectPlayground: Story = {
  render: (args) => <MultiSelectStory {...args} />,
};

export const MultiSelectLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 space-y-5">
          <MultiSelect
            label="Teams"
            placeholder="Select teams"
            options={options}
            defaultValue={["design"]}
          />
          <MultiSelect
            label="Owners"
            placeholder="Choose owners"
            hint="You can update this later."
            options={options}
            defaultValue={["engineering", "product"]}
          />
          <MultiSelect
            label="Status"
            placeholder="Pick statuses"
            error="Select at least one status."
            options={options}
          />
          <MultiSelect
            label="Disabled"
            placeholder="Disabled"
            disabled
            options={options}
            defaultValue={["design"]}
          />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 space-y-5">
          <MultiSelect
            dir="rtl"
            label="تیم‌ها"
            placeholder="انتخاب تیم‌ها"
            options={rtlOptions}
            defaultValue={["design"]}
          />
          <MultiSelect
            dir="rtl"
            label="مالکان"
            placeholder="انتخاب مالکان"
            hint="بعدا می‌توانید ویرایش کنید."
            options={rtlOptions}
            defaultValue={["engineering", "product"]}
          />
          <MultiSelect
            dir="rtl"
            label="وضعیت"
            placeholder="انتخاب وضعیت"
            error="حداقل یک وضعیت را انتخاب کنید."
            options={rtlOptions}
          />
          <MultiSelect
            dir="rtl"
            label="غیرفعال"
            placeholder="غیرفعال"
            disabled
            options={rtlOptions}
            defaultValue={["design"]}
          />
        </div>
      </section>
    </div>
  ),
};
