import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'md',
    isEditable: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isEditable: {
      control: 'boolean',
    },
    onEdit: { action: 'editClicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Accessible Avatar component built on top of Radix UI primitives, with optional 'edit' variant that displays an edit button overlay.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=8862-666&t=qxxR9geJaxBCzsRu-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// --- Variants ----------------------------------------------------

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: 'mumble-icon.png',
    size: 'md',
    alt: 'GitHub Avatar',
    fallback: 'GH',
  },
};

export const WithFallback: Story = {
  args: {
    src: '',
    fallback: 'JD',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      <Avatar {...args} size="sm" fallback="sm" />
      <Avatar {...args} size="md" fallback="md" />
      <Avatar {...args} size="lg" fallback="lg" />
      <Avatar {...args} size="xl" fallback="xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The Avatar supports small, medium, and large sizes.',
      },
    },
  },
};

export const Editable: Story = {
  args: {
    isEditable: true,
    size: 'xl',
    onEdit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The 'edit' variant shows an IconButton overlay at the bottom-right corner.",
      },
    },
  },
};
