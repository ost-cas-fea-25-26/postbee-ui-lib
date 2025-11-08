import { AxeBuilder } from '@axe-core/playwright';
import { Page } from '@playwright/test';

export async function analyzeAccessibility(page: Page) {
  return new AxeBuilder({ page })
    .disableRules(['color-contrast']) // optional: ignore known issues
    .analyze();
}
