import { useState } from 'react';

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

const UploadWrapper = (args: unknown) => {
  const [files, setFiles] = useState([]);

  // @ts-expect-error Story
  return <Upload {...args} files={files} onChange={setFiles} />;
};

// Default empty Upload
export const Default: Story = {
  name: 'Default',
  // @ts-expect-error Story
  render: (args) => <UploadWrapper {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A simple drag-and-drop area with an upload button and file list below.',
      },
    },
  },
};
