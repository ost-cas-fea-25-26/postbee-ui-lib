import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:6006', // Storybook or app base
    headless: true,
    screenshot: 'only-on-failure',
  },
  expect: {
    toHaveScreenshot: { threshold: 0.2 },
  },
});
