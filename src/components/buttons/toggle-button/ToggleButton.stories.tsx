import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleButton } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Buttons/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413-315&t=8r5vyDIDUhKWrEV4-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default',
    icon: 'mumble',
  },
};

export const DefaultActive: Story = {
  args: {
    text: 'Default',
    icon: 'mumble',
    isActive: true,
  },
};

export const CustomActive: Story = {
  args: {
    text: 'Default',
    icon: 'mumble',
    isActive: true,
    activeClassName: 'text-primary bg-primary-50',
    activeIconClassName: 'text-primary-800',
    className: 'hover:text-primary hover:bg-primary-50',
  },
};
