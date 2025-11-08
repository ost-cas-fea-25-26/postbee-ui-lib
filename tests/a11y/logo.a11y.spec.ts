import { expect, test } from '@playwright/test';

import { analyzeAccessibility } from '../utils/a11y';

test.describe('Logo accessibility', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/iframe.html?id=components-logo--default');
    const results = await analyzeAccessibility(page);
    expect(results.violations).toEqual([]);
  });
});
