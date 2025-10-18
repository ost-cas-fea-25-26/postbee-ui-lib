import type { Meta, StoryObj } from '@storybook/react-vite';

const colors = [
  // primary shades
  'bg-primary-50',
  'bg-primary-100',
  'bg-primary-200',
  'bg-primary-300',
  'bg-primary-400',
  'bg-primary-500',
  'bg-primary-600',
  'bg-primary-700',
  'bg-primary-800',
  'bg-primary-900',
  'bg-primary-950',
  // secondary shades
  'bg-secondary-50',
  'bg-secondary-100',
  'bg-secondary-200',
  'bg-secondary-300',
  'bg-secondary-400',
  'bg-secondary-500',
  'bg-secondary-600',
  'bg-secondary-700',
  'bg-secondary-800',
  'bg-secondary-900',
  'bg-secondary-950',
  // tertiary shades
  'bg-tertiary-50',
  'bg-tertiary-100',
  'bg-tertiary-200',
  'bg-tertiary-300',
  'bg-tertiary-400',
  'bg-tertiary-500',
  'bg-tertiary-600',
  'bg-tertiary-700',
  'bg-tertiary-800',
  'bg-tertiary-900',
  'bg-tertiary-950',
];

const ColorSwatch = ({ color }: { color: string }) => {
  // Determine contrast text
  const isLight = color.endsWith('-50') || color.endsWith('-100') || color.endsWith('-200');
  const textColor = isLight ? 'text-black' : 'text-white';

  return (
    <div className="flex flex-col items-center">
      <div
        className={`p-sm my-xs hover:scale-105" rounded-lg border border-black/10 shadow-md transition-transform ${color}`}
      >
        <div className={`mt-2 text-sm font-semibold ${textColor}`}>{color}</div>
      </div>
    </div>
  );
};

const ColorSection = ({ group, groupColors }: { group: string; groupColors: string[] }) => (
  <div>
    <h2 className="border-secondary-200 mb-4 border-b pb-2 text-2xl font-bold capitalize">{group}</h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
      {groupColors.map((color) => (
        <ColorSwatch key={color} color={color} />
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
    <div className="min-h-screen space-y-16 bg-white p-8 font-sans">
      <ColorSection group="primary" groupColors={colors.filter((c) => c.startsWith('bg-primary'))} />
      <ColorSection group="secondary" groupColors={colors.filter((c) => c.startsWith('bg-secondary'))} />
      <ColorSection group="tertiary" groupColors={colors.filter((c) => c.startsWith('bg-tertiary'))} />
    </div>
  ),
};
