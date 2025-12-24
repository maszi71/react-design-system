import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const CheckboxStory = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = React.useState(Boolean(args.checked));

  React.useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: "Label text",
    hint: "Hint text can appear here.", // Helper text (can be ReactNode)
    error: "", // Error text (can be ReactNode)
    checked: false,
    indeterminate: false,
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
    indeterminate: {
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
type Story = StoryObj<typeof Checkbox>;

export const CheckboxPlayground: Story = {
  render: (args) => <CheckboxStory {...args} />,
};
