import * as React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { IconButton } from '../buttons';

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isEditable?: boolean;
  onEdit?: () => void;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, fallback, size = 'md', isEditable = false, onEdit, className, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-10 h-10 text-sm border-none', // 40x40
      md: 'w-16 h-16 text-base', // 64x64
      lg: 'w-24 h-24 text-lg', // 96x96
      xl: 'w-40 h-40 text-xl', // 160x160
    }[size];

    return (
      <div className={clsx('group relative inline-block', className)}>
        <RadixAvatar.Root
          ref={ref}
          className={clsx(
            'bg-primary-200 text-secondary border-secondary-50 border-6 relative flex select-none items-center justify-center overflow-hidden rounded-full',
            sizeClasses,
          )}
          {...props}
        >
          {src ? (
            <RadixAvatar.Image src={src} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <RadixAvatar.Fallback className="flex h-full w-full items-center justify-center font-medium" delayMs={500}>
              {fallback || ''}
            </RadixAvatar.Fallback>
          )}
        </RadixAvatar.Root>

        {isEditable && (
          <IconButton
            icon="edit"
            aria-label="Edit avatar"
            variant="secondary"
            onClick={onEdit}
            className={clsx('absolute bottom-4 right-4 translate-x-1/4 translate-y-1/4 !outline-0')}
          />
        )}
      </div>
    );
  },
);
