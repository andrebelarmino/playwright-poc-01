import { test, expect } from '@playwright/test';

test('login and reach dashboard', async ({ page }) => {
  // there's no login needed because storage state
  // was already set via project dependencies
  //await page.goto('https://www.saucedemo.com/');
  await page.goto('https://www.saucedemo.com/inventory.html');
  

  await expect(page.locator('[data-test="title"]')).toContainText('Products');

});