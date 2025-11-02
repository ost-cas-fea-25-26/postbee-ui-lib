import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommentsButton } from './CommentsButton';

const meta: Meta<typeof CommentsButton> = {
  title: 'Components/Buttons/CommentsButton',
  component: CommentsButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413-315&t=8r5vyDIDUhKWrEV4-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoComments: Story = {
  args: {},
};

export const WithComments: Story = {
  args: {
    count: 10,
  },
};
