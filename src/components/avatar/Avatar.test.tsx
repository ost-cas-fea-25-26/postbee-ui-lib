import React from 'react';

import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Avatar } from './Avatar';

// Mock RadixAvatar.Fallback to have no delay in tests
vi.mock('@radix-ui/react-avatar', async () => {
  const original = await vi.importActual('@radix-ui/react-avatar');
  return {
    ...original,
    Image: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
    Fallback: ({ children }: { children?: React.ReactNode }) => <span>{children}</span>, // Just render children immediately
  };
});

describe('<Avatar />', () => {
  it('renders fallback text when no image source is provided', () => {
    render(<Avatar fallback="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="test-avatar.png" alt="Test Avatar" />);
    const img = screen.getByAltText('Test Avatar');
    expect(img).toBeInTheDocument();

    fireEvent.load(img);
  });

  it('applies correct size classes based on size prop', () => {
    const { container, rerender } = render(<Avatar size="sm" fallback="A" />);
    const rootSpan = container.querySelector('span');
    expect(rootSpan).toHaveClass('w-10 h-10');

    rerender(<Avatar size="md" fallback="B" />);
    expect(rootSpan).toHaveClass('w-16 h-16');

    rerender(<Avatar size="lg" fallback="C" />);
    expect(rootSpan).toHaveClass('w-24 h-24');

    rerender(<Avatar size="xl" fallback="D" />);
    expect(rootSpan).toHaveClass('w-40 h-40');
  });

  it('renders edit button only when isEditable is true', () => {
    const { rerender } = render(<Avatar fallback="E" />);
    expect(screen.queryByRole('button')).toBeNull();

    rerender(<Avatar fallback="E" isEditable />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onEdit callback when edit button is clicked', () => {
    const onEdit = vi.fn();
    render(<Avatar fallback="F" isEditable onEdit={onEdit} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onEdit).toHaveBeenCalled();
  });

  it('applies custom className to wrapper div', () => {
    const className = 'custom-wrapper-class';
    const { container } = render(<Avatar fallback="G" className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});
