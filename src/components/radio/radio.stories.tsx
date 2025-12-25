import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./radio";

const RadioStory = (args: React.ComponentProps<typeof Radio>) => {
  const [checked, setChecked] = React.useState(Boolean(args.checked));

  React.useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Radio
      {...args}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  args: {
    label: "Label text",
    hint: "Hint text can appear here.",
    error: "",
    checked: false,
    disabled: false,
    size: "lg",
    name: "radio-example",
  },
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
    checked: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    disabled: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioPlayground: Story = {
  render: (args) => <RadioStory {...args} />,
};

export const RadioLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 space-y-5">
          <Radio name="radio-ltr" label="Standard delivery" checked />
          <Radio name="radio-ltr" label="Express delivery" hint="2-3 days" />
          <Radio
            name="radio-ltr"
            label="Pickup"
            error="Please select an option."
          />
          <Radio name="radio-ltr" label="Disabled option" disabled />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 space-y-5">
          <Radio name="radio-rtl" label="ارسال عادی" checked />
          <Radio name="radio-rtl" label="ارسال سریع" hint="۲ تا ۳ روز" />
          <Radio name="radio-rtl" label="تحویل حضوری" error="یک گزینه را انتخاب کنید." />
          <Radio name="radio-rtl" label="گزینه غیرفعال" disabled />
        </div>
      </section>
    </div>
  ),
};
