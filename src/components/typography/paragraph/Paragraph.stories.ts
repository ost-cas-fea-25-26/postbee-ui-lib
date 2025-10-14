import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
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
