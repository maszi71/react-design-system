import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

type SwatchProps = {
  title: string;
  tokens: Array<{ name: string; className: string }>;
};

function SwatchSection({ title, tokens }: SwatchProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-title text-text">{title}</h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tokens.map((t) => (
          <div
            key={t.name}
            className="rounded-md border border-border bg-surface p-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-10 w-10 rounded border border-border ${t.className}`}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="text-body text-text">{t.name}</div>
                <div className="text-body-sm text-muted truncate">
                  {t.className}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Palette: Story = {
  render: () => (
    <div className="space-y-10">
      {/* Core semantics (what components typically use) */}
      <SwatchSection
        title="Core semantics"
        tokens={[
          { name: "bg", className: "bg-bg" },
          { name: "surface", className: "bg-surface" },
          { name: "surface-2", className: "bg-surface-2" },
          { name: "text", className: "bg-text" },
          { name: "muted", className: "bg-muted" },
          { name: "border", className: "bg-border" },
          { name: "primary", className: "bg-primary" },
          { name: "secondary", className: "bg-secondary" },
          { name: "danger", className: "bg-danger" },
          { name: "warning", className: "bg-warning" },
          { name: "success", className: "bg-success" },
        ]}
      />

      {/* Figma-aligned semantic groups */}
      <SwatchSection
        title="Surface (Figma)"
        tokens={[
          { name: "surface/primary", className: "bg-surface-primary" },
          { name: "surface/disable", className: "bg-surface-disable" },
          { name: "surface/bg-white", className: "bg-surface-bg-white" },
          { name: "surface/bg-soft", className: "bg-surface-bg-soft" },
        ]}
      />

      <SwatchSection
        title="Content (Figma)"
        tokens={[
          { name: "content/50", className: "bg-content-50" },
          { name: "content/100", className: "bg-content-100" },
          { name: "content/150", className: "bg-content-150" },
          { name: "content/200", className: "bg-content-200" },
          { name: "content/250", className: "bg-content-250" },
          { name: "content/300", className: "bg-content-300" },
          { name: "content/primary-300", className: "bg-content-primary-300" },
        ]}
      />

      <SwatchSection
        title="Border (Figma)"
        tokens={[
          { name: "border/neutral", className: "bg-border-neutral" },
          { name: "border/primary", className: "bg-border-primary" },
          { name: "border/secondary", className: "bg-border-secondary" },
        ]}
      />
    </div>
  ),
};
