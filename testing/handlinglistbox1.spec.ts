import { test,expect } from "@playwright/test";

// test("Handling select listbox",async({page})=>{
// await page.goto("https://practice.expandtesting.com/dropdown")
// await page.waitForTimeout(2000)
// //selectoption(value,index,label)
// //select one item in listbox using by value
// await page.locator('#country').selectOption('AT')
//  expect(page.locator('#country')).toHaveValue('AT')
// await page.waitForTimeout(2000)
// await page.locator('#country').selectOption({value:'BJ'})
// expect(page.locator('#country')).toHaveValue('BJ')
// //select item by using label
// await page.locator('#country').selectOption({label:'Bulgaria'})
// expect(page.locator('#country')).toHaveText(/Bulgaria/)
// await page.waitForTimeout(2000)
// //select item using index number which starts from 0 ,1,2,
// await page.locator('#country').selectOption({index: 9})
// await page.waitForTimeout(2000)

// })

// test("counting listbox items",async({page})=>{
// await page.goto("https://practice.expandtesting.com/dropdown")
// await page.waitForTimeout(2000)
// const allitems = await page.locator('#country').count();

// console.log("No of items :"+allitems)
// })
// test("Handling Multilistbox ",async({page})=>{
// await page.goto('https://demoqa.com/select-menu')

// await page.locator('#cars').selectOption(["Volvo","Saab","Opel"])
// await page.waitForTimeout(5000)
// await page.locator('#cars').selectOption([{label:'Opel'},{label:'Audi'}])
// await page.waitForTimeout(5000)
// await page.locator('#cars').selectOption([{index:0},{index:2}])
// await page.waitForTimeout(5000)
// })

test("counting select listbox",async({page})=>{
await page.goto("https://www.facebook.com/r.php?entry_point=login")
await page.waitForTimeout(2000)
const selectOptions = page.locator('#month'); // Adjust selector as needed
const listboxoption = await  selectOptions.locator('option')
  const numberOfSelectOptions = await listboxoption.count();
  console.log(`Number of options in the <select> listbox: ${numberOfSelectOptions}`);


})