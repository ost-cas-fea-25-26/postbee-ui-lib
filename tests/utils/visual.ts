import { Page, expect } from '@playwright/test';

export async function expectVisualMatch(page: Page, name: string) {
  const root = page.locator('#root');
  await expect(root).toHaveScreenshot(`${name}.png`);
}
