'use client';

import React, { useEffect, useRef, useState } from 'react';

import type { IconName } from '../../icon';
import { ToggleButton, type ToggleButtonProps } from '../toggle-button';

interface LikeButtonProps extends Omit<ToggleButtonProps, 'isActive' | 'icon' | 'text' | 'children'> {
  count?: number;
  initialIsLiked?: boolean;
  onLikeAdd?: () => void;
  onLikeRemove?: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  count = 0,
  initialIsLiked = false,
  onLikeAdd,
  onLikeRemove,
  ...props
}) => {
  const [likesCount, setLikesCount] = useState(count);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isActive, setIsActive] = useState(count > 0 || initialIsLiked);
  const [showLikedText, setShowLikedText] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setLikesCount(count);
    setIsLiked(initialIsLiked);
    setIsActive(count > 0 || initialIsLiked);
  }, [count, initialIsLiked]);

  const handleClick = () => {
    if (disabled) return;

    if (isLiked) {
      setIsLiked(false);
      const newCount = likesCount > 0 ? likesCount - 1 : 0;
      setLikesCount(newCount);
      setIsActive(newCount > 0);
      onLikeRemove?.();
      return;
    }

    setIsLiked(true);
    setIsActive(true);

    if (likesCount === 0) {
      // first like, show "Liked" text for 2s
      setShowLikedText(true);
      setLikesCount(1);
      setDisabled(true);
      onLikeAdd?.();

      timeoutRef.current = setTimeout(() => {
        setShowLikedText(false);
        setDisabled(false);
      }, 2000);
    } else {
      const newCount = likesCount + 1;
      setLikesCount(newCount);
      onLikeAdd?.();
    }
  };

  const getText = () => {
    if (showLikedText) return 'Liked';
    if (likesCount === 1) return '1 Like';
    if (likesCount > 1) return `${likesCount} Likes`;
    return 'Like';
  };

  const iconName: IconName = isLiked ? 'heart-filled' : 'heart';

  return (
    <ToggleButton
      icon={iconName}
      isActive={isActive}
      disabled={disabled}
      className="hover:text-tertiary hover:bg-tertiary-50"
      activeClassName="text-tertiary-900"
      activeIconClassName="text-tertiary"
      aria-pressed={isActive ? 'true' : 'false'}
      onClick={handleClick}
      {...props}
    >
      {getText()}
    </ToggleButton>
  );
};
