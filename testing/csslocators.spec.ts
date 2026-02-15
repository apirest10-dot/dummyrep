import {test ,expect} from '@playwright/test'

test("using css selector ",async ({page})=>{
   await page.goto('http://webapp.qedgetech.com/') 
   await page.waitForTimeout(2000)
   await page.locator('#btnreset').nth(3).click();
   await page.locator('[name="username"]').fill('admin');
   await page.locator('input#password').fill('master')
   await page.locator('[name*="mi"]').click()

})
test("using facebook", async ({page})=>{
    await page.goto('https://facebook.com')
    await page.waitForTimeout(5000)
    await page.locator('[id^="u_0_0"]').click()
    await page.locator('[name*="first"]').fill("testing")
    await page.locator('[name*="last"]').fill("palywright")
    await page.locator('#day').selectOption({ index: 4 })
    await page.waitForTimeout(5000)
    await page.locator('#month').selectOption({ index: 11 })
    await page.waitForTimeout(5000)
    await page.locator('#year').selectOption({ index: 20})
    await page.waitForTimeout(5000)
    await page.locator('input[value ="2"]').click()
    await page.locator('[name="reg_email__"]').fill("pranga2010@gmail.com")
    await page.locator('[name="reg_passwd__"]').fill("test@#4")
    await page.locator('[name="websubmit"]').click()

})