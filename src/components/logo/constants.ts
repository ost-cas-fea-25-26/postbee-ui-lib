/// <reference types="vite-plugin-svgr/client" />
import AppVariant01 from '/images/svg/logos/app-variant-01.svg?react';
import AppVariant02 from '/images/svg/logos/app-variant-02.svg?react';
import Gradient01 from '/images/svg/logos/gradient-01.svg?react';
import Gradient02 from '/images/svg/logos/gradient-02.svg?react';
import Mumble from '/images/svg/logos/mumble.svg?react';
import Violet01 from '/images/svg/logos/violet-01.svg?react';
import Violet02 from '/images/svg/logos/violet-02.svg?react';
import White01 from '/images/svg/logos/white-01.svg?react';
import White02 from '/images/svg/logos/white-02.svg?react';

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
