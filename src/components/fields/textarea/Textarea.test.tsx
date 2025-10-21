import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  it('renders label when provided and links it correctly to textarea', () => {
    render(<Textarea name="comments" label="Comments" />);
    const label = screen.getByText('Comments');
    const textarea = screen.getByLabelText('Comments');
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', label.getAttribute('for'));
  });

  it('renders textarea with name and id if provided', () => {
    render(<Textarea name="description" id="custom-textarea-id" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'description');
    expect(textarea).toHaveAttribute('id', 'custom-textarea-id');
  });

  it('generates an id if none is provided', () => {
    render(<Textarea name="message" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('id');
    expect(textarea.getAttribute('id')).not.toBe('');
  });

  it('shows error message and error icon when errorMessage is passed', () => {
    const errorText = 'Please enter a valid message';
    const { container } = render(<Textarea name="feedback" label="Feedback" errorMessage={errorText} />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(errorText);
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('text-error');
  });

  it('renders appendInnerIcon and calls onAppendInnerIconClick when clicked', () => {
    const onClick = vi.fn();
    render(
      <Textarea
        name="notes"
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
    const { container } = render(<Textarea name="notes" appendInnerIcon="arrow-down" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('textarea has aria-invalid when errorMessage is present', () => {
    render(<Textarea name="comments" errorMessage="Error" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('textarea has aria-describedby pointing to error message when error exists', () => {
    render(<Textarea name="comments" errorMessage="Error" />);
    const textarea = screen.getByRole('textbox');
    const errorMessage = screen.getByRole('alert');
    expect(textarea).toHaveAttribute('aria-describedby', errorMessage.id);
  });
});
