import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon, type IconName } from './Icon';
import { ICON_COMPONENTS } from './constants';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'white'],
        description: 'Icon color',
      },
    },
    size: {
      control: {
        type: 'range',
        min: 8,
        max: 64,
      },
      description: 'Icon size',
    },
  },
  args: {
    icon: 'arrow-down', // set as default, just to satisfy the type
    size: 16,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

const ICON_NAMES = Object.keys(ICON_COMPONENTS) as IconName[];

export const Icons: Story = {
  render: (args) => (
    <div className="gap-lg grid grid-cols-4">
      {ICON_NAMES.map((iconName) => (
        <div key={iconName}>
          <Icon icon={iconName} color={args.color} size={args.size} />
          <p className="text-secondary mt-xs text-sm">{iconName}</p>
        </div>
      ))}
    </div>
  ),
};
