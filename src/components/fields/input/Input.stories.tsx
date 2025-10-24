import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { useState } from 'react';
import { userEvent, within, expect } from 'storybook/test';

const meta = {
  title: 'Components/Fields/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437-1227&t=p0ajBapEi6pQC83u-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    name: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter text');

    // Type something
    await userEvent.type(input, 'Hello Mumble!');

    // Assert that it worked
    await expect(input).toHaveValue('Hello Mumble!');
  },
};

export const InputError: Story = {
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

export const InputWithIcon: Story = {
  args: {
    name: 'WithIcon',
    label: 'Label',
    placeholder: 'Enter text',
    appendInnerIcon: 'mumble',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'Typing with an icon!');
    await expect(input).toHaveValue('Typing with an icon!');
  },
};

export const InputWithClickableIcon: Story = {
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
        <Input {...args} onAppendInnerIconClick={handleClick} />
        {message && <div className="absolute mt-2 text-base text-xs">{message}</div>}
      </div>
    );
  },
};

export const InputPassword: Partial<Story> = {
  render() {
    const [inputType, setInputType] = useState<'password' | 'text'>('password');
    function onClickEyeIcon() {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
    return (
      <Input
        name="password"
        label="Password"
        placeholder="Enter password"
        defaultValue="very secret password"
        appendInnerIcon="eye"
        type={inputType}
        onAppendInnerIconClick={onClickEyeIcon}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Password');
    const icon = canvas.getByRole('button');

    // Click the eye icon to reveal password
    await userEvent.click(icon);
    await expect(input).toHaveAttribute('type', 'text');

    // Click again to hide password
    await userEvent.click(icon);
    await expect(input).toHaveAttribute('type', 'password');
  },
};
