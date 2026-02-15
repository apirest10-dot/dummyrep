import { test,expect } from "@playwright/test";

// test("Handling multiplewindow",async({page})=>{
// //launch url 
// await page.goto('https://gmail.com')
// await page.waitForTimeout(2000)
// //wait for popup event to appear on the page without using await
// const page1 = page.waitForEvent('popup')
// //click link to open new tab in parent window
// await page.locator("//a[normalize-space()='Help']").click()
// await page.waitForTimeout(2000)
// //create page fixture for page1 
// const newpage = await page1
// //click community in child window
// newpage.locator("//a[contains(text(),'Community')]").click()
// await page.waitForTimeout(2000)
// //verify text is visible in webpage
// await expect(newpage.locator("h1[class='promoted-search__greeting'] div")).toBeVisible()
// //capture text
// const elementtext = await newpage.locator("h1[class='promoted-search__greeting'] div").textContent()
// console.log(elementtext)
// await page.waitForTimeout(2000)
// await newpage.close()
// //enter email in parent window
// await page.waitForTimeout(2000)
// await page.locator('#identifierId').fill("pranga2010@gmail.com")
// await page.waitForTimeout(2000)
// await page.close();
// })

// test("Handling multiplewindow1",async({page})=>{
// page.goto("https://www.facebook.com/r.php?entry_point=login")
// //page.waitForTimeout(3000)
// //click on terms link to open in new window
// page.locator('#terms-link').click()
// //wait for new page event using await 
// const newpage = await page.waitForEvent('popup')
// await newpage.getByText('View printable version',{exact:true}).click()
// //newpage.waitForTimeout(3000)
// await expect(newpage.locator("//h1[normalize-space()='Terms of Service']")).toHaveText("Terms of Service")
// const elementtext =  await newpage.locator("//h1[normalize-space()='Terms of Service']").textContent()
// console.log(elementtext)
// //newpage.waitForTimeout(3000)
// //await newpage.close()
// //got parent page
// await page.locator("//input[@name='firstname']").fill("ranga")
// await page.locator("//input[@name='lastname']").fill("ranga456")


// })

test("Handling multiplewindow1",async({page})=>{
page.goto("https://jqueryui.com/droppable/")

const framepage = await page.frameLocator(".demo-frame");
const source = await framepage.locator("#draggable")
const target = await framepage.locator("#droppable")
await 
page.waitForTimeout(3000)

})