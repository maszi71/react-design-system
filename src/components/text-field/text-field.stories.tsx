import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <path
      d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.2 0-7 2.2-7 5v1h14v-1c0-2.8-2.8-5-7-5Z"
      fill="currentColor"
    />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <path
      d="M12 5c-5 0-9.3 3.1-11 7 1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7Zm0 11a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
      fill="currentColor"
    />
  </svg>
);

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
    startIcon: undefined,
    endIcon: undefined,
    onEndIconClick: undefined,
  },
  argTypes: {
    disabled: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    onChange: { action: "changed" },
    startIcon: { control: false },
    endIcon: { control: false },
    onEndIconClick: { control: false },
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
          <TextField
            label="Full name"
            placeholder="Jane Doe"
            startIcon={<UserIcon />}
          />
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
          <TextField
            label="نام کامل"
            placeholder="مثال: سارا رضایی"
            endIcon={<UserIcon />}
          />
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

export const TextFieldWithActionIcon: Story = {
  render: () => <TextFieldWithActionIconStory />,
};

const TextFieldWithActionIconStory = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <TextField
      label="Password"
      type={isVisible ? "text" : "password"}
      placeholder="••••••••"
      endIcon={<EyeIcon />}
      endIconAriaLabel={isVisible ? "Hide password" : "Show password"}
      onEndIconClick={() => setIsVisible((prev) => !prev)}
    />
  );
};
