import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=404-10&t=cunwm1yb3j7KAYAN-0',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Tertiary',
    variant: 'tertiary',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'With icon',
    icon: 'mumble',
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'mumble',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    text: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    text: 'Button',
  },
};
