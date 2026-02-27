import { test, expect } from '@playwright/test';

//const { login_data } = require('./core/ddd/ddd-data.json'); // or use: import { persons } from '../data.json';
import { login_data } from '../ddd/ddd-data.json';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login_data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login_data.password);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
});