import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418-97&t=8r5vyDIDUhKWrEV4-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Username',
    icon: 'profile',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Timestamp',
    variant: 'secondary',
    icon: 'time',
  },
};
