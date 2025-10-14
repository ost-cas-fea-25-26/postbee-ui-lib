import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const textStyles = [
  { class: 'pb-h1', label: 'Heading 1' },
  { class: 'pb-h2', label: 'Heading 2' },
  { class: 'pb-h3', label: 'Heading 3' },
  { class: 'pb-h4', label: 'Heading 4' },
  { class: 'pb-paragraph-lg', label: 'Paragraph Large' },
  { class: 'pb-paragraph-md', label: 'Paragraph Medium' },
  { class: 'pb-label-xl', label: 'Label XL' },
  { class: 'pb-label-lg', label: 'Label Large' },
  { class: 'pb-label-md', label: 'Label Medium' },
  { class: 'pb-label-sm', label: 'Label Small' },
  { class: 'pb-placeholder', label: 'Placeholder' },
];

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407-112&t=cunwm1yb3j7KAYAN-4',
    },
  },
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  render: () => (
    <div className="min-h-screen bg-white dark:bg-neutral-950 p-8 ">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Typography Tokens
      </h1>

      <div className="grid gap-8 text-base">
        {textStyles.map(({ class: className, label }) => (
          <div
            key={className}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800 pb-4"
          >
            <div className={className}>{label}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
              <code>{className}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
