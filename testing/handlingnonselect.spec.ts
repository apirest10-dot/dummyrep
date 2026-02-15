//handling listboxes not having select html tag div,ul,li tag
//identify element
//click any one item or option
import { test ,expect } from "@playwright/test";

// test("Hanling non select listbox",async({page})=>{
// //launch url
// await page.goto("https://demoqa.com/select-menu")
// await page.waitForTimeout(3000)
// //identify listbox which are having div tag
// await page.locator("#withOptGroup").click()
// await page.waitForTimeout(3000)
// await page.locator("#react-select-2-option-1-1").click();
// await page.waitForTimeout(3000)

// })

// test("Hanling Multilistbox",async({page})=>{
// //launch url
// await page.goto("https://demoqa.com/select-menu")
// await page.waitForTimeout(3000)
// //idetify multi select dropdown and click
// await page.locator(" .css-1hwfws3").last().click()
// await page.waitForTimeout(3000)
// await page.locator("#react-select-4-option-1").click()
// await page.waitForTimeout(3000)
// await page.locator("#react-select-4-option-3").click()
// await page.waitForTimeout(3000)

// })

test("Seelcting all Items in Multilistbox",async({page})=>{
//launch url
await page.goto("https://demoqa.com/select-menu")
await page.waitForTimeout(3000)
//idetify multi select dropdown and click
await page.locator('div.css-2b097c-container').last().click()
await page.waitForTimeout(3000)
//count items inside listbox
const elements = await page.locator("//div[@class=' css-11unzgr']//div").count()
console.log("No of items in Listbox  "+elements)
for(let i=0;i<elements;i++)
{
    await page.waitForTimeout(1000)
    await page.locator('#react-select-4-option-'+i).click();
}

})

