import React from 'react';

import type { IconName } from '../../icon';
import { Button, type ButtonSize, type ButtonVariant } from '../button';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', ...props }) => {
  return <Button icon={icon} size={size} {...props} />;
};
