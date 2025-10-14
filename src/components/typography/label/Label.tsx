import React from 'react';
import clsx from 'clsx';

export interface LabelProps extends React.ComponentProps<'label'> {
  children: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export const Label: React.FC<LabelProps> = ({ children, size, className, ...props }) => {
  return (
    <label className={clsx(className, `pb-label-${size}`)} {...props}>
      {children}
    </label>
  );
};
