import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('renders the button with provided label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies primary Tailwind classes by default', () => {
    render(<Button label="Primary" />);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button.className).toContain('bg-violet-600');
    expect(button.className).toContain('text-white');
  });

  it('applies secondary Tailwind classes when variant="secondary"', () => {
    render(<Button label="Secondary" variant="secondary" />);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button.className).toContain('bg-gray-600');
    expect(button.className).toContain('text-white');
    expect(button.className).not.toContain('bg-violet-600');
  });

  it('applies tertiary Tailwind classes when variant="tertiary"', () => {
    render(<Button label="Tertiary" variant="tertiary" />);
    const button = screen.getByRole('button', { name: /tertiary/i });
    expect(button.className).toContain('bg-transparent');
    expect(button.className).toContain('text-violet-600');
  });

  it('applies correct size classes', () => {
    render(<Button label="Large" size="large" />);
    const button = screen.getByRole('button', { name: /large/i });
    expect(button.className).toContain('px-6');
    expect(button.className).toContain('py-3');
    expect(button.className).toContain('text-lg');
  });

  it('renders icon on the left when iconPosition="left"', () => {
    render(<Button label="Icon Left" icon={<span data-testid="icon">★</span>} iconPosition="left" />);
    const button = screen.getByRole('button', { name: /icon left/i });
    expect(button.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });

  it('renders icon on the right when iconPosition="right"', () => {
    render(<Button label="Icon Right" icon={<span data-testid="icon">★</span>} iconPosition="right" />);
    const button = screen.getByRole('button', { name: /icon right/i });
    expect(button.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth=true', () => {
    render(<Button label="Full Width" fullWidth />);
    const button = screen.getByRole('button', { name: /full width/i });
    expect(button.className).toContain('w-full');
  });

  it('is disabled when disabled=true', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
