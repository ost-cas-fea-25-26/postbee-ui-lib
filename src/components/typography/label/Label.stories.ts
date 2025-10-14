import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta = {
  title: 'Components/Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407-112&t=cunwm1yb3j7KAYAN-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SM: Story = {
  args: {
    children: 'Label sm',
    size: 'sm',
  },
};

export const MD: Story = {
  args: {
    children: 'Label md',
    size: 'md',
  },
};

export const LG: Story = {
  args: {
    children: 'Label lg',
    size: 'lg',
  },
};

export const XL: Story = {
  args: {
    children: 'Label xl',
    size: 'xl',
  },
};
