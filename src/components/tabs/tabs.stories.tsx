import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./tabs";

const IconStar = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path
      d="M10 2.5 12.4 7l4.9.7-3.6 3.5.9 4.9-4.6-2.4-4.6 2.4.9-4.9-3.6-3.5 4.9-.7Z"
      fill="currentColor"
    />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <path d="M10 2 4 11h5l-1 7 8-11h-5l1-5Z" fill="currentColor" />
  </svg>
);

const IconCircle = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-full w-full">
    <circle
      cx="10"
      cy="10"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const TabsPlayground: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="underline" size="lg">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        This is the overview panel.
      </TabsContent>
      <TabsContent value="activity">
        Recent activity appears here.
      </TabsContent>
      <TabsContent value="settings">
        Settings content.
      </TabsContent>
    </Tabs>
  ),
};

export const TabsVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text">Underline</h3>
        <Tabs defaultValue="design">
          <TabsList variant="underline" size="lg">
            <TabsTrigger value="design" startIcon={<IconStar />}>
              Design
            </TabsTrigger>
            <TabsTrigger value="build">Build</TabsTrigger>
            <TabsTrigger value="launch">Launch</TabsTrigger>
          </TabsList>
          <TabsContent value="design">Design content.</TabsContent>
          <TabsContent value="build">Build content.</TabsContent>
          <TabsContent value="launch">Launch content.</TabsContent>
        </Tabs>
      </section>
      <section>
        <h3 className="text-sm font-semibold text-text">Pill</h3>
        <Tabs defaultValue="plan">
          <TabsList variant="pill" size="sm">
            <TabsTrigger value="plan" variant="pill" startIcon={<IconStar />}>
              Plan
            </TabsTrigger>
            <TabsTrigger value="review" variant="pill" startIcon={<IconBolt />}>
              Review
            </TabsTrigger>
            <TabsTrigger value="ship" variant="pill" startIcon={<IconCircle />}>
              Ship
            </TabsTrigger>
          </TabsList>
          <TabsContent value="plan">Plan content.</TabsContent>
          <TabsContent value="review">Review content.</TabsContent>
          <TabsContent value="ship">Ship content.</TabsContent>
        </Tabs>
      </section>
    </div>
  ),
};

export const TabsFullWidth: Story = {
  render: () => (
    <Tabs defaultValue="design">
      <TabsList variant="pill" size="lg" fullWidth>
        <TabsTrigger value="design" variant="pill" fullWidth>
          Design
        </TabsTrigger>
        <TabsTrigger value="build" variant="pill" fullWidth>
          Build
        </TabsTrigger>
        <TabsTrigger value="launch" variant="pill" fullWidth>
          Launch
        </TabsTrigger>
      </TabsList>
      <TabsContent value="design">Design content.</TabsContent>
      <TabsContent value="build">Build content.</TabsContent>
      <TabsContent value="launch">Launch content.</TabsContent>
    </Tabs>
  ),
};

export const TabsLtrRtlShowcase: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <section
        dir="ltr"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">LTR (English)</h3>
        <div className="mt-5">
          <Tabs defaultValue="overview">
            <TabsList variant="underline" size="lg">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Overview content.</TabsContent>
            <TabsContent value="activity">Activity content.</TabsContent>
            <TabsContent value="settings">Settings content.</TabsContent>
          </Tabs>
        </div>
      </section>
      <section
        dir="rtl"
        className="rounded-lg border border-border bg-surface-2 p-5"
      >
        <h3 className="text-sm font-semibold text-text">RTL (فارسی)</h3>
        <div className="mt-5 text-right">
          <Tabs defaultValue="overview">
            <TabsList variant="underline" size="lg">
              <TabsTrigger value="overview">نمای کلی</TabsTrigger>
              <TabsTrigger value="activity">فعالیت‌ها</TabsTrigger>
              <TabsTrigger value="settings">تنظیمات</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">محتوای نمای کلی.</TabsContent>
            <TabsContent value="activity">محتوای فعالیت‌ها.</TabsContent>
            <TabsContent value="settings">محتوای تنظیمات.</TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  ),
};
