import {test, expect } from "@playwright/test";
import { constants } from "buffer";

test("Handling promt",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.waitForTimeout(5000)
page.on('dialog',async (dialog)=>{
expect(dialog.type()).toBe('prompt')
//expect(dialog.message).toContain('I am a JS prompt')
const message = dialog.message()
console.log(message)
await page.waitForTimeout(2000)
dialog.accept('iam playwrith tester')
await page.waitForTimeout(2000)
dialog.accept()
await page.waitForTimeout(5000)
})
await page.locator("//button[normalize-space()='Click for JS Prompt']").click();
expect(await page.locator('#result').textContent()).toContain('You entered: Playwright Test');
const pagetext = await page.locator('#result').textContent();
console.log(pagetext)
})