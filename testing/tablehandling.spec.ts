import {test, expect } from "@playwright/test";
//tables are defined with <table> tag
//with table <tbody> table body
//rows are defined with <tr> table row
// thead<th> table headers
//all cells are with in <td> table data

test("Handle table1",async({page})=>{
    await page.goto('https://money.rediff.com/tools/forex')
    await page.waitForTimeout(3000)
    //store table into varibale
    const webtable = await page.locator('.dataTable')
    //count no of rows in table
    const rowcount =await webtable.locator('tbody tr').count()
    console.log("No of rows are::"+rowcount)
      await page.waitForTimeout(3000)
      //counting no of headers in a table
      const colCount = await webtable.locator('thead th').count();
console.log(`Total number of columns: ${colCount}`);
const headersname = await webtable.locator('thead th').textContent();
console.log(headersname)
})

test("Get all the columns for each row",async({page})=>{
await page.goto('https://money.rediff.com/tools/forex')
    await page.waitForTimeout(3000)
    //store table
    const webtable = await page.locator('.dataTable');
    const allRows = await webtable.locator(`tbody tr`).all();
        await page.waitForTimeout(1000);
        allRows.forEach(async (rows) => {
          const eachcell = await rows.locator('td').count()
          console.log("Each row No. of cells   "+eachcell)
            //console.log(await rows.locator(`td`).count());
        });

})

test("Get the data for a specific row",async({page})=>{
await page.goto('https://money.rediff.com/tools/forex')
    await page.waitForTimeout(3000)
    //store table
    const webtable = await page.locator('.dataTable');
const second_row_text = await webtable.locator(`tr`).nth(5).locator(`:scope`).allInnerTexts();
        await second_row_text.forEach((text) => {
            console.log(text);
        });
})

test("Getall rows data",async({page})=>{
await page.goto('https://money.rediff.com/tools/forex')
    await page.waitForTimeout(3000)
    //store table
    const webtable = await page.locator('.dataTable');
    const rowcount =  await webtable.locator('tbody tr').count()
    for(let i=1;i<rowcount;i++)
    {
      const tabletext = await webtable.locator(`tr`).nth(i).locator(`:scope`).allInnerTexts();
        //console.log(tabletext)
      await tabletext.forEach((allrowstext) => {
             console.log(allrowstext);
         });
        
    }

})



test("Get celldata",async({page})=>{
  await page.goto('https://money.rediff.com/tools/forex')
    await page.waitForTimeout(3000)
    //store table
    const webtable = await page.locator('.dataTable');
const allRows = await webtable.locator('tr').all();
const tableData = [];

for (const row of allRows) {
  const cells = await row.locator('th, td').all();
  const rowData = await Promise.all(cells.map(cell => cell.textContent()));
  tableData.push(rowData);
}

})