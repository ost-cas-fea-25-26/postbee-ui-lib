import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonDefault: Story = {
  args: {
    icon: 'mumble',
  },
};
