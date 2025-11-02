import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Logo } from './Logo';
import { LOGO_COMPONENTS } from './constants';

describe('Logo component', () => {
  const validLogo = Object.keys(LOGO_COMPONENTS)[0] as keyof typeof LOGO_COMPONENTS;

  test('renders a valid logo component', () => {
    render(<Logo logo={validLogo} data-testid="logo-svg" />);
    // Expect the rendered svg to be in the document
    expect(screen.getByTestId('logo-svg').tagName.toLowerCase()).toBe('svg');
  });

  test('renders fallback when logo not found', () => {
    render(<Logo logo="unknown-logo" />);
    expect(screen.getByText(/Logo "unknown-logo" not found/i)).toBeInTheDocument();
  });

  test('applies size prop correctly', () => {
    const size = 150;
    render(<Logo logo={validLogo} size={size} data-testid="logo-svg" />);
    const svg = screen.getByTestId('logo-svg');
    expect(svg).toHaveAttribute('width', size.toString());
    expect(svg).toHaveAttribute('height', size.toString());
  });

  test('handles title and accessibility attributes', () => {
    const title = 'Test Logo';
    render(<Logo logo={validLogo} title={title} data-testid="logo-svg" />);
    const svg = screen.getByTestId('logo-svg');

    // role img and aria-hidden is undefined
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).not.toHaveAttribute('aria-hidden');

    // Check that the SVG contains a <title> element with correct text
    const titleElement = svg.querySelector('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);
  });

  test('is aria-hidden when no title provided', () => {
    render(<Logo logo={validLogo} data-testid="logo-svg" />);
    const svg = screen.getByTestId('logo-svg');

    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
    expect(svg).not.toHaveAttribute('title');
  });
});
