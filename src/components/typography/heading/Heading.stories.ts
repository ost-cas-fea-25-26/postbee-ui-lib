import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './Heading';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407-112&t=cunwm1yb3j7KAYAN-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading level 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading level 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading level 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading level 4',
  },
};
