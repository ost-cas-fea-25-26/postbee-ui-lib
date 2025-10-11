import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  label,
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
    small: 'py-xs px-[12px] text-sm',
    medium: 'p-[12px] text-md',
    large: 'px-md py-sm text-md',
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
      {icon && iconPosition === 'left' && <span className="mr-2 flex items-center">{icon}</span>}
      {label ? label : children}
      {icon && iconPosition === 'right' && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  );
};
