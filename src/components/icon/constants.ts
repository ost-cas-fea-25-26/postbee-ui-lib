/// <reference types="vite-plugin-svgr/client" />
import ArrowDown from '/images/svg/icons/arrow-down.svg?react';
import ArrowLeft from '/images/svg/icons/arrow-left.svg?react';
import ArrowRight from '/images/svg/icons/arrow-right.svg?react';
import ArrowUp from '/images/svg/icons/arrow-up.svg?react';
import Calendar from '/images/svg/icons/calendar.svg?react';
import Cancel from '/images/svg/icons/cancel.svg?react';
import Checkmark from '/images/svg/icons/checkmark.svg?react';
import Edit from '/images/svg/icons/edit.svg?react';
import Eye from '/images/svg/icons/eye.svg?react';
import Fullscreen from '/images/svg/icons/fullscreen.svg?react';
import HeartFilled from '/images/svg/icons/heart-filled.svg?react';
import Heart from '/images/svg/icons/heart.svg?react';
import Location from '/images/svg/icons/location.svg?react';
import LogOut from '/images/svg/icons/log-out.svg?react';
import Mumble from '/images/svg/icons/mumble.svg?react';
import Profile from '/images/svg/icons/profile.svg?react';
import ReplyFilled from '/images/svg/icons/reply-filled.svg?react';
import Reply from '/images/svg/icons/reply.svg?react';
import Repost from '/images/svg/icons/repost.svg?react';
import Send from '/images/svg/icons/send.svg?react';
import Settings from '/images/svg/icons/settings.svg?react';
import Share from '/images/svg/icons/share.svg?react';
import Time from '/images/svg/icons/time.svg?react';
import Upload from '/images/svg/icons/upload.svg?react';

export const ICON_COMPONENTS = {
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  calendar: Calendar,
  cancel: Cancel,
  checkmark: Checkmark,
  edit: Edit,
  eye: Eye,
  fullscreen: Fullscreen,
  heart: Heart,
  'heart-filled': HeartFilled,
  location: Location,
  'log-out': LogOut,
  mumble: Mumble,
  profile: Profile,
  reply: Reply,
  'reply-filled': ReplyFilled,
  repost: Repost,
  send: Send,
  settings: Settings,
  share: Share,
  time: Time,
  upload: Upload,
} as const;

export const COLOR_CLASS_NAMES = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  white: 'text-white',
  error: 'text-error',
};
