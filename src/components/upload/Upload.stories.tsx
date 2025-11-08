import type { Meta, StoryObj } from '@storybook/react-vite';

import { Upload } from './Upload';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413-288&t=qxxR9geJaxBCzsRu-4',
    },
    docs: {
      description: {
        component:
          'The **Upload** component provides a drag-and-drop file uploader with a clean layout, file list, and removal functionality.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Upload>;

// Default empty Upload
export const Default: Story = {
  name: 'Default',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A simple drag-and-drop area with an upload button and file list below.',
      },
    },
  },
};
