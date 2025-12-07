import { test } from "@playwright/test";
test.use({ headless: false });
test (`learn alert handling`, async({page}) => {
    await page.goto(`https://leafground.com/alert.xhtml`);
    //Simple Alert
    await page.locator(`(//span[text()="Show"])[1]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//span[text()="Show"])[2]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//span[text()="Show"])[5]`).click();
    await page.waitForTimeout(3000)

});
