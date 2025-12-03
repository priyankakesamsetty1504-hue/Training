import { test } from "@playwright/test";
import { time } from "console";
test.use({ headless: false });

test(`Test to learn Xpath selector`,async({page})=>{
//launch browser
await page.goto("http://leaftaps.com/opentaps/control/main"); 
//Xpath selector
await page.locator(`//input[@id='username']`).fill("demosalesmanager"); 
await page.locator(`//input[@id='password']`).fill("crmsfa");
await page.locator(`//input[@class='decorativeSubmit']`).click();
await page.locator(`//a[contains(text(),"CRM")]`).click();
const title=await page.title();
await new Promise(f => setTimeout(f, 3000));
console.log(`The title of the page is : ${title}`);
await page.locator(`//a[contains(text(),"Create Lead")]`).click();
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Zensar");
await page.locator(`//input[@id='createLeadForm_firstName']`).fill("priyanka");
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("k");
await page.locator(`//input[@name='submitButton']`).click();
const title2=await page.title();
console.log(`The title of the page is : ${title2}`);
})