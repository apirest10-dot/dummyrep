//to create file
//filename.spec.ts
//filename.test.ts
//npx playwright test ./tests/logintest.spec.ts

import {test,expect } from "@playwright/test";
//test.describe.configure({timeout:5000})
test("Validate valid username and password",async function ({page}){
    //launch url
   await page.goto('http://webapp.qedgetech.com/')
   await page.locator('#ername').fill('admin',{timeout:3000})
   //verify username textbox have the have
   await expect(page.locator('#username')).toHaveValue('admin')
   //await page.waitForTimeout(2000)
   await page.locator('#password').fill('master');
   //Asserts that an input element has the specified value.
   //verify password textbox have the have
   await expect(page.locator('#password')).toHaveValue('master')
  //  await page.waitForTimeout(2000)
   await page.getByRole('button',{name:'Login'}).nth(0).click();
   //Asserts that an element's text content contains the provided text or a regular expression.
   await expect(page.locator('#ewPageCaption')).toContainText("Dashboard")
  //  await page.waitForTimeout(2000)
   // Asserts that an element is visible in the DOM.
   await expect(page.getByRole('link',{name: ' Logout'})).toBeVisible();

})


