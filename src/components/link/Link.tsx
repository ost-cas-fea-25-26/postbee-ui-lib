import React from 'react';

import clsx from 'clsx';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  disabled?: boolean;
}

export const Link: React.FC<LinkProps> = ({ className = '', children, href, target, rel, disabled = false, ...props }) => {
  const isExternal = target === '_blank';

  const safeRel = isExternal ? (rel ? rel : 'noopener noreferrer') : rel;

  const baseStyles =
    'text-primary text-sm underline decoration-1 underline-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-primary-300';
  const hoverStyles = 'hover:decoration-primary-200';
  const disabledStyles = 'pointer-events-none opacity-40 !text-black';

  if (disabled) {
    return (
      <a role="link" aria-disabled="true" className={clsx(baseStyles, disabledStyles)}>
        {children}
      </a>
    );
  }

  return (
    <a {...props} href={href} target={target} rel={safeRel} className={clsx(baseStyles, hoverStyles, className)}>
      {children}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
};
