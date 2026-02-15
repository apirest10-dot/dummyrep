import { test,expect } from "@playwright/test";
import { title } from "process";

// test("Mouse hover",async({page})=>{
// //launch url
// await page.goto("https://www.spicejet.com/") 
// await page.waitForTimeout(2000)
// //mouse hover to addons
// await page.getByText('Add-ons',{exact: true}).hover()
// await page.waitForTimeout(2000)
// //verify extra seats is visible or not
// await expect(page.getByTestId('test-id-Extra Seat')).toBeVisible();
// await page.waitForTimeout(2000)
// //print text of it
// const elementtextcontent = await page.getByTestId('test-id-Extra Seat').textContent();
// console.log(elementtextcontent)

// })

test("mouse hover in flipkart",async({page})=>{
await page.goto("https://www.flipkart.com/")
await page.waitForTimeout(3000)
//mouse hover to fashion
await page.locator("//span[contains(text(),'Fashion')]").hover()
await page.waitForTimeout(3000)
await page.locator("//a[normalize-space()='All']").click()
await page.waitForTimeout(3000)
//mouse hoveer to electonincs
await page.locator("//span[normalize-space()='Electronics']").hover();
await page.waitForTimeout(3000)
//click apple links
await page.getByText("Apple",{exact:true}).click()

await page.waitForTimeout(3000)
//mouse hover to baya and kids
await page.getByText("Baby & Kids").hover()
await page.waitForTimeout(3000)
await page.getByText("Puzzles").click()

})