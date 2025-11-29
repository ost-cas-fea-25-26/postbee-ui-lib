'use client';

import React from 'react';

import clsx from 'clsx';

import { Icon, type IconName } from '../../icon';

export interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  text?: string;
  isActive?: boolean;
  activeClassName?: string;
  activeIconClassName?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  icon,
  text,
  isActive = false,
  activeClassName,
  activeIconClassName,
  className,
  children,
  ...props
}) => {
  // Default aktive Styles pro Variant
  const defaultActiveClasses = 'text-secondary-700 bg-secondary-100';

  return (
    <button
      className={clsx(
        'pb-label-md inline-flex items-center gap-2 rounded-full px-3 py-2 cursor-pointer',
        'disabled:pointer-events-none',
        'transition duration-300 ease-in-out',
        isActive && (activeClassName || defaultActiveClasses),
        className,
      )}
      {...props}
    >
      {icon && <Icon icon={icon} className={clsx(isActive && activeIconClassName)} size={16} />}
      {text ? text : children}
    </button>
  );
};
