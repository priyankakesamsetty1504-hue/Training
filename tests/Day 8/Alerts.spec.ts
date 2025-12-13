import { test } from "@playwright/test";
test.use({ headless: false });
test (`learn alert handling`, async({page}) => {
    await page.goto(`https://leafground.com/alert.xhtml`);
    //Simple Alert
    page.on("dialog",async(alert)=>{
        console.log("The Alert message is:",alert.message());
        await alert.accept();
        });

    await page.locator(`(//span[text()="Show"])[1]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//span[text()="Show"])[2]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//span[text()="Show"])[5]`).click();
    await page.waitForTimeout(3000)
});
