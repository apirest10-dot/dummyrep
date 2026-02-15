import {test ,expect} from '@playwright/test'

// //diff bewteen browser and page Fixture
// test("browser  fixture",async function({browser}){
//     const context = browser.newContext();// To create a browser context 
// const x = (await context).newPage();// To create a fresh page in browser for automation.

//   (await x).goto('https://google.com');

// });

// test("page  fixture",async ({page})=>{
//    await page.goto('https://facebook.com');
// });



test('Handling different dialog types', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle Alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('I am a JS Alert');
         await page.waitForTimeout(3000)
         const alerttext = dialog.message()
         console.log(alerttext)
        await dialog.accept();
        await page.waitForTimeout(3000)
    });
    await page.click('text=Click for JS Alert');
    await page.waitForTimeout(3000)
    expect(await page.locator('#result').textContent()).toContain('You successfully clicked an alert');
    const pagetext = await page.locator('#result').textContent();
    console.log(pagetext)
  })
