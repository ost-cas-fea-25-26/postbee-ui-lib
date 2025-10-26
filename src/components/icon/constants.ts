/// <reference types="vite-plugin-svgr/client" />
import ArrowDown from './svg/arrow-down.svg?react';
import ArrowLeft from './svg/arrow-left.svg?react';
import ArrowRight from './svg/arrow-right.svg?react';
import ArrowUp from './svg/arrow-up.svg?react';
import Calendar from './svg/calendar.svg?react';
import Cancel from './svg/cancel.svg?react';
import Checkmark from './svg/checkmark.svg?react';
import Edit from './svg/edit.svg?react';
import Eye from './svg/eye.svg?react';
import Fullscreen from './svg/fullscreen.svg?react';
import HeartFilled from './svg/heart-filled.svg?react';
import Heart from './svg/heart.svg?react';
import Location from './svg/location.svg?react';
import LogOut from './svg/log-out.svg?react';
import Mumble from './svg/mumble.svg?react';
import Profile from './svg/profile.svg?react';
import ReplyFilled from './svg/reply-filled.svg?react';
import Reply from './svg/reply.svg?react';
import Repost from './svg/repost.svg?react';
import Send from './svg/send.svg?react';
import Settings from './svg/settings.svg?react';
import Share from './svg/share.svg?react';
import Time from './svg/time.svg?react';
import Upload from './svg/upload.svg?react';

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
