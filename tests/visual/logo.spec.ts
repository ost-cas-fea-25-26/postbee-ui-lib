import { expect, test } from '@playwright/test';

test.describe('Logo visual tests', () => {
  test('renders logo correctly', async ({ page }) => {
    await page.goto('/iframe.html?id=components-logo--default'); // Storybook story
    const logo = page.locator('[data-testid="logo"]');
    await expect(logo).toHaveScreenshot('logo-default.png');
  });
});
