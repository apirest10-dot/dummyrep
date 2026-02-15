import { test,expect } from "@playwright/test";
// 1.click()
// 2.check()
// 3.toBeChecked()
// You can use the setChecked() method to check or uncheck it irrespective of its current status.
// To verify the checkbox selected in Playwright, you can use the toBeTruthy() or toBeChecked() methods
test("validate checkbox and radio buttons",async({page})=>{
   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
   //await page.locator("[value='radio2']").click();
   //await page.locator("[value='radio2']").check()
   await page.setChecked("[value='radio2']", false); // to check
   //how to verify check is checked or not
   await expect(page.locator("[value='radio2']")).toBeChecked();
})

test.only("validate checkbox ",async({page})=>{
   await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
   await page.setChecked("#remember",false);
      //await expect(page.locator("[value='radio2']")).toBeChecked();
})