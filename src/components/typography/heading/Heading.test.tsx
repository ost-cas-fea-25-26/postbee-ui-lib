import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading } from './Heading';

describe('Heading component', () => {
  it('should render an h1 tag when level is 1', () => {
    render(<Heading level={1}>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should render an h2 tag when level is 2', () => {
    render(<Heading level={2}>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should render an h3 tag when level is 3', () => {
    render(<Heading level={3}>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should render an h4 tag when level is 4', () => {
    render(<Heading level={4}>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H4');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should apply the correct class for each level', () => {
    render(<Heading level={1}>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('pb-h1');

    render(<Heading level={2}>Test Heading</Heading>);
    const heading2 = screen.getByRole('heading', { level: 2 });
    expect(heading2).toHaveClass('pb-h2');

    render(<Heading level={3}>Test Heading</Heading>);
    const heading3 = screen.getByRole('heading', { level: 3 });
    expect(heading3).toHaveClass('pb-h3');

    render(<Heading level={4}>Test Heading</Heading>);
    const heading4 = screen.getByRole('heading', { level: 4 });
    expect(heading4).toHaveClass('pb-h4');
  });

  it('should accept custom className and merge it with default className', () => {
    render(
      <Heading level={1} className="custom-class">
        Test Heading
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveClass('pb-h1');
  });

  it('should spread additional props correctly', () => {
    render(
      <Heading level={2} data-testid="test-heading">
        Test Heading
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveAttribute('data-testid', 'test-heading');
  });
});
