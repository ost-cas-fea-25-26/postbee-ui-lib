'use client';

import React from 'react';

import clsx from 'clsx';

import { Icon } from '../../icon';
import type { IconName } from '../../icon';

export type TextButtonVariant = 'primary' | 'secondary';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TextButtonVariant;
  icon?: IconName;
  text?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  text,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'text-primary pb-label-sm hover:text-primary-900',
    secondary: 'text-secondary-500 pb-label-sm hover:text-secondary-600 ',
  };

  return (
    <button
      type="button"
      className={clsx(
        'inline-flex cursor-pointer disabled:pointer-events-none disabled:opacity-50',
        'transition duration-350 ease-in-out',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {icon && <Icon icon={icon} size={12} className="mr-xxs" />}
      {text ? text : children}
    </button>
  );
};
