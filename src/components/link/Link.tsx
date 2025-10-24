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
    'text-primary-600 underline decoration-1 underline-offset-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300';
  const hoverStyles = 'hover:decoration-primary-200 hover:text-primary-700';
  const disabledStyles = 'pointer-events-none text-gray-400 decoration-gray-300';

  if (disabled) {
    return (
      <a role="link" aria-disabled="true" className={clsx(baseStyles, disabledStyles)}>
        {children}
      </a>
    );
  }

  return (
    <a {...props} href={href} target={target} rel={safeRel} className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
};
