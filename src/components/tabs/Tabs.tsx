'use client';

import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

export type TabItem = {
  text: string;
  content: React.ReactNode;
  onClick: () => void;
};

export type TabsProps = {
  tabs: TabItem[];
  value: string;
  onValueChange: (value: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, value, onValueChange }) => {
  const handleValueChange = (newValue: string) => {
    onValueChange(newValue);
    const tab = tabs.find((t) => t.text === newValue);
    if (tab) {
      tab.onClick();
    }
  };

  function removeAllSpaces(input: string): string {
    return input.replace(/\s+/g, '');
  }

  return (
    <TabsPrimitive.Root value={value} onValueChange={handleValueChange} className="w-full">
      <TabsPrimitive.List className="bg-secondary-200 inline-flex gap-2 rounded-md p-1">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.text}
            value={removeAllSpaces(tab.text)}
            aria-label={tab.text}
            className="data-[state=active]:text-primary-600 transition duration-300 ease-in-out pb-label-lg hover:text-secondary-900 h-10 cursor-pointer rounded-md px-3 py-1 text-lg focus:outline-none data-[state=active]:bg-white"
          >
            {tab.text}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.text}
          value={removeAllSpaces(tab.text)}
          aria-label={tab.text}
          className="mt-3 rounded-md bg-white p-2"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
