import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { HeaderButton } from './HeaderButton';

describe('HeaderButton Component', () => {
  it('should render with text and icon', () => {
    render(<HeaderButton icon="mumble">Click Me</HeaderButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should render correctly with text prop', () => {
    render(<HeaderButton text="Click Me" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should render icon only with correct aria-label', () => {
    render(<HeaderButton icon="checkmark" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'checkmark icon');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should apply the correct size classes', () => {
    render(<HeaderButton size="sm">Click Me</HeaderButton>);
    const buttonSm = screen.getByRole('button');
    expect(buttonSm).toHaveClass('min-w-6');

    cleanup();

    render(<HeaderButton size="md">Click Me</HeaderButton>);
    const buttonMd = screen.getByRole('button');
    expect(buttonMd).toHaveClass('min-w-8');

    cleanup();

    render(<HeaderButton size="lg">Click Me</HeaderButton>);
    const buttonLg = screen.getByRole('button');
    expect(buttonLg).toHaveClass('min-w-10');
  });

  it('should render children instead of text when children exist', () => {
    render(
      <HeaderButton icon="checkmark">
        <span>Child Content</span>
      </HeaderButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Child Content');
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<HeaderButton onClick={handleClick}>Click Me</HeaderButton>);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
