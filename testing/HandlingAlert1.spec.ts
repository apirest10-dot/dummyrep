import { test,expect } from "@playwright/test";
test("Handling Differnt confirms",async({page})=>{
    //launch url 
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.waitForTimeout(5000)
page.on('dialog', async dialog=>{
  expect(dialog.type()).toBe('confirm')
  expect(dialog.message()).toContain('I am a JS Confirm')
  await page.waitForTimeout(4000)
const alerttext1 = dialog.message()
console.log(alerttext1)
await page.waitForTimeout(2000)
 await dialog.dismiss();

})
await page.click('text=Click for JS Confirm');
await page.waitForTimeout(3000)
expect(await page.locator('#result').textContent()).toContain('You clicked: Cancel');
const pagetext1 =await page.locator('#result').textContent();
console.log(pagetext1)


})


