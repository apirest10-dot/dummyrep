import { test, expect } from '@playwright/test';
test("validate mouse",async function({page}){
await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
//await page.getByText('Double-Click Me To See Alert').dblclick()
//await page.getByText('Double-Click Me To See Alert').click({clickCount:2})
//await page.waitForTimeout(5000)
await page.getByText('right click me').click({button:'right'})
await page.waitForTimeout(5000)
await page.getByText('Edit').first().click()
})