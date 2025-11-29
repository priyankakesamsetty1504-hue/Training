import { chromium, test } from "@playwright/test";
test(`test to launch browser`, async ({ page }) => {
//browser
const browser = await chromium.launch();//launching broweser and await keyword make sure that the browser has successfully invoked.
//promise 3 stages: pending.resolved,rejected
//context
const context=await browser.newContext();
const Page =await context.newPage();
await Page.goto("http://leaftaps.com/crmsfa/control/main");
const url =Page.url();    
console.log(`The url of the page is : ${url}`);

})