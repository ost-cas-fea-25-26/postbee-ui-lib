import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paragraph } from './Paragraph';

describe('Paragraph component', () => {
  it('should render a paragraph element', () => {
    const { container } = render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = container.getElementsByTagName('p')[0]; // Zugriff auf das <paragraph>-Element
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Test Paragraph');
  });

  it('should apply the correct class for default size', () => {
    const { container } = render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = container.getElementsByTagName('p')[0];
    expect(paragraph).toHaveClass('pb-paragraph-md');
  });

  it('should apply the correct class for each size', () => {
    const { container: containerMd } = render(<Paragraph size="md">Test Paragraph</Paragraph>);
    const paragraphMd = containerMd.getElementsByTagName('p')[0];
    expect(paragraphMd).toHaveClass('pb-paragraph-md');

    const { container: containerLg } = render(<Paragraph size="lg">Test Paragraph</Paragraph>);
    const paragraphLg = containerLg.getElementsByTagName('p')[0];
    expect(paragraphLg).toHaveClass('pb-paragraph-lg');
  });

  it('should accept custom className and merge it with default className', () => {
    const { container } = render(
      <Paragraph size="md" className="custom-class">
        Test Paragraph
      </Paragraph>,
    );
    const paragraph = container.getElementsByTagName('p')[0];
    expect(paragraph).toHaveClass('custom-class');
    expect(paragraph).toHaveClass('pb-paragraph-md');
  });

  it('should spread additional props correctly', () => {
    const { container } = render(
      <Paragraph size="lg" data-testid="test-paragraph">
        Test Paragraph
      </Paragraph>,
    );
    const paragraph = container.getElementsByTagName('p')[0];
    expect(paragraph).toHaveAttribute('data-testid', 'test-paragraph');
  });
});
