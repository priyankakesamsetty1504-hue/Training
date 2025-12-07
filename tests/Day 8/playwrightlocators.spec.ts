import { test } from "@playwright/test";
test.use({ headless: false });
test (`leran Playwright Locators`, async({page}) => {

    await page.goto(`https://login.salesforce.com`);
    await page.getByRole("textbox",{name:"username"}).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
    await page.getByRole("button",{name:"Log In"}).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByLabel("View All Applications",{exact:true}).click();

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service")
     await page.waitForTimeout(3000)
     
});