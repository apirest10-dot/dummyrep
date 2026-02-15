import {test, expect } from "@playwright/test";
import path from "path";
//to upload sinle or multiple files in palywright we use setInputFiles
//to upload multiple file
//const filePaths = ['path/to/file1.txt', 'path/to/file2.pdf', 'path/to/image.png'];
// test("Handling file upload",async({page})=>{
//     await page.goto("https://qa-automation-practice.netlify.app/file-upload")
//      const filePath = path.join(__dirname, './TestData/MyFile.xlsx'); // Path to the file you want to upload
//      await page.waitForTimeout(2000)
//     // await page.getByPlaceholder('Username').fill("Admin")
//     // await page.getByPlaceholder('Password',{exact:true}).fill("Admin")
//     // await page.getByRole('button',{name:'LOGIN'}).click();
//     //  await page.waitForTimeout(2000)
//     //  await page.getByText('PIM').click()
//     //  await page.waitForTimeout(2000)
//     //  await page.getByRole('button',{name:'Add'}).click()
// await page.locator('#file_upload').setInputFiles(filePath);
// await page.waitForTimeout(2000)
// await page.locator("[type='submit']").click();
// await page.waitForTimeout(5000)
// expect(await page.locator('#file_upload_response')).toBeVisible()
// const text = await page.locator('#file_upload_response').textContent()
// console.log(text)
// })

test("Handling multiplefiles upload",async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//store path of files into two varibales
const path1 = path.join(__dirname,"./TestData/CreateissueData.json")
const path2 = path.join(__dirname,"./TestData/MyFile.xlsx")
await page.locator('#filesToUpload').setInputFiles([path1,path2])
await page.waitForTimeout(2000)
expect(await page.getByText('CreateissueData.json')).toContainText("CreateissueData.json");
expect (await page.getByText('MyFile.xlsx')).toContainText('MyFile.xlsx')
const firstfile = await page.getByText('CreateissueData.json').textContent();
const secondfile= await page.getByText('MyFile.xlsx').textContent();
console.log(firstfile+"         "+secondfile)
await page.waitForTimeout(5000)
     
})