import { test ,expect } from "@playwright/test";


test("perform drag drop",async({page})=>{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    await page.waitForTimeout(2000)
    const source = await page.locator('#draggable').nth(0);
    const target = await page.locator('#droppable').nth(0);
    await source.dragTo(target)
    await page.waitForTimeout(2000)
    await expect(page.getByText('Dropped!')).toBeVisible()
    await page.waitForTimeout(2000)
    const elementtext =await page.getByText('Dropped!').textContent()
    console.log(elementtext)

})