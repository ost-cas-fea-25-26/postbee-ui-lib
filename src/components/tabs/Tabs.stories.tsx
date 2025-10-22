import type { Meta, StoryObj } from '@storybook/react';
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
    const tabs: TabItem[] = [
      {
        text: 'Deine Mumbles',
        content: <p>Content for: Deine Mumbles</p>,
        selected: true,
        onClick: () => console.log('Tab 1 clicked'),
      },
      {
        text: 'Deine Likes',
        content: <p>Content for: Deine Likes</p>,
        onClick: () => console.log('Tab 2 clicked'),
      },
    ];

    return <Tabs tabs={tabs} />;
  },
};
