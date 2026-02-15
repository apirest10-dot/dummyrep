//import { test, expect } from '@playwright/test';

import{ test ,expect} from '@playwright/test'

test('successful login', async ({ page }) => {
  // Navigate to the login page
   await page.goto('http://orangehrm.qedgetech.com/'); // 

  // Fill in the username field
   await page.locator('#txtUsername').fill('Admin');

  // Fill in the password field
   await page.locator('#txtPassword').fill("Qedge123!@#");
   await page.locator('button')

  // Click the login button
   await page.locator('#btnLogin').click();

  // Assert that the login was successful (e.g., check for a welcome message or redirection)
   
});



 