import {test, expect } from "@playwright/test";
// test("counting items in listbox",async({page})=>{
//     await page.goto('https://www.facebook.com/r.php?entry_point=login')
//     await page.waitForTimeout(3000)
//     //seelct items in three listboxes day,month and year
//     //select dat with value
//     await page.locator('#day').selectOption('20')
//     await page.waitForTimeout(3000)
//     //select month with label
//     await page.locator('#month').selectOption({label:'May'})
//     await page.waitForTimeout(3000)
//     //select item in year listbox with index
//     await page.locator('#year').selectOption({index:100})
//     await page.waitForTimeout(3000)
//     //count no of items in year listbox
//      const yearlistbox = await page.locator('#year')
//     const yearoptions =  await yearlistbox.locator('option')
//     const optionitems =  await yearoptions.count()
//  //console.log(`Number of options in the <select> listbox: ${optionitems}`)
//  console.log("Number of items  "+optionitems)
//  await page.waitForTimeout(3000)
// const selectOptions = page.locator('#month'); 
// const listboxoption = await  selectOptions.locator('option')
//   const numberOfSelectOptions = await listboxoption.count();
//   console.log(`Number of options in the <select> listbox: ${numberOfSelectOptions}`);
// await page.waitForTimeout(3000)

// })

test("print items in listbox",async({page})=>{
    await page.goto('https://www.amazon.in/')
 const listboxele = await page.locator('#searchDropdownBox')
 const listboxoptions = await listboxele.locator('option')
 const all_items =  await listboxoptions.all()
  await page.waitForTimeout(3000)
//console.log(`Number of items are ${all_items}`)
for( const option of all_items)
{
console.log( await option.textContent())
}
})
