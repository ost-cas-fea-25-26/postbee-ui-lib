import React from 'react';
import clsx from 'clsx';
import { Icon } from '../icon';
import type { IconName } from '../icon';

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
      'bg-primary text-primary-foreground outline-3 hover:bg-primary-hover hover:outline-primary-hover-outline active:bg-primary-active active:outline-primary-active-outline',
    secondary:
      'bg-secondary text-secondary-foreground outline-3 hover:bg-secondary-hover hover:outline-secondary-hover-outline active:bg-secondary-active active:outline-secondary-active-outline',
    tertiary:
      'bg-gradient-to-r from-tertiary to-primary text-tertiary-foreground outline-3 hover:bg-tertiary-hover hover:to-70% hover:outline-tertiary-hover-outline active:bg-tertiary-active active:outline-tertiary-active-outline active:to-50%',
  };

  const sizeClasses = {
    sm: 'py-xs px-[12px] text-sm',
    md: 'p-[12px] text-md',
    lg: 'px-md py-sm text-md',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center rounded-md font-semibold leading-none transition-colors disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {text ? text : children}
      {icon && <Icon icon={icon} size={16} className={clsx({ 'ml-xs': !isIconOnly })} />}
    </button>
  );
};
