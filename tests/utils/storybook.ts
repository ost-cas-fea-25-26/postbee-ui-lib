import { Page, expect } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';

export const STORYBOOK_BASE = process.env.STORYBOOK_BASE_URL ?? 'http://localhost:6006';

/**
 * Build the iframe URL for a given story id (and optional args).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStoryUrl(storyId: string, args: Record<string, any> = {}): string {
  const params = new URLSearchParams({
    id: storyId,
    ...Object.fromEntries(Object.entries(args).map(([key, val]) => [`args-${key}`, String(val)])),
  });
  return `${STORYBOOK_BASE}/iframe.html?${params}`;
}

/**
 * Open a story and wait for it to mount.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function openStory(page: Page, storyId: string, args: Record<string, any> = {}) {
  const url = getStoryUrl(storyId, args);
  await page.goto(url);
  await expect(page.locator('#storybook-root')).toBeVisible({ timeout: 5000 });
}

/**
 * Parse stories from the built Storybook static JSON.
 * Run `npm run build-storybook` first.
 */
export function getAllStories() {
  const file = './storybook-static/index.json';
  if (!existsSync(file)) {
    throw new Error('index.json not found. Run "npm run build-storybook" first.');
  }
  const data = JSON.parse(readFileSync(file, 'utf8'));

  // Storybook 10 structure may differ; adjust accordingly
  // For example, it might have a `stories` or `entries` property
  if (!data.stories && !data.entries) {
    throw new Error('Unexpected index.json structure');
  }

  // Assuming stories are in data.stories or data.entries as an object
  const storiesObject = data.stories ?? data.entries;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.values(storiesObject).map((story: any) => story.id);
}
