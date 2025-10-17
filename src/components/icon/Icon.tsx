import React from 'react';
import clsx from 'clsx';
import { ICON_COMPONENTS, COLOR_CLASS_NAMES } from './constants';

export type IconName = keyof typeof ICON_COMPONENTS;
export type IconColor = keyof typeof COLOR_CLASS_NAMES;

export interface IconProps extends React.ComponentProps<'svg'> {
  icon: IconName;
  color?: IconColor;
  size?: number;
}

function IconNotFound({ icon }: { icon: string }) {
  return <i>Icon "{icon}" not found</i>;
}

export const Icon: React.FC<IconProps> = ({ icon, color, size = 16, className, ...props }) => {
  const Component = ICON_COMPONENTS[icon];
  const colorClassName = color && COLOR_CLASS_NAMES[color];
  if (Component) {
    return <Component width={size} height={size} className={clsx(colorClassName, className)} {...props} />;
  } else {
    return <IconNotFound icon={icon} />;
  }
};
