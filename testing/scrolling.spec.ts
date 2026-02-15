import { test,expect } from "@playwright/test";

// test("Scroll into element",async({page})=>{
// //launch url
// await page.goto("https://www.amazon.in/")
// //fetch facebook text at bottom
// const elementetxt = await page.getByText("Facebook",{exact:true}).textContent()
// console.log(elementetxt)
// await page.waitForTimeout(2000)
// // await page.getByText("Facebook",{exact:true}).click();
// await page.waitForTimeout(2000)
// await page.getByText("Mobiles",{exact:true}).click()
// await page.waitForTimeout(2000)
// await page.getByText("Careers").scrollIntoViewIfNeeded()
// await page.getByText("Careers").click()

// })



//    test('Scroll to bottom and back to top on Amazon', async ({page}) => {
//   // Step 1: Navigate to Amazon India
//   await page.goto('https://www.amazon.in');

//   // Step 2: Scroll to the bottom using evaluate
//   await page.evaluate(() => {
//     window.scrollTo(0, document.body.scrollHeight);
//   });
//   console.log('Scrolled to bottom');
//   await page.waitForTimeout(2000); // Wait 2 seconds to observe scroll

//   // Step 3: Scroll back to the top using evaluate
//   await page.evaluate(() => {
//     window.scrollTo(0, 0);
//   });
//   console.log('Scrolled back to top');
//   await page.waitForTimeout(2000);

//   await page.evaluate(() => {
//         window.scrollBy(0, 1000); // Scrolls down 500 pixels
//       });

// });

    

test('scroll with mouse wheel', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 200); // Scrolls down 200 pixels vertically
  await page.waitForTimeout(2000);
});

test('scroll with keyboard', async ({ page }) => {
  await page.goto('https://amazon.in');
  await page.waitForTimeout(2000);
  await page.keyboard.press('PageDown');
  // You can also use 'PageUp', 'ArrowDown', 'ArrowUp', etc.
  await page.waitForTimeout(2000);
});

