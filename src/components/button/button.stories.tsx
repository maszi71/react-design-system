import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M10 4.5v11M4.5 10h11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M4.5 10h11M11.5 5.5l4.5 4.5-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M15.5 10h-11M8.5 5.5L4 10l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "filled",
    color: "primary",
    size: "lg",
    iconOnly: false,
    startIcon: false,
    endIcon: false,
    rounded: true,
    disabled: false,
    type: "button",
  },
  argTypes: {
    variant: {
      options: ["filled", "outline", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["primary", "secondary", "tertiary", "warn", "danger"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
    iconOnly: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    startIcon: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    endIcon: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    rounded: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "inline-radio" },
    },
    disabled: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPlayground: Story = {
  render: ({ iconOnly, startIcon, endIcon, children, ...args }) => {
    const resolvedChildren = iconOnly ? <PlusIcon /> : children;

    return (
      <Button
        {...args}
        iconOnly={iconOnly}
        startIcon={startIcon ? <PlusIcon /> : undefined}
        endIcon={endIcon ? <ArrowRightIcon /> : undefined}
      >
        {resolvedChildren}
      </Button>
    );
  },
};

export const ButtonLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="text">Text</Button>
          <Button startIcon={<PlusIcon />}>Add item</Button>
          <Button endIcon={<ArrowRightIcon />}>Continue</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button>اصلی</Button>
          <Button variant="outline" color="secondary">
            ثانویه
          </Button>
          <Button variant="text">متنی</Button>
          <Button endIcon={<PlusIcon />}>افزودن مورد</Button>
          <Button startIcon={<ArrowLeftIcon />}>ادامه</Button>
          <Button disabled>غیرفعال</Button>
        </div>
      </section>
    </div>
  ),
};
