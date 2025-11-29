import { chromium, firefox, test, webkit } from "@playwright/test";
import { channel } from "diagnostics_channel";
test(`test to launch browser`, async ({ page }) => {
//browser
const browser = await chromium.launch({channel: "msedge",headless:false});//launching broweser and await keyword make sure that the browser has successfully invoked.
//promise 3 stages: pending.resolved,rejected
//context
const context=await browser.newContext();
const Page =await context.newPage();
await Page.goto("http://leaftaps.com/crmsfa/control/main");
const url =Page.url();    
console.log(`The url of the page is : ${url}`);

const browser2 = await firefox.launch({headless:false});//launching broweser and await keyword make sure that the browser has successfully invoked.
//promise 3 stages: pending.resolved,rejected
//context
const context2=await browser2.newContext();
const Page2 =await context2.newPage();
await Page2.goto("http://www.amazon.com");
const url2 =Page2.url();    
console.log(`The url of the page is : ${url2}`);

const browser3 = await webkit.launch({headless:false});//launching broweser and await keyword make sure that the browser has successfully invoked.
//promise 3 stages: pending.resolved,rejected
//context
const context3=await browser3.newContext();
const Page3 =await context3.newPage();
await Page3.goto("http://www.flipkat.com");
const url3 =Page3.url();    
console.log(`The url of the page is : ${url3}`);    

})