import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

describe('Label component', () => {
  it('should render a label element', () => {
    const { container } = render(<Label size="md">Test Label</Label>);
    const label = container.getElementsByTagName('label')[0]; // Zugriff auf das <label>-Element
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Test Label');
  });

  it('should apply the correct class for each size', () => {
    const { container: containerSm } = render(<Label size="sm">Test Label</Label>);
    const labelSm = containerSm.getElementsByTagName('label')[0];
    expect(labelSm).toHaveClass('pb-label-sm');

    const { container: containerMd } = render(<Label size="md">Test Label</Label>);
    const labelMd = containerMd.getElementsByTagName('label')[0];
    expect(labelMd).toHaveClass('pb-label-md');

    const { container: containerLg } = render(<Label size="lg">Test Label</Label>);
    const labelLg = containerLg.getElementsByTagName('label')[0];
    expect(labelLg).toHaveClass('pb-label-lg');

    const { container: containerXl } = render(<Label size="xl">Test Label</Label>);
    const labelXl = containerXl.getElementsByTagName('label')[0];
    expect(labelXl).toHaveClass('pb-label-xl');
  });

  it('should accept custom className and merge it with default className', () => {
    const { container } = render(
      <Label size="md" className="custom-class">
        Test Label
      </Label>,
    );
    const label = container.getElementsByTagName('label')[0];
    expect(label).toHaveClass('custom-class');
    expect(label).toHaveClass('pb-label-md');
  });

  it('should spread additional props correctly', () => {
    const { container } = render(
      <Label size="lg" data-testid="test-label">
        Test Label
      </Label>,
    );
    const label = container.getElementsByTagName('label')[0];
    expect(label).toHaveAttribute('data-testid', 'test-label');
  });
});
