import '@testing-library/jest-dom/vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CopyButton } from './CopyButton';

describe('CopyButton Component', () => {
  const mockWriteText = vi.fn();
  const defaultTexts: [string, string] = ['Copy link', 'Link copied'];

  // Helper function for async state updates
  const waitForAsync = async () => {
    await act(async () => {
      await Promise.resolve();
    });
  };

  beforeEach(() => {
    vi.useFakeTimers();

    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    mockWriteText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    mockWriteText.mockClear();
    cleanup();
  });

  it('should render correctly with default props', () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(defaultTexts[0]);
    expect(button).not.toBeDisabled();
  });

  it('should display default text when not copied', () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(defaultTexts[0]);
  });

  it('should display custom default text when provided', () => {
    render(<CopyButton textToCopy="test text" texts={['Copy', 'Copied']} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Copy');
  });

  it('should have aria-pressed false initially', () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should copy text to clipboard when clicked', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockWriteText).toHaveBeenCalledWith('test text');
    expect(mockWriteText).toHaveBeenCalledTimes(1);
  });

  it('should change text after copying', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveTextContent(defaultTexts[1]);
  });

  it('should change to custom copied text when provided', async () => {
    render(<CopyButton textToCopy="test text" texts={['Copy', 'Copied!']} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveTextContent('Copied!');
  });

  it('should become active after copying', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should be disabled after copying', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toBeDisabled();
  });

  it('should reset after 2 seconds', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveTextContent(defaultTexts[1]);
    expect(button).toBeDisabled();

    act(() => {
      vi.advanceTimersByTime(2100);
    });

    expect(button).toHaveTextContent(defaultTexts[0]);
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should not copy again when clicked while disabled', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();
    expect(mockWriteText).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(mockWriteText).toHaveBeenCalledTimes(1); // Still only 1
  });

  it('should handle clipboard API errors gracefully', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    mockWriteText.mockRejectedValueOnce(new Error('Clipboard error'));

    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveTextContent(defaultTexts[1]);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy text:', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should still reset after clipboard error', async () => {
    mockWriteText.mockRejectedValueOnce(new Error('Clipboard error'));
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();

    expect(button).toHaveTextContent(defaultTexts[1]);

    act(() => {
      vi.advanceTimersByTime(2100);
    });

    expect(button).toHaveTextContent(defaultTexts[0]);
    expect(button).not.toBeDisabled();
  });

  it('should allow copying again after reset', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    // First copy
    fireEvent.click(button);
    await waitForAsync();
    expect(mockWriteText).toHaveBeenCalledTimes(1);

    // Wait for reset
    act(() => {
      vi.advanceTimersByTime(2100);
    });

    // Second copy
    fireEvent.click(button);
    await waitForAsync();
    expect(mockWriteText).toHaveBeenCalledTimes(2);
    expect(mockWriteText).toHaveBeenCalledWith('test text');
  });

  it('should pass through additional props to ToggleButton', () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} aria-label="Custom Copy" data-testid="copy-btn" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom Copy');
    expect(button).toHaveAttribute('data-testid', 'copy-btn');
  });

  it('should handle multiple rapid copy attempts', async () => {
    render(<CopyButton textToCopy="test text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();
    fireEvent.click(button);
    fireEvent.click(button);

    // Should only copy once due to disabled state
    expect(mockWriteText).toHaveBeenCalledTimes(1);
  });

  it('should copy different text when textToCopy prop changes', async () => {
    const { rerender } = render(<CopyButton textToCopy="first text" texts={defaultTexts} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    await waitForAsync();
    expect(mockWriteText).toHaveBeenCalledWith('first text');

    act(() => {
      vi.advanceTimersByTime(2100);
    });

    rerender(<CopyButton textToCopy="second text" texts={defaultTexts} />);
    fireEvent.click(button);
    await waitForAsync();
    expect(mockWriteText).toHaveBeenCalledWith('second text');
  });
});
