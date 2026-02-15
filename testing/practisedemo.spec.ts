import {test, expect } from "@playwright/test";

test("check element",async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form')
await page.waitForTimeout(5000)
await page.getByRole('checkbox',{name:'Sports'}).check({force: true})
await page.waitForTimeout(5000)
})

