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
    primary: 'bg-violet-600 text-white font-bold hover:bg-violet-800 focus:ring-blue-600',
    secondary: 'bg-gray-600 text-white font-semibold hover:bg-gray-700 focus:ring-gray-600',
    tertiary: 'bg-transparent text-blue-600 underline hover:no-underline hover:text-blue-800 focus:ring-blue-600',
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
