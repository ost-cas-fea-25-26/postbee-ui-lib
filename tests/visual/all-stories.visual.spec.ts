import { test } from '@playwright/test';

import { expectVisualMatch, getAllStories, openStory } from '../utils';

const stories = getAllStories();

for (const storyId of stories) {
  test(`📸 Visual: ${storyId}`, async ({ page }) => {
    await openStory(page, storyId);
    await expectVisualMatch(page, storyId);
  });
}
