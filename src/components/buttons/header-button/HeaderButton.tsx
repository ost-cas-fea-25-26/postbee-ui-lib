import React from 'react';

import clsx from 'clsx';

import { Icon, type IconProps } from '../../icon';
import type { IconName } from '../../icon';

export interface HeaderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  iconProps?: Partial<Omit<IconProps, 'icon'>>;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  icon,
  iconProps,
  size = 'md',
  children,
  className,
  ...props
}) => {
  const defaultIconProps: Partial<Omit<IconProps, 'icon'>> = {
    size: (text && size === 'sm') || size === 'sm' ? 10 : 16,
    color: 'white',
  };

  const finalIconProps = { ...defaultIconProps, ...iconProps };

  const isIconOnly = !text && !children && icon;

  const sizeClasses = {
    sm: 'min-w-6 h-6 p-1',
    md: 'min-w-8 h-8 p-1.5',
    lg: 'min-w-10 h-10 p-2',
  };

  const labelSizeClasses = {
    sm: 'min-w-12 h-12 text-xs',
    md: 'min-w-14 h-14 text-sm',
    lg: 'min-w-16 h-16 text-sm',
  };

  const sizeClass = text ? labelSizeClasses[size] : sizeClasses[size];

  const content = (
    <>
      {icon && <Icon icon={icon} {...finalIconProps} />}
      {children}
      {text && <span className="mt-0.5 block text-center text-white">{text}</span>}
    </>
  );

  return (
    <button
      type="button"
      className={clsx(
        'bg-primary hover:bg-primary-hover flex flex-col',
        'cursor-pointer items-center justify-center rounded-md px-2 pt-1',
        sizeClass,
        className,
      )}
      aria-label={isIconOnly ? `${icon} icon` : undefined}
      {...props}
    >
      {content}
    </button>
  );
};
