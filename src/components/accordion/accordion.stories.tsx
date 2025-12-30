import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";
import type { AccordionProps } from "./accordion.types";

const sampleItems: AccordionProps["items"] = [
  {
    value: "item-1",
    title: "What is your return policy?",
    content:
      "Returns are accepted within 30 days of purchase as long as items are in original condition.",
  },
  {
    value: "item-2",
    title: "How long does shipping take?",
    content:
      "Standard shipping takes 3-5 business days. Express options are available at checkout.",
  },
  {
    value: "item-3",
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to most countries. Delivery times and fees vary by destination.",
    disabled: true,
  },
];

const AccordionStory = (args: AccordionProps) => {
  const [value, setValue] = React.useState<string | string[]>(
    args.defaultValue ?? (args.type === "multiple" ? [] : "")
  );

  React.useEffect(() => {
    setValue(args.defaultValue ?? (args.type === "multiple" ? [] : ""));
  }, [args.defaultValue, args.type]);

  return <Accordion {...args} value={value} onValueChange={setValue} />;
};

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    items: sampleItems,
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "inline-radio" },
    },
    collapsible: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
    items: { control: false },
    value: { control: false },
    onValueChange: { action: "valueChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionPlayground: Story = {
  render: (args) => <AccordionStory {...args} />,
};

export const AccordionLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5">
          <Accordion
            items={[
              {
                value: "faq-1",
                title: "Order tracking",
                content:
                  "Track your order from the account page under recent orders.",
              },
              {
                value: "faq-2",
                title: "Payment methods",
                content: "We accept all major credit cards and PayPal.",
              },
              {
                value: "faq-3",
                title: "Account security",
                content:
                  "Enable two-factor authentication for extra protection.",
              },
            ]}
            type="single"
            collapsible
            defaultValue="faq-1"
          />
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5">
          <Accordion
            items={[
              {
                value: "faq-rtl-1",
                title: "پیگیری سفارش",
                content:
                  "از بخش سفارش‌های اخیر در حساب کاربری وضعیت سفارش را ببینید.",
              },
              {
                value: "faq-rtl-2",
                title: "روش‌های پرداخت",
                content: "پرداخت با کارت‌های بانکی و پی‌پال امکان‌پذیر است.",
              },
              {
                value: "faq-rtl-3",
                title: "امنیت حساب",
                content: "برای امنیت بیشتر احراز هویت دو مرحله‌ای را فعال کنید.",
              },
            ]}
            type="single"
            collapsible
            defaultValue="faq-rtl-1"
          />
        </div>
      </section>
    </div>
  ),
};
