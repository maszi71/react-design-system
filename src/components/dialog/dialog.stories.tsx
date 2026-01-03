import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "@/components/button";

const meta: Meta<typeof DialogContent> = {
  title: "Components/Dialog",
  component: DialogContent,
  args: {
    size: "md",
    showCloseButton: true,
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
    showCloseButton: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DialogContent>;

export const DialogPlayground: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Give your project a name and description so teammates can find it
          later.
        </DialogDescription>
        <DialogBody>
          <div className="rounded-lg border border-border bg-surface p-4">
            Dialog body content goes here.
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
