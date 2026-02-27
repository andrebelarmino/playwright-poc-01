import { test as setup, expect } from '@playwright/test';

// define file path for storage and session data
const authFile = ".auth/login.json"

setup('write login session', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');

  await page.waitForURL('https://www.saucedemo.com/inventory.html')
  
  // return storage and session data
  //await page.context().storageState();

  // write storage and session data to disk
  await page.context().storageState({ path: authFile })

});