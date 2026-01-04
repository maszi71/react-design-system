import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import type { ToastVariant } from "./toast.types";
import { Button } from "@/components/button";

const IconInfo = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
    <path
      d="M10 6.5a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM9.1 9.5h1.8v5H9.1v-5Z"
      fill="currentColor"
    />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
    <path
      d="M6.5 10.5 9 13l4.5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconWarn = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path d="M10 3 18 17H2Z" fill="currentColor" opacity="0.2" />
    <path
      d="M10 7v5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="10" cy="14.5" r="1" fill="currentColor" />
  </svg>
);

const IconDanger = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
    <path
      d="M6 6 14 14M14 6 6 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const iconByVariant: Record<ToastVariant, React.ReactNode> = {
  default: <IconInfo />,
  info: <IconInfo />,
  success: <IconCheck />,
  warning: <IconWarn />,
  danger: <IconDanger />,
};

type ToastStoryArgs = React.ComponentProps<typeof Toast> & {
  viewportPosition?: React.ComponentProps<typeof ToastViewport>["position"];
};

const ToastStory = (args: ToastStoryArgs) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    const timer = window.setTimeout(() => setOpen(false), 4000);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <ToastProvider swipeDirection="right">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show toast
      </Button>
      <ToastViewport position={args.viewportPosition} />
      <Toast
        {...args}
        open={open}
        onOpenChange={setOpen}
        icon={args.variant ? iconByVariant[args.variant] : iconByVariant.default}
      >
        <ToastTitle>{args.variant ?? "default"} notification</ToastTitle>
        <ToastDescription>
          Your changes have been saved successfully.
        </ToastDescription>
        <div className="mt-2 flex gap-2">
          <ToastAction altText="Undo changes" onClick={() => setOpen(false)}>
            Undo
          </ToastAction>
          <ToastAction altText="View details" onClick={() => setOpen(false)}>
            View
          </ToastAction>
        </div>
      </Toast>
    </ToastProvider>
  );
};

const meta: Meta<ToastStoryArgs> = {
  title: "Components/Toast",
  component: Toast,
  args: {
    variant: "default",
    duration: 4000,
    viewportPosition: "bottom-end",
  },
  argTypes: {
    variant: {
      options: ["default", "info", "success", "warning", "danger"],
      control: { type: "inline-radio" },
    },
    viewportPosition: {
      options: [
        "bottom-start",
        "bottom-center",
        "bottom-end",
        "top-start",
        "top-center",
        "top-end",
      ],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const ToastPlayground: Story = {
  render: (args) => <ToastStory {...args} />,
};

export const ToastVariants: Story = {
  render: () => (
    <ToastProvider swipeDirection="right">
      {(["default", "info", "success", "warning", "danger"] as ToastVariant[]).map(
        (variant) => (
          <Toast
            key={variant}
            defaultOpen
            variant={variant}
            icon={iconByVariant[variant]}
            duration={1000000}
          >
            <ToastTitle>{variant} notification</ToastTitle>
            <ToastDescription>
              This is a {variant} toast with supporting text.
            </ToastDescription>
          </Toast>
        )
      )}
      <ToastViewport className="static w-auto max-w-none" />
    </ToastProvider>
  ),
};

export const ToastLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5">
          <ToastProvider swipeDirection="right">
            <Toast
              defaultOpen
              variant="success"
              icon={iconByVariant.success}
              duration={1000000}
            >
              <ToastTitle>Upload complete</ToastTitle>
              <ToastDescription>
                Your files were saved successfully.
              </ToastDescription>
            </Toast>
            <ToastViewport className="static w-full max-w-none" />
          </ToastProvider>
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 text-right">
          <ToastProvider swipeDirection="left">
            <Toast
              defaultOpen
              variant="success"
              icon={iconByVariant.success}
              duration={1000000}
            >
              <ToastTitle>بارگذاری انجام شد</ToastTitle>
              <ToastDescription>
                فایل‌های شما با موفقیت ذخیره شدند.
              </ToastDescription>
            </Toast>
            <ToastViewport className="static w-full max-w-none" />
          </ToastProvider>
        </div>
      </section>
    </div>
  ),
};
