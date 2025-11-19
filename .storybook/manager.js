import { addons } from 'storybook/manager-api';

import theme_mumble from './themes/mumble.js';

addons.setConfig({
  theme: theme_mumble,
});
