import { describe, it, expect, vi, afterEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tabs, type TabsProps } from './Tabs';
import '@testing-library/jest-dom';

describe('Tabs Component', () => {
  const mockOnClick1 = vi.fn();
  const mockOnClick2 = vi.fn();
  const mockOnClick3 = vi.fn();

  const defaultTabs: TabsProps['tabs'] = [
    {
      text: 'Tab 1',
      content: <div>Content 1</div>,
      onClick: mockOnClick1,
    },
    {
      text: 'Tab 2',
      content: <div>Content 2</div>,
      onClick: mockOnClick2,
    },
    {
      text: 'Tab 3',
      content: <div>Content 3</div>,
      onClick: mockOnClick3,
    },
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render all tabs', () => {
    render(<Tabs tabs={defaultTabs} />);

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });

  it('should render tab content', () => {
    render(<Tabs tabs={defaultTabs} />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('should select the first tab by default when no tab is marked as selected', () => {
    render(<Tabs tabs={defaultTabs} />);

    const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
    expect(firstTab).toHaveAttribute('data-state', 'active');
  });

  it('should select the tab marked as selected by default', () => {
    const tabsWithSelected: TabsProps['tabs'] = [
      {
        text: 'Tab 1',
        content: <div>Content 1</div>,
        onClick: mockOnClick1,
      },
      {
        text: 'Tab 2',
        content: <div>Content 2</div>,
        selected: true,
        onClick: mockOnClick2,
      },
      {
        text: 'Tab 3',
        content: <div>Content 3</div>,
        onClick: mockOnClick3,
      },
    ];

    render(<Tabs tabs={tabsWithSelected} />);

    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    expect(secondTab).toHaveAttribute('data-state', 'active');
  });

  it('should call onClick handler when tab is clicked', () => {
    render(<Tabs tabs={defaultTabs} />);

    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(secondTab);

    expect(mockOnClick2).toHaveBeenCalledTimes(1);
  });

  it('should switch content when clicking different tabs', () => {
    render(<Tabs tabs={defaultTabs} />);

    // Initially Content 1 should be visible
    expect(screen.getByText('Content 1')).toBeVisible();

    // Click on Tab 2
    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(secondTab);

    // Tab 2 should now be active
    expect(secondTab).toHaveAttribute('data-state', 'active');

    // Content 1 should be hidden
    expect(screen.queryByText('Content 1')).not.toBeVisible();
  });

  it('should apply active styles to selected tab', () => {
    render(<Tabs tabs={defaultTabs} />);

    const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
    expect(firstTab).toHaveClass('data-[state=active]:bg-white');
    expect(firstTab).toHaveClass('data-[state=active]:text-primary-600');
  });

  it('should render with correct accessibility attributes', () => {
    render(<Tabs tabs={defaultTabs} />);

    const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
    expect(firstTab).toHaveAttribute('aria-label', 'Tab 1');
    expect(firstTab).toHaveAttribute('type', 'button');
  });

  it('should handle empty tabs array gracefully', () => {
    render(<Tabs tabs={[]} />);

    const tabList = screen.queryByRole('tablist');
    expect(tabList).toBeInTheDocument();
  });

  it('should render tab content with correct aria-label', () => {
    render(<Tabs tabs={defaultTabs} />);

    const content = screen.getByRole('tabpanel');
    expect(content).toHaveAttribute('aria-label', 'Tab 1');
  });

  it('should maintain tab state after multiple clicks', () => {
    render(<Tabs tabs={defaultTabs} />);

    // Click Tab 2
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(mockOnClick2).toHaveBeenCalledTimes(1);

    // Click Tab 3
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 3' }));
    expect(mockOnClick3).toHaveBeenCalledTimes(1);

    // Click Tab 2 again
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(mockOnClick2).toHaveBeenCalledTimes(2);
  });

  it('should not call onClick for already selected tab on mount', () => {
    render(<Tabs tabs={defaultTabs} />);

    expect(mockOnClick1).not.toHaveBeenCalled();
    expect(mockOnClick2).not.toHaveBeenCalled();
    expect(mockOnClick3).not.toHaveBeenCalled();
  });
});
