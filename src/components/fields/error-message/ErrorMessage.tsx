import React from 'react';

export interface ErrorMessageProps extends React.ComponentProps<'p'> {
  id: string; // for linking aria-describedby
  message: string;
}

export const ErrorMessage = ({ id, message, ...props }: ErrorMessageProps) => {
  return (
    <p className="mt-xxs text-error text-right text-xs" id={id} role="alert" aria-live="assertive" {...props}>
      {message}
    </p>
  );
};
