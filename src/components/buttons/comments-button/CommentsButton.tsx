'use client';

import React from 'react';

import { ToggleButton, type ToggleButtonProps } from '../toggle-button';

interface CommentsButtonProps extends Omit<ToggleButtonProps, 'isActive' | 'icon' | 'text' | 'children'> {
  count?: number;
}

export const CommentsButton: React.FC<CommentsButtonProps> = ({ count = 0, ...props }) => {
  const getText = () => {
    if (count === 0) return 'Comment';
    if (count === 1) return '1 Comment';
    return `${count} Comments`;
  };

  return (
    <ToggleButton
      icon={count > 0 ? 'reply-filled' : 'reply'}
      className="hover:text-primary hover:bg-primary-50"
      activeClassName="text-secondary"
      activeIconClassName="text-primary"
      isActive={count > 0}
      {...props}
    >
      {getText()}
    </ToggleButton>
  );
};
