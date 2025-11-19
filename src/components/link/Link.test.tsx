import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from 'storybook/test';
import { describe, expect, it, vi } from 'vitest';

import { Link } from './Link';

describe('<Link />', () => {
  it('renders with correct text and href', () => {
    render(<Link href="/about">About</Link>);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('applies custom className', () => {
    render(
      <Link href="/about" className="custom-class">
        About
      </Link>,
    );
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveClass('custom-class');
  });

  it('adds noopener noreferrer when target=_blank', () => {
    render(
      <Link href="https://example.com" target="_blank">
        External
      </Link>,
    );
    const link = screen.getByRole('link', { name: /external/i });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders external link with hidden accessibility note', () => {
    render(
      <Link href="https://example.com" target="_blank">
        External
      </Link>,
    );
    expect(screen.getByText('(opens in a new tab)')).toHaveClass('sr-only');
  });

  it('does not render rel attribute when not external', () => {
    render(<Link href="/internal">Internal</Link>);
    const link = screen.getByRole('link', { name: /internal/i });
    expect(link).not.toHaveAttribute('rel');
  });

  it('includes proper accessibility attributes for disabled state', () => {
    render(
      <Link href="/about" disabled>
        Disabled
      </Link>,
    );
    const link = screen.getByRole('link', { name: /disabled/i });
    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('prevents click when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Link href="/about" onClick={onClick} disabled>
        Disabled
      </Link>,
    );
    const link = screen.getByRole('link', { name: /disabled/i });
    await user.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('triggers click handler when active', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Link href="#" onClick={onClick}>
        Clickable
      </Link>,
    );
    const link = screen.getByRole('link', { name: /clickable/i });
    await user.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});
