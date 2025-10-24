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
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  text,
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
      disabled={disabled}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center font-semibold leading-none transition-colors disabled:pointer-events-none disabled:opacity-50',
        isIconOnly ? 'rounded-full' : 'rounded-md',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      aria-label={isIconOnly ? `${icon} icon` : undefined}
      {...props}
    >
      {text ? text : children}
      {icon && <Icon icon={icon} size={16} className={clsx({ 'ml-xs': !isIconOnly })} />}
    </button>
  );
};
