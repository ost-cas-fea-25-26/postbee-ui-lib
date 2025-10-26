import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from './Icon';
import type { IconName } from './Icon';
import { ICON_COMPONENTS } from './constants';

describe('Icon component', () => {
  const iconNames = Object.keys(ICON_COMPONENTS) as IconName[];

  it('renders without crashing with default props', () => {
    render(<Icon icon="arrow-down" data-testid="icon-svg" />);
    const svgElement = screen.getByTestId('icon-svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders all icons from ICON_COMPONENTS', () => {
    iconNames.forEach((iconName) => {
      const { container } = render(<Icon icon={iconName} size={16} />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  it('applies color prop correctly', () => {
    const { rerender } = render(<Icon icon="arrow-down" size={16} color="primary" data-testid="icon-svg" />);
    let svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveClass('text-primary');

    rerender(<Icon icon="arrow-down" size={16} color="secondary" data-testid="icon-svg" />);
    svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveClass('text-secondary');
  });

  it('applies size prop correctly', () => {
    const { rerender } = render(<Icon icon="arrow-down" size={16} data-testid="icon-svg" />);
    let svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');

    rerender(<Icon icon="arrow-down" size={32} data-testid="icon-svg" />);
    svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('sets aria-hidden="true" on svg if no title prop is given', () => {
    render(<Icon icon="arrow-down" size={16} data-testid="icon-svg" />);
    const svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg.querySelector('title')).not.toBeInTheDocument();
  });

  it('renders <title> and role="img" on svg when title prop is given', () => {
    const titleText = 'Arrow down icon';
    render(<Icon icon="arrow-down" size={16} title={titleText} data-testid="icon-svg" />);
    const svg = screen.getByTestId('icon-svg');
    expect(svg).toHaveAttribute('role', 'img');
    const title = svg.querySelector('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleText);
    expect(svg).not.toHaveAttribute('aria-hidden');
  });

  it('renders icon names in a demo layout', () => {
    render(
      <div className="gap-lg grid grid-cols-4">
        {iconNames.map((iconName) => (
          <div key={iconName}>
            <Icon icon={iconName} size={16} />
            <p>{iconName}</p>
          </div>
        ))}
      </div>,
    );

    iconNames.forEach((iconName) => {
      expect(screen.getByText(iconName)).toBeInTheDocument();
    });
  });
});
