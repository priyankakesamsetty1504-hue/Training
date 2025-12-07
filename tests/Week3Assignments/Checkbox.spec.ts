import{test, expect} from "@playwright/test";
import { constants } from "buffer";
test.use({headless:false});
test(`Checkbox handling`,async({page})=>{
//navigate to the https://leafground.com/checkbox.xhtmlurl
await page.goto("https://leafground.com/checkbox.xhtml");
await page.locator(`//span[contains(text(),"Basic")]`).click();
const isChecked=await page.locator(`//span[contains(text(),"Ajax")]`).click();
console.log(`The checkbox is checked : ${isChecked}`);
await expect(page.locator(`//span[contains(text(),"Checked")]`)).toBeVisible();
await page.locator(`//label[contains(text(),"Python")]`).click();
console.log("fav language is selected");
const tristate =page.locator(`//h5[contains(text(),"Tri State Checkbox")]`);
tristate.click();
console.log("Tri state checkbox clicked");
await page.locator(`//h5[contains(text(),"Toggle Switch")]`).click();
console.log("Toggle button clicked");
await page.locator(`//span[contains(text(),"Disabled")]`).isDisabled();
console.log("Disabled checkbox is not allowed to click");
await page.locator(`//h5[contains(text(),"Select Multiple")]`).
console.log("Multiple checkbox clicked");
await page.waitForTimeout(3000);
});