import React, { useId } from 'react';
import { Label } from '../typography';
import { Icon, type IconName } from '../icon';
import clsx from 'clsx';

interface InputProps extends React.ComponentProps<'input'> {
  name: string;
  id?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  appendInnerIcon?: IconName;
  appendInnerIconAriaLabel?: string;
  onAppendInnerIconClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  id,
  label,
  errorMessage,
  className,
  appendInnerIcon,
  onAppendInnerIconClick,
  appendInnerIconAriaLabel,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;

  const appendInnerIconToRender = errorMessage ? 'cancel' : appendInnerIcon;

  return (
    <div className="w-full">
      {label && (
        <Label size="md" htmlFor={inputId}>
          {label}
        </Label>
      )}
      <div className="relative">
        <input
          id={inputId}
          name={name}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
          className={clsx(
            'h-xl px-sm text-md bg-secondary-50 text-secondary-700 w-full rounded-md border font-medium focus:outline-none focus:ring-1',
            'pb-placeholder',
            {
              'pr-11': !!appendInnerIconToRender,
              'border-secondary-200 hover:border-primary focus:ring-primary focus:border-primary': !errorMessage,
              'border-error focus:border-error focus:ring-error': !!errorMessage,
            },
            className,
          )}
          {...props}
        />
        {appendInnerIconToRender &&
          (onAppendInnerIconClick && !errorMessage ? (
            <button
              type="button"
              onClick={onAppendInnerIconClick}
              aria-label={appendInnerIconAriaLabel || `${label || 'Input'} appended action`}
              className="pr-sm absolute inset-y-0 right-0 flex items-center border-0 bg-transparent p-0 hover:cursor-pointer focus:outline-none"
            >
              <Icon icon={appendInnerIconToRender as IconName} size={16} color="secondary" />
            </button>
          ) : (
            <div className="pr-sm absolute inset-y-0 right-0 flex items-center">
              <Icon icon={appendInnerIconToRender as IconName} size={16} color={errorMessage ? 'error' : 'secondary'} />
            </div>
          ))}
      </div>
      {errorMessage && (
        <p className="mt-xxs text-error text-right text-xs" id={errorId} role="alert" aria-live="assertive">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
