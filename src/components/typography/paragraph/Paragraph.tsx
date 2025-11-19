import React from 'react';

import clsx from 'clsx';

export interface ParagraphProps extends React.ComponentProps<'p'> {
  children: string;
  size?: 'md' | 'lg';
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, size = 'md', className, ...props }) => {
  return (
    <p className={clsx(className, `pb-paragraph-${size}`)} {...props}>
      {children}
    </p>
  );
};
