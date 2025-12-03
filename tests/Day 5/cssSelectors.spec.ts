import {chromium,test}  from "@playwright/test";
test(`Test to learn css selector`,async({page})=>{
//launch browser
const browser=await chromium.launch({channel:"msedge",headless:false});
const context=await browser.newContext();
const Page=await context.newPage();
await Page.goto("http://leaftaps.com/opentaps/control/main"); 
//css selector
await page.locator(`input`).nth(0).fill("demosalesmanager");
await page.locator(`input`).nth(1).fill("crmsfa");
await page.locator(`input`).nth(2).click();
const title=await Page.title();
console.log(`The title of the page is : ${title}`);
}

)