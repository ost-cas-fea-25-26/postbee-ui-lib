import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const colorGroups = {
  primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  secondary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  tertiary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};

// Helper to calculate if text should be white or black based on L* value
const getContrastText = (colorVar: string) => {
  // For simplicity, we assume primary shades >= 500 are dark
  return colorVar.includes('-50') || colorVar.includes('-100') || colorVar.includes('-200') ? 'black' : 'white';
};

const ColorSwatch = ({ name, shade }: { name: string; shade: number }) => {
  const colorVar = `--color-${name}-${shade}`;
  const textColor = getContrastText(colorVar);

  return (
    <div className="flex flex-col items-center">
      <div
        className="p-sm my-xs h-20 w-28 rounded-lg border border-black/10 shadow-md transition-transform hover:scale-105"
        style={{ backgroundColor: `var(${colorVar})` }}
      >
        <div className="mt-2 text-sm font-semibold" style={{ color: textColor }}>
          {name}-{shade}
        </div>
      </div>
    </div>
  );
};

const ColorSection = ({ name }: { name: keyof typeof colorGroups }) => (
  <div>
    <h2 className="mb-4 border-b border-gray-200 pb-2 text-2xl font-bold capitalize dark:border-gray-700">{name}</h2>
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
      {colorGroups[name].map((shade) => (
        <ColorSwatch key={shade} name={name} shade={shade} />
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=457-3542&t=cunwm1yb3j7KAYAN-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div className="min-h-screen space-y-16 bg-white p-8 font-sans dark:bg-neutral-950">
      <ColorSection name="primary" />
      <ColorSection name="secondary" />
      <ColorSection name="tertiary" />
    </div>
  ),
};
