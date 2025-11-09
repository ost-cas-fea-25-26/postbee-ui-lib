import { expect, test } from '@playwright/test';

import { analyzeAccessibility, getAllStories, openStory } from '../utils';

const stories = getAllStories();

for (const storyId of stories) {
  test(`♿ A11y: ${storyId}`, async ({ page }) => {
    await openStory(page, storyId);
    const results = await analyzeAccessibility(page);
    expect(results.violations, `Accessibility issues in ${storyId}`).toEqual([]);
  });
}
