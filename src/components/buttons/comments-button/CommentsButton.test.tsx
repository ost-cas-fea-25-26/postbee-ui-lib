import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CommentsButton } from './CommentsButton';

describe('CommentsButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render correctly with default props', () => {
    render(<CommentsButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Comment');
    expect(button).not.toBeDisabled();
  });

  it('should display "Comment" when count is 0', () => {
    render(<CommentsButton count={0} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Comment');
  });

  it('should display "1 Comment" when count is 1', () => {
    render(<CommentsButton count={1} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('1 Comment');
  });

  it('should display "X Comments" when count is greater than 1', () => {
    render(<CommentsButton count={5} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('5 Comments');
  });

  it('should render with icon', () => {
    render(<CommentsButton />);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should not be active when count is 0', () => {
    render(<CommentsButton count={0} activeClassName="custom-class-name" />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('custom-class-name');
  });

  it('should be active when count is greater than 0', () => {
    render(<CommentsButton count={1} activeClassName="custom-class-name" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class-name');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<CommentsButton onClick={handleClick} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(<CommentsButton onClick={handleClick} disabled />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is passed', () => {
    render(<CommentsButton disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should pass through additional props to ToggleButton', () => {
    render(<CommentsButton aria-label="Comments Section" data-testid="comments-btn" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Comments Section');
    expect(button).toHaveAttribute('data-testid', 'comments-btn');
  });

  it('should apply custom className', () => {
    render(<CommentsButton className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should update text when count prop changes', () => {
    const { rerender } = render(<CommentsButton count={0} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Comment');

    rerender(<CommentsButton count={1} />);
    expect(button).toHaveTextContent('1 Comment');

    rerender(<CommentsButton count={10} />);
    expect(button).toHaveTextContent('10 Comments');

    rerender(<CommentsButton count={0} />);
    expect(button).toHaveTextContent('Comment');
  });

  it('should toggle active state when count changes', () => {
    const { rerender } = render(<CommentsButton count={0} />);
    const button = screen.getByRole('button');

    expect(button).not.toHaveClass('text-secondary');

    rerender(<CommentsButton count={1} />);
    expect(button).toHaveClass('text-secondary');

    rerender(<CommentsButton count={0} />);
    expect(button).not.toHaveClass('text-secondary');
  });

  it('should handle multiple clicks', () => {
    const handleClick = vi.fn();
    render(<CommentsButton onClick={handleClick} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
