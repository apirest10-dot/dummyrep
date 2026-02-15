
import { test, expect } from '@playwright/test';
test("Checking hidden elements",async ({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.waitForTimeout(2000)
await page.locator('#show-textbox').click()
//assert text text
await expect(page.locator('#displayed-text')).toBeVisible()
await page.waitForTimeout(2000)
//click hide button
await page.getByRole('button',{name:'Hide'}).click()
await page.waitForTimeout(2000)
await expect(page.locator('#displayed-text')).not.toBeVisible()
await page.waitForTimeout(5000)

})