import type { FC, SVGProps } from 'react';

import AppVariant01 from './svg-components/AppVariant01';
import AppVariant02 from './svg-components/AppVariant02';
import Gradient01 from './svg-components/Gradient01';
import Gradient02 from './svg-components/Gradient02';
import Mumble from './svg-components/Mumble';
import Violet01 from './svg-components/Violet01';
import Violet02 from './svg-components/Violet02';
import White01 from './svg-components/White01';
import White02 from './svg-components/White02';

type LogoComponent = FC<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;

export const LOGO_COMPONENTS = {
  'app-variant-01': AppVariant01 as LogoComponent,
  'app-variant-02': AppVariant02 as LogoComponent,
  'gradient-01': Gradient01 as LogoComponent,
  'gradient-02': Gradient02 as LogoComponent,
  mumble: Mumble as LogoComponent,
  'violet-01': Violet01 as LogoComponent,
  'violet-02': Violet02 as LogoComponent,
  'white-01': White01 as LogoComponent,
  'white-02': White02 as LogoComponent,
} as const;
