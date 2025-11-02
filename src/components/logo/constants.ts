/// <reference types="vite-plugin-svgr/client" />
import AppVariant01 from './logos/app-variant-01.svg?react';
import AppVariant02 from './logos/app-variant-02.svg?react';
import Gradient01 from './logos/gradient-01.svg?react';
import Gradient02 from './logos/gradient-02.svg?react';
import Mumble from './logos/mumble.svg?react';
import Violet01 from './logos/violet-01.svg?react';
import Violet02 from './logos/violet-02.svg?react';
import White01 from './logos/white-01.svg?react';
import White02 from './logos/white-02.svg?react';

export const LOGO_COMPONENTS = {
  'app-variant-01': AppVariant01,
  'app-variant-02': AppVariant02,
  'gradient-01': Gradient01,
  'gradient-02': Gradient02,
  mumble: Mumble,
  'violet-01': Violet01,
  'violet-02': Violet02,
  'white-01': White01,
  'white-02': White02,
} as const;
