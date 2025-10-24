import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: 'An accessible link component with underlined styling and smooth hover transitions.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406-47&t=qxxR9geJaxBCzsRu-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Destination URL for the link.',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'Specifies where to open the linked document.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the link and renders it as non-clickable text.',
    },
    className: {
      control: 'text',
      description: 'Additional custom CSS classes.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '/about',
    children: 'Visit About Page',
  },
  parameters: {
    docs: {
      description: {
        story: 'A simple internal link with default underline styling.',
      },
    },
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: 'Visit Example.com',
  },
  parameters: {
    docs: {
      description: {
        story: "An external link that opens in a new tab, automatically adding `rel='noopener noreferrer'` for security.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true,
    children: 'Disabled Link',
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled link rendered as non-interactive text with muted color.',
      },
    },
  },
};
