import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders label when provided and links it correctly to input', () => {
    render(<Input name="test" label="Test Label" />);
    const label = screen.getByText('Test Label');
    const input = screen.getByLabelText('Test Label');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', label.getAttribute('for'));
  });

  it('renders input with name and id if provided', () => {
    render(<Input name="username" id="custom-id" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('generates an id if none is provided', () => {
    render(<Input name="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).not.toBe('');
  });

  it('shows error message and error icon when errorMessage is passed', () => {
    const errorText = 'Invalid input';
    const { container } = render(<Input name="email" label="Email" errorMessage={errorText} />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(errorText);
    const icon = container.querySelector('svg');
    // Icon with error color should be present
    expect(icon).toHaveClass('text-error');
  });

  it('renders appendInnerIcon and calls onAppendInnerIconClick when clicked', () => {
    const onClick = vi.fn();
    render(
      <Input
        name="search"
        appendInnerIcon="arrow-down"
        onAppendInnerIconClick={onClick}
        appendInnerIconAriaLabel="toggle options"
      />,
    );
    const button = screen.getByRole('button', { name: /toggle options/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders appendInnerIcon without button if no click handler is provided', () => {
    const { container } = render(<Input name="search" appendInnerIcon="arrow-down" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('input has aria-invalid when errorMessage is present', () => {
    render(<Input name="email" errorMessage="Error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('input has aria-describedby pointing to error message when error exists', () => {
    render(<Input name="email" errorMessage="Error" />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByRole('alert');
    expect(input).toHaveAttribute('aria-describedby', errorMessage.id);
  });
});
