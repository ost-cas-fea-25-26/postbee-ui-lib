import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
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
      // The div below acts as your 400px container
      <div style={{ width: '280px' }}>
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
};

export const InputError: Story = {
  args: {
    name: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
    errorMessage: 'Field is required',
  },
};

export const InputWithIcon: Story = {
  args: {
    name: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
    appendInnerIcon: 'mumble',
  },
};

export const InputWithClickableIcon: Story = {
  args: {
    name: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
    appendInnerIcon: 'mumble',
    onAppendInnerIconClick: () => {
      alert('Icon click');
    },
  },
};

export const InputPassword: Partial<Story> = {
  render() {
    const [inputType, setInputType] = useState('password');
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
};
