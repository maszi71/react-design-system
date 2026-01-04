import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import type { SelectOption } from "./select.types";

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

const options: SelectOption[] = [
  { value: "design", label: "Design", startIcon: <IconCircle /> },
  { value: "engineering", label: "Engineering", startIcon: <IconBox /> },
  { value: "product", label: "Product", startIcon: <IconTriangle /> },
  { value: "marketing", label: "Marketing", disabled: true },
];

const rtlOptions: SelectOption[] = [
  { value: "design", label: "طراحی", startIcon: <IconCircle /> },
  { value: "engineering", label: "مهندسی", startIcon: <IconBox /> },
  { value: "product", label: "محصول", startIcon: <IconTriangle /> },
  { value: "marketing", label: "بازاریابی", disabled: true },
];

const SelectStory = (args: React.ComponentProps<typeof Select>) => {
  const [value, setValue] = React.useState(args.value ?? "");

  React.useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  const handleValueChange = (nextValue: string) => {
    setValue(nextValue);
    args.onValueChange?.(nextValue);
  };

  return <Select {...args} value={value} onValueChange={handleValueChange} />;
};

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    label: "Team",
    placeholder: "Select team",
    hint: "Choose your primary team.",
    error: "",
    disabled: false,
    size: "lg",
    value: "",
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
type Story = StoryObj<typeof Select>;

export const SelectPlayground: Story = {
  render: (args) => <SelectStory {...args} />,
};

export const SelectLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 space-y-5">
          <Select
            label="Project"
            placeholder="Select a project"
            options={options}
            searchable
          />
          <Select
            label="Owner"
            placeholder="Choose owner"
            hint="You can update this later."
            options={options}
            searchable
          />
          <Select
            label="Status"
            placeholder="Pick a status"
            error="Status is required."
            options={options}
            searchable
          />
          <Select
            label="Disabled"
            placeholder="Disabled"
            disabled
            options={options}
            searchable
          />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 space-y-5">
          <Select
            dir="rtl"
            label="پروژه"
            placeholder="انتخاب پروژه"
            options={rtlOptions}
            searchable
          />
          <Select
            dir="rtl"
            label="مالک"
            placeholder="انتخاب مالک"
            hint="بعدا می‌توانید ویرایش کنید."
            options={rtlOptions}
            searchable
          />
          <Select
            dir="rtl"
            label="وضعیت"
            placeholder="انتخاب وضعیت"
            error="انتخاب وضعیت الزامی است."
            options={rtlOptions}
            searchable
          />
          <Select
            dir="rtl"
            label="غیرفعال"
            placeholder="غیرفعال"
            disabled
            options={rtlOptions}
            searchable
          />
        </div>
      </section>
    </div>
  ),
};
