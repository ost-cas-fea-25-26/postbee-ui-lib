import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
import { userEvent, within, expect } from 'storybook/test';
import { useState } from 'react';

const meta = {
  title: 'Components/Fields/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=8862-2726&t=aT39HifqEL8q0m4l-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      // The div below acts as your 400px container
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaDefault: Story = {
  args: {
    name: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('Enter text');

    // Type something
    await userEvent.type(textarea, 'Hello Mumble!');

    // Assert that it worked
    await expect(textarea).toHaveValue('Hello Mumble!');
  },
};

export const TextareaError: Story = {
  args: {
    name: 'Error',
    label: 'Label',
    placeholder: 'Enter text',
    errorMessage: 'Field is required',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const error = await canvas.findByText('Field is required');
    await expect(error).toBeInTheDocument();
  },
};

export const TextareaWithIcon: Story = {
  args: {
    name: 'WithIcon',
    label: 'Label',
    placeholder: 'Enter text',
    appendInnerIcon: 'mumble',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('Enter text');
    await userEvent.type(textarea, 'Typing with an icon!');
    await expect(textarea).toHaveValue('Typing with an icon!');
  },
};

export const TextareaWithClickableIcon: Story = {
  args: {
    name: 'ClickableIcon',
    label: 'Label',
    placeholder: 'Enter text',
    appendInnerIcon: 'mumble',
  },
  render: (args) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
      setMessage('Icon clicked');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    };

    return (
      <div className="relative">
        <Textarea {...args} onAppendInnerIconClick={handleClick} />
        {message && <div className="absolute mt-2 text-base text-xs">{message}</div>}
      </div>
    );
  },
};
