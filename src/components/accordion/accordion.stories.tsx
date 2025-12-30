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

