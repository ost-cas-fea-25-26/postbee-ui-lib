import type { Meta, StoryObj } from '@storybook/react-vite';

import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = {
  title: 'Components/Buttons/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413-315&t=8r5vyDIDUhKWrEV4-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLikes: Story = {
  args: {},
};

export const WithLikes: Story = {
  args: {
    count: 10,
  },
};

export const WithInitialLike: Story = {
  args: {
    count: 10,
    initialIsLiked: true,
  },
};
