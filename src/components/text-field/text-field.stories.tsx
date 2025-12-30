import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";

const TextFieldStory = (args: React.ComponentProps<typeof TextField>) => {
  const [value, setValue] = React.useState(args.value ?? "");

  React.useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  args: {
    label: "Label text",
    placeholder: "Type here...",
    hint: "Hint text can appear here.",
    error: "",
    disabled: false,
    type: "text",
    value: "",
    maxLength: 50,
  },
  argTypes: {
    disabled: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldPlayground: Story = {
  render: (args) => <TextFieldStory {...args} />,
};

export const TextFieldLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 space-y-5">
          <TextField label="Full name" placeholder="Jane Doe" />
          <TextField
            label="Email address"
            placeholder="hello@example.com"
            hint="We will never share your email."
          />
          <TextField
            label="Phone number"
            placeholder="(555) 123-4567"
            error="Please enter a valid phone number."
          />
          <TextField label="Disabled field" disabled placeholder="Disabled" />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 space-y-5">
          <TextField label="نام کامل" placeholder="مثال: سارا رضایی" />
          <TextField
            label="ایمیل"
            placeholder="hello@example.com"
            hint="ایمیل شما محرمانه می‌ماند."
          />
          <TextField
            label="شماره تماس"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            error="لطفا شماره صحیح وارد کنید."
          />
          <TextField label="فیلد غیرفعال" disabled placeholder="غیرفعال" />
        </div>
      </section>
    </div>
  ),
};
