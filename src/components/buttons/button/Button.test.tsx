import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button Component', () => {
  it('should render correctly with default props', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(button).not.toBeDisabled();
  });

  it('should apply the correct classes for "primary" variant', () => {
    render(<Button variant="primary">Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-primary-foreground');
  });

  it('should apply the correct classes for "secondary" variant', () => {
    render(<Button variant="secondary">Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveClass('text-secondary-foreground');
  });

  it('should apply the correct classes for "tertiary" variant', () => {
    render(<Button variant="tertiary">Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gradient-to-r');
    expect(button).toHaveClass('from-tertiary');
  });

  it('should apply the correct size classes', () => {
    render(<Button size="sm">Click Me</Button>);
    const buttonSm = screen.getByRole('button');
    expect(buttonSm).toHaveClass('text-sm');
    expect(buttonSm).toHaveClass('px-3'); // match current code
    expect(buttonSm).toHaveClass('py-xs');

    cleanup();

    render(<Button size="md">Click Me</Button>);
    const buttonMd = screen.getByRole('button');
    expect(buttonMd).toHaveClass('text-md');
    expect(buttonMd).toHaveClass('p-3');

    cleanup();

    render(<Button size="lg">Click Me</Button>);
    const buttonLg = screen.getByRole('button');
    expect(buttonLg).toHaveClass('text-md'); // your lg size class is 'text-md'
    expect(buttonLg).toHaveClass('px-md');
  });

  it('should apply full width if fullWidth is true', () => {
    render(<Button fullWidth>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  it('should render an icon if icon is provided', () => {
    render(<Button icon="checkmark">Click Me</Button>);

    const button = screen.getByRole('button');
    // check if <svg> exists inside button instead of data-testid
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should disable the button when disabled prop is passed', () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClick handler when the button is disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render the label if provided', () => {
    render(<Button text="My Label" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('My Label');
  });

  it('should render children if label is not provided', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });
});
