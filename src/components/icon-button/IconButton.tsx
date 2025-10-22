import React, { type ReactNode } from 'react';
import { Icon, type IconProps } from '../icon';

export interface IconButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  icon?: IconProps['icon'];
  iconProps?: Partial<Omit<IconProps, 'icon'>>;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  icon,
  iconProps,
  label,
  className = '',
  size = 'md',
  ariaLabel,
}) => {
  const defaultIconProps: Partial<Omit<IconProps, 'icon'>> = {
    size: (label && size === 'sm') || size === 'sm' ? 10 : 16,
    color: 'white',
  };

  const finalIconProps = { ...defaultIconProps, ...iconProps };

  const shouldRenderIcon = icon !== undefined || label !== undefined;

  const layoutClass = label
    ? 'flex flex-col items-center justify-center px-2 py-1 rounded-lg'
    : 'inline-flex items-center justify-center rounded-full';

  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2',
  };

  const labelSizeClasses = {
    sm: 'w-10 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const sizeClass = label ? labelSizeClasses[size] : sizeClasses[size];

  const content = (
    <>
      {shouldRenderIcon && icon && <Icon icon={icon} {...finalIconProps} />}
      {children}
      {label && <span className="mt-1 block text-center text-xs text-white">{label}</span>}
    </>
  );

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-primary shadow transition-opacity ${sizeClass} ${layoutClass} $ ${className}`}
    >
      {content}
    </button>
  );
};
