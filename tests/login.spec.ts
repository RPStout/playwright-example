import { test, expect } from '@playwright/test';
import { loginAs } from '../utils/auth';
import { users } from '../utils/users';

test('Standard user can log in', async ({ page }) => {
  await loginAs(page, users.standard);
  await expect(page).toHaveURL(/inventory/);
});

test('Locked out user sees an error message', async ({ page }) => {
  await loginAs(page, users.lockedOut);
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});