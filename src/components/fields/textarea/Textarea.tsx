import React, { useId } from 'react';

import clsx from 'clsx';

import { Icon, type IconName } from '../../icon';
import { Label } from '../../typography';
import { ErrorMessage } from '../error-message';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  name: string;
  id?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  appendInnerIcon?: IconName;
  appendInnerIconAriaLabel?: string;
  onAppendInnerIconClick?: () => void;
}

export const Textarea: React.FC<TextareaProps> = ({
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
  const textareaId = id || generatedId;
  const errorId = `${textareaId}-error`;

  const appendInnerIconToRender = errorMessage ? 'cancel' : appendInnerIcon;

  return (
    <div className="w-full">
      {label && (
        <Label size="md" htmlFor={textareaId}>
          {label}
        </Label>
      )}
      <div className="relative">
        <textarea
          id={textareaId}
          name={name}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
          className={clsx(
            'p-sm text-md bg-secondary-50 text-secondary-700 block h-full w-full rounded-md border font-medium focus:outline-none focus:ring-1',
            'pb-placeholder',
            'transition duration-300 ease-in-out',
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
              onMouseDown={(e) => e.preventDefault()} // prevent focus change on mouse click
              onClick={onAppendInnerIconClick}
              aria-label={appendInnerIconAriaLabel || `${label || 'Textarea'} appended action`}
              className="pr-sm absolute right-0 top-5 flex items-center border-0 bg-transparent p-0 hover:cursor-pointer focus:outline-none"
            >
              <Icon icon={appendInnerIconToRender as IconName} size={16} color="secondary" />
            </button>
          ) : (
            <div className="pr-sm absolute right-0 top-5 flex items-center">
              <Icon icon={appendInnerIconToRender as IconName} size={16} color={errorMessage ? 'error' : 'secondary'} />
            </div>
          ))}
      </div>
      {errorMessage && <ErrorMessage id={errorId} message={errorMessage} />}
    </div>
  );
};
