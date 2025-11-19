import React from 'react';

import clsx from 'clsx';

export interface HeadingProps extends React.ComponentProps<'h1' | 'h2' | 'h3' | 'h4'> {
  children: string;
  level: 1 | 2 | 3 | 4;
}

export const Heading: React.FC<HeadingProps> = ({ children, level, className, ...props }) => {
  const Tag: keyof React.JSX.IntrinsicElements = `h${level}`;

  return (
    <Tag className={clsx(className, `pb-h${level}`)} {...props}>
      {children}
    </Tag>
  );
};
