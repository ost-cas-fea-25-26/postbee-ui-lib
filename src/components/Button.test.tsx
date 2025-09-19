import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('renders the button with provided label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies primary Tailwind classes when primary is true', () => {
    render(<Button label="Primary" primary />);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button.className).toContain('bg-blue-600');
    expect(button.className).toContain('text-white');
    expect(button.className).not.toContain('bg-gray-200');
  });

  it('applies secondary Tailwind classes when primary is false', () => {
    render(<Button label="Secondary" />);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button.className).toContain('bg-gray-200');
    expect(button.className).toContain('text-gray-800');
    expect(button.className).not.toContain('bg-blue-600');
  });

  it('applies correct size classes', () => {
    render(<Button label="Large" size="large" />);
    const button = screen.getByRole('button', { name: /large/i });
    expect(button.className).toContain('px-6');
    expect(button.className).toContain('py-3');
    expect(button.className).toContain('text-lg');
  });

  it('applies backgroundColor style when provided', () => {
    render(<Button label="Styled" backgroundColor="#FFFFFF" />);
    const button = screen.getByRole('button', { name: /styled/i });
    expect(button).toHaveStyle({ backgroundColor: '#FFFFFF' });
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
