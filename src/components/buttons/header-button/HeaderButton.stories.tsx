import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Avatar } from '../../avatar';
import { HeaderButton } from './HeaderButton';

const meta: Meta<typeof HeaderButton> = {
  title: 'Components/Buttons/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  args: {
    size: 'md',
    onClick: fn(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=8862-2489&t=qxxR9geJaxBCzsRu-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderButton>;

export const Default: Story = {
  args: {
    icon: 'edit',
    text: 'Edit',
  },
  parameters: {
    docs: {
      description: { story: 'HeaderButton with an icon and a label below.' },
    },
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'edit',
  },
  parameters: {
    docs: {
      description: { story: 'Simple HeaderButton with only an icon.' },
    },
  },
};

export const WithAvatar: Story = {
  render: (args) => (
    <HeaderButton {...args}>
      <Avatar size="sm" />
    </HeaderButton>
  ),
  parameters: {
    docs: {
      description: { story: 'HeaderButton with an Avatar as children.' },
    },
  },
};

export const Settings: Story = {
  args: {
    text: 'Settings',
    icon: 'settings',
    iconAnimation: 'rotate',
  },
  parameters: {
    docs: {
      description: { story: 'HeaderButton example for settings.' },
    },
  },
};

export const Sizes: Story = {
  args: {
    icon: 'edit',
    text: 'Edit',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <HeaderButton {...args} size="sm" />
      <HeaderButton {...args} size="md" />
      <HeaderButton {...args} size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'HeaderButton available in small, medium, and large sizes.' },
    },
  },
};
