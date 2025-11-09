import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run storybook',
    url: 'http://localhost:6006',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:6006',
    headless: true,
  },
  expect: {
    toHaveScreenshot: { threshold: 0.2 },
  },
});
