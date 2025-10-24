import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog component', () => {
  const title = 'Test Dialog';
  const bodyText = 'This is the dialog body';
  const onClose = vi.fn();
  const onSubmit = vi.fn();

  const renderDialog = (props = {}) =>
    render(
      <Dialog open={true} title={title} onClose={onClose} onSubmit={onSubmit} {...props}>
        <p>{bodyText}</p>
      </Dialog>,
    );

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the dialog with title and children', () => {
    renderDialog();

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(bodyText)).toBeDefined();
  });

  it('calls onClose when the header close button is clicked', () => {
    renderDialog();

    const buttons = screen.getAllByRole('button');
    // The first button is the header close
    fireEvent.click(buttons[0]);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the "Abbrechen" button is clicked', () => {
    renderDialog();

    const cancelButton = screen.getByRole('button', { name: /Abbrechen/i });
    fireEvent.click(cancelButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onSubmit when the "Speichern" button is clicked', () => {
    renderDialog();

    const submitButton = screen.getByRole('button', { name: /Speichern/i });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not render when open is false', () => {
    render(
      <Dialog open={false} title={title} onClose={onClose} onSubmit={onSubmit}>
        <p>{bodyText}</p>
      </Dialog>,
    );

    expect(screen.queryByText(title)).toBeNull();
    expect(screen.queryByText(bodyText)).toBeNull();
  });

  it('closes when Escape key is pressed', () => {
    renderDialog();

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
