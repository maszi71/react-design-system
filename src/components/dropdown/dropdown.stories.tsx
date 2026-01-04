import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "./dropdown";
import { Button } from "@/components/button";

const IconBox = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4 7.5h12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DropdownPlayground: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">More actions</Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownLabel>Quick actions</DropdownLabel>
        <DropdownItem startIcon={<IconBox />}>Duplicate</DropdownItem>
        <DropdownItem startIcon={<IconBox />}>Share</DropdownItem>
        <DropdownItem startIcon={<IconBox />} disabled>
          Archive
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem startIcon={<IconBox />} className="text-danger">
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const DropdownLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5">
          <Dropdown>
            <DropdownTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownTrigger>
            <DropdownContent align="start">
              <DropdownItem startIcon={<IconBox />}>New project</DropdownItem>
              <DropdownItem startIcon={<IconBox />}>Invite team</DropdownItem>
              <DropdownItem startIcon={<IconBox />}>Settings</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5">
          <Dropdown>
            <DropdownTrigger asChild>
              <Button variant="outline">باز کردن منو</Button>
            </DropdownTrigger>
            <DropdownContent align="start" dir="rtl">
              <DropdownItem startIcon={<IconBox />}>پروژه جدید</DropdownItem>
              <DropdownItem startIcon={<IconBox />}>دعوت تیم</DropdownItem>
              <DropdownItem startIcon={<IconBox />}>تنظیمات</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      </section>
    </div>
  ),
};
