import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  args: {
    variant: "line",
    radius: "md",
    animate: "pulse",
    width: "100%",
    height: undefined,
  },
  argTypes: {
    variant: {
      options: ["line", "rect", "circle"],
      control: { type: "inline-radio" },
    },
    radius: {
      options: ["sm", "md", "lg", "full"],
      control: { type: "inline-radio" },
    },
    animate: {
      options: ["pulse", "shimmer", "none"],
      control: { type: "inline-radio" },
    },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonPlayground: Story = {
  args: {
    radius: "full"
  },

  render: (args) => (
    <div className="w-90">
      <Skeleton
        {...args}
        {...(args.variant === "circle" &&
        args.height === undefined &&
        (args.width === undefined || args.width === "100%")
          ? { width: 40, height: 40 }
          : null)}
      />
    </div>
  )
};
