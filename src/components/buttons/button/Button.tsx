'use client';

import React from 'react';

import clsx from 'clsx';

import { Icon } from '../../icon';
import type { IconName } from '../../icon';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: IconName;
  text?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  text,
  loading = false,
  className,
  ...props
}) => {
  const variantClasses = {
    primary:
      'bg-primary text-primary-foreground outline-3 ' +
      'hover:bg-primary-hover hover:outline-primary-hover-outline ' +
      'active:bg-primary-active active:outline-primary-active-outline ' +
      'focus-visible:outline-primary-hover-outline',

    secondary:
      'bg-secondary text-secondary-foreground outline-3 ' +
      'hover:bg-secondary-hover hover:outline-secondary-hover-outline ' +
      'active:bg-secondary-active active:outline-secondary-active-outline ' +
      'focus-visible:outline-secondary-hover-outline',

    tertiary:
      'bg-gradient-to-r from-tertiary to-primary text-tertiary-foreground outline-3 ' +
      'hover:bg-tertiary-hover hover:to-70% hover:outline-tertiary-hover-outline ' +
      'active:bg-tertiary-active active:outline-tertiary-active-outline active:to-50% ' +
      'focus-visible:outline-tertiary-hover-outline',
  };

  // render an icon button if only icon is present (no text or children)
  const isIconOnly = !text && !children && icon;

  const sizeClasses = {
    sm: isIconOnly ? 'p-3' : 'py-xs px-3 text-sm',
    md: isIconOnly ? 'p-4' : 'p-3 text-md',
    lg: isIconOnly ? 'p-5' : 'px-md py-sm text-md',
  };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center font-semibold leading-none disabled:pointer-events-none disabled:opacity-70',
        'transition duration-300 ease-in-out',
        isIconOnly ? 'rounded-full' : 'rounded-md',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      aria-label={isIconOnly ? `${icon} icon` : undefined}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <div role="status" className="absolute">
          <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <span className={clsx({ invisible: loading }, 'flex items-center')}>
        {text ? text : children}
        {icon && <Icon icon={icon} size={16} className={clsx({ 'ml-xs': !isIconOnly })} />}
      </span>
    </button>
  );
};
