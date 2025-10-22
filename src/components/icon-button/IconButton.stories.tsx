import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { fn } from 'storybook/test';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    icon: 'edit',
    label: undefined,
    size: 'md',
    ariaLabel: 'Icon button',
    onClick: fn(),
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    icon: { control: 'text' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// --- Stories ----------------------------------------------------

export const Default: Story = {
  args: {
    icon: 'edit',
  },
  parameters: {
    docs: {
      description: { story: 'Simple IconButton with only an icon.' },
    },
  },
};

export const WithLabel: Story = {
  args: {
    icon: 'edit',
    label: 'Edit',
    size: 'md',
  },
  parameters: {
    docs: {
      description: { story: 'IconButton with an icon and a label below.' },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'IconButton available in small, medium, and large sizes.' },
    },
  },
};
