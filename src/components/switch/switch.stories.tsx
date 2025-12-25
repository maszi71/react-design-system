import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const SwitchStory = (args: React.ComponentProps<typeof Switch>) => {
  const [checked, setChecked] = React.useState(Boolean(args.checked));

  React.useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Switch
      {...args}
      checked={checked}
      onCheckedChange={(value) => setChecked(value)}
    />
  );
};

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  args: {
    label: "Label text",
    hint: "Hint text can appear here.",
    error: "",
    checked: false,
    disabled: false,
    size: "lg",
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
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchPlayground: Story = {
  render: (args) => <SwitchStory {...args} />,
};

export const SwitchLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 space-y-5">
          <Switch label="Notifications" defaultChecked />
          <Switch label="Marketing emails" hint="Weekly updates" />
          <Switch label="Location access" error="Please enable." />
          <Switch label="Disabled option" disabled />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 space-y-5">
          <Switch label="اعلان‌ها" defaultChecked />
          <Switch label="ایمیل‌های تبلیغاتی" hint="به‌صورت هفتگی" />
          <Switch label="دسترسی موقعیت" error="لطفاً فعال کنید." />
          <Switch label="گزینه غیرفعال" disabled />
        </div>
      </section>
    </div>
  ),
};
