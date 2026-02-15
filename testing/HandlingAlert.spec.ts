import { test,expect } from "@playwright/test";

test("Handling Differnt Alerts",async({page})=>{
    //launch url 
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)
    page.on("dialog",async dialog=>{

    //verify is it alert
    expect(dialog.type()).toBe('alert')
    expect(dialog.message).toContain('I am a JS Alert')
    await page.waitForTimeout(4000)
       const alerttext = dialog.message()
    console.log(alerttext)
    await page.waitForTimeout(2000)
     await dialog.accept()
    }) 
       await page.click('text=Click for JS Alert');
    await page.waitForTimeout(3000)
    expect(await page.locator('#result').textContent()).toContain('You successfully clicked an alert');
    const pagetext = await page.locator('#result').textContent();
    console.log(pagetext)

})
