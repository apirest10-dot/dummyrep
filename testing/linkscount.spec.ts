import { test,expect } from "@playwright/test";

test("Counting Links",async({page})=>{
await page.goto("https://google.com")
const link =page.locator('a')
const linkCount = await link.count()
console.log(`Total number of links: ${linkCount}`);
for(let i=0;i<linkCount;i++)
{
const linkElement = link.nth(i);
const linkText = await linkElement.textContent();
//const linkurl= link.getAttribute('href');
console.log(`Link ${i + 1}: ${linkText}`);
//console.log(linkText)
//console.log(linkurl);
}
  })