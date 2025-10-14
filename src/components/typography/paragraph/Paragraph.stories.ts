import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    design: {
      type: "figma",
      url: "https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407-112&t=cunwm1yb3j7KAYAN-4",
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MD: Story = {
  args: {
    children: 'Paragraph md',
    size: 'md',
  },
};

export const LG: Story = {
  args: {
    children: 'Paragraph lg',
    size: 'lg',
  },
};
