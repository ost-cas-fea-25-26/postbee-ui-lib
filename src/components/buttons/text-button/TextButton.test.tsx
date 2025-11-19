import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TextButton } from './TextButton';

describe('TextButton Component', () => {
  it('should render correctly with default props', () => {
    render(<TextButton text="Click Me" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('text-primary');
  });

  it('should apply the correct classes for "primary" variant', () => {
    render(<TextButton text="Click Me" variant="primary" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-primary');
  });

  it('should apply the correct classes for "secondary" variant', () => {
    render(<TextButton text="Click Me" variant="secondary" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-secondary-400');
    expect(button).not.toHaveClass('text-primary');
  });

  it('should render children when text prop is not provided', () => {
    render(<TextButton>Button Text From Children</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Button Text From Children');
  });

  it('should prioritize the text prop over children', () => {
    render(<TextButton text="Prop Text">Children Text</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Prop Text');
    expect(button).not.toHaveTextContent('Children Text');
  });

  it('should render an icon if icon is provided', () => {
    render(<TextButton icon="profile" text="Add Item" />);

    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should apply a custom className', () => {
    const customClass = 'custom-test-class';
    render(<TextButton text="Click Me" className={customClass} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(customClass);
    expect(button).toHaveClass('inline-flex');
  });

  it('should disable the button when disabled prop is passed', () => {
    render(<TextButton disabled>Click Me</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<TextButton onClick={handleClick}>Click Me</TextButton>);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClick handler when the button is disabled', () => {
    const handleClick = vi.fn();
    render(
      <TextButton onClick={handleClick} disabled>
        Click Me
      </TextButton>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
