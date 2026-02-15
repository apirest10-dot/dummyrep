import {test,expect } from "@playwright/test";
test("Page title and url",async function({page}){
   await page.goto("https://tatacliq.com")
 const   pagetitle =  await page.title();
    console.log(pagetitle)
    console.log(pagetitle.length)
    const pageurl =   page.url()
    console.log(pageurl)
    console.log(pageurl.length)
})