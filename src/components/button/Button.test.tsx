import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
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
    render(<Button size="small">Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-sm', 'px-[12px]');

    cleanup();

    render(<Button size="medium">Click Me</Button>);
    expect(screen.getByRole('button')).toHaveClass('p-[12px]');

    cleanup();

    render(<Button size="large">Click Me</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-md');
  });

  it('should apply full width if fullWidth is true', () => {
    render(<Button fullWidth>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  it('should render an icon on the left side when iconPosition is "left"', () => {
    const icon = <svg data-testid="icon" />;
    render(
      <Button icon={icon} iconPosition="left">
        Click Me
      </Button>,
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toContainElement(iconElement);
  });

  it('should render an icon on the right side when iconPosition is "right"', () => {
    const icon = <svg data-testid="icon" />;
    render(
      <Button icon={icon} iconPosition="right">
        Click Me
      </Button>,
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toContainElement(iconElement);
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
    render(<Button label="My Label" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('My Label');
  });

  it('should render children if label is not provided', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });
});
