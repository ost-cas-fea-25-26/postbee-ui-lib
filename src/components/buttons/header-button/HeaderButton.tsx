import React from 'react';

import clsx from 'clsx';

import { Icon, type IconProps } from '../../icon';
import type { IconName } from '../../icon';

export type IconAnimation = 'rotate';

export interface HeaderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  iconAnimation?: IconAnimation;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  icon,
  size = 'md',
  iconAnimation,
  children,
  className,
  ...props
}) => {
  const iconProps: Partial<Omit<IconProps, 'icon'>> = {
    size: 16,
    color: 'white',
  };

  const isIconOnly = !text && !children && icon;

  const sizeClasses = {
    sm: 'min-w-12 h-12 p-1',
    md: 'min-w-14 h-14 p-1.5',
    lg: 'min-w-16 h-16 p-2',
  };

  const labelSizeClasses = {
    sm: 'min-w-12 h-12 text-xs',
    md: 'min-w-14 h-14 text-sm',
    lg: 'min-w-16 h-16 text-sm',
  };

  const sizeClass = text ? labelSizeClasses[size] : sizeClasses[size];

  const content = (
    <>
      {icon && (
        <Icon
          icon={icon}
          {...iconProps}
          className={clsx({
            'mt-1': text || children,
            'group-hover:rotate-90 duration-300 ease-in-out transition-transform': iconAnimation === 'rotate',
          })}
        />
      )}
      {children}
      {text && <span className="mt-0.5 block text-center text-white">{text}</span>}
    </>
  );

  return (
    <button
      type="button"
      className={clsx(
        'bg-primary hover:bg-primary-hover flex flex-col group',
        'cursor-pointer items-center justify-center rounded-md px-2',
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
