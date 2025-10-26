import React, { useId } from 'react';

import clsx from 'clsx';

import { COLOR_CLASS_NAMES, ICON_COMPONENTS } from './constants';

export type IconName = keyof typeof ICON_COMPONENTS;
export type IconColor = keyof typeof COLOR_CLASS_NAMES;

export interface IconProps extends React.ComponentProps<'svg'> {
  icon: IconName;
  title?: string;
  color?: IconColor;
  size?: number;
}

function IconNotFound({ icon }: { icon: string }) {
  return <i>Icon "{icon}" not found</i>;
}

export const Icon: React.FC<IconProps> = ({ icon, title, color, size = 16, className, ...props }) => {
  const Component = ICON_COMPONENTS[icon];
  const colorClassName = color && COLOR_CLASS_NAMES[color];
  const id = useId();

  if (Component) {
    return (
      <Component
        width={size}
        height={size}
        className={clsx(colorClassName, className)}
        // when no title is given, handle the icon as decorative
        aria-hidden={title ? undefined : 'true'}
        title={title}
        titleId={title ? `icon-title-${id}` : undefined}
        role={title ? 'img' : undefined}
        {...props}
      />
    );
  } else {
    return <IconNotFound icon={icon} />;
  }
};
