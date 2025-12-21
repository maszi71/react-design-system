import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const SAMPLE_FA =
  "درخت دوستی بنشان که کام دل به بار آرد";

type Row = {
  name: string;
  spec: string;
  className: string;
};

type Group = {
  title: string;
  rows: Row[];
};

const GROUPS: Group[] = [
  {
    title: "Display",
    rows: [
      { name: "Display/large", spec: "56 / Bold / 84 H", className: "ds-display-large" },
      { name: "Display/small", spec: "42 / DemiBold / 63 H", className: "ds-display-small" },
    ],
  },
  {
    title: "Headline",
    rows: [
      { name: "Headline/large", spec: "32 / Bold / 48 H", className: "ds-headline-large" },
      { name: "Headline/medium", spec: "28 / DemiBold / 42 H", className: "ds-headline-medium" },
      { name: "Headline/small", spec: "24 / Regular / 36 H", className: "ds-headline-small" },
    ],
  },
  {
    title: "Title",
    rows: [
      { name: "Title/large", spec: "16 / DemiBold / 24 H", className: "ds-title-large" },
      { name: "Title/medium", spec: "16 / Medium / 24 H", className: "ds-title-medium" },
      { name: "Title/small", spec: "14 / DemiBold / 20 H", className: "ds-title-small" },
    ],
  },
  {
    title: "Body",
    rows: [
      { name: "Body/large/Regular", spec: "16 / Regular / 24 H", className: "ds-body-large-regular" },
      { name: "Body/large/Light", spec: "16 / Light / 24 H", className: "ds-body-large-light" },

      { name: "Body/Medium/Medium", spec: "14 / Medium / 20 H", className: "ds-body-medium-medium" },
      { name: "Body/Medium/Regular", spec: "14 / Regular / 20 H", className: "ds-body-medium-regular" },

      { name: "Body/Small/Medium", spec: "12 / Medium / 18 H", className: "ds-body-small-medium" },
      { name: "Body/Small/Regular", spec: "12 / Regular / 18 H", className: "ds-body-small-regular" },
    ],
  },
  {
    title: "Subtitle",
    rows: [
      { name: "Subtitle/Medium", spec: "10 / DemiBold / 16 H", className: "ds-subtitle-medium" },
      { name: "Subtitle/Regular", spec: "10 / Medium / 16 H", className: "ds-subtitle-regular" },
    ],
  },
];

function GroupBlock({ group }: { group: Group }) {
  return (
    <section className="space-y-4">
      <h2 className="text-title text-text">{group.title}</h2>

      <div className="space-y-6">
        {group.rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[220px_180px_1fr] items-center gap-8 border-b border-border pb-6"
          >
            <div className="text-body text-muted">{row.name}</div>
            <div className="text-body text-muted">{row.spec}</div>

            <div className={`text-text ${row.className}`} dir="rtl">
              {SAMPLE_FA}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Spec: Story = {
  render: () => (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-body text-muted">Typeface</div>
        <h1 className="ds-display-small text-text">Typography</h1>
      </div>

      {GROUPS.map((g) => (
        <GroupBlock key={g.title} group={g} />
      ))}
    </div>
  ),
};
