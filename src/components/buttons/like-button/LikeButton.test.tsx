import '@testing-library/jest-dom/vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { LikeButton } from './LikeButton';

describe('LikeButton Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    cleanup();
  });

  it('should render correctly with default props', () => {
    render(<LikeButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Like');
    expect(button).not.toBeDisabled();
  });

  it('should render with heart icon when not liked', () => {
    render(<LikeButton />);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should display "Like" text when count is 0', () => {
    render(<LikeButton count={0} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Like');
  });

  it('should display "1 Like" when count is 1', () => {
    render(<LikeButton count={1} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('1 Like');
  });

  it('should display "X Likes" when count is greater than 1', () => {
    render(<LikeButton count={5} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('5 Likes');
  });

  it('should be active when count is greater than 0', () => {
    render(<LikeButton count={3} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should be active when initialIsLiked is true', () => {
    render(<LikeButton initialIsLiked={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should not be active when count is 0 and initialIsLiked is false', () => {
    render(<LikeButton count={0} initialIsLiked={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should increment count when clicked from 0 likes', () => {
    render(<LikeButton count={0} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Liked');
    expect(button).toBeDisabled();

    act(() => {
      vi.advanceTimersByTime(2100);
    });

    expect(button).toHaveTextContent('1 Like');
    expect(button).not.toBeDisabled();
  });

  it('should show "Liked" text for 2 seconds on first like', async () => {
    render(<LikeButton count={0} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Liked');
    expect(button).toBeDisabled();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(button).toHaveTextContent('Liked');

    act(() => {
      vi.advanceTimersByTime(1100);
    });
    expect(button).toHaveTextContent('1 Like');
    expect(button).not.toBeDisabled();
  });

  it('should increment count immediately when already liked before', () => {
    render(<LikeButton count={3} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('3 Likes');

    fireEvent.click(button);

    expect(button).toHaveTextContent('4 Likes');
    expect(button).not.toBeDisabled();
  });

  it('should decrement count when removing a like', () => {
    render(<LikeButton count={3} initialIsLiked={true} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('3 Likes');

    fireEvent.click(button);

    expect(button).toHaveTextContent('2 Likes');
  });

  it('should not go below 0 likes when removing', () => {
    render(<LikeButton count={1} initialIsLiked={true} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Like');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should call onLikeAdd when adding a like', () => {
    const handleLikeAdd = vi.fn();
    render(<LikeButton count={0} onLikeAdd={handleLikeAdd} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleLikeAdd).toHaveBeenCalledTimes(1);
  });

  it('should call onLikeRemove when removing a like', () => {
    const handleLikeRemove = vi.fn();
    render(<LikeButton count={1} initialIsLiked={true} onLikeRemove={handleLikeRemove} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleLikeRemove).toHaveBeenCalledTimes(1);
  });

  it('should not call onLikeRemove when adding a like', () => {
    const handleLikeRemove = vi.fn();
    render(<LikeButton count={0} onLikeRemove={handleLikeRemove} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleLikeRemove).not.toHaveBeenCalled();
  });

  it('should not call onLikeAdd when removing a like', () => {
    const handleLikeAdd = vi.fn();
    render(<LikeButton count={1} initialIsLiked={true} onLikeAdd={handleLikeAdd} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleLikeAdd).not.toHaveBeenCalled();
  });

  it('should toggle between liked and unliked states', () => {
    render(<LikeButton count={0} />);
    const button = screen.getByRole('button');

    // Initial state
    expect(button).toHaveTextContent('Like');
    expect(button).toHaveAttribute('aria-pressed', 'false');

    // Click to like
    fireEvent.click(button);
    expect(button).toHaveTextContent('Liked');

    act(() => {
      vi.advanceTimersByTime(2100);
    });
    expect(button).toHaveTextContent('1 Like');
    expect(button).toHaveAttribute('aria-pressed', 'true');

    // Click to unlike
    fireEvent.click(button);
    expect(button).toHaveTextContent('Like');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should not respond to clicks while disabled during first like animation', () => {
    const handleLikeAdd = vi.fn();
    render(<LikeButton count={0} onLikeAdd={handleLikeAdd} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(handleLikeAdd).toHaveBeenCalledTimes(1);

    // Try to click again while disabled
    fireEvent.click(button);
    expect(handleLikeAdd).toHaveBeenCalledTimes(1); // Still only 1

    act(() => {
      vi.advanceTimersByTime(2100);
    });
    expect(button).not.toBeDisabled();
  });

  it('should sync with external count after user interaction', () => {
    const onLikeAdd = vi.fn();
    const { rerender } = render(<LikeButton count={3} onLikeAdd={onLikeAdd} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('3 Likes');

    // User adds like
    fireEvent.click(button);
    expect(button).toHaveTextContent('4 Likes');
    expect(onLikeAdd).toHaveBeenCalledTimes(1);

    // External system confirms and updates count
    rerender(<LikeButton count={4} onLikeAdd={onLikeAdd} />);
    expect(button).toHaveTextContent('4 Likes');
  });

  it('should apply active classes when liked', () => {
    render(<LikeButton count={1} initialIsLiked={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-tertiary-900');
  });

  it('should pass through additional props to ToggleButton', () => {
    render(<LikeButton aria-label="Custom Like Button" data-testid="like-btn" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom Like Button');
    expect(button).toHaveAttribute('data-testid', 'like-btn');
  });

  it('should handle multiple rapid likes correctly', () => {
    render(<LikeButton count={5} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('5 Likes');

    fireEvent.click(button); // Add like
    expect(button).toHaveTextContent('6 Likes');

    fireEvent.click(button); // Remove like
    expect(button).toHaveTextContent('5 Likes');

    fireEvent.click(button); // Add like again
    expect(button).toHaveTextContent('6 Likes');
  });

  it('should maintain correct state when toggling from 1 like to 0', () => {
    render(<LikeButton count={1} initialIsLiked={true} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('1 Like');
    expect(button).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Like');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });
});
