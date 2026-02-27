import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pages/playwright-dev-page';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);


  playwrightDev.goTo();
  playwrightDev.waitForTimeoutInSeconds(3000);
  

  await playwrightDev.getStarted();
  await page.waitForTimeout(3000);

  //await expect(playwrightDev.tocList).toHaveText(['How to install Playwright']);
  //await expect(page.getByRole('link', { name: 'How to install Playwright' })).toContainText('How to install Playwright');
  //await expect(playwrightDev.tocList).toHaveText('How to install Playwright');
  //await expect(page.getByRole('link', { name: 'How to install Playwright' })).toContainText('How to install Playwright');
  const list = page.locator('div.markdown ul').nth(0).locator('li');
  await expect(list).toHaveCount(4);
  
  await expect(list.nth(0)).toHaveText('How to install Playwright');
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  
  playwrightDev.goTo();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

