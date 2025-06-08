import { test, expect } from '@playwright/test';
import { loginAs } from '../utils/auth';

test.describe('Sorting functionality - standard_user only', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, 'standard_user');
  });

  test('Sort A to Z shows backpack first', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'az');
    const firstItem = page.locator('.inventory_item_name').first();
    await expect(firstItem).toHaveText('Sauce Labs Backpack');
  });

  test('Sort Z to A shows red shirt first', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'za');
    const firstItem = page.locator('.inventory_item_name').first();
    await expect(firstItem).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });
});
