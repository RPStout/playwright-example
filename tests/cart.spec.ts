import { test, expect } from '@playwright/test';
import { loginAs } from '../utils/auth';
import { users } from '../utils/users';

test.describe('Cart functionality - standard_user only', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, users.standard);
  });

  test('Add item to cart and verify cart count', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });

  test('Remove item from cart and verify cart is empty', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('Clicking cart icon navigates to cart page', async ({ page }) => {
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.cart_list')).toBeVisible();
  });
});