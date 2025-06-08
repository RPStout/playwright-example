export async function loginAs(page, username: string, password: string = 'secret_sauce') {
  await page.goto('/');
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', password);
  await page.click('[data-test="login-button"]');
}