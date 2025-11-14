import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig(() =>
  mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        projects: [
          {
            // Remove or fix extends:
            // extends: true,  <-- remove or set properly
            plugins: [
              storybookTest({
                configDir: path.join(dirname, '.storybook'),
              }),
            ],
            test: {
              name: 'storybook',
              browser: {
                enabled: true,
                headless: true,
                provider: { name: 'playwright' },
                instances: [{ browser: 'chromium' }],
              },
              setupFiles: ['./.storybook/vitest.setup.ts'], // ensure correct path
            },
          },
        ],
      },
    }),
  ),
);
