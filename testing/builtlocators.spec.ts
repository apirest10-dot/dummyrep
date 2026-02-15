import { test,expect } from "@playwright/test";

test("multiple windows",async function({page}){
    await page.goto('https://gmail.com')

//wait for popup event to appear on the page without using await
const page1= page.waitForEvent('popup')//in progress
await page.locator('[target=_blank]').nth(1).click()
const newpage= await page1
await newpage.getByText("Community",{exact:true}).click()
await page.waitForTimeout(5000)
await expect(newpage.locator("//a[normalize-space()='Google Account Help']").click())
await page.waitForTimeout(5000)
await newpage.close();
await page.waitForTimeout(5000)
page.locator('#identifierId').fill("pranga2010")
await page.waitForTimeout(5000)

})
