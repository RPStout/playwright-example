import { test, expect } from '@playwright/test';
import { loginAs } from '../utils/auth';
import { users } from '../utils/users';

// Mark this entire suite with @smoke tag by naming it "Smoke Tests" or use test.info().annotations if needed

test.describe('@smoke Smoke Tests', () => {
  test('Standard user can log in', async ({ page }) => {
    await loginAs(page, users.standard);
    await expect(page).toHaveURL(/inventory/);
  });

  test('Basic inventory page loads', async ({ page }) => {
    await loginAs(page, users.standard);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});