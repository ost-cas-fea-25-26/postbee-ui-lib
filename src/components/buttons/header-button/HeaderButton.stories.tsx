import type { Meta, StoryObj } from '@storybook/react';
import { HeaderButton } from './HeaderButton';
import { fn } from 'storybook/test';

const meta: Meta<typeof HeaderButton> = {
  title: 'Components/Buttons/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  args: {
    icon: 'edit',
    text: 'Edit',
    size: 'md',
    onClick: fn(),
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    icon: { control: 'select' },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
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

// --- Stories ----------------------------------------------------

export const Default: Story = {
  parameters: {
    docs: {
      description: { story: 'HeaderButton with an icon and a label below.' },
    },
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'edit',
    text: undefined,
  },
  parameters: {
    docs: {
      description: { story: 'Simple HeaderButton with only an icon.' },
    },
  },
};

export const Sizes: Story = {
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
