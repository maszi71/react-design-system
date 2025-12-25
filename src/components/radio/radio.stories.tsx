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
