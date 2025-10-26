import { type ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '../buttons';
import { Icon } from '../icon';
import { Heading } from '../typography';

export interface DialogProps {
  open: boolean;
  title: string;
  description?: string;
  width?: 'sm' | 'md';
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
  actions?: ReactNode;
}

export const Dialog = ({ open, title, description, width = 'md', onClose, onSubmit, children, actions }: DialogProps) => {
  const maxWidth = width === 'sm' ? 'md:max-w-[465px]' : 'md:max-w-[494px]';

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="bg-primary-100 fixed inset-0" />

        <div className="fixed inset-0 z-50 grid min-h-full place-items-center">
          <DialogPrimitive.Content
            aria-describedby={description ? undefined : void 0}
            className={`w-full overflow-hidden rounded-lg bg-white text-base shadow-lg ${maxWidth}`}
          >
            {/* Header */}
            <div className="bg-primary-600 px-lg py-md flex items-center justify-between text-white">
              <DialogPrimitive.Title asChild>
                <Heading level={3} className="text-white">
                  {title}
                </Heading>
              </DialogPrimitive.Title>

              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  aria-label="Close dialog"
                  className="focus-visible:outline-primary-100 cursor-pointer outline-offset-4"
                >
                  <Icon icon="cancel" color="white" />
                </button>
              </DialogPrimitive.Close>
            </div>

            {/* Description */}
            {description && (
              <DialogPrimitive.Description asChild>
                <p className="px-lg pt-lg">{description}</p>
              </DialogPrimitive.Description>
            )}

            {/* Body */}
            <div className="p-lg">
              {children}

              {/* Actions */}

              <div className="mt-xxl gap-sm grid grid-cols-1 md:grid-cols-2">
                {actions ? (
                  actions
                ) : (
                  <>
                    <Button text="Abbrechen" icon="cancel" variant="secondary" onClick={onClose} size="md" />
                    <Button text="Speichern" icon="checkmark" onClick={onSubmit} size="md" />
                  </>
                )}
              </div>
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
