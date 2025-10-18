import type { Meta, StoryObj } from '@storybook/react-vite';

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
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-secondary-900 mb-8 text-2xl font-bold">Typography Tokens</h1>

      <div className="grid gap-4 text-base">
        {textStyles.map(({ class: className, label }) => (
          <div
            key={className}
            className="border-secondary-200 flex flex-col border-b pb-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className={className}>{label}</div>
            <div className="text-secondary-500 mt-2 text-sm sm:mt-0">
              <code>{className}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
