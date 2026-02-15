import {test ,expect} from '@playwright/test'

test("Using xpath",async({page})=>{
await page.goto("http://webapp.qedgetech.com/")
await page.waitForTimeout(3000)
await page.locator('//*[@id="username"]').clear();
await page.locator('//*[@id="username"]').fill("admin")
await page.waitForTimeout(3000)
await page.locator('//*[@id="password"]').clear()
await page.locator('//*[@id="password"]').fill("master");
await page.locator('//button[@id="btnsubmit"]').click();
await page.waitForTimeout(3000)
//await page.close();

 })
test("Using flight",async ({page})=>{
await page.goto("https://flights.qedgetech.com/")
await page.waitForTimeout(3000)
await page.locator('//*[contains(text(),"Reg")]').click();
await page.waitForTimeout(2000)
await page.locator('(//input[contains(@type,"text")])[1]').fill("testing")
await page.locator('(//input[contains(@type,"number")])').fill("87654323121")
await page.locator("(//*[starts-with(@id,'em')])[1]").fill("test098@gmail.com")
await page.locator("(//*[starts-with(@type,'pass')])[1]").fill("test#$%^")
await page.locator("(//*[starts-with(@name,'gen')])").selectOption({index: 1})
await page.waitForTimeout(2000)
await page.locator("//*[@id='popupDatepicker']").fill("20-12-1978")
await page.waitForTimeout(2000)
await page.locator("//*[@id='flexCheckChecked']").click()
await page.locator("//input[@name='submit']").click()
await page.waitForTimeout(2000)
//await page.close()
})
