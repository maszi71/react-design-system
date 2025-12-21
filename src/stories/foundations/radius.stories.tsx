import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Radius",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const RADII = [
  { key: "sm", label: "s", px: "4px", className: "rounded-sm", note: "برای اجزای کوچک مثل چیپ و ..."},
  { key: "md", label: "md", px: "8px", className: "rounded-md", note: "پیش‌فرض برای کارت‌ها و دکمه‌ها" },
  { key: "lg", label: "lg", px: "12px", className: "rounded-lg", note: "برای کانتینرهای بزرگ‌تر" },
  { key: "xlg", label: "xlg", px: "16px", className: "rounded-xl", note: "برای کارت‌های بزرگ و سطوح اصلی" },
  { key: "2xlg", label: "2xlg", px: "24px", className: "rounded-2xl", note: "برای کانتینرها/کامپوننت‌های بزرگ" },
  { key: "full", label: "Full", px: "999px", className: "rounded-full", note: "برای گرد کردن کامل" },
] as const;

function Sample({ className }: { className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-10 w-16 border border-border bg-surface ${className}`} />
      <div className={`h-10 w-10 border border-border bg-surface ${className}`} />
      <div className={`h-10 w-10 border border-border bg-primary ${className}`} />
    </div>
  );
}

export const Scale: Story = {
  render: () => (
    <div className="max-w-4xl space-y-6">
      <div>
        <div className="text-muted text-body">Radius</div>
        <h1 className="text-display-small text-text">Radius</h1>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-bg">
        <div className="grid grid-cols-[80px_80px_1fr] gap-6 p-6">
          <div className="text-muted text-body">Size</div>
          <div className="text-muted text-body">Value</div>
          <div className="text-muted text-body">Preview / Usage</div>

          {RADII.map((r) => (
            <div key={r.key} className="contents">
              <div className="text-body text-text">{r.label}</div>
              <div className="text-body text-muted">{r.px}</div>
              <div className="flex items-center justify-between gap-6">
                <Sample className={r.className} />
                <div className="text-body text-muted text-right">{r.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
