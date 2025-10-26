import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { userEvent, within } from 'storybook/test';
import { type TabItem, Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407-101&t=qxxR9geJaxBCzsRu-4',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('Deine Mumbles');

    const tabs: TabItem[] = [
      {
        text: 'Deine Mumbles',
        content: <p>Content for: Deine Mumbles</p>,
        onClick: () => console.log('Tab 1 clicked'),
      },
      {
        text: 'Deine Likes',
        content: <p>Content for: Deine Likes</p>,
        onClick: () => console.log('Tab 2 clicked'),
      },
    ];

    return <Tabs tabs={tabs} value={activeTab} onValueChange={setActiveTab} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click the second tab
    const tab2 = await canvas.getByRole('tab', { name: 'Deine Likes' });
    await userEvent.click(tab2);

    // Optionally assert the content changed
    await canvas.getByText('Content for: Deine Likes');
  },
};
