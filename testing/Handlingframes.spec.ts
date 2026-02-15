import {test, expect } from "@playwright/test";
test("handling frames1",async({page})=>{
    //launch url
     await page.goto("https://jqueryui.com/droppable/")
     await page.waitForTimeout(2000)
     //store iframe into one varibale
     const framepage = page.frameLocator('.demo-frame')
    const source=  framepage.locator('#draggable')
    const target=  framepage.locator('#droppable')
    await source.dragTo(target)
     await page.waitForTimeout(2000)
     //verify text
     await expect(framepage.getByText('Dropped!')).toContainText('Dropped!')
await page.waitForTimeout(2000)
await page.locator("//a[normalize-space()='Button']").click()
await page.waitForTimeout(2000)
})

test("handling frames2",async({page})=>{
await page.goto("https://jqueryui.com/checkboxradio/")
//await page.waitForTimeout(2000)
//store iferame 
const framepage = page.frameLocator('.demo-frame');
await page.waitForTimeout(2000)
//select radio button
await framepage.locator("[for='radio-1']").check()
await expect(framepage.locator("[for='radio-1']")).toBeChecked();
//await page.waitForTimeout(2000)
//print radio button name
const radiobutton = await framepage.locator("[for='radio-1']").textContent();
console.log("Radio button name  "+radiobutton)
//await page.waitForTimeout(2000)
//select check box
await framepage.locator("[for='checkbox-3']").check()
await expect(framepage.locator("[for='checkbox-3']")).toBeChecked()
await page.waitForTimeout(2000)
const checkbox = await framepage.locator("[for='checkbox-3']").textContent();
console.log("check box name  "+checkbox)
//await page.waitForTimeout(2000)

})