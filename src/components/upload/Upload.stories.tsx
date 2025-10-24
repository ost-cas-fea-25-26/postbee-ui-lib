import type { Meta, StoryObj } from '@storybook/react';
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

// Upload with preloaded files (example)
export const WithFiles: Story = {
  name: 'With Files',
  render: () => {
    // Just render the component with a note about simulated files
    return (
      <div className="p-4">
        <Upload />
        <p className="text-secondary-400 mt-4 text-center text-xs">(Simulated files can be added via the Upload button)</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload component usage; users can add files via the button.',
      },
    },
  },
};
