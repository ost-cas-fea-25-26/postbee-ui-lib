import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ToggleButton } from './ToggleButton';

describe('ToggleButton Component', () => {
  it('should render correctly with default props', () => {
    render(<ToggleButton>Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Toggle Me');
    expect(button).not.toBeDisabled();
  });

  it('should render with text prop', () => {
    render(<ToggleButton text="Toggle Text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Toggle Text');
  });

  it('should prioritize text prop over children', () => {
    render(<ToggleButton text="Text Prop">Children Content</ToggleButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Text Prop');
    expect(button).not.toHaveTextContent('Children Content');
  });

  it('should render an icon if icon prop is provided', () => {
    render(<ToggleButton icon="checkmark">Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should not render an icon if icon prop is not provided', () => {
    render(<ToggleButton>Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).not.toBeInTheDocument();
  });

  it('should not apply active classes when isActive is false', () => {
    render(
      <ToggleButton isActive={false} activeClassName="custom-active-class">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('custom-active-class');
  });

  it('should apply custom activeClassName when provided and isActive is true', () => {
    render(
      <ToggleButton isActive={true} activeClassName="custom-active-class">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-active-class');
  });

  it('should apply activeIconClassName to icon when isActive is true', () => {
    render(
      <ToggleButton icon="checkmark" isActive={true} activeIconClassName="custom-active-class">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toHaveClass('custom-active-class');
  });

  it('should not apply activeIconClassName when isActive is false', () => {
    render(
      <ToggleButton icon="checkmark" isActive={false} activeIconClassName="custom-active-class">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg?.parentElement).not.toHaveClass('custom-active-class');
  });

  it('should apply custom className', () => {
    render(<ToggleButton className="custom-class">Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should disable the button when disabled prop is passed', () => {
    render(<ToggleButton disabled>Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<ToggleButton onClick={handleClick}>Toggle Me</ToggleButton>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClick handler when the button is disabled', () => {
    const handleClick = vi.fn();
    render(
      <ToggleButton onClick={handleClick} disabled>
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should pass through additional HTML button attributes', () => {
    render(
      <ToggleButton type="submit" aria-label="Custom Toggle">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'Custom Toggle');
  });

  it('should combine multiple classes correctly', () => {
    render(
      <ToggleButton className="extra-class" isActive={true} activeClassName="active-class">
        Toggle Me
      </ToggleButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('extra-class');
    expect(button).toHaveClass('active-class');
  });

  it('should render icon and text together', () => {
    render(<ToggleButton icon="checkmark" text="Toggle Text" />);
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
    expect(button).toHaveTextContent('Toggle Text');
  });
});
