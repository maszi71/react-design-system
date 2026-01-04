import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import type { SelectOption } from "./select.types";

const options: SelectOption[] = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
  { value: "marketing", label: "Marketing", disabled: true },
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
          />
          <Select
            label="Owner"
            placeholder="Choose owner"
            hint="You can update this later."
            options={options}
          />
          <Select
            label="Status"
            placeholder="Pick a status"
            error="Status is required."
            options={options}
          />
          <Select
            label="Disabled"
            placeholder="Disabled"
            disabled
            options={options}
          />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (Arabic)</h3>
        <div className="mt-5 space-y-5">
          <Select
            dir="rtl"
            label="Project"
            placeholder="Select a project"
            options={options}
          />
          <Select
            dir="rtl"
            label="Owner"
            placeholder="Choose owner"
            hint="You can update this later."
            options={options}
          />
          <Select
            dir="rtl"
            label="Status"
            placeholder="Pick a status"
            error="Status is required."
            options={options}
          />
          <Select
            dir="rtl"
            label="Disabled"
            placeholder="Disabled"
            disabled
            options={options}
          />
        </div>
      </section>
    </div>
  ),
};
