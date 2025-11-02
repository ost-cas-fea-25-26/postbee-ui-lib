import React, { useId } from 'react';

import clsx from 'clsx';

import { LOGO_COMPONENTS } from './constants';

export type LogoName = keyof typeof LOGO_COMPONENTS;

export interface LogoProps extends React.ComponentProps<'svg'> {
  logo: LogoName;
  title?: string;
  size?: number;
}

function LogoNotFound({ logo }: { logo: string }) {
  return <i>Logo "{logo}" not found</i>;
}

export const Logo: React.FC<LogoProps> = ({ logo, title, size = 100, className, ...props }) => {
  const Component = LOGO_COMPONENTS[logo];

  const id = useId();

  if (Component) {
    return (
      <Component
        width={size}
        height={size}
        className={clsx(className)}
        // when no title is given, handle the icon as decorative
        aria-hidden={title ? undefined : 'true'}
        title={title}
        titleId={title ? `icon-title-${id}` : undefined}
        role={title ? 'img' : undefined}
        {...props}
      />
    );
  } else {
    return <LogoNotFound logo={logo} />;
  }
};
