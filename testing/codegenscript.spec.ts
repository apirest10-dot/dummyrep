//codegen which is used for record and playback
//npx playwright codegen or url

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://flights.qedgetech.com/');
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Register' }).click();
await expect(page.locator('b')).toContainText('Please fill the following details');
await page.getByRole('textbox', { name: 'Name', exact: true }).fill('akhilesh');
await page.getByPlaceholder('Contact Number').fill('6547895478');
await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test7654@gmail.com');
await page.getByRole('textbox', { name: 'Name * Contact Number * Email' }).fill('test@3456');
await page.getByRole('combobox').selectOption('M');
await page.waitForTimeout(2000)
await page.getByRole('textbox', { name: 'Date of Birth in DD-MM-YYYY' }).click();
await page.getByRole('link', { name: '18' }).click();
await page.waitForTimeout(2000)
await page.getByRole('checkbox', { name: 'By Clicking Register button' }).check();
await page.getByRole('button', { name: 'Register' }).click();
await page.waitForTimeout(2000)
await expect(page.getByRole('heading')).toContainText('Congratulations, You have successfully Registered. Please login below.');
const message = await page.getByRole('heading').textContent();
console.log(message)
await page.waitForTimeout(5000)
});