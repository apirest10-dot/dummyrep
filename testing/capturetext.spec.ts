import {test, expect } from "@playwright/test";
//https://playwright.dev/docs/test-assertions

test("Capture text",async function({page}){
    //launch url
    await page.goto("https://demoqa.com/automation-practice-form")
   // await page.waitForTimeout(5000)
    const singleelementtext = page.locator(".practice-form-wrapper h5").textContent();
    console.log(singleelementtext)
    await expect(singleelementtext).toBe("Student Registration Form").timeout(3000)
    //[1,3,2,4,5,6,"TS"]
    const multipleelementtext = await page.locator('#userForm label').allTextContents();
    console.log(multipleelementtext)
    
})
//we can overide timeout in three ways
//1.configure level#3
//2.test level#2
//3.step level#1

