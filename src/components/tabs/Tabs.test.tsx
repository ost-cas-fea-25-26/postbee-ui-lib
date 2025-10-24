import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, type TabItem } from './Tabs';
import * as React from 'react';
import '@testing-library/jest-dom'; // important for .toBeInTheDocument()

describe('Tabs component (stateless)', () => {
  // Wrapper for controlled Tabs
  const TabWrapper = ({ initial = 'Tab 1', tabClick1 = vi.fn(), tabClick2 = vi.fn() }) => {
    const [activeTab, setActiveTab] = React.useState(initial);

    const tabs: TabItem[] = [
      { text: 'Tab 1', content: <div>Content 1</div>, onClick: tabClick1 },
      { text: 'Tab 2', content: <div>Content 2</div>, onClick: tabClick2 },
    ];

    return <Tabs tabs={tabs} value={activeTab} onValueChange={setActiveTab} />;
  };

  it('renders all tabs', () => {
    render(<TabWrapper />);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
  });

  it('renders the default selected tab content', () => {
    render(<TabWrapper />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('changes content and calls onClick when another tab is clicked', async () => {
    const user = userEvent.setup();
    const tabClick1 = vi.fn();
    const tabClick2 = vi.fn();

    render(<TabWrapper tabClick1={tabClick1} tabClick2={tabClick2} />);

    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);

    expect(tabClick2).toHaveBeenCalled();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
