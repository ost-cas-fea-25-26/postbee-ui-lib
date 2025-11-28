import type { FC, SVGProps } from 'react';

import ArrowDown from './svg-components/ArrowDown';
import ArrowLeft from './svg-components/ArrowLeft';
import ArrowRight from './svg-components/ArrowRight';
import ArrowUp from './svg-components/ArrowUp';
import Calendar from './svg-components/Calendar';
import Cancel from './svg-components/Cancel';
import Checkmark from './svg-components/Checkmark';
import Edit from './svg-components/Edit';
import Eye from './svg-components/Eye';
import Fullscreen from './svg-components/Fullscreen';
import Heart from './svg-components/Heart';
import HeartFilled from './svg-components/HeartFilled';
import Location from './svg-components/Location';
import LogOut from './svg-components/LogOut';
import Mumble from './svg-components/Mumble';
import Profile from './svg-components/Profile';
import Reply from './svg-components/Reply';
import ReplyFilled from './svg-components/ReplyFilled';
import Repost from './svg-components/Repost';
import Send from './svg-components/Send';
import Settings from './svg-components/Settings';
import Share from './svg-components/Share';
import Time from './svg-components/Time';
import Upload from './svg-components/Upload';

type LogoComponent = FC<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;

export const ICON_COMPONENTS = {
  'arrow-down': ArrowDown as LogoComponent,
  'arrow-left': ArrowLeft as LogoComponent,
  'arrow-right': ArrowRight as LogoComponent,
  'arrow-up': ArrowUp as LogoComponent,
  calendar: Calendar as LogoComponent,
  cancel: Cancel as LogoComponent,
  checkmark: Checkmark as LogoComponent,
  edit: Edit as LogoComponent,
  eye: Eye as LogoComponent,
  fullscreen: Fullscreen as LogoComponent,
  heart: Heart as LogoComponent,
  'heart-filled': HeartFilled as LogoComponent,
  location: Location as LogoComponent,
  'log-out': LogOut as LogoComponent,
  mumble: Mumble as LogoComponent,
  profile: Profile as LogoComponent,
  reply: Reply as LogoComponent,
  'reply-filled': ReplyFilled as LogoComponent,
  repost: Repost as LogoComponent,
  send: Send as LogoComponent,
  settings: Settings as LogoComponent,
  share: Share as LogoComponent,
  time: Time as LogoComponent,
  upload: Upload as LogoComponent,
} as const;

export const COLOR_CLASS_NAMES = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  white: 'text-white',
  error: 'text-error',
};
