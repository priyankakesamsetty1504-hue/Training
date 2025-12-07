import{test, expect} from "@playwright/test";
test.use({headless:false});
test(`Dropdown handling`,async({page})=>{
//navigate to the https://leafground.com/select.xhtmlurl
await page.goto("https://leafground.com/select.xhtml")
// await page.setDefaultTimeout(10000);
// const selectmenu = page.locator(`//select[@class="ui-selectonemenu"]`);
// selectmenu.click();
// const options = page.locator(`.ui-selectonemenu-items li"`);
// await expect(options.first()).toBeVisible();
// const count = await options.count();
// console.log("Total Options:", count);
//  for (let i = 0; i < count; i++) {
//     const text = await options.nth(i).innerText();
//     console.log(`Option ${i + 1}: ${text}`);
//   }
// await page.setDefaultTimeout(10000);
const select = page.locator('select[role="listbox"]');
const allOptions = await select.locator('option').allInnerTexts();
console.log("All Dropdown Values:");
console.log(allOptions);
console.log("Total Options Count:", allOptions.length)
await select.selectOption({ label: "Playwright" });
const selectedValue = await select.inputValue();
console.log("Selected Value:", selectedValue);
});



