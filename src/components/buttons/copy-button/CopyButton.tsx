import React, { useState } from 'react';

import type { IconName } from '../../icon';
import { ToggleButton, type ToggleButtonProps } from '../toggle-button/ToggleButton';

export interface CopyButtonProps extends Omit<ToggleButtonProps, 'isActive' | 'icon' | 'text'> {
  // text to copy to clipboard
  textToCopy: string;
  // button text [default, after-copy]
  texts?: [string, string];
  // icons to display [default, after-copy]
  icons?: [IconName, IconName];
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  texts = ['Copy link', 'Link copied'],
  icons = ['share', 'share'],
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async () => {
    if (isCopied || !textToCopy) return;

    setIsCopied(true);

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <ToggleButton
      icon={isCopied ? icons[1] : icons[0]}
      text={isCopied ? texts[1] : texts[0]}
      isActive={isCopied}
      disabled={isCopied}
      className="hover:bg-secondary-100 hover:text-secondary-700"
      activeClassName="text-secondary-700 bg-secondary-100"
      onClick={handleClick}
      aria-pressed={isCopied ? 'true' : 'false'}
      {...props}
    />
  );
};
