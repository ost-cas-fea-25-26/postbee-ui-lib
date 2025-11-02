import type { Meta, StoryObj } from '@storybook/react-vite';

import { CopyButton } from './CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/Buttons/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=8862-2432&t=8r5vyDIDUhKWrEV4-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textToCopy: 'https://example.com/',
  },
};
