import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

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

const ChevronIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M5 7.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M6 6l8 8M14 6l-8 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

type TagStoryArgs = React.ComponentProps<typeof Tag> & {
  removable?: boolean;
};

const meta: Meta<TagStoryArgs> = {
  title: "Components/Tag",
  component: Tag,
  args: {
    children: "Tag",
    variant: "filled",
    color: "primary",
    size: "lg",
    state: "default",
    startIcon: false,
    endIcon: false,
    removable: false,
  },
  argTypes: {
    variant: {
      options: ["filled", "outline"],
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
    state: {
      options: ["default", "selected", "deactive"],
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
    removable: {
      options: [false, true],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<TagStoryArgs>;

export const TagPlayground: Story = {
  render: ({ startIcon, endIcon, removable, children, ...args }) => (
    <Tag
      {...args}
      startIcon={startIcon ? <PlusIcon /> : undefined}
      endIcon={endIcon ? <ChevronIcon /> : undefined}
      onRemove={removable ? () => {} : undefined}
      removeIcon={removable ? <CloseIcon /> : undefined}
    >
      {children}
    </Tag>
  ),
};

export const TagLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Tag>New</Tag>
          <Tag variant="outline" color="secondary">
            Featured
          </Tag>
          <Tag color="warn">Limited</Tag>
          <Tag state="selected">Selected</Tag>
          <Tag startIcon={<PlusIcon />}>Add tag</Tag>
          <Tag onRemove={() => {}} removeIcon={<CloseIcon />}>
            Removable
          </Tag>
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Tag>جدید</Tag>
          <Tag variant="outline" color="secondary">
            ویژه
          </Tag>
          <Tag color="warn">محدود</Tag>
          <Tag state="selected">انتخاب‌شده</Tag>
          <Tag startIcon={<PlusIcon />}>افزودن برچسب</Tag>
          <Tag onRemove={() => {}} removeIcon={<CloseIcon />}>
            قابل حذف
          </Tag>
        </div>
      </section>
    </div>
  ),
};
