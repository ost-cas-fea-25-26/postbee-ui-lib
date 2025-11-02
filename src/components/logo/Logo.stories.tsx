import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo, type LogoName } from './Logo';
import { LOGO_COMPONENTS } from './constants';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 20,
        max: 200,
      },
      description: 'Icon size',
    },
  },
  args: {
    logo: 'violet-01',
    size: 100,
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

const LOGO_NAMES = Object.keys(LOGO_COMPONENTS) as LogoName[];

export const Logos: Story = {
  render: (args) => (
    <div className="gap-lg grid grid-cols-4">
      {LOGO_NAMES.map((logoName) => (
        <div
          key={logoName}
          className="border border-dashed border-gray-400 p-4 flex flex-col items-center justify-center bg-primary-50"
          style={{ width: 140, height: 140 }}
        >
          <Logo logo={logoName} size={args.size} />
          <p className="text-secondary mt-xs text-sm">{logoName}</p>
        </div>
      ))}
    </div>
  ),
};
