import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "filled",
    color: "primary",
    size: "lg",
    icon: false,
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
    icon: {
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
  args: {
    variant: "outline"
  }
};
