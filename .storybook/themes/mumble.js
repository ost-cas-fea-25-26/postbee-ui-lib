import { create } from 'storybook/theming/create'
import { version } from '../../package.json'

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: `PostBee UI v.${version}`,
  brandUrl: 'https://postbee-app.vercel.app/',
  brandImage: 'mumble-logo.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#7C3AED',
})
